import moment from "moment";
import pg, { 
    ClientConfig,
    Client, 
    Pool 
} from "pg";

const parseDate = (val: string) =>
    val === null ? null : moment(val).format("YYYY-MM-DD");

const DATATYPE_DATE = 1082;

pg.types.setTypeParser(DATATYPE_DATE, val => {
    return val === null ? null : parseDate(val)
});

const DatabaseConfig: ClientConfig = {
    connectionString: process.env.DB_URI,
    ssl: true,
};

const getClient = () => new Client(DatabaseConfig);

const getPool = () => new Pool(DatabaseConfig);

export {
    DatabaseConfig,
    getClient,
    getPool,
};
