const express = require('express'),
        mongoose = require('mongoose'),
        cors = require('cors'),
        bodyParser = require('body-parser');


        const API_PORT = 3001;
        const app = express();
        app.use(cors());

    //this is our mongo database
const dbRoute = 'mongodb+srv://munditoro:munditoro@mundicluster-knijw.mongodb.net/test?retryWrites=true&w=majority';

//connects our backend code with the database
mongoose.connect(dbRoute, {useNewUrlParser : true});

let db = mongoose.connection;

db.on('open', () => console.log('connected to the database'));

//checks if the connection with the database was successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const route = require('./routes/routes');