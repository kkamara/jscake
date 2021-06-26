import cookieParser from "cookie-parser";
import sanitize from 'sanitize';
import express from "express";

import helpersConfig from "./config/index";
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
    res.header("Access-Control-Allow-Origin", helpersConfig.appURL);
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Authorization, x-id, Content-Length, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.type("application/json");
    next();
});

app.use(
    '/api/v1', 
    routes.cakeRoutes,
);

if (helpersConfig.nodeEnv === "production") {
    app.listen(helpersConfig.appPort);
} else {
    app.listen(helpersConfig.appPort, () => {
        const url = `http://127.0.0.1:${helpersConfig.appPort}`;
        console.log(`Listening on ${url}`);
    });
}
