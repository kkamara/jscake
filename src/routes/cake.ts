import express from "express";
import cake from "../models/cake";

const cakeRouter = express.Router();
cakeRouter.post('/cake/create', cake.createCake)
cakeRouter.get('/cake/list', cake.listCakes)

export default cakeRouter;
