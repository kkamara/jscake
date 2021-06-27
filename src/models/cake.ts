import express from "express";

import API from "./api";
import formHelper from "../helper/form";
import { upload } from "../services/aws_s3";
import cakeValidation from "../validations/cake";
import { createCakeQuery } from "../database/queries/cake";

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
        if (errors.length) {
            res.statusCode = 401;
            return res.send(JSON.stringify({ errors }));
        }
        const imagePath = await upload(
            formData.file.path,
            formData.file.headers["content-type"],
        );
        if (false === imagePath) {
            res.statusCode = 500;
            return res.send(JSON.stringify({ 
                error: "Unexpected error occurred, please try again.", 
            }));
        }
        const response = await createCakeQuery({
            name: formData.fields.name[0],
            comment: formData.fields.comment[0],
            imageUrl: imagePath,
            yumFactor: formData.fields.yumFactor[0],
        });
        if (1 !== response.affectedRows) {
            res.statusCode = 500;
            return res.send(JSON.stringify({ 
                error: "Unexpected error occurred, please try again.", 
            }));
        }
        return res.send("success");
    }
}

export default new Cake();
