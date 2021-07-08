import sizeOf from 'image-size'

import { Form } from '../types/form_types'

class CakeValidation {
  protected imageTypes = ['jpeg',
    'jpg',
    'png']

  /**
   * Validates create cake request.
   * @param Form form
   * @returns Array<string>
   */
  checkCreate(form: Form): Array<string> {
    const result = []

    if (!form.fields.name || !form.fields.name[0]) {
      result.push('Missing name field.')
    } else if (3 > form.fields.name[0].length) {
      result.push('The name field must be at least 3 characters.')
    } else if (30 < form.fields.name[0].length) {
      result.push('The name field must not exceed 30 characters.')
    }
    if (!form.fields.comment || !form.fields.comment[0]) {
      result.push('Missing comment field.')
    } else if (3 > form.fields.comment[0].length) {
      result.push('The comment field must be at least 3 characters.')
    } else if (50 < form.fields.comment[0].length) {
      result.push('The comment field must not exceed 30 characters.')
    }
    if (form.file === null) {
      result.push('Missing image field.')
    } else {
      const dimensions = sizeOf(form.file.path)
      if (!this.imageTypes.includes(dimensions.type)) {
        result.push(`Image type must be one of the following: ${this.imageTypes.join(', ',)}.`,)
      } else if (
        dimensions.height < 50 ||
        dimensions.height > 1000 ||
        dimensions.width < 50 ||
        dimensions.width > 1000
      ) {
        result.push('Image dimensions must be between 50x50 and 1000x1000.')
      }
    }
    const yumFactorConstraintErr =
      'The yumFactor field must be between 0 - 6 inclusive.'
    if (!form.fields.yumFactor || !form.fields.yumFactor[0]) {
      result.push('Missing yumFactor field.')
    } else if (false === /^\d+$/.test(form.fields.yumFactor[0])) {
      result.push('The yumFactor field must be an integer type.')
    } else if (0 > Number.parseInt(form.fields.yumFactor[0])) {
      result.push(yumFactorConstraintErr)
    } else if (6 < Number.parseInt(form.fields.yumFactor[0])) {
      result.push(yumFactorConstraintErr)
    }

    return result
  }

  /**
   * Validates update cake request.
   * @param Form form
   * @returns Array<string>
   */
  checkUpdate(form: Form): Array<string> {
    const result = []

    if (false === (!form.fields.name || !form.fields.name[0])) {
      if (3 > form.fields.name[0].length) {
        result.push('The name field must be at least 3 characters.')
      } else if (30 < form.fields.name[0].length) {
        result.push('The name field must not exceed 30 characters.')
      }
    }
    if (false === (!form.fields.comment || !form.fields.comment[0])) {
      if (3 > form.fields.comment[0].length) {
        result.push('The comment field must be at least 3 characters.')
      } else if (50 < form.fields.comment[0].length) {
        result.push('The comment field must not exceed 30 characters.')
      }
    }
    if (form.file !== null) {
      const dimensions = sizeOf(form.file.path)
      if (!this.imageTypes.includes(dimensions.type)) {
        result.push(`Image type must be one of the following: ${this.imageTypes.join(', ',)}.`,)
      } else if (
        dimensions.height < 50 ||
        dimensions.height > 1000 ||
        dimensions.width < 50 ||
        dimensions.width > 1000
      ) {
        result.push('Image dimensions must be between 50x50 and 1000x1000.')
      }
    }
    const yumFactorConstraintErr =
      'The yumFactor field must be between 1 - 5 inclusive.'
    if (false === (!form.fields.yumFactor || !form.fields.yumFactor[0])) {
      if (false === /^\d+$/.test(form.fields.yumFactor[0])) {
        result.push('The yumFactor field must be an integer type.')
      } else if (1 > Number.parseInt(form.fields.yumFactor[0])) {
        result.push(yumFactorConstraintErr)
      } else if (5 < Number.parseInt(form.fields.yumFactor[0])) {
        result.push(yumFactorConstraintErr)
      }
    }

    return result
  }
}

export default new CakeValidation()
