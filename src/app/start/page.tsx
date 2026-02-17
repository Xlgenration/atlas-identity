import Link from 'next/link';

export default function StartPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#0a0a0f', 
      color: '#e0e0e0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{ 
        maxWidth: '600px',
        width: '100%',
        textAlign: 'center'
      }}>
        
        <Link href="/" style={{ color: '#888', textDecoration: 'none', fontSize: '16px', display: 'inline-block', marginBottom: '40px' }}>
          ← Zurück
        </Link>

        <h1 className="fadeIn" style={{
          fontSize: '36px',
          color: '#a855f7',
          fontWeight: '700',
          lineHeight: '1.1',
          marginBottom: '16px'
        }}>
          Was möchtest du entdecken?
        </h1>
        
        <p className="fadeIn delay-100" style={{
          fontSize: '18px',
          color: '#888',
          marginBottom: '40px'
        }}>
          Wähle deine Analyse
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Individual Analysis */}
          <Link 
            href="/assessment"
            className="card fadeIn delay-200"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              padding: '32px 24px',
              textAlign: 'left',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              borderColor: '#a855f7',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
              <span style={{ fontSize: '32px' }}>🧬</span>
              <h2 style={{ 
                fontSize: '24px', 
                color: '#a855f7', 
                fontWeight: '600',
                border: 'none',
                padding: '0',
                margin: '0'
              }}>
                Einzelperson
              </h2>
            </div>
            <p style={{ fontSize: '16px', color: '#888', margin: '0', lineHeight: '1.5' }}>
              Entdecke dein vollständiges Persönlichkeitsprofil — Astrologie, Human Design, Numerologie und mehr
            </p>
          </Link>

          {/* Couple Compatibility */}
          <Link 
            href="/couple"
            className="card fadeIn delay-300"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              padding: '32px 24px',
              textAlign: 'left',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              borderColor: '#64b5f6',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
              <span style={{ fontSize: '32px' }}>💞</span>
              <h2 style={{ 
                fontSize: '24px', 
                color: '#64b5f6', 
                fontWeight: '600',
                border: 'none',
                padding: '0',
                margin: '0'
              }}>
                Partner-Kompatibilität
              </h2>
            </div>
            <p style={{ fontSize: '16px', color: '#888', margin: '0', lineHeight: '1.5' }}>
              Analysiere die Kompatibilität zwischen zwei Personen — emotionale, energetische und spirituelle Verbindung
            </p>
          </Link>

        </div>
      </div>
    </div>
  );
}
