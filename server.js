const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');


const app = express();

//bodyparser MIddleware
app.use(bodyParser.json());

const db = require('./config/keys').mongoURi;

//Connect to Mongo
mongoose.connect(db)
.then(() => console.log('mongo connected'))
.catch(err => consolr.log(err));

//use routes
app.use('/api/items',items);

const port = process.env.PORT || 5000;
app.listen(port,()=> console.log(`Server started on port ${port}`));