const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const flights = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data/flights.json'))
);

router.get('/', (req, res) => {
  res.render('flights', { flights });
});

router.get('/:id', (req, res) => {
  const flight = flights.find(p => p.id === req.params.id);
  if (!flight) return res.status(404).send('Flight not found');
  res.render('flight', { flight: flight });
});

module.exports = router;