const express = require('express');
const app = express();
const port = 3000;
const number = 3;


app.get('/', (req, res) => res.send('Hello World!'));
app.get(`/users/${number}`, (req, res) => res.send(`Hello user ${number}!`));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
