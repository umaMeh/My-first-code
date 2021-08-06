const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const ejs = require('ejs');
const db = require("./config/keys.js").mongoURI;
const bodyParser = require('body-parser');

mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Database Connected"))

.catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send("hello world");

});


let port = process.env.PORT || 3000;
app.listen(port, () => console.log('App listening on port ${port}!'));