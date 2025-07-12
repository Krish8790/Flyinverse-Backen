const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const packageData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data/packages.json'))
);

router.get('/', (req, res) => {
  res.render('packages', { packages: packageData });
});

router.get('/:id', (req, res) => {
  const pack = packageData.find(p => p.id === req.params.id);
  if (!pack) return res.status(404).send('Package not found');
  res.render('package', { package: pack });
});

module.exports = router;