
type Form = {
    fields: { [key: string]: Array<string> } | null, 
    file: {
        fieldName: string,
        originalFilename: string,
        path: string,
        headers: Object,
        size: number
    } | null
};

export type {
    Form,
}
