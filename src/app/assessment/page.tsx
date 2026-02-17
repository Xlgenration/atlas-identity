'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface AssessmentData {
  name: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
}

export default function Assessment() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [data, setData] = useState<AssessmentData>({
    name: '',
    birthDate: '',
    birthTime: '',
    birthPlace: ''
  });

  const router = useRouter();

  const startAnalysis = async () => {
    if (!isFormValid()) return;
    
    setIsAnalyzing(true);
    
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Analysis failed');
      }

      const result = await response.json();
      
      // Store the result in localStorage
      localStorage.setItem('atlasAnalysis', JSON.stringify(result));
      
      // Navigate to profile page with the generated ID
      router.push(`/profile/${result.id}`);
    } catch (error) {
      console.error('Analysis error:', error);
      setIsAnalyzing(false);
      alert('Fehler bei der Analyse. Bitte versuche es erneut.');
    }
  };

  const isFormValid = (): boolean => {
    return data.name.trim().length > 0 && 
           data.birthDate.length > 0 && 
           data.birthTime.length > 0 && 
           data.birthPlace.trim().length > 0;
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
            Dein Identity Blueprint wird erstellt
          </h2>
          <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6' }}>
            Geburtsdaten werden analysiert und umfassende Insights generiert...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="light-theme" style={{ minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'none', fontSize: '16px', display: 'inline-block', marginBottom: '32px' }}>
            ← Zurück
          </Link>
          
          <h1 style={{ fontSize: '36px', color: '#333', fontWeight: '700', marginBottom: '16px' }}>
            Dein Identity Blueprint
          </h1>
          <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6', maxWidth: '400px', margin: '0 auto' }}>
            Gib deine Geburtsdaten ein und erhalte deine persönliche Analyse
          </p>
        </div>

        <div className="card" style={{
          background: 'white',
          border: '1px solid #e0e0e0',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          marginBottom: '40px'
        }}>
          
          <div style={{ marginBottom: '24px' }}>
            <label className="form-label">Vorname</label>
            <input
              type="text"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="form-input"
              placeholder="Dein vollständiger Name"
              autoFocus
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
            <div>
              <label className="form-label">Geburtsdatum</label>
              <input
                type="date"
                value={data.birthDate}
                onChange={(e) => setData({ ...data, birthDate: e.target.value })}
                className="form-input"
              />
            </div>
            <div>
              <label className="form-label">Geburtszeit</label>
              <input
                type="time"
                value={data.birthTime}
                onChange={(e) => setData({ ...data, birthTime: e.target.value })}
                className="form-input"
              />
            </div>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <label className="form-label">Geburtsort</label>
            <input
              type="text"
              value={data.birthPlace}
              onChange={(e) => setData({ ...data, birthPlace: e.target.value })}
              className="form-input"
              placeholder="Stadt, Land"
            />
            <p style={{ fontSize: '14px', color: '#888', marginTop: '6px' }}>
              Die Stadt in der du geboren wurdest
            </p>
          </div>

          <button
            onClick={startAnalysis}
            disabled={!isFormValid()}
            style={{
              width: '100%',
              padding: '16px',
              fontSize: '18px',
              fontWeight: '600',
              borderRadius: '8px',
              border: 'none',
              cursor: isFormValid() ? 'pointer' : 'not-allowed',
              background: isFormValid() 
                ? 'linear-gradient(135deg, #a855f7 0%, #64b5f6 100%)'
                : '#e0e0e0',
              color: isFormValid() ? 'white' : '#888',
              transition: 'all 0.3s ease'
            }}
          >
            Analyse starten
          </button>
          
          {!isFormValid() && (
            <p style={{ fontSize: '14px', color: '#888', textAlign: 'center', marginTop: '12px' }}>
              Bitte fülle alle Felder aus
            </p>
          )}
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', fontSize: '14px', color: '#888', flexWrap: 'wrap' }}>
            <span>🔒 Deine Daten bleiben privat</span>
            <span>⚡ Ergebnis in Sekunden</span>
            <span>✨ Detaillierte Insights</span>
          </div>
        </div>
      </div>
    </div>
  );
}
