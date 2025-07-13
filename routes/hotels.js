const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const hotelData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data/hotels.json'))
);

router.get('/', (req, res) => {
  res.render('hotels', { hotels: hotelData });
});

router.get('/:id', (req, res) => {
  const hotel = hotelData.find(h => h.id === req.params.id);
  if (!hotel) return res.status(404).send('Hotel not found');
  res.render('hotel', { hotel });
});

module.exports = router;
