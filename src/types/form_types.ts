type Fields = { [key: string]: Array<string> }

type File = {
  fieldName: string
  originalFilename: string
  path: string
  headers: Record<string, unknown>
  size: number
}

type Form = {
  fields?: Fields
  file?: File
}

export type { Fields, File, Form }
