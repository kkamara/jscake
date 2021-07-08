import mysql from 'mysql'
import migration from 'mysql-migrations'
import path from 'path'

import config from '../../config/index'

const connection = mysql.createPool(config.dbURI)

migration.init(connection, path.join(__dirname, '/'))
