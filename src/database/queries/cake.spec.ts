import faker from "faker"
import chai from "chai"

import numberHelper from "../../helper/number"
import { Fields } from "../../types/form_types"
import { CakeResult } from "../../types/mysql_types"
import { 
    createCakeQuery, 
    fetchCakesQuery,
    dropCakeQuery,
    dropWhereCakeQuery,
    whereCakeQuery,
} from "./cake"

const assert = chai.assert

const testName: Fields = { name: ["test product"] }

const testData: CakeResult = Object.assign(
    {
        name: "",
        comment: faker.lorem.paragraph(),
        imageUrl: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        yumFactor: numberHelper.getRandomArbitrary(1, 5),
    },
    testName,
)

describe("Runs cake tests", () => {
    describe("Create cake", async () => {
        const res = await createCakeQuery(testData)
        assert.isNotFalse(res)
    })
    describe("Fetch cakes", async () => {
        const res = await fetchCakesQuery()
        assert.isNotFalse(res)
    })
    describe("Where cake", async () => {
        const res = await whereCakeQuery(testName)
        assert.isNotFalse(res)
    })
    describe("Drop where cake", async () => {
        const res = await dropWhereCakeQuery(testName)
        assert.isNotFalse(res)
    })
    describe("Drop cakes", async () => {
        const res = await fetchCakesQuery()
        assert.isNotFalse(res)
        for(const { id } of res) {
            const res2 = await dropCakeQuery(id)
            assert.isNotFalse(res2)
        }
    })
})
