const express = require("express");
const morgan = require('morgan')
const app = express();
const port = 3000;

app.use(morgan('combined'))

app.get("/tin-tuc", (req, res) => {
    var a = 1;
    var b = 2;

    var c = a + b;
    res.send("Hello World! I'm Son");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
