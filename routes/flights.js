const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const flightData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data/flights.json'))
);

router.get('/', (req, res) => {
  res.render('flights', { flights: flightData });
});

router.get('/:id', (req, res) => {
  const flight = flightData.find(f => f.id === req.params.id);
  if (!flight) return res.status(404).send('Flight not found');
  res.render('flight', { flight });
});

module.exports = router;