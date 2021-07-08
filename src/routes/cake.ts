import express from "express"
import cake from "../models/cake"

const cakeRouter = express.Router()
cakeRouter.post('/cake/create', cake.createCake)
cakeRouter.get('/cake/list', cake.listCakes)
cakeRouter.get('/cake/:id(\\d+)', cake.getCake)
cakeRouter.patch('/cake/:id(\\d+)', cake.updateCake)
cakeRouter.delete('/cake/:id(\\d+)', cake.delCake)

export default cakeRouter
