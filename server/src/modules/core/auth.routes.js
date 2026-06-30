const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const supabase = require('../../config/supabase')

const router = express.Router()

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body

  // 1. Verificar que llegaron los datos
  if (!email || !password) {
    return res.status(400).json({ error: 'Email y contraseña son requeridos' })
  }

  // 2. Buscar el usuario en la base de datos
  const { data: usuario, error } = await supabase
    .from('usuarios')
    .select('*')
    .eq('email', email)
    .single()

  if (error || !usuario) {
    return res.status(401).json({ error: 'Usuario no encontrado' })
  }

  // 3. Verificar que el usuario esté activo
  if (!usuario.activo) {
    return res.status(401).json({ error: 'Usuario desactivado' })
  }

  // 4. Verificar la contraseña
  const passwordValida = await bcrypt.compare(password, usuario.password_hash)
  if (!passwordValida) {
    return res.status(401).json({ error: 'Contraseña incorrecta' })
  }

  // 5. Crear el token de sesión
  const token = jwt.sign(
    { id: usuario.id, email: usuario.email, rol: usuario.rol },
    process.env.JWT_SECRET,
    { expiresIn: '8h' }
  )

  // 6. Responder con el token y datos del usuario
  res.json({
    token,
    usuario: {
      id: usuario.id,
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol
    }
  })
})

module.exports = router