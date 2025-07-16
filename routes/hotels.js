const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const hotels = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data/hotels.json'))
);

router.get('/', (req, res) => {
  res.render('hotels', { hotels });
});

router.get('/:id', (req, res) => {
  const hotel = hotels.find(p => p.id === req.params.id);
  if (!hotel) return res.status(404).send('Hotels not found');
  res.render('hotel', { hotel: hotel });
});

module.exports = router;