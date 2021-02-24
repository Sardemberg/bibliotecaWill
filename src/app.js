const app = require("./config/server");

//Routes
require('./routes/home')(app);
require('./routes/livros')(app);
require('./routes/pegarLivros')(app);

app.listen(3000, () => {
    console.log("Servidor Online");
});