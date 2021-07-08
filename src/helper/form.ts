import express from 'express'

import multiparty from 'multiparty'
import { Form } from '../types/form_types'

class FormHelper {
  /**
   * Handles multiparse form
   * @param express.Request req
   * @returns [fields, file] | Error - file will be image from the request
   */
  getMultiparseForm(req: express.Request): Promise<Form> {
    return new Promise((resolve, reject) => {
      const form = new multiparty.Form()
      form.parse(req, function (
        err, fields, files
      ) {
        if (err) {
          return reject(err)
        }
        const result = { fields: null, file: null }
        if (Object.keys(fields).length) {
          result.fields = fields
        }
        if (typeof files['image'] !== 'undefined' && files['image'] !== null) {
          result.file = files.image[0]
        }
        return resolve(result)
      })
    })
  }
}

export default new FormHelper()
