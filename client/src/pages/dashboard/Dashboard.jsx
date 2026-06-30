import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()
  const usuario = JSON.parse(localStorage.getItem('usuario'))

  const cerrarSesion = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('usuario')
    navigate('/login')
  }

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh'
    }}>

      {/* Barra lateral */}
      <aside style={{
        width: '250px',
        background: '#1e293b',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>
        <h2 style={{ marginBottom: '1.5rem', color: '#f97316' }}>
          🍟 RestoranClaude
        </h2>

        {['Ventas', 'Catálogo', 'Clientes', 'Delivery', 'Reportes'].map(item => (
          <button key={item} style={{
            padding: '0.75rem 1rem',
            borderRadius: '8px',
            border: 'none',
            background: 'transparent',
            color: '#94a3b8',
            textAlign: 'left',
            cursor: 'pointer',
            fontSize: '0.95rem'
          }}>
            {item}
          </button>
        ))}

        <button
          onClick={cerrarSesion}
          style={{
            marginTop: 'auto',
            padding: '0.75rem 1rem',
            borderRadius: '8px',
            border: '1px solid #ef4444',
            background: 'transparent',
            color: '#ef4444',
            textAlign: 'left',
            cursor: 'pointer',
            fontSize: '0.95rem'
          }}>
          Cerrar sesión
        </button>
      </aside>

      {/* Contenido principal */}
      <main style={{
        flex: 1,
        padding: '2rem'
      }}>
        <h1 style={{ marginBottom: '0.5rem' }}>
          Bienvenido, {usuario?.nombre} 👋
        </h1>
        <p style={{ color: '#94a3b8' }}>
          Rol: {usuario?.rol}
        </p>
      </main>

    </div>
  )
}

export default Dashboard