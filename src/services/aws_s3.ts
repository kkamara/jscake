import { S3 } from 'aws-sdk'
import fs from 'fs'
import config from '../config/index'

const s3 = new S3({
  accessKeyId: config.awsAccessKey,
  secretAccessKey: config.awsSecret,
  region: config.awsRegion,
})

/**
 * @param String path
 * @param String contentType
 * @returns String|false
 */
const upload = async (path: string, contentType: string): Promise<string|false> => {
  const data = fs.readFileSync(path)
  /**
   * Temp var storing file path separated by `/`
   * @var Array<string>
   */
  const tmp = path.split('/')
  const fileName = tmp[tmp.length - 1]
  const destinationURL = `uploads/${fileName}`

  const params = {
    Bucket: config.awsBucket,
    Key: destinationURL,
    Body: data,
    ContentType: contentType,
    ACL: 'public-read',
  }
  try {
    await s3.putObject(params).promise()
    return destinationURL
  } catch (err) {
    console.log(err)
    return false
  }
}

/**
 * @param String path
 * @returns Boolean
 */
const del = async (path: string): Promise<boolean> => {
  const params = {
    Bucket: config.awsBucket,
    Key: path,
  }
  try {
    await s3.deleteObject(params).promise()
    return true
  } catch (err) {
    console.log(err)
    return false
  }
}

export { upload, del }
