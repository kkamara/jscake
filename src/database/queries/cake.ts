import db from "../index"
import cake from "../../models/cake"
import { QueryResults, CakeResult } from "../../types/mysql_types"
import { Fields } from "../../types/form_types"
import config from "../../config"

const createCakeQuery = (params: CakeResult): Promise<QueryResults> => 
    new Promise((resolve, reject) => {
        const connection = db.getMysqlClient()
        connection.query(
            `INSERT INTO ${cake.getTableName()} SET ?`, 
            params,
            (error, results) => {
                connection.end()
                if (error) {
                    console.log(error)
                    return reject(false)
                }
                return resolve(results)
            }
        )
    })

const getCakeQuery = (id: Number): Promise<CakeResult|undefined> => 
    new Promise((resolve, reject) => {
        const connection = db.getMysqlClient()
        connection.query(
            `SELECT * FROM ${cake.getTableName()} WHERE id = ?`,
            id,
            (error, result) => {
                connection.end()
                if (error) {
                    console.log(error)
                    return reject(undefined)
                }
                if (!result.length) {
                    return resolve(undefined)
                }
                result[0].imageUrl = `${config.awsBucketPath}${result[0].imageUrl}`
                return resolve(result[0])
            }
        )
    })

const fetchCakesQuery = (): Promise<CakeResult[]> => 
    new Promise((resolve, reject) => {
        const connection = db.getMysqlClient()
        connection.query(
            `SELECT * FROM ${cake.getTableName()}`,
            (error, results) => {
                connection.end()
                if (error) {
                    console.log(error)
                    return reject(false)
                }
                for (const key in results) {
                    results[key].imageUrl = `${config.awsBucketPath}${results[key].imageUrl}`
                }
                return resolve(results)
            }
        )
    })

const dropCakeQuery = (id: Number): Promise<QueryResults> => 
    new Promise((resolve, reject) => {
        const connection = db.getMysqlClient()
        connection.query(
            `DELETE FROM ${cake.getTableName()} WHERE id = ?`,
            id,
            (error, results) => {
                connection.end()
                if (error) {
                    console.log(error)
                    return reject(false)
                }
                return resolve(results)
            }
        )
    })

const dropWhereCakeQuery = (fields: Fields): Promise<QueryResults> => 
    new Promise((resolve, reject) => {
        const connection = db.getMysqlClient()
        connection.query(
            `DELETE FROM ${cake.getTableName()} WHERE ?`,
            fields,
            (error, results) => {
                connection.end()
                if (error) {
                    console.log(error)
                    return reject(false)
                }
                return resolve(results)
            }
        )
    })

const whereCakeQuery = (fields: Fields): Promise<QueryResults> => 
    new Promise((resolve, reject) => {
        const connection = db.getMysqlClient()
        connection.query(
            `SELECT * FROM ${cake.getTableName()} WHERE ?`,
            fields,
            (error, results) => {
                connection.end()
                if (error) {
                    console.log(error)
                    return reject(false)
                }
                return resolve(results)
            }
        )
    })

// todo - return cake updated
const updateCakeQuery = (params: CakeResult): Promise<QueryResults> => 
    new Promise((resolve, reject) => {
        const connection = db.getMysqlClient()
        connection.query(
            `UPDATE ${cake.getTableName()} SET name = ?, comment = ?, imageUrl = ?, yumFactor = ? WHERE id = ?`,
            [
                params.name,
                params.comment,
                params.imageUrl,
                params.yumFactor,
                params.id,
            ],
            (error, results) => {
                connection.end()
                if (error) {
                    console.log(error)
                    return reject(false)
                }
                return resolve(results)
            }
        )
    })

export {
    createCakeQuery,
    fetchCakesQuery,
    dropCakeQuery,
    dropWhereCakeQuery,
    whereCakeQuery,
    getCakeQuery,
    updateCakeQuery,
}
