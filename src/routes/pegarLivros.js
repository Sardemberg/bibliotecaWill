const mysql = require("../config/configDatabase");

module.exports = (app) => {
    app.get("/getLivros", (req, res) => {
        const data = mysql.query("select* from livros", (error, result) => {
            error ? res.send(error) : res.json(result);
        });
    });
} 