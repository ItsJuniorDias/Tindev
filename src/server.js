const express = require ('express');
const mongoose = require ('mongoose');
const routes = require('./routes'); 


const server = express();


mongoose.connect('mongodb+srv://junior:vestibulinho97@cluster0-dlpmx.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser:true
}); 

server.use(express.json());
server.use(routes);
server.listen(3333);