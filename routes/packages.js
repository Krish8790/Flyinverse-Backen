const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const packages = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data/packages.json'))
);

router.get('/', (req, res) => {
  res.render('packages', { packages });
});

router.get('/:id', (req, res) => {
  const pack = packages.find(p => p.id === req.params.id);
  if (!pack) return res.status(404).send('Package not found');
  res.render('package', { package: pack });
});

module.exports = router;