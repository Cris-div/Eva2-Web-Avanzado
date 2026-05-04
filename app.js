const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());
const sequelize = require('./src/config/db');

sequelize.authenticate()
    .then(() => console.log('BD conectada'))
    .catch(err => console.log(err));

const authRoutes = require('./src/routes/authRoutes');

app.use('/api/auth', authRoutes);

const medicamentoRoutes = require('./src/routes/medicamentoRoutes');

app.use('/api/medicamentos', medicamentoRoutes);

const compraRoutes = require('./src/routes/compraRoutes');
app.use('/api/compras', compraRoutes);

const ventaRoutes = require('./src/routes/ventaRoutes');
app.use('/api/ventas', ventaRoutes);

app.get('/', (req, res) => {
    res.send('API Farmacia funcionando');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));


