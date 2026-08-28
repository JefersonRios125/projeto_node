const express = require("express");

const app = express();

app.get("/teste", (req, res) => {
    res.send("Hello World!");
});

app.listen(3003, () => {
    console.log("Servidor ligado")
});