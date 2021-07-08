import { createConnection, Connection } from 'mysql'
import config from '../config/index'

const getMysqlClient: () => Connection = () => createConnection(config.dbURI)

export default {
  getMysqlClient,
}
