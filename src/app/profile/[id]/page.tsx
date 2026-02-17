import Link from 'next/link';

interface ProfilePageProps {
  params: Promise<{ id: string }>;
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { id } = await params;
  const nameFromId = id.split('-')[0]?.replace(/([a-z])([A-Z])/g, '$1 $2') || 'Dein';
  const displayName = nameFromId.charAt(0).toUpperCase() + nameFromId.slice(1);

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '40px' }}>
          <Link href="/" style={{ color: '#888', textDecoration: 'none', fontSize: '16px', display: 'inline-block', marginBottom: '24px' }}>
            ← Zurück
          </Link>
          <h1 style={{ fontSize: '36px', color: '#a855f7', fontWeight: '700', marginBottom: '8px' }}>
            {displayName}&apos;s Identity Map
          </h1>
          <p style={{ fontSize: '18px', color: '#888', lineHeight: '1.6' }}>
            Dein vollständiger Persönlichkeits-Blueprint und kosmische Analyse
          </p>
        </div>

        <div style={{ display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          
          <div className="card">
            <h3>Astrologisches Profil</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '20px' }}>
              <div className="badge">☉ Sonne: Löwe</div>
              <div className="badge">☽ Mond: Skorpion</div>
              <div className="badge">↗ Aszendent: Jungfrau</div>
              <div className="badge">☿ Merkur: Krebs</div>
            </div>
            <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '16px' }}>
              Deine Löwe-Sonne verleiht dir natürliche Führungsqualitäten und eine magnetische Ausstrahlung. 
              Kombiniert mit deinem Skorpion-Mond besitzt du tiefe emotionale Intelligenz und intuitive Einsicht.
            </p>
            <table>
              <thead>
                <tr><th>Planet</th><th>Zeichen</th><th>Haus</th><th>Aspekt</th></tr>
              </thead>
              <tbody>
                <tr><td>Sonne</td><td>Löwe</td><td>11.</td><td>Trigon Jupiter</td></tr>
                <tr><td>Mond</td><td>Skorpion</td><td>2.</td><td>Quadrat Mars</td></tr>
                <tr><td>Venus</td><td>Jungfrau</td><td>12.</td><td>Sextil Pluto</td></tr>
              </tbody>
            </table>
          </div>

          <div className="card">
            <h3>Human Design System</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '20px' }}>
              <div className="badge">Typ: Manifestor</div>
              <div className="badge">Strategie: Informieren</div>
              <div className="badge">Autorität: Emotional</div>
              <div className="badge">Profil: 3/5</div>
            </div>
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
              Als Manifestor bist du dafür gemacht, Dinge zu initiieren und Impact zu erzeugen. 
              Deine emotionale Autorität bedeutet, dass du die besten Entscheidungen triffst, 
              wenn du deine emotionale Welle ehrst und auf Klarheit wartest.
            </p>
          </div>

          <div className="card">
            <h3>Persönlichkeitsübersicht</h3>
            <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px' }}>
              Du bist ein natürlicher Innovator mit der Gabe, das große Ganze zu sehen. 
              Deine Kombination aus Führungsqualitäten und tiefer Intuition macht dich besonders 
              effektiv darin, andere durch Transformation zu begleiten.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              <div className="badge">Visionär</div>
              <div className="badge">Intuitiv</div>
              <div className="badge">Magnetisch</div>
              <div className="badge">Transformativ</div>
              <div className="badge">Unabhängig</div>
              <div className="badge">Einsichtsvoll</div>
            </div>
          </div>

          <div className="card">
            <h3>Kernstärken</h3>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              <li style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '16px', paddingLeft: '24px', position: 'relative' as const }}>
                <span style={{ position: 'absolute' as const, left: '0', color: '#64b5f6' }}>✦</span>
                <strong style={{ color: '#64b5f6' }}>Natürliche Führung:</strong> Du inspirierst andere durch deine Vision und authentischen Ausdruck
              </li>
              <li style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '16px', paddingLeft: '24px', position: 'relative' as const }}>
                <span style={{ position: 'absolute' as const, left: '0', color: '#64b5f6' }}>✦</span>
                <strong style={{ color: '#64b5f6' }}>Tiefe Intuition:</strong> Deine Fähigkeit zwischen den Zeilen zu lesen und verborgene Dynamiken zu spüren
              </li>
              <li style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '16px', paddingLeft: '24px', position: 'relative' as const }}>
                <span style={{ position: 'absolute' as const, left: '0', color: '#64b5f6' }}>✦</span>
                <strong style={{ color: '#64b5f6' }}>Transformative Präsenz:</strong> Du hilfst anderen ihr authentisches Selbst zu entdecken
              </li>
            </ul>
          </div>

          <div className="card">
            <h3>Wachstumsbereiche</h3>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              <li style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '16px', paddingLeft: '24px', position: 'relative' as const }}>
                <span style={{ position: 'absolute' as const, left: '0', color: '#a855f7' }}>→</span>
                <strong style={{ color: '#a855f7' }}>Geduld mit dem Prozess:</strong> Lerne deine emotionale Autorität zu ehren — das braucht Zeit
              </li>
              <li style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '16px', paddingLeft: '24px', position: 'relative' as const }}>
                <span style={{ position: 'absolute' as const, left: '0', color: '#a855f7' }}>→</span>
                <strong style={{ color: '#a855f7' }}>Kommunikationsstil:</strong> Denk daran, andere zu informieren bevor du große Schritte machst
              </li>
              <li style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '16px', paddingLeft: '24px', position: 'relative' as const }}>
                <span style={{ position: 'absolute' as const, left: '0', color: '#a855f7' }}>→</span>
                <strong style={{ color: '#a855f7' }}>Energie-Management:</strong> Balance deinen intensiven Antrieb mit ausreichend Ruhe und Erholung
              </li>
            </ul>
          </div>

          <div className="card" style={{ gridColumn: '1 / -1' }}>
            <h3>Lebensweg-Integration</h3>
            <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px' }}>
              Deine einzigartige Kombination aus Löwe-Selbstbewusstsein, Skorpion-Tiefe und Manifestor-Energie 
              schafft eine kraftvolle Formel für Führung in der Transformation. Du bist hier um Veränderung 
              zu initiieren und anderen zu helfen ihre authentische Kraft zu entdecken.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
              <div>
                <h4 style={{ color: '#64b5f6', fontSize: '20px', marginBottom: '12px' }}>Ideale Umgebungen</h4>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#888' }}>
                  <li>Führungsrollen in der Transformation</li>
                  <li>Kreative und innovative Bereiche</li>
                  <li>Healing und Coaching</li>
                  <li>Unternehmerische Projekte</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#64b5f6', fontSize: '20px', marginBottom: '12px' }}>Schlüssel-Beziehungen</h4>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#888' }}>
                  <li>Partner die deine Intensität schätzen</li>
                  <li>Mitstreiter die deiner Vision folgen</li>
                  <li>Mentoren die deinen Weg verstehen</li>
                  <li>Communities die Authentizität wertschätzen</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <div style={{ textAlign: 'center', marginTop: '48px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' as const }}>
          <Link href="/couple" className="btn-primary">Kompatibilität prüfen</Link>
          <Link href="/assessment" className="btn-primary" style={{ background: 'transparent', border: '2px solid #a855f7', color: '#a855f7' }}>
            Neues Profil erstellen
          </Link>
        </div>
      </div>
    </div>
  );
}
