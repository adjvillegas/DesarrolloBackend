// config.js
const dotenv = require('dotenv').config();

module.exports = {

  NODE_ENV: process.env.NODE_ENV || 'development',
  PID: process.env.PID

}