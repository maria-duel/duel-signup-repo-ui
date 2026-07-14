import { useState } from 'react';
import OnbScreen from '../components/OnbScreen';

export default function O10({ onNext, onBack }) {
  const [agreed, setAgreed] = useState(false);

  return (
    <OnbScreen
      title="One last thing"
      description="Review and agree to the essentials before you join. We'll only send marketing emails if you opt in."
      onBack={onBack}
      onCta={onNext}
    >
      <div
        onClick={() => setAgreed(a => !a)}
        style={{
          display: 'flex', gap: 14, alignItems: 'center',
          padding: '20px 16px', borderRadius: 4, cursor: 'pointer',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.4)',
        }}
      >
        <div style={{
          width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
          border: `1.5px solid ${agreed ? '#fff' : 'rgba(255,255,255,0.5)'}`,
          background: agreed ? '#fff' : 'transparent',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 150ms ease, border-color 150ms ease',
        }}>
          {agreed && (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 6.5l2.5 2.5 4.5-5.5" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
        <p style={{ fontSize: 15, color: '#fff', margin: 0, lineHeight: '24px' }}>
          I agree to receive marketing communications for NARS Friends with Benefits
        </p>
      </div>
    </OnbScreen>
  );
}
