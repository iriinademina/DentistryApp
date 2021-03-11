
const express = require('express');
const cors =  require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const sequelize = require('./src/utils/database');
const User = require('./src/models/user');
const userRoutes = require('./src/routes/user');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(userRoutes);


sequelize
  User.sync()
  .then(result => {
    console.log(result);
    console.log('env',process.env.DATABASE, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD)
  })
  .then(user => {
     console.log(user);
  })
  .then(cart => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });

