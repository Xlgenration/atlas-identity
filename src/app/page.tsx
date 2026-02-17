import Link from 'next/link';

export default function Home() {
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
        
        {/* Big headline */}
        <h1 className="fadeIn" style={{
          fontSize: '48px',
          color: '#a855f7',
          fontWeight: '700',
          lineHeight: '1.1',
          marginBottom: '24px'
        }}>
          Entdecke wer du wirklich bist
        </h1>
        
        {/* Compelling paragraph */}
        <p className="fadeIn delay-100" style={{
          fontSize: '24px',
          lineHeight: '1.7',
          color: '#e0e0e0',
          marginBottom: '40px',
          maxWidth: '500px',
          margin: '0 auto 40px'
        }}>
          Die meisten Menschen leben ihr ganzes Leben, ohne sich selbst wirklich zu verstehen. 
          Dein persönlicher Identity Blueprint wartet auf dich.
        </p>
        
        {/* Three benefit items in a card */}
        <div className="card fadeIn delay-200" style={{
          marginBottom: '40px',
          textAlign: 'left'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
            <div>
              <h3 style={{ color: '#64b5f6', fontSize: '18px', marginBottom: '8px' }}>
                Astrologisches Profil
              </h3>
              <p style={{ fontSize: '16px', color: '#888', margin: '0' }}>
                Detaillierte Geburtshoroskop-Analyse — dein kosmischer Bauplan
              </p>
            </div>
            <div>
              <h3 style={{ color: '#64b5f6', fontSize: '18px', marginBottom: '8px' }}>
                Human Design System
              </h3>
              <p style={{ fontSize: '16px', color: '#888', margin: '0' }}>
                Entdecke deinen Energietyp und deine Entscheidungsstrategie
              </p>
            </div>
            <div>
              <h3 style={{ color: '#64b5f6', fontSize: '18px', marginBottom: '8px' }}>
                Persönlichkeitsanalyse
              </h3>
              <p style={{ fontSize: '16px', color: '#888', margin: '0' }}>
                Umfassende Analyse deiner Stärken und Wachstumsbereiche
              </p>
            </div>
          </div>
        </div>
        
        {/* Single CTA */}
        <div className="fadeIn delay-300" style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
          <Link 
            href="/start"
            className="btn-primary"
            style={{
              fontSize: '20px',
              padding: '20px 40px',
              borderRadius: '12px',
              textDecoration: 'none',
              display: 'inline-block',
              width: '100%',
              maxWidth: '400px',
              textAlign: 'center'
            }}
          >
            Reise beginnen →
          </Link>
          
          <p style={{
            fontSize: '14px',
            color: '#888',
            margin: '8px 0 0'
          }}>
            2 Minuten • Kostenlos • Sofortige Ergebnisse
          </p>
        </div>
        
      </div>
    </div>
  );
}
