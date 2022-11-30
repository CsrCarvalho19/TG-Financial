var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

require('dotenv/config');
const db = require('./config/database')
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbName = process.env.DB_NAME
const dbCluster = process.env.DB_CLUSTER
db(`mongodb+srv://${dbUser}:${dbPass}@${dbCluster}.mongodb.net/${dbName}?retryWrites=true&w=majority`)

var app = express();

const cors = require('cors')
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const gasto = require('./routes/gasto')
app.use('/gasto', gasto)

const recebimento = require('./routes/recebimento')
app.use('/recebimento', recebimento)

const usuario = require('./routes/usuario')
app.use('/usuario', usuario)

module.exports = app;
