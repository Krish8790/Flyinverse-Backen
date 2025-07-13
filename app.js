const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use('/assets', express.static(path.join(__dirname, 'assets/css/main.css')));
app.use('/images', express.static(path.join(__dirname, 'Images')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname)));

const packageRoutes = require('./routes/packages');
const flightRoutes = require('./routes/flights');
const hotelRoutes = require('./routes/hotels');

app.use('/packages', packageRoutes);
app.use('/flights', flightRoutes);
app.use('/hotels', hotelRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));