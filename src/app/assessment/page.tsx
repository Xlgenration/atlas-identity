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

  const startAnalysis = () => {
    if (!isFormValid()) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      const profileId = generateProfileId();
      router.push(`/profile/${profileId}`);
    }, 3000);
  };

  const generateProfileId = (): string => {
    const namePart = data.name.toLowerCase().replace(/\s+/g, '');
    const datePart = data.birthDate.replace(/[^0-9]/g, '');
    const randomPart = Math.random().toString(36).substr(2, 5);
    return `${namePart}-${datePart}-${randomPart}`;
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
          <h2 style={{
            fontSize: '28px',
            color: '#333',
            fontWeight: '600',
            marginBottom: '16px'
          }}>
            Creating Your Identity Blueprint
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#666',
            lineHeight: '1.6'
          }}>
            Analyzing your birth data and generating comprehensive insights...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="light-theme" style={{ minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Link 
            href="/" 
            style={{
              color: '#666',
              textDecoration: 'none',
              fontSize: '16px',
              display: 'inline-block',
              marginBottom: '32px'
            }}
          >
            ← Back to Home
          </Link>
          
          <h1 style={{
            fontSize: '36px',
            color: '#333',
            fontWeight: '700',
            marginBottom: '16px'
          }}>
            Your Identity Blueprint
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            lineHeight: '1.6',
            maxWidth: '400px',
            margin: '0 auto'
          }}>
            Enter your birth details to generate your personalized analysis
          </p>
        </div>

        {/* Clean Form */}
        <div className="card" style={{
          background: 'white',
          border: '1px solid #e0e0e0',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          marginBottom: '40px'
        }}>
          
          {/* Name Field */}
          <div style={{ marginBottom: '24px' }}>
            <label className="form-label">Name</label>
            <input
              type="text"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="form-input"
              placeholder="Enter your full name"
              autoFocus
            />
          </div>

          {/* Birth Date and Time */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '20px',
            marginBottom: '24px'
          }}>
            <div>
              <label className="form-label">Birth Date</label>
              <input
                type="date"
                value={data.birthDate}
                onChange={(e) => setData({ ...data, birthDate: e.target.value })}
                className="form-input"
              />
            </div>
            <div>
              <label className="form-label">Birth Time</label>
              <input
                type="time"
                value={data.birthTime}
                onChange={(e) => setData({ ...data, birthTime: e.target.value })}
                className="form-input"
              />
            </div>
          </div>

          {/* Birth Place */}
          <div style={{ marginBottom: '32px' }}>
            <label className="form-label">Birth Place</label>
            <input
              type="text"
              value={data.birthPlace}
              onChange={(e) => setData({ ...data, birthPlace: e.target.value })}
              className="form-input"
              placeholder="City, Country"
            />
            <p style={{
              fontSize: '14px',
              color: '#888',
              marginTop: '6px'
            }}>
              Enter the city where you were born
            </p>
          </div>

          {/* Submit Button */}
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
            Generate My Analysis
          </button>
          
          {!isFormValid() && (
            <p style={{
              fontSize: '14px',
              color: '#888',
              textAlign: 'center',
              marginTop: '12px'
            }}>
              Please fill in all fields to continue
            </p>
          )}

        </div>

        {/* Info Section */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            fontSize: '14px',
            color: '#888'
          }}>
            <span>🔒 Your data is private</span>
            <span>⚡ Results in seconds</span>
            <span>✨ Detailed insights</span>
          </div>
        </div>

      </div>
    </div>
  );
}

<style jsx global>{`
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`}</style>