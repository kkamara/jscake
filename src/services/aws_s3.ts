
import { S3 } from "aws-sdk";
import config from "../config/index";

export default new S3({
        accessKeyId: config.awsAccessKey,
        secretAccessKey: config.awsSecret,
        region: config.awsRegion,
    });
