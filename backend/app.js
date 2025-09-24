const express = require('express');

const reservationRoutes = require('./routes/reservationsRoutes');

const app = express()
const port = 3000

app.use(express.json());
app.use('/reservation',reservationRoutes);

app.get('/', (req, res) => {res.send('Bienvenure sur l\'API de gestion des réservation de Motelstar')});

app.listen(port, () => {console.log(`Le serveur est en route sur ce lien : http://localhost:${port} 🚀`);});
