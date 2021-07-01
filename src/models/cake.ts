import express from "express";

import API from "./api";
import { CakeResult } from "../types/mysql_types";
import formHelper from "../helper/form";
import * as s3 from "../services/aws_s3";
import cakeValidation from "../validations/cake";
import { 
    createCakeQuery,
    fetchCakesQuery,
    getCakeQuery,
    dropCakeQuery,
    updateCakeQuery,
} from "../database/queries/cake";
import config from "../config";

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
        const imagePath = await s3.upload(
            formData.file.path,
            formData.file.headers["content-type"],
        );
        if (false === imagePath) {
            res.statusCode = 500;
            return res.send(JSON.stringify({ 
                error: "Unexpected error occurred, please try again.", 
            }));
        }
        const cake: CakeResult = {
            name: formData.fields.name[0],
            comment: formData.fields.comment[0],
            imageUrl: imagePath,
            yumFactor: Number.parseInt(formData.fields.yumFactor[0]),
        };
        const response = await createCakeQuery(cake);
        if (1 !== response.affectedRows) {
            res.statusCode = 500;
            return res.send(JSON.stringify({ 
                error: "Unexpected error occurred, please try again.", 
            }));
        }
        cake.id = response.insertId;
        cake.imageUrl = config.awsBucketPath + cake.imageUrl;
        return res.send(JSON.stringify({ data: cake }));
    }

    /**
     * Returns cakes list.
     * @param express.Request req 
     * @param express.Response res 
     * @returns express.Response
     */
    async listCakes(req: express.Request, res: express.Response) {
        const cakes = await fetchCakesQuery();
        return res.send(JSON.stringify({ data: cakes }));
    }

    /**
     * Returns cakes by id.
     * @param express.Request req 
     * @param express.Response res 
     * @returns express.Response
     */
    async getCake(req: express.Request, res: express.Response) {
        const cake = await getCakeQuery(
            Number.parseInt(req.params.id)
        );
        if (!cake) {
            res.statusCode = 400;
            return res.send(JSON.stringify({ 
                error: "Resource not found.", 
            }));
        }
        return res.send(JSON.stringify({ data: cake }));
    }

    /**
     * Deletes cake by id.
     * @param express.Request req 
     * @param express.Response res 
     * @returns express.Response
     */
     async delCake(req: express.Request, res: express.Response) {
        const response = await dropCakeQuery(
            Number.parseInt(req.params.id)
        );
        if (1 !== response.affectedRows) {
            res.statusCode = 500;
            return res.send(JSON.stringify({ 
                error: "Unexpected error occurred, please try again.", 
            }));
        }
        return res.send(JSON.stringify({ message: "Success" }));
    }

    /**
     * Updates cake request.
     * @param express.Request req 
     * @param express.Response res 
     * @returns express.Response
     */
    async updateCake(req: express.Request, res: express.Response) {
        const oldCake = await getCakeQuery(
            Number.parseInt(req.params.id)
        );
        if (!oldCake) {
            res.statusCode = 400;
            return res.send(JSON.stringify({ 
                error: "Resource not found.", 
            }));
        }
        const formData = await formHelper.getMultiparseForm(req);
        const errors = cakeValidation.checkUpdate(formData);
        if (errors.length) {
            res.statusCode = 401;
            return res.send(JSON.stringify({ errors }));
        }
        let response: any;
        let imagePath: String|Boolean;
        let newCake: CakeResult = oldCake;
        if (null !== formData.file) {
            response = s3.del(oldCake.imageUrl);
            if (false === response) {
                res.statusCode = 500;
                return res.send(JSON.stringify({ 
                    error: "Unexpected error occurred, please try again.", 
                }));
            }
            imagePath = await s3.upload(
                formData.file.path,
                formData.file.headers["content-type"],
            );
            if (false === imagePath) {
                res.statusCode = 500;
                return res.send(JSON.stringify({ 
                    error: "Unexpected error occurred, please try again.", 
                }));
            }
            newCake.imageUrl = imagePath as string;
        }
        if (formData.fields.name) {
            newCake.name = formData.fields.name[0];
        }
        if (formData.fields.comment) {
            newCake.comment = formData.fields.comment[0];
        }
        if (formData.fields.yumFactor) {
            newCake.yumFactor = Number.parseInt(formData.fields.yumFactor[0]);
        }
        response = await updateCakeQuery(newCake);
        if (1 !== response.affectedRows) {
            res.statusCode = 500;
            return res.send(JSON.stringify({ 
                error: "Unexpected error occurred, please try again.", 
            }));
        }
        if (false === /https/.test(newCake.imageUrl)) {
            newCake.imageUrl = `${config.awsBucketPath}${newCake.imageUrl}`;
        }
        return res.send(JSON.stringify({ data: newCake }));
    }
}

export default new Cake();
