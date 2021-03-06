const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');
const datas = require('./routes/api/datas');

const app = express();
//bodyparser middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//DB config

const db = require('./config/keys').mongoURI;
const data = require('./config/keys2').mongoURI;
//connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// mongoose
//   .connect(data)
//   .then(() => console.log('data connected...'))
//   .catch(err => console.log(err));

//use routes
app.use('/api/items', items);
app.use('/api/datas', datas);

const port = process.env.PORT || 5000;

//npm run server
app.listen(port, () => console.log(`Server started on port ${port}`));
