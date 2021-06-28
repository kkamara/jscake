import { 
    fetchCakesQuery,
    dropCakeQuery,
} from "../database/queries/cake";

const Run = async () => {
    const res = await fetchCakesQuery();
    for(const { id } of res) {
        const res2 = await dropCakeQuery(id);
        console.log(res2);
    }
};

Run();
