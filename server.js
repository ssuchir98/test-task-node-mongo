const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// Need to use when you want to insert dummy data in collection
// require ('./utils/insertUserViews')

const app = express();

app.use(bodyParser.json());

require('./controller')(app);

app.listen(7000, () => {
  mongoose.connect('mongodb://localhost/TestTask', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log(`The server has been started at port 7000`);
});