const express = require('express');
//const mongoose= require('mongoose');
const redis = require('redis');
const {Client} = require ('pg');



const PORT = 5000;
const app =express();

//connect to redis
const REDIS_HOST = redis; 
const REDIS_PORT = 6379;
const redisClient = redis.createClient(
    {
        url : `redis://${REDIS_HOST}:${REDIS_PORT}`,
    }
);
redisClient.on('error', (err) => console.log('reids client error', err));
redisClient.on('connect', () => console.log('connected to redis ....'));
redisClient.connect();

//Connect db
const DB_USER = 'root';
const DB_PASSWORD = 'example';
const DB_PORT = 5432;
const DB_HOST= 'postgre';

//init app
const URI = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
const client = new Client({
    connectionstring:URI,
})
client
 .connect(URI)
 .then(() => console.log('connect to postgres db...'))
 .catch((err) => console.log('failed to connect to postgres db:' , error));  


app.get('/',(req,res) => res.send('<h1>Hello Dear Eyad Ibrahim Ali Good</h1>'));
app.listen(PORT, () => console.log('App is running on Port 5000'));


// const DB_USER = 'root';
// const DB_PASSWORD = 'example';
// const DB_PORT = 27017;
// const DB_HOST= 'mongo';

// //init app
// const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
// mongoose
//  .connect(URI)
//  .then(() => console.log('connect to db...'))
//  .catch((err) => console.log('failed to connect to db:' , error));
