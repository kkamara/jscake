import { Query } from "pg";

const createCakeQuery = ({
    name,
    comment,
    imageUrl,
    yumFactor,
}) =>
    new Query(
        `INSERT INTO cakes(
            name,
            comment,
            imageUrl,
            yumFactor
        ) VALUES ($1, $2, $3, $4)`, 
        [ name, comment, imageUrl, yumFactor, ],
    );

export {
    createCakeQuery,
};
