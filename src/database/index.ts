import { createConnection } from "mysql"
import config from "../config/index"

const getMysqlClient = () => createConnection(config.dbURI)

export default {
    getMysqlClient,
}
