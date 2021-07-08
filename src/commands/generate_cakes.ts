import faker from 'faker'
import fs from 'fs'

import { createCakeQuery } from '../database/queries/cake'
import { CakeResult } from '../types/mysql_types'
import numberHelper from '../helper/number'
import imageHelper from '../helper/image'
import * as s3 from '../services/aws_s3'

const images: string[] = [
  'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/triple-chocolate-peanut-butter-layer-cake-2-06eee24.jpg',
  'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/rainbow-cake760x580.jpg',
  'https://img.taste.com.au/DqTMY6Cz/taste/2018/08/smarties-chocolate-cake-139872-2.jpg',
  'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg',
]

const uploadedImages: string[] = []

const tmpFiles: string[] = []

const cleanUp: () => void = () => {
  tmpFiles.forEach(async filePath => fs.rmSync(filePath))
}

const Run: () => void = async () => {
  for (const imageURL of images) {
    const formattedImageURL = decodeURIComponent(imageURL)
    const tmp = formattedImageURL.split('/')
    const filepath = tmp[tmp.length - 1]
    await imageHelper.downloadImage(formattedImageURL, filepath)
    tmpFiles.push(filepath)
    const uploadPath = await s3.upload(filepath, 'image/jpeg')
    if (!uploadPath) {
      throw new Error('Error encountered when uploading file to s3.')
    }
    uploadedImages.push(uploadPath)
  }

  const data: CakeResult[] = []
  for (let i = 0; i < 4; i++) {
    data.push({
      name: faker.commerce.productName(),
      comment: faker.lorem.paragraph(),
      imageUrl: uploadedImages[i],
      yumFactor: numberHelper.getRandomArbitrary(1, 5),
    })
  }
  for (const d of data) {
    const res = await createCakeQuery(d)
    if (1 !== res.affectedRows) {
      throw new Error('Error encountered when creating cake db record.')
    }
  }

  cleanUp()
}

Run()
