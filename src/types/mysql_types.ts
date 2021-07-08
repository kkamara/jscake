type QueryResults = {
  fieldCount: number
  affectedRows: number
  insertId: number
  serverStatus: number
  warningCount: number
  message: string
  protocol41: boolean
  changedRows: number
}

type CakeResult = {
  id?: number
  name: string
  comment: string
  imageUrl: string
  yumFactor: number
}

export type { QueryResults, CakeResult }
