const express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    logger = require('morgan'),
    createError = require('http-errors'),
    PORT = process.env.PORT || 4000,
    bodyParser = require('body-parser');


const API_PORT = 3001;
const app = express();
app.use(cors());

//this is our mongo database
const dbRoute = 'mongodb+srv://Munditoro:munditoro@crudtest-h3y3e.mongodb.net/test?retryWrites=true&w=majority';

//connects our backend code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.on('open', () => console.log('connected to the database'));

//checks if the connection with the database was successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const routes = require('./api/routes/routes');
app.use('/students', routes);


app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)));

//Error Handler
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.send('error');
});

app.listen(PORT);

console.log('App listening in port: ' + PORT);