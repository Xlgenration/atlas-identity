'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface PersonData {
  name: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
}

interface CoupleData {
  person1: PersonData;
  person2: PersonData;
}

export default function CouplePage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [data, setData] = useState<CoupleData>({
    person1: {
      name: '',
      birthDate: '',
      birthTime: '',
      birthPlace: ''
    },
    person2: {
      name: '',
      birthDate: '',
      birthTime: '',
      birthPlace: ''
    }
  });

  const router = useRouter();

  const updatePerson = (person: 'person1' | 'person2', field: keyof PersonData, value: string) => {
    setData(prev => ({
      ...prev,
      [person]: {
        ...prev[person],
        [field]: value
      }
    }));
  };

  const isFormValid = (): boolean => {
    const person1Valid = data.person1.name.trim().length > 0 && 
                         data.person1.birthDate.length > 0 && 
                         data.person1.birthTime.length > 0 && 
                         data.person1.birthPlace.trim().length > 0;
    
    const person2Valid = data.person2.name.trim().length > 0 && 
                         data.person2.birthDate.length > 0 && 
                         data.person2.birthTime.length > 0 && 
                         data.person2.birthPlace.trim().length > 0;

    return person1Valid && person2Valid;
  };

  const startAnalysis = async () => {
    if (!isFormValid()) return;
    
    setIsAnalyzing(true);
    
    try {
      // Analyze both persons separately first
      const [person1Response, person2Response] = await Promise.all([
        fetch('/api/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data.person1),
        }),
        fetch('/api/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data.person2),
        })
      ]);

      if (!person1Response.ok || !person2Response.ok) {
        throw new Error('Analysis failed');
      }

      const person1Analysis = await person1Response.json();
      const person2Analysis = await person2Response.json();

      // Now analyze couple compatibility
      const coupleResponse = await fetch('/api/couple', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          person1: person1Analysis,
          person2: person2Analysis
        }),
      });

      if (!coupleResponse.ok) {
        throw new Error('Couple analysis failed');
      }

      const coupleResult = await coupleResponse.json();
      
      // Store the complete result in localStorage
      localStorage.setItem('coupleAnalysis', JSON.stringify(coupleResult));
      
      // Navigate to couple result page
      router.push('/couple/result');
    } catch (error) {
      console.error('Analysis error:', error);
      setIsAnalyzing(false);
      alert('Fehler bei der Analyse. Bitte versuche es erneut.');
    }
  };

  if (isAnalyzing) {
    return (
      <div className="light-theme" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', maxWidth: '400px', padding: '20px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            border: '4px solid #e0e0e0',
            borderTop: '4px solid #a855f7',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 24px'
          }} />
          <h2 style={{ fontSize: '28px', color: '#333', fontWeight: '600', marginBottom: '16px' }}>
            Kompatibilitätsanalyse wird erstellt
          </h2>
          <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6' }}>
            Beide Profile werden analysiert und Kompatibilität berechnet...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="light-theme" style={{ minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none', fontSize: '16px', display: 'inline-block', marginBottom: '32px' }}>
            ← Zurück
          </Link>
          
          <h1 style={{ fontSize: '36px', color: '#333', fontWeight: '700', marginBottom: '16px' }}>
            Beziehungs-Kompatibilität
          </h1>
          <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6', maxWidth: '500px', margin: '0 auto' }}>
            Analysiert die Kompatibilität zwischen zwei Partnern basierend auf ihren Identity Blueprints
          </p>
        </div>

        <div style={{ display: 'grid', gap: '32px', gridTemplateColumns: '1fr', marginBottom: '40px' }}>
          
          {/* Person 1 */}
          <div className="card" style={{
            background: 'white',
            border: '1px solid #e0e0e0',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          }}>
            <h3 style={{ fontSize: '24px', color: '#a855f7', fontWeight: '600', marginBottom: '24px', textAlign: 'center' }}>
              Person 1
            </h3>
            
            <div style={{ marginBottom: '20px' }}>
              <label className="form-label">Vorname</label>
              <input
                type="text"
                value={data.person1.name}
                onChange={(e) => updatePerson('person1', 'name', e.target.value)}
                className="form-input"
                placeholder="Name von Person 1"
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
              <div>
                <label className="form-label">Geburtsdatum</label>
                <input
                  type="date"
                  value={data.person1.birthDate}
                  onChange={(e) => updatePerson('person1', 'birthDate', e.target.value)}
                  className="form-input"
                />
              </div>
              <div>
                <label className="form-label">Geburtszeit</label>
                <input
                  type="time"
                  value={data.person1.birthTime}
                  onChange={(e) => updatePerson('person1', 'birthTime', e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div>
              <label className="form-label">Geburtsort</label>
              <input
                type="text"
                value={data.person1.birthPlace}
                onChange={(e) => updatePerson('person1', 'birthPlace', e.target.value)}
                className="form-input"
                placeholder="Stadt, Land"
              />
            </div>
          </div>

          {/* Person 2 */}
          <div className="card" style={{
            background: 'white',
            border: '1px solid #e0e0e0',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          }}>
            <h3 style={{ fontSize: '24px', color: '#64b5f6', fontWeight: '600', marginBottom: '24px', textAlign: 'center' }}>
              Person 2
            </h3>
            
            <div style={{ marginBottom: '20px' }}>
              <label className="form-label">Vorname</label>
              <input
                type="text"
                value={data.person2.name}
                onChange={(e) => updatePerson('person2', 'name', e.target.value)}
                className="form-input"
                placeholder="Name von Person 2"
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
              <div>
                <label className="form-label">Geburtsdatum</label>
                <input
                  type="date"
                  value={data.person2.birthDate}
                  onChange={(e) => updatePerson('person2', 'birthDate', e.target.value)}
                  className="form-input"
                />
              </div>
              <div>
                <label className="form-label">Geburtszeit</label>
                <input
                  type="time"
                  value={data.person2.birthTime}
                  onChange={(e) => updatePerson('person2', 'birthTime', e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div>
              <label className="form-label">Geburtsort</label>
              <input
                type="text"
                value={data.person2.birthPlace}
                onChange={(e) => updatePerson('person2', 'birthPlace', e.target.value)}
                className="form-input"
                placeholder="Stadt, Land"
              />
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <button
            onClick={startAnalysis}
            disabled={!isFormValid()}
            style={{
              width: '100%',
              maxWidth: '400px',
              padding: '18px',
              fontSize: '20px',
              fontWeight: '600',
              borderRadius: '12px',
              border: 'none',
              cursor: isFormValid() ? 'pointer' : 'not-allowed',
              background: isFormValid() 
                ? 'linear-gradient(135deg, #a855f7 0%, #64b5f6 100%)'
                : '#e0e0e0',
              color: isFormValid() ? 'white' : '#888',
              transition: 'all 0.3s ease'
            }}
          >
            Kompatibilität analysieren
          </button>
          
          {!isFormValid() && (
            <p style={{ fontSize: '14px', color: '#888', marginTop: '12px' }}>
              Bitte fülle alle Felder für beide Personen aus
            </p>
          )}
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', fontSize: '14px', color: '#888', flexWrap: 'wrap' }}>
            <span>🔒 Alle Daten bleiben privat</span>
            <span>⚡ Detaillierte Kompatibilitäts-Insights</span>
            <span>✨ Basierend auf realen Berechnungen</span>
          </div>
        </div>
      </div>
    </div>
  );
}