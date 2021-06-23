import helpersConfig from "./config";

import cookieParser from "cookie-parser";
import sanitize from 'sanitize';
import express from "express";
import multiparty from "multiparty";

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
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", helpersConfig.appURL);
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Authorization, x-id, Content-Length, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

const router = express.Router();
router.post('/cake/create', (req, res) => {
    console.log(
        req.params,
        req.body,
    );
    var form = new multiparty.Form();
 
    form.parse(req, function(err, fields, files) {
        console.log(
            req.params,
            req.body,
            fields, 
            files,
        );
    });
    return res.send("success");
})
app.use('/api/v1', router);

if (helpersConfig.nodeEnv === "production") {
    app.listen(helpersConfig.appPort);
} else {
    app.listen(helpersConfig.appPort, () => {
        const url = `http://127.0.0.1:${helpersConfig.appPort}`;
        console.log(`Listening on ${url}`);
    });
}