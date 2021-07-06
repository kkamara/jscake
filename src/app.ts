import cookieParser from "cookie-parser";
import sanitize from 'sanitize';
import express from "express";

import config from "./config/index";
import routes from "./routes/index";

const app = express();

import path from 'path';

/** serving react with static path */
const buildPath = path.join(
    __dirname,
    '../',
    'frontend',
    'build'
);
app.use(express.static(buildPath));

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(sanitize.middleware);
app.use((
    req: express.Request, 
    res: express.Response, 
    next: express.NextFunction
) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Authorization, x-id, Content-Length, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.use(
    '/api/v1', 
    routes.cakeRoutes,
);

app.all('*', (req: express.Request, res: express.Response) => {
    res.status(200).sendFile(`/`, {root: buildPath});
});

if (config.nodeEnv === "production") {
    app.listen(config.appPort);
} else {
    app.listen(config.appPort, () => {
        const url = `http://127.0.0.1:${config.appPort}`;
        console.log(`Listening on ${url}`);
    });
}
