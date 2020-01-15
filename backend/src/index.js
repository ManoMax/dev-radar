const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routs')

const app = express();

mongoose.connect('mongodb+srv://ManoMax:senha123@cluster0-3lcaa.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);