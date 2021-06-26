import {createDb, migrate} from "postgres-migrations"

import { getClient } from "../database/index";
import cake from "../models/cake";

const Run = async () => {
    const client = getClient();
    await client.connect();
    try {
        await createDb(cake.getTableName(), {client});
        await migrate({client}, "../database/migrations");
    } finally {
        await client.end()
    }
};

Run();
