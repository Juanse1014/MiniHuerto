const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB (Asegúrate de que MongoDB esté instalado y corriendo en tu PC)
mongoose.connect('mongodb://127.0.0.1:27017/mini_huertos')
    .then(() => console.log('✅ Base de datos conectada con éxito'))
    .catch(err => console.log('❌ Error al conectar la base de datos:', err));

// Rutas de la API
app.use('/api/plantas', require('./routes/plantas'));

// Iniciar servidor
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});