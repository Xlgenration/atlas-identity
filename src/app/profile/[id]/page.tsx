import Link from 'next/link';

interface ProfilePageProps {
  params: { id: string };
}

export default function ProfilePage({ params }: ProfilePageProps) {
  // Extract name from ID for personalization
  const nameFromId = params.id.split('-')[0]?.replace(/([a-z])([A-Z])/g, '$1 $2') || 'Your';
  const displayName = nameFromId.charAt(0).toUpperCase() + nameFromId.slice(1);

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
            ← Back to Home
          </Link>
          
          <h1 style={{
            fontSize: '36px',
            color: '#a855f7',
            fontWeight: '700',
            marginBottom: '8px'
          }}>
            {displayName}'s Identity Map
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#888',
            lineHeight: '1.6'
          }}>
            Your complete personality blueprint and cosmic analysis
          </p>
        </div>

        {/* Main content grid */}
        <div style={{ 
          display: 'grid',
          gap: '32px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))'
        }}>
          
          {/* Astrological Profile */}
          <div className="card">
            <h3>Astrological Profile</h3>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '20px' }}>
                <div className="badge">☉ Sun: Leo</div>
                <div className="badge">☽ Moon: Scorpio</div>
                <div className="badge">↗ Rising: Virgo</div>
                <div className="badge">☿ Mercury: Cancer</div>
              </div>
              <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '16px' }}>
                Your Leo sun gives you natural leadership abilities and a magnetic presence. 
                Combined with your Scorpio moon, you possess deep emotional intelligence and intuitive insight.
              </p>
              <table>
                <thead>
                  <tr>
                    <th>Planet</th>
                    <th>Sign</th>
                    <th>House</th>
                    <th>Aspect</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sun</td>
                    <td>Leo</td>
                    <td>11th</td>
                    <td>Trine Jupiter</td>
                  </tr>
                  <tr>
                    <td>Moon</td>
                    <td>Scorpio</td>
                    <td>2nd</td>
                    <td>Square Mars</td>
                  </tr>
                  <tr>
                    <td>Venus</td>
                    <td>Virgo</td>
                    <td>12th</td>
                    <td>Sextile Pluto</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Human Design */}
          <div className="card">
            <h3>Human Design System</h3>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '20px' }}>
                <div className="badge">Type: Manifestor</div>
                <div className="badge">Strategy: Inform</div>
                <div className="badge">Authority: Emotional</div>
                <div className="badge">Profile: 3/5</div>
              </div>
              <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                As a Manifestor, you're designed to initiate and create impact. Your emotional authority 
                means you make your best decisions when you honor your emotional wave and wait for clarity.
              </p>
            </div>
          </div>

          {/* Personality Overview */}
          <div className="card">
            <h3>Personality Overview</h3>
            <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px' }}>
              You are a natural innovator with a gift for seeing the bigger picture. Your combination 
              of leadership qualities and deep intuition makes you particularly effective at guiding 
              others through transformation.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              <div className="badge">Visionary</div>
              <div className="badge">Intuitive</div>
              <div className="badge">Magnetic</div>
              <div className="badge">Transformative</div>
              <div className="badge">Independent</div>
              <div className="badge">Insightful</div>
            </div>
          </div>

          {/* Strengths */}
          <div className="card">
            <h3>Core Strengths</h3>
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
                <strong style={{ color: '#64b5f6' }}>Natural Leadership:</strong> You inspire others 
                through your vision and authentic expression
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
                <strong style={{ color: '#64b5f6' }}>Deep Intuition:</strong> Your ability to read 
                between the lines and sense hidden dynamics
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
                <strong style={{ color: '#64b5f6' }}>Transformative Presence:</strong> You help others 
                discover their authentic selves
              </li>
            </ul>
          </div>

          {/* Growth Areas */}
          <div className="card">
            <h3>Growth Areas</h3>
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
                <strong style={{ color: '#a855f7' }}>Patience with Process:</strong> Learning to honor 
                your emotional authority takes time
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
                <strong style={{ color: '#a855f7' }}>Communication Style:</strong> Remember to inform 
                others before making major moves
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
                <strong style={{ color: '#a855f7' }}>Energy Management:</strong> Balance your intense 
                drive with adequate rest and renewal
              </li>
            </ul>
          </div>

          {/* Life Path Insights */}
          <div className="card" style={{ gridColumn: '1 / -1' }}>
            <h3>Life Path Integration</h3>
            <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px' }}>
              Your unique combination of Leo confidence, Scorpio depth, and Manifestor energy creates 
              a powerful formula for leadership in transformation. You're here to initiate change and 
              help others discover their authentic power.
            </p>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '24px' 
            }}>
              <div>
                <h4 style={{ color: '#64b5f6', fontSize: '20px', marginBottom: '12px' }}>
                  Ideal Environments
                </h4>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#888' }}>
                  <li>Leadership roles in transformation</li>
                  <li>Creative and innovative fields</li>
                  <li>Healing and coaching professions</li>
                  <li>Entrepreneurial ventures</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#64b5f6', fontSize: '20px', marginBottom: '12px' }}>
                  Key Relationships
                </h4>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#888' }}>
                  <li>Partners who appreciate your intensity</li>
                  <li>Collaborators who can match your vision</li>
                  <li>Mentors who understand your unique path</li>
                  <li>Communities that value authenticity</li>
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
          <Link href="/couple" className="btn-primary">
            Explore Compatibility
          </Link>
          <Link 
            href="/assessment" 
            className="btn-primary"
            style={{
              background: 'transparent',
              border: '2px solid #a855f7',
              color: '#a855f7'
            }}
          >
            Create Another Profile
          </Link>
        </div>

      </div>
    </div>
  );
}