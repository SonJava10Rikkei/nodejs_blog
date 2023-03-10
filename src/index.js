const express = require("express");
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
// HTTP logger morgan
app.use(morgan('combined'))
// Template engines(handlebars)
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('view', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

