const express = require('express');
const router = express.Router();
const darksky = require('../credentials').darksky; //be careful!!!
const baseUrl = `https://api.darksky.net/forecast/${darksky}/37.8267,-122.4233`;
const axios = require('axios');
router.get('/weather', (request, response) => {
const url = `${baseUrl}29, -82`;
  axios.get(baseUrl)
        .then(weather => {
          response.json(weather.data);
        })
        .catch(err => {
          console.error(err);
        })
});
router.get('/weather/:lat,:lon', (request, response) => {
  response.send('Here be the weather for that place');
});
module.exports = router;
