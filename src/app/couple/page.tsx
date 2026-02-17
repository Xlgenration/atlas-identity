import Link from 'next/link';

export default function CouplePage() {
  return (
    <div style={{ 
      minHeight: '100vh',
      background: '#0a0a0f',
      padding: '40px 20px'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <Link 
            href="/"
            style={{
              color: '#888',
              textDecoration: 'none',
              fontSize: '16px',
              display: 'inline-block',
              marginBottom: '24px'
            }}
          >
            ← Zurück
          </Link>
          
          <h1 style={{
            fontSize: '36px',
            color: '#a855f7',
            fontWeight: '700',
            marginBottom: '8px'
          }}>
            Beziehungs-Kompatibilität
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#888',
            lineHeight: '1.6'
          }}>
            Deep compatibility analysis between two identity maps
          </p>
        </div>

        {/* Compatibility Wert - Prominent */}
        <div className="card" style={{ 
          textAlign: 'center',
          marginBottom: '40px',
          background: 'linear-gradient(135deg, #14141f 0%, #1a1a2e 100%)'
        }}>
          <h2 style={{ 
            fontSize: '28px',
            color: '#64b5f6',
            marginBottom: '16px',
            border: 'none'
          }}>
            Gesamt-Kompatibilitätswert
          </h2>
          <div style={{ 
            fontSize: '64px', 
            fontWeight: '700',
            color: '#a855f7',
            marginBottom: '16px'
          }}>
            87%
          </div>
          <p style={{ 
            fontSize: '20px',
            color: '#e0e0e0',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Exceptionally strong compatibility with deep emotional and spiritual resonance
          </p>
        </div>

        {/* Main content grid */}
        <div style={{ 
          display: 'grid',
          gap: '32px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))'
        }}>
          
          {/* Kategorie Breakdown */}
          <div className="card">
            <h3>Kompatibilitäts-Analyse</h3>
            <table style={{ marginTop: '20px' }}>
              <thead>
                <tr>
                  <th>Kategorie</th>
                  <th>Wert</th>
                  <th>Analysis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Emotionale Verbindung</td>
                  <td style={{ color: '#64b5f6', fontWeight: '600' }}>92%</td>
                  <td>Deep intuitive bond</td>
                </tr>
                <tr>
                  <td>Kommunikation Style</td>
                  <td style={{ color: '#64b5f6', fontWeight: '600' }}>85%</td>
                  <td>Complementary approaches</td>
                </tr>
                <tr>
                  <td>Life Goals</td>
                  <td style={{ color: '#64b5f6', fontWeight: '600' }}>89%</td>
                  <td>Shared vision alignment</td>
                </tr>
                <tr>
                  <td>Energie-Dynamik</td>
                  <td style={{ color: '#a855f7', fontWeight: '600' }}>78%</td>
                  <td>Balancing needed</td>
                </tr>
                <tr>
                  <td>Spiritual Connection</td>
                  <td style={{ color: '#64b5f6', fontWeight: '600' }}>94%</td>
                  <td>Profound soul resonance</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Individual Profiles */}
          <div className="card">
            <h3>Profile Highlights</h3>
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ 
                color: '#64b5f6', 
                fontSize: '18px', 
                marginBottom: '12px' 
              }}>
                Partner A: Leo Sun, Scorpio Moon
              </h4>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                <div className="badge">Manifestor</div>
                <div className="badge">Emotional Authority</div>
                <div className="badge">3/5 Profile</div>
              </div>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#888' }}>
                Natural leader with deep emotional intelligence and transformative presence
              </p>
            </div>

            <div>
              <h4 style={{ 
                color: '#64b5f6', 
                fontSize: '18px', 
                marginBottom: '12px' 
              }}>
                Partner B: Libra Sun, Pisces Moon
              </h4>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                <div className="badge">Generator</div>
                <div className="badge">Sacral Authority</div>
                <div className="badge">2/4 Profile</div>
              </div>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#888' }}>
                Harmonious nature with deep empathy and natural ability to create balance
              </p>
            </div>
          </div>

          {/* Beziehungsstärken */}
          <div className="card">
            <h3>Beziehungsstärken</h3>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              <li style={{ 
                fontSize: '18px', 
                lineHeight: '1.6', 
                marginBottom: '16px',
                paddingLeft: '24px',
                position: 'relative'
              }}>
                <span style={{ 
                  position: 'absolute', 
                  left: '0', 
                  color: '#64b5f6' 
                }}>
                  ✦
                </span>
                <strong style={{ color: '#64b5f6' }}>Complementary Energies:</strong> Manifestor 
                leadership paired with Generator sustainability creates powerful momentum
              </li>
              <li style={{ 
                fontSize: '18px', 
                lineHeight: '1.6', 
                marginBottom: '16px',
                paddingLeft: '24px',
                position: 'relative'
              }}>
                <span style={{ 
                  position: 'absolute', 
                  left: '0', 
                  color: '#64b5f6' 
                }}>
                  ✦
                </span>
                <strong style={{ color: '#64b5f6' }}>Emotional Depth:</strong> Both partners value 
                authentic emotional expression and deep connection
              </li>
              <li style={{ 
                fontSize: '18px', 
                lineHeight: '1.6', 
                marginBottom: '16px',
                paddingLeft: '24px',
                position: 'relative'
              }}>
                <span style={{ 
                  position: 'absolute', 
                  left: '0', 
                  color: '#64b5f6' 
                }}>
                  ✦
                </span>
                <strong style={{ color: '#64b5f6' }}>Shared Values:</strong> Both prioritize 
                personal growth, authenticity, and meaningful relationships
              </li>
              <li style={{ 
                fontSize: '18px', 
                lineHeight: '1.6', 
                marginBottom: '16px',
                paddingLeft: '24px',
                position: 'relative'
              }}>
                <span style={{ 
                  position: 'absolute', 
                  left: '0', 
                  color: '#64b5f6' 
                }}>
                  ✦
                </span>
                <strong style={{ color: '#64b5f6' }}>Creative Synergy:</strong> Leo creativity 
                combined with Libran harmony creates beautiful collaborative projects
              </li>
            </ul>
          </div>

          {/* Growth Challenges */}
          <div className="card">
            <h3>Wachstumschancen</h3>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              <li style={{ 
                fontSize: '18px', 
                lineHeight: '1.6', 
                marginBottom: '16px',
                paddingLeft: '24px',
                position: 'relative'
              }}>
                <span style={{ 
                  position: 'absolute', 
                  left: '0', 
                  color: '#a855f7' 
                }}>
                  →
                </span>
                <strong style={{ color: '#a855f7' }}>Kommunikation Timing:</strong> Manifestor 
                needs to inform, Generator needs to respond - honoring each other's process
              </li>
              <li style={{ 
                fontSize: '18px', 
                lineHeight: '1.6', 
                marginBottom: '16px',
                paddingLeft: '24px',
                position: 'relative'
              }}>
                <span style={{ 
                  position: 'absolute', 
                  left: '0', 
                  color: '#a855f7' 
                }}>
                  →
                </span>
                <strong style={{ color: '#a855f7' }}>Decision Making:</strong> Balancing 
                emotional authority with sacral response timing
              </li>
              <li style={{ 
                fontSize: '18px', 
                lineHeight: '1.6', 
                marginBottom: '16px',
                paddingLeft: '24px',
                position: 'relative'
              }}>
                <span style={{ 
                  position: 'absolute', 
                  left: '0', 
                  color: '#a855f7' 
                }}>
                  →
                </span>
                <strong style={{ color: '#a855f7' }}>Energy Management:</strong> Understanding 
                when to lead together vs. when to allow individual expression
              </li>
            </ul>
          </div>

          {/* Relationship Recommendations */}
          <div className="card" style={{ gridColumn: '1 / -1' }}>
            <h3>Beziehungsberatung</h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '32px',
              marginTop: '20px'
            }}>
              <div>
                <h4 style={{ 
                  color: '#64b5f6', 
                  fontSize: '20px', 
                  marginBottom: '16px' 
                }}>
                  Daily Practices
                </h4>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#e0e0e0' }}>
                  <li style={{ marginBottom: '8px' }}>Morning intention setting together</li>
                  <li style={{ marginBottom: '8px' }}>Regular emotional check-ins</li>
                  <li style={{ marginBottom: '8px' }}>Respect for individual processing time</li>
                  <li style={{ marginBottom: '8px' }}>Collaborative creative projects</li>
                </ul>
              </div>
              
              <div>
                <h4 style={{ 
                  color: '#64b5f6', 
                  fontSize: '20px', 
                  marginBottom: '16px' 
                }}>
                  Kommunikation Tips
                </h4>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#e0e0e0' }}>
                  <li style={{ marginBottom: '8px' }}>Manifestor: Always inform before acting</li>
                  <li style={{ marginBottom: '8px' }}>Generator: Trust your gut response</li>
                  <li style={{ marginBottom: '8px' }}>Both: Honor emotional waves</li>
                  <li style={{ marginBottom: '8px' }}>Create sacred space for deep sharing</li>
                </ul>
              </div>

              <div>
                <h4 style={{ 
                  color: '#64b5f6', 
                  fontSize: '20px', 
                  marginBottom: '16px' 
                }}>
                  Long-term Vision
                </h4>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#e0e0e0' }}>
                  <li style={{ marginBottom: '8px' }}>Building something meaningful together</li>
                  <li style={{ marginBottom: '8px' }}>Supporting each other's authentic expression</li>
                  <li style={{ marginBottom: '8px' }}>Creating a harmonious home environment</li>
                  <li style={{ marginBottom: '8px' }}>Inspiring others through your partnership</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Action buttons */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '48px',
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap'
        }}>
          <Link href="/assessment" className="btn-primary">
            Create New Profiles
          </Link>
          <Link 
            href="/" 
            className="btn-primary"
            style={{
              background: 'transparent',
              border: '2px solid #a855f7',
              color: '#a855f7'
            }}
          >
            Zurück
          </Link>
        </div>

      </div>
    </div>
  );
}