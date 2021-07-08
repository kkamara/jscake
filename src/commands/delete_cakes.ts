import { 
    fetchCakesQuery,
    dropCakeQuery,
} from "../database/queries/cake"
import * as s3 from '../services/aws_s3'

const Run = async () => {
    const res = await fetchCakesQuery()
    for(const { id, imageUrl } of res) {
        const res2 = await s3.del(imageUrl)
        console.log(res2)
        const res3 = await dropCakeQuery(id)
        console.log(res3)
    }
}

Run()
