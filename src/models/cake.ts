import express from "express";

import API from "./api";
import formHelper from "../helper/form";
import cakeValidation from "../validations/cake";

class Cake extends API {
    /** @var String tableName */
    protected tableName = "cakes";

    /** @var Array<string> fields */
    protected fields = [
        "name",
        "comment",
        "imageUrl",
        "yumFactor",
    ];

    /**
     * Returns db table name for resource.
     * @returns String
     */
    getTableName() {
        return this.tableName;
    }

    /**
     * Handles create cake request.
     * @param express.Request req 
     * @param express.Response res 
     * @returns express.Response
     */
    async createCake(req: express.Request, res: express.Response) {
        const formData = await formHelper.getMultiparseForm(req);
        const errors = cakeValidation.checkCreate(formData);
        console.log(errors);
        return res.send("success");
    }
}

export default new Cake();
