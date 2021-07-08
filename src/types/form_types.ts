
type Fields = { [key: string]: Array<string> }

type File = {
    fieldName: string,
    originalFilename: string,
    path: string,
    headers: Object,
    size: number
}

type Form = {
    fields?: Fields, 
    file?: File,
}

export type {
    Fields,
    File,
    Form,
}
