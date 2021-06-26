import dotenv from "dotenv";
import path from 'path';

if (process.env.NODE_ENV !== "production") {
    const parseEnvFile = dotenv.config({
        path: path.join(
            __dirname, 
            '../', 
            '../',
            '.env',
        ),
    });

    if (parseEnvFile.error) {
        throw parseEnvFile.error;
    }
}

const helpersConfig = {
    asset: path => {
        if (path[0] === "/") return `${path}`;
        return `/${path}`;
    },
    appName: process.env.APP_NAME,
    nodeEnv: process.env.NODE_ENV,
    appDebug: process.env.APP_DEBUG == 'true',
    appURL: process.env.APP_URL,
    appLocale: process.env.APP_LOCALE,
    appPort: process.env.PORT || process.env.port || 3000,
    dbPORT: process.env.DB_PORT,
    dbURI: process.env.DB_URI || process.env.CLEARDB_DATABASE_URL,
    dbHost: process.env.DB_HOST,
    dbDatabase: process.env.DB_DATABASE,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    awsRegion: process.env.AWS_REGION,
    awsAccessKey: process.env.AWS_ACCESS_KEY_ID,
    awsSecret: process.env.AWS_SECRET_ACCESS_KEY,
    awsBucket: process.env.AWS_BUCKET,
};

export default helpersConfig;
