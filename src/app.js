const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

// Rutas
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', proyecto: 'Huellitas API' })
})

// Aquí irán tus rutas:
// app.use('/api/perros', require('./routes/perros'))
// app.use('/api/adopciones', require('./routes/adopciones'))
// app.use('/api/refugios', require('./routes/refugios'))

module.exports = app