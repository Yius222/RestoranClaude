function Login() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh'
    }}>
      <div style={{
        background: '#1e293b',
        padding: '2rem',
        borderRadius: '12px',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
          🍟 RestoranClaude
        </h1>
        <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '2rem' }}>
          Inicia sesión para continuar
        </p>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: '#94a3b8' }}>
            Usuario
          </label>
          <input
            type="text"
            placeholder="Tu usuario"
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '8px',
              border: '1px solid #334155',
              background: '#0f172a',
              color: '#f1f5f9',
              fontSize: '1rem'
            }}
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: '#94a3b8' }}>
            Contraseña
          </label>
          <input
            type="password"
            placeholder="Tu contraseña"
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '8px',
              border: '1px solid #334155',
              background: '#0f172a',
              color: '#f1f5f9',
              fontSize: '1rem'
            }}
          />
        </div>

        <button style={{
          width: '100%',
          padding: '0.75rem',
          borderRadius: '8px',
          border: 'none',
          background: '#f97316',
          color: 'white',
          fontSize: '1rem',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Entrar al sistema
        </button>
      </div>
    </div>
  )
}

export default Login