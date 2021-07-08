import chai from 'chai'

import imageHelper from '../helper/image'
import { upload, del } from './aws_s3'

const assert = chai.assert

const downloadFile =
  'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg'
const filelocation = '/tmp/sample.jpg'
const bucketlocation = 'uploads/sample.jpg'

describe('Runs image tests', () => {
  describe('Test successful upload', async () => {
    imageHelper.downloadImage(downloadFile, filelocation)
    const res = upload(filelocation, 'image/jpeg')
    assert.isNotFalse(res)
  })
  describe('Test successful delete', async () => {
    const res = del(bucketlocation)
    assert.isNotFalse(res)
  })
})
