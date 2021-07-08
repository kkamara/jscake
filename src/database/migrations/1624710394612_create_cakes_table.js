module.exports = {
    "up": `CREATE TABLE cakes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(30) NOT NULL,
        comment VARCHAR(50) NOT NULL,
        imageUrl VARCHAR(1024) NOT NULL,
        yumFactor smallint NOT NULL
    );`,
    "down": `DROP TABLE cakes`
}
