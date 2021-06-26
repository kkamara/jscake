import mysql from "mysql";
import migration from "mysql-migrations";
import path from "path";

import { dbConfig } from "../index";

const connection = mysql.createPool(
    Object.assign(
        dbConfig,
        { connectionLimit : 10 }
    )
);

migration.init(
    connection, 
    path.join(__dirname, "/")
);
