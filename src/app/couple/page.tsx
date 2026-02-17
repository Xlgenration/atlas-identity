import Link from 'next/link';

export default function CouplePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '40px' }}>
          <Link href="/" style={{ color: '#888', textDecoration: 'none', fontSize: '16px', display: 'inline-block', marginBottom: '24px' }}>
            ← Zurück
          </Link>
          <h1 style={{ fontSize: '36px', color: '#a855f7', fontWeight: '700', marginBottom: '8px' }}>
            Beziehungs-Kompatibilität
          </h1>
          <p style={{ fontSize: '18px', color: '#888', lineHeight: '1.6' }}>
            Tiefgreifende Kompatibilitätsanalyse zwischen zwei Identity Maps
          </p>
        </div>

        {/* Gesamt-Score */}
        <div className="card" style={{ textAlign: 'center', marginBottom: '40px', background: 'linear-gradient(135deg, #14141f 0%, #1a1a2e 100%)' }}>
          <h2 style={{ fontSize: '28px', color: '#64b5f6', marginBottom: '16px', border: 'none' }}>
            Gesamt-Kompatibilität
          </h2>
          <div style={{ fontSize: '64px', fontWeight: '700', color: '#a855f7', marginBottom: '16px' }}>87%</div>
          <p style={{ fontSize: '20px', color: '#e0e0e0', maxWidth: '600px', margin: '0 auto' }}>
            Außergewöhnlich starke Kompatibilität mit tiefer emotionaler und spiritueller Resonanz
          </p>
        </div>

        <div style={{ display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          
          {/* Kategorie-Analyse */}
          <div className="card">
            <h3>Kompatibilitäts-Analyse</h3>
            <table style={{ marginTop: '20px' }}>
              <thead>
                <tr><th>Kategorie</th><th>Wert</th><th>Erkenntnis</th></tr>
              </thead>
              <tbody>
                <tr><td>Emotionale Verbindung</td><td style={{ color: '#64b5f6', fontWeight: '600' }}>92%</td><td>Tiefe intuitive Bindung</td></tr>
                <tr><td>Kommunikationsstil</td><td style={{ color: '#64b5f6', fontWeight: '600' }}>85%</td><td>Ergänzende Ansätze</td></tr>
                <tr><td>Lebensziele</td><td style={{ color: '#64b5f6', fontWeight: '600' }}>89%</td><td>Gemeinsame Vision</td></tr>
                <tr><td>Energie-Dynamik</td><td style={{ color: '#a855f7', fontWeight: '600' }}>78%</td><td>Balance nötig</td></tr>
                <tr><td>Spirituelle Verbindung</td><td style={{ color: '#64b5f6', fontWeight: '600' }}>94%</td><td>Tiefe Seelenresonanz</td></tr>
              </tbody>
            </table>
          </div>

          {/* Profile */}
          <div className="card">
            <h3>Profil-Highlights</h3>
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ color: '#64b5f6', fontSize: '18px', marginBottom: '12px' }}>Partner A: Löwe-Sonne, Skorpion-Mond</h4>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' as const, marginBottom: '16px' }}>
                <div className="badge">Manifestor</div>
                <div className="badge">Emotionale Autorität</div>
                <div className="badge">Profil 3/5</div>
              </div>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#888' }}>
                Natürliche Führungspersönlichkeit mit tiefer emotionaler Intelligenz und transformativer Präsenz
              </p>
            </div>
            <div>
              <h4 style={{ color: '#64b5f6', fontSize: '18px', marginBottom: '12px' }}>Partner B: Waage-Sonne, Fische-Mond</h4>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' as const, marginBottom: '16px' }}>
                <div className="badge">Generator</div>
                <div className="badge">Sakrale Autorität</div>
                <div className="badge">Profil 2/4</div>
              </div>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#888' }}>
                Harmonisches Wesen mit tiefer Empathie und natürlicher Fähigkeit Balance zu schaffen
              </p>
            </div>
          </div>

          {/* Stärken */}
          <div className="card">
            <h3>Beziehungsstärken</h3>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              <li style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '16px', paddingLeft: '24px', position: 'relative' as const }}>
                <span style={{ position: 'absolute' as const, left: '0', color: '#64b5f6' }}>✦</span>
                <strong style={{ color: '#64b5f6' }}>Ergänzende Energien:</strong> Manifestor-Führung gepaart mit Generator-Ausdauer erzeugt kraftvolle Dynamik
              </li>
              <li style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '16px', paddingLeft: '24px', position: 'relative' as const }}>
                <span style={{ position: 'absolute' as const, left: '0', color: '#64b5f6' }}>✦</span>
                <strong style={{ color: '#64b5f6' }}>Emotionale Tiefe:</strong> Beide Partner schätzen authentischen emotionalen Ausdruck und tiefe Verbindung
              </li>
              <li style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '16px', paddingLeft: '24px', position: 'relative' as const }}>
                <span style={{ position: 'absolute' as const, left: '0', color: '#64b5f6' }}>✦</span>
                <strong style={{ color: '#64b5f6' }}>Gemeinsame Werte:</strong> Beide priorisieren persönliches Wachstum, Authentizität und bedeutsame Beziehungen
              </li>
              <li style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '16px', paddingLeft: '24px', position: 'relative' as const }}>
                <span style={{ position: 'absolute' as const, left: '0', color: '#64b5f6' }}>✦</span>
                <strong style={{ color: '#64b5f6' }}>Kreative Synergie:</strong> Löwe-Kreativität kombiniert mit Waage-Harmonie schafft wunderbare gemeinsame Projekte
              </li>
            </ul>
          </div>

          {/* Wachstum */}
          <div className="card">
            <h3>Wachstumschancen</h3>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              <li style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '16px', paddingLeft: '24px', position: 'relative' as const }}>
                <span style={{ position: 'absolute' as const, left: '0', color: '#a855f7' }}>→</span>
                <strong style={{ color: '#a855f7' }}>Kommunikations-Timing:</strong> Manifestor muss informieren, Generator muss reagieren — den Prozess des anderen ehren
              </li>
              <li style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '16px', paddingLeft: '24px', position: 'relative' as const }}>
                <span style={{ position: 'absolute' as const, left: '0', color: '#a855f7' }}>→</span>
                <strong style={{ color: '#a855f7' }}>Entscheidungsfindung:</strong> Emotionale Autorität mit sakraler Reaktion in Einklang bringen
              </li>
              <li style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '16px', paddingLeft: '24px', position: 'relative' as const }}>
                <span style={{ position: 'absolute' as const, left: '0', color: '#a855f7' }}>→</span>
                <strong style={{ color: '#a855f7' }}>Energie-Management:</strong> Verstehen wann man gemeinsam führt und wann individueller Ausdruck wichtig ist
              </li>
            </ul>
          </div>

          {/* Beratung */}
          <div className="card" style={{ gridColumn: '1 / -1' }}>
            <h3>Beziehungsberatung</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px', marginTop: '20px' }}>
              <div>
                <h4 style={{ color: '#64b5f6', fontSize: '20px', marginBottom: '16px' }}>Tägliche Rituale</h4>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#e0e0e0' }}>
                  <li style={{ marginBottom: '8px' }}>Gemeinsame Morgen-Intentionen setzen</li>
                  <li style={{ marginBottom: '8px' }}>Regelmäßige emotionale Check-ins</li>
                  <li style={{ marginBottom: '8px' }}>Individuelle Verarbeitungszeit respektieren</li>
                  <li style={{ marginBottom: '8px' }}>Gemeinsame kreative Projekte</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#64b5f6', fontSize: '20px', marginBottom: '16px' }}>Kommunikations-Tipps</h4>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#e0e0e0' }}>
                  <li style={{ marginBottom: '8px' }}>Manifestor: Immer informieren bevor du handelst</li>
                  <li style={{ marginBottom: '8px' }}>Generator: Vertraue deiner Bauchreaktion</li>
                  <li style={{ marginBottom: '8px' }}>Beide: Emotionale Wellen ehren</li>
                  <li style={{ marginBottom: '8px' }}>Heiligen Raum für tiefes Teilen schaffen</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#64b5f6', fontSize: '20px', marginBottom: '16px' }}>Langzeit-Vision</h4>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#e0e0e0' }}>
                  <li style={{ marginBottom: '8px' }}>Gemeinsam etwas Bedeutsames aufbauen</li>
                  <li style={{ marginBottom: '8px' }}>Authentischen Ausdruck des anderen unterstützen</li>
                  <li style={{ marginBottom: '8px' }}>Harmonisches Zuhause schaffen</li>
                  <li style={{ marginBottom: '8px' }}>Andere durch eure Partnerschaft inspirieren</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' as const }}>
          <Link href="/assessment" className="btn-primary">Neue Profile erstellen</Link>
          <Link href="/" className="btn-primary" style={{ background: 'transparent', border: '2px solid #a855f7', color: '#a855f7' }}>Zurück</Link>
        </div>
      </div>
    </div>
  );
}
