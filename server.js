const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

//Bodyparser middleware
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//connect connect to mongo
mongoose
    .connect(db)
    .then(() => console.log("mongoDB connected..."))
    .catch(err => console.log(err))

//use routes
app.use('/api/items', items)
    
    //connect to heroku later
    const port = process.env.PORT || 5000

    app.listen(port, () => console.log(`server started on port ${port}`));