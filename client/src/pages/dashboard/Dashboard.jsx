function Dashboard() {
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
      </aside>

      {/* Contenido principal */}
      <main style={{
        flex: 1,
        padding: '2rem'
      }}>
        <h1 style={{ marginBottom: '0.5rem' }}>Bienvenido 👋</h1>
        <p style={{ color: '#94a3b8' }}>Selecciona un módulo para comenzar</p>
      </main>

    </div>
  )
}

export default Dashboard