const express = require('express')
const cors = require('cors')
require('dotenv').config()

const authRoutes = require('./modules/core/auth.routes')

const app = express()

app.use(cors())
app.use(express.json())

// Rutas
app.use('/api/auth', authRoutes)

// Ruta de salud
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    message: 'Servidor funcionando correctamente 🚀'
  })
})

module.exports = app