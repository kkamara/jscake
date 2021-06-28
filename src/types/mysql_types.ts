
type QueryResults = {
    fieldCount: Number,
    affectedRows: Number,
    insertId: Number,
    serverStatus: Number,
    warningCount: Number,
    message: string,
    protocol41: boolean,
    changedRows: Number,
};

type CakeResult = {
    id?: Number,
    name: string,
    comment: string,
    imageUrl: string,
    yumFactor: Number,
};

export type {
    QueryResults,
    CakeResult,
};
