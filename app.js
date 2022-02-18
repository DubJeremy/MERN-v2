const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({path: './config/.env'});
// const path = require('path');

const userRoutes = require('./routes/userRoutes');

mongoose.connect('mongodb+srv://' + process.env.DB_USER_PASS + '@cluster0.utafe.mongodb.net/mernv2?retryWrites=true&w=majority',
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app =express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


// app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/user', userRoutes);

module.exports = app;