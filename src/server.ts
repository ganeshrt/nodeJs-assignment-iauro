import { Database } from './services/Database';
// const express = require('express');
import bodyParser from 'body-parser';
import express from 'express'
import userRouter from './contollers/User/router'
import productRouter from './contollers/Products/router'
require('dotenv').config();
import cors from 'cors'

export class Server {

    private app: express.Express;
    constructor() {
        this.app = express()
    }

    init = () => {
        Database.open(process.env.MONGODB_URL);
        this.initJsonParser();
        this.app.use(cors());
        this.app.use((req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

            // Request methods you wish to allow
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

            // Request headers you wish to allow
            // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

            // Set to true if you need the website to include cookies in the requests sent
            // to the API (e.g. in case you use sessions)
            res.setHeader('Access-Control-Allow-Credentials', 'true');

            // Pass to next layer of middleware
            next();
        })
    }
    initJsonParser = () => {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }))
    }
    start = () => {
        const PORT = 8000;
        this.app.get('/health-check', (req: any, res: any) => res.status(200).send({ status: 200, message: "hello!" }));
        this.app.use("/users", userRouter);
        this.app.use("/product", productRouter)
        this.app.listen(PORT, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
        });
    }
}
