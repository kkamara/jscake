import config from "../config/index";
import { createConnection } from "mysql";

const dbConfig = {
    user: config.dbUser,
    host: config.dbHost,
    database: config.dbDatabase,
    password: config.dbPassword,
};

const getMysqlClient = () => createConnection(dbConfig);

export {
    getMysqlClient,
    dbConfig,
};
