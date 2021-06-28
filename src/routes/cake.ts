import express from "express";
import cake from "../models/cake";

const cakeRouter = express.Router();
cakeRouter.post('/cake/create', cake.createCake)
cakeRouter.get('/cake/list', cake.listCakes)
cakeRouter.get('/cake/:id(\\d+)', cake.getCake)
// cakeRouter.patch('/cake/update', cake.updateCake)
cakeRouter.delete('/cake/:id(\\d+)', cake.delCake)
// todo: add endpoints - update

export default cakeRouter;
