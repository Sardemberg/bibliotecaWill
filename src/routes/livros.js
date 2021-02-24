const mysql = require("../config/configDatabase");

module.exports = (app) => {
    app.get("/livros", (req, res) => {
        const data = mysql.query("select* from livros", (error, result) => {
            error ? res.send(error) : res.render("livros", {data: result});
        });
    });
}

