import fs from "fs";
import axios from "axios";

import s3 from "../services/aws_s3";
import config from "../config/index";

class ImageHelper {
    /**
     * @param String url 
     * @param String imagePath 
     * @returns Boolean|Error
     */
    async downloadImage(url: string, imagePath: string) {
        return axios({
                url,
                responseType: 'stream',
            }).then(
                response =>
                    new Promise((resolve, reject) => {
                        response.data
                        .pipe(fs.createWriteStream(imagePath))
                        .on('finish', () => resolve(true))
                        .on('error', (err: Error) => reject(err));
                    })
            );
    }
    
    /**
     * @param String path
     * @param String contentType
     * @returns Boolean
     */
    async upload(path: string, contentType: string) {
        const data = fs.readFileSync(path);
        /** 
         * Temp var storing file path separated by `/`
         * @var Array<string>
         */
        const tmp = path.split('/');
        const fileName = tmp[tmp.length - 1];

        const params = {
            Bucket: config.awsBucket,
            Key: `uploads/${fileName}`,
            Body: data,
            ContentType: contentType,
        };
        try {
            await s3.putObject(params).promise();
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
}

export default new ImageHelper();
