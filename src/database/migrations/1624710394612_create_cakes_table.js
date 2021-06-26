module.exports = {
    "up": `CREATE TABLE cakes (
        id int primary key,
        name VARCHAR(30) NOT NULL,
        comment VARCHAR(50) NOT NULL,
        imageUrl VARCHAR(1024) NOT NULL,
        yumFactor smallint NOT NULL
    );`,
    "down": `DROP TABLE cakes`
};
