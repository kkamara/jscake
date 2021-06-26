import express from "express";
import cake from "../models/cake";

const cakeRouter = express.Router();
cakeRouter.post('/cake/create', cake.createCake)

export default cakeRouter;
