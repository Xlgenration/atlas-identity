'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

interface AnalysisResult {
  id: string;
  name: string;
  birthData: {
    date: string;
    time: string;
    place: string;
  };
  astrology: {
    sunSign: string;
    moonSign: string;
    risingSign: string;
    merkurSign: string;
  };
  chineseZodiac: {
    animal: string;
    element: string;
  };
  numerology: {
    lifePath: number;
  };
  humanDesign: {
    type: string;
    strategy: string;
    authority: string;
    profile: string;
  };
  personality: {
    overview: string;
    strengths: string[];
    growthAreas: string[];
    traits: string[];
  };
  descriptions: {
    astrological: string;
    humanDesign: string;
    integration: string;
  };
  environments: string[];
  relationships: string[];
}

export default function ProfilePage() {
  const params = useParams();
  const router = useRouter();
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedAnalysis = localStorage.getItem('atlasAnalysis');
    
    if (storedAnalysis) {
      const parsedAnalysis = JSON.parse(storedAnalysis);
      
      // Check if the stored analysis matches the current profile ID
      if (parsedAnalysis.id === params.id) {
        setAnalysis(parsedAnalysis);
      } else {
        // If IDs don't match, redirect back to assessment
        router.push('/assessment');
        return;
      }
    } else {
      // No analysis data found, redirect to assessment
      router.push('/assessment');
      return;
    }
    
    setLoading(false);
  }, [params.id, router]);

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: '#0a0a0f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          width: '64px',
          height: '64px',
          border: '4px solid #2a2a3a',
          borderTop: '4px solid #a855f7',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
      </div>
    );
  }

  if (!analysis) {
    return null;
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '40px' }}>
          <Link href="/" style={{ color: '#888', textDecoration: 'none', fontSize: '16px', display: 'inline-block', marginBottom: '24px' }}>
            ← Zurück
          </Link>
          <h1 style={{ fontSize: '36px', color: '#a855f7', fontWeight: '700', marginBottom: '8px' }}>
            {analysis.name}&apos;s Identity Map
          </h1>
          <p style={{ fontSize: '18px', color: '#888', lineHeight: '1.6' }}>
            Dein vollständiger Persönlichkeits-Blueprint und kosmische Analyse
          </p>
        </div>

        <div style={{ display: 'grid', gap: '32px', gridTemplateColumns: '1fr' }}>
          
          <div className="card">
            <h3>Astrologisches Profil</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '8px', marginBottom: '20px' }}>
              <div className="badge">☉ Sonne: {analysis.astrology.sunSign}</div>
              <div className="badge">☽ Mond: {analysis.astrology.moonSign}</div>
              <div className="badge">↗ Aszendent: {analysis.astrology.risingSign}</div>
              <div className="badge">☿ Merkur: {analysis.astrology.merkurSign}</div>
            </div>
            <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '16px' }}>
              {analysis.descriptions.astrological}
            </p>
            <div style={{ background: '#1a1a2e', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
              <h4 style={{ color: '#64b5f6', marginBottom: '8px' }}>Chinesisches Tierkreiszeichen</h4>
              <div className="badge" style={{ marginRight: '8px' }}>🐉 {analysis.chineseZodiac.element}-{analysis.chineseZodiac.animal}</div>
              <div className="badge">🔢 Lebenszahl: {analysis.numerology.lifePath}</div>
            </div>
          </div>

          <div className="card">
            <h3>Human Design System</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '8px', marginBottom: '20px' }}>
              <div className="badge">Typ: {analysis.humanDesign.type}</div>
              <div className="badge">Strategie: {analysis.humanDesign.strategy}</div>
              <div className="badge">Autorität: {analysis.humanDesign.authority}</div>
              <div className="badge">Profil: {analysis.humanDesign.profile}</div>
            </div>
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
              {analysis.descriptions.humanDesign}
            </p>
          </div>

          <div className="card">
            <h3>Persönlichkeitsübersicht</h3>
            <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px' }}>
              {analysis.personality.overview}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '8px' }}>
              {analysis.personality.traits.map((trait, index) => (
                <div key={index} className="badge">{trait}</div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>Kernstärken</h3>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              {analysis.personality.strengths.map((strength, index) => (
                <li key={index} style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '16px', paddingLeft: '24px', position: 'relative' as const }}>
                  <span style={{ position: 'absolute' as const, left: '0', color: '#64b5f6' }}>✦</span>
                  {strength}
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3>Wachstumsbereiche</h3>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              {analysis.personality.growthAreas.map((area, index) => (
                <li key={index} style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '16px', paddingLeft: '24px', position: 'relative' as const }}>
                  <span style={{ position: 'absolute' as const, left: '0', color: '#a855f7' }}>→</span>
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="card" style={{ gridColumn: '1 / -1' }}>
            <h3>Lebensweg-Integration</h3>
            <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px' }}>
              {analysis.descriptions.integration}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
              <div>
                <h4 style={{ color: '#64b5f6', fontSize: '20px', marginBottom: '12px' }}>Ideale Umgebungen</h4>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#888' }}>
                  {analysis.environments.map((env, index) => (
                    <li key={index}>{env}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#64b5f6', fontSize: '20px', marginBottom: '12px' }}>Schlüssel-Beziehungen</h4>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#888' }}>
                  {analysis.relationships.map((rel, index) => (
                    <li key={index}>{rel}</li>
                  ))}
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
