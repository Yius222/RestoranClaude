const express = require('express')
const cors = require('cors')
require('dotenv').config()

// Crear la aplicación Express
const app = express()

// Middlewares — reglas que aplican a TODAS las peticiones
app.use(cors())           // Permite conexiones desde el cliente (React)
app.use(express.json())   // Permite recibir datos en formato JSON

// Ruta de prueba — para verificar que el servidor funciona
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    message: 'Servidor funcionando correctamente 🚀'
  })
})

module.exports = app