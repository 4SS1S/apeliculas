const express = require('express');
const app     = express();
const server  = require('http').Server(app);
const socket  = require('socket.io')(server);
const logger  = require('morgan');
const mongoose = require('mongoose');
const cors     = require('cors');

const PORT = process.env.PORT || 3333;


mongoose.connect('mongodb+srv://4ss1s:310h4z4rd@cluster0-ovenc.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Conectado ao banco de dados');
    }
})

const router  = require('./routes');

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.use(logger('dev'));

app.use(router);

server.listen(PORT,() => {
    console.log(`RUNNING ON ${PORT}`)
})