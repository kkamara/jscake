import fs from 'fs'
import axios from 'axios'

class ImageHelper {
  /**
   *
   * @param String type
   * @returns String
   */
  getContentType(type: string) {
    switch (type) {
    case 'jpeg':
    case 'jpg':
      return 'image/jpeg'
    case 'png':
      return 'image/png'
    }
  }

  /**
   * @param String url
   * @param String imagePath
   * @returns Boolean|Error
   */
  async downloadImage(url: string, imagePath: string) {
    return axios({
      url,
      responseType: 'stream',
    }).then(response =>
      new Promise((resolve, reject) => {
        response.data
          .pipe(fs.createWriteStream(imagePath))
          .on('finish', () => resolve(true))
          .on('error', (err: Error) => reject(err))
      }),)
  }
}

export default new ImageHelper()
