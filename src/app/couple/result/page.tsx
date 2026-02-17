'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface AnalysisResult {
  id: string;
  name: string;
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
}

interface CompatibilityScore {
  emotional: number;
  communication: number;
  lifeGoals: number;
  energy: number;
  spiritual: number;
}

interface CoupleCompatibility {
  person1: AnalysisResult;
  person2: AnalysisResult;
  overallScore: number;
  scores: CompatibilityScore;
  strengths: string[];
  growthAreas: string[];
  advice: {
    dailyRituals: string[];
    communication: string[];
    longTerm: string[];
  };
}

export default function CoupleResultPage() {
  const [coupleData, setCoupleData] = useState<CoupleCompatibility | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedData = localStorage.getItem('coupleAnalysis');
    if (storedData) {
      setCoupleData(JSON.parse(storedData));
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div style={{ minHeight: '100vh', background: '#0a0a0f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: '#e0e0e0', fontSize: '18px' }}>Lade Kompatibilitäts-Analyse...</div>
      </div>
    );
  }

  if (!coupleData) {
    return (
      <div style={{ minHeight: '100vh', background: '#0a0a0f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', color: '#e0e0e0' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Keine Kompatibilitäts-Daten gefunden</h2>
          <Link href="/couple" className="btn-primary">Neue Analyse starten</Link>
        </div>
      </div>
    );
  }

  const getScoreColor = (score: number): string => {
    if (score >= 80) return '#64b5f6';
    if (score >= 65) return '#a855f7';
    if (score >= 50) return '#ffa726';
    return '#ff7043';
  };

  const getScoreLabel = (score: number): string => {
    if (score >= 85) return 'Hervorragend';
    if (score >= 75) return 'Sehr gut';
    if (score >= 65) return 'Gut';
    if (score >= 50) return 'Entwicklungsfähig';
    return 'Herausfordernd';
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '40px' }}>
          <Link href="/couple" style={{ color: '#888', textDecoration: 'none', fontSize: '16px', display: 'inline-block', marginBottom: '24px' }}>
            ← Neue Analyse
          </Link>
          <h1 style={{ fontSize: '36px', color: '#a855f7', fontWeight: '700', marginBottom: '8px' }}>
            Beziehungs-Kompatibilität
          </h1>
          <p style={{ fontSize: '18px', color: '#888', lineHeight: '1.6' }}>
            Kompatibilitätsanalyse zwischen {coupleData.person1.name} und {coupleData.person2.name}
          </p>
        </div>

        {/* Gesamt-Score */}
        <div className="card" style={{ textAlign: 'center', marginBottom: '40px', background: 'linear-gradient(135deg, #14141f 0%, #1a1a2e 100%)' }}>
          <h2 style={{ fontSize: '28px', color: '#64b5f6', marginBottom: '16px', border: 'none' }}>
            Gesamt-Kompatibilität
          </h2>
          <div style={{ fontSize: '64px', fontWeight: '700', color: getScoreColor(coupleData.overallScore), marginBottom: '16px' }}>
            {coupleData.overallScore}%
          </div>
          <p style={{ fontSize: '20px', color: '#e0e0e0', maxWidth: '600px', margin: '0 auto' }}>
            {getScoreLabel(coupleData.overallScore)} - {coupleData.overallScore >= 80 ? 'Starke harmonische Verbindung mit großem Potenzial' : 
                                                       coupleData.overallScore >= 65 ? 'Gute Grundlage mit Wachstumsmöglichkeiten' :
                                                       coupleData.overallScore >= 50 ? 'Solide Basis, die bewusste Arbeit erfordert' :
                                                       'Herausfordernde, aber lehrreiche Konstellation'}
          </p>
        </div>

        <div style={{ display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          
          {/* Kategorie-Analyse */}
          <div className="card">
            <h3>Kompatibilitäts-Analyse</h3>
            <table style={{ marginTop: '20px' }}>
              <thead>
                <tr><th>Kategorie</th><th>Wert</th><th>Bewertung</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Emotionale Verbindung</td>
                  <td style={{ color: getScoreColor(coupleData.scores.emotional), fontWeight: '600' }}>
                    {coupleData.scores.emotional}%
                  </td>
                  <td>{getScoreLabel(coupleData.scores.emotional)}</td>
                </tr>
                <tr>
                  <td>Kommunikationsstil</td>
                  <td style={{ color: getScoreColor(coupleData.scores.communication), fontWeight: '600' }}>
                    {coupleData.scores.communication}%
                  </td>
                  <td>{getScoreLabel(coupleData.scores.communication)}</td>
                </tr>
                <tr>
                  <td>Lebensziele</td>
                  <td style={{ color: getScoreColor(coupleData.scores.lifeGoals), fontWeight: '600' }}>
                    {coupleData.scores.lifeGoals}%
                  </td>
                  <td>{getScoreLabel(coupleData.scores.lifeGoals)}</td>
                </tr>
                <tr>
                  <td>Energie-Dynamik</td>
                  <td style={{ color: getScoreColor(coupleData.scores.energy), fontWeight: '600' }}>
                    {coupleData.scores.energy}%
                  </td>
                  <td>{getScoreLabel(coupleData.scores.energy)}</td>
                </tr>
                <tr>
                  <td>Spirituelle Verbindung</td>
                  <td style={{ color: getScoreColor(coupleData.scores.spiritual), fontWeight: '600' }}>
                    {coupleData.scores.spiritual}%
                  </td>
                  <td>{getScoreLabel(coupleData.scores.spiritual)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Profile */}
          <div className="card">
            <h3>Profil-Highlights</h3>
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ color: '#a855f7', fontSize: '18px', marginBottom: '12px' }}>
                {coupleData.person1.name}: {coupleData.person1.astrology.sunSign}-Sonne, {coupleData.person1.astrology.moonSign}-Mond
              </h4>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' as const, marginBottom: '16px' }}>
                <div className="badge">{coupleData.person1.humanDesign.type}</div>
                <div className="badge">{coupleData.person1.humanDesign.authority}</div>
                <div className="badge">Profil {coupleData.person1.humanDesign.profile}</div>
                <div className="badge">Lebensweg {coupleData.person1.numerology.lifePath}</div>
              </div>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#888' }}>
                {coupleData.person1.chineseZodiac.element}-{coupleData.person1.chineseZodiac.animal} • {coupleData.person1.astrology.risingSign} Aszendent
              </p>
            </div>
            <div>
              <h4 style={{ color: '#64b5f6', fontSize: '18px', marginBottom: '12px' }}>
                {coupleData.person2.name}: {coupleData.person2.astrology.sunSign}-Sonne, {coupleData.person2.astrology.moonSign}-Mond
              </h4>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' as const, marginBottom: '16px' }}>
                <div className="badge">{coupleData.person2.humanDesign.type}</div>
                <div className="badge">{coupleData.person2.humanDesign.authority}</div>
                <div className="badge">Profil {coupleData.person2.humanDesign.profile}</div>
                <div className="badge">Lebensweg {coupleData.person2.numerology.lifePath}</div>
              </div>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#888' }}>
                {coupleData.person2.chineseZodiac.element}-{coupleData.person2.chineseZodiac.animal} • {coupleData.person2.astrology.risingSign} Aszendent
              </p>
            </div>
          </div>

          {/* Stärken */}
          <div className="card">
            <h3>Beziehungsstärken</h3>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              {coupleData.strengths.map((strength, index) => (
                <li key={index} style={{ 
                  fontSize: '18px', 
                  lineHeight: '1.6', 
                  marginBottom: '16px', 
                  paddingLeft: '24px', 
                  position: 'relative' as const 
                }}>
                  <span style={{ position: 'absolute' as const, left: '0', color: '#64b5f6' }}>✦</span>
                  <span dangerouslySetInnerHTML={{ __html: strength }} />
                </li>
              ))}
            </ul>
          </div>

          {/* Wachstum */}
          <div className="card">
            <h3>Wachstumschancen</h3>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              {coupleData.growthAreas.map((area, index) => (
                <li key={index} style={{ 
                  fontSize: '18px', 
                  lineHeight: '1.6', 
                  marginBottom: '16px', 
                  paddingLeft: '24px', 
                  position: 'relative' as const 
                }}>
                  <span style={{ position: 'absolute' as const, left: '0', color: '#a855f7' }}>→</span>
                  <span dangerouslySetInnerHTML={{ __html: area }} />
                </li>
              ))}
            </ul>
          </div>

          {/* Beratung */}
          <div className="card" style={{ gridColumn: '1 / -1' }}>
            <h3>Beziehungsberatung</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px', marginTop: '20px' }}>
              <div>
                <h4 style={{ color: '#64b5f6', fontSize: '20px', marginBottom: '16px' }}>Tägliche Rituale</h4>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#e0e0e0' }}>
                  {coupleData.advice.dailyRituals.map((ritual, index) => (
                    <li key={index} style={{ marginBottom: '8px' }}>• {ritual}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#64b5f6', fontSize: '20px', marginBottom: '16px' }}>Kommunikations-Tipps</h4>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#e0e0e0' }}>
                  {coupleData.advice.communication.map((tip, index) => (
                    <li key={index} style={{ marginBottom: '8px' }}>• {tip}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#64b5f6', fontSize: '20px', marginBottom: '16px' }}>Langzeit-Vision</h4>
                <ul style={{ fontSize: '16px', lineHeight: '1.6', color: '#e0e0e0' }}>
                  {coupleData.advice.longTerm.map((vision, index) => (
                    <li key={index} style={{ marginBottom: '8px' }}>• {vision}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' as const }}>
          <Link href="/couple" className="btn-primary">Neue Analyse</Link>
          <Link href="/assessment" className="btn-primary" style={{ background: 'transparent', border: '2px solid #a855f7', color: '#a855f7' }}>
            Einzelanalyse
          </Link>
          <Link href="/" className="btn-primary" style={{ background: 'transparent', border: '2px solid #64b5f6', color: '#64b5f6' }}>
            Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}