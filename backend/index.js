require('dotenv').config();

const express = require('express');

const cors = require('cors');
const router = require('./routes/index');

const PORT = process.env.PORT || 8085;
const HOST = process.env.HOST || '127.0.0.1';

const app = express();
app.use(cors());
app.use('/api', router);

const start = async () => {
    
    try{
        app.listen( PORT, HOST, () => {
            console.log('Server started:'+ 'http://'+HOST+':'+PORT);
        });
        
        
    } catch(e){
        console.log(e);
    }
}

start();
