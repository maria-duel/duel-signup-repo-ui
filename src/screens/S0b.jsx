import { useState } from 'react';
import { IMGS } from '../assets/images';
import Btn from '../components/Btn';
import BackBtn from '../components/BackBtn';

const NavTitle = () => (
  <p style={{
    position: 'absolute', top: 40, left: 0, right: 0,
    fontSize: 16, fontWeight: 700, color: '#fff', textAlign: 'center', margin: 0,
  }}>
    NARS Friends With Benefits
  </p>
);

const CRITERIA = [
  'Based in the United Kingdom',
  '18 years or older',
  'Public profile on at least one platform',
];

export default function S0b({ onNext, onBack }) {
  const [declined, setDeclined] = useState(false);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#000', overflow: 'hidden' }}>

      {/* Full-bleed background photo */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 529 }}>
        <img
          src={IMGS.bgEligibility} alt="" draggable={false}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Vignette: dark top, clear mid, dark bottom */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, #000 14%, rgba(0,0,0,0) 45%, #000 85%)',
        }} />
      </div>

      <BackBtn onClick={onBack} />
      <NavTitle />

      {/* Bottom content */}
      <div style={{
        position: 'absolute', bottom: 0, left: 32, width: 326,
        paddingBottom: 24,
        display: 'flex', flexDirection: 'column', gap: 32,
      }}>
        {/* Heading */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <p style={{ fontSize: 24, fontWeight: 700, color: '#fff', margin: 0, lineHeight: '33.6px' }}>
            Before you start
          </p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: '20px' }}>
            You'll need to meet these requirements to join.
          </p>
        </div>

        {/* Criteria */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {CRITERIA.map((label, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <img src={IMGS.check} alt="" style={{ width: 24, height: 24, flexShrink: 0 }} />
              <p style={{ fontSize: 16, color: '#fff', margin: 0, lineHeight: '22px' }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Buttons + disclaimer */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Btn label="I meet all of these" onClick={onNext} />
            {declined ? (
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', textAlign: 'center', margin: 0, lineHeight: '18px' }}>
                No worries — check back when you're ready.
              </p>
            ) : (
              <button
                onClick={() => setDeclined(true)}
                style={{
                  background: 'transparent', border: 'none', padding: '4px 0',
                  fontSize: 14, color: '#fff', cursor: 'pointer',
                  fontFamily: 'inherit', textDecoration: 'underline',
                  textUnderlineOffset: 3,
                }}
              >
                I don't meet these requirements
              </button>
            )}
          </div>

          {/* Disclaimer */}
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.75)', textAlign: 'center', margin: 0, lineHeight: '16px' }}>
            By continuing, I confirm I am 18 or older and accept the{' '}
            <span style={{ textDecoration: 'underline', color: '#fff' }}>Terms of Service</span>{' '}
            and{' '}
            <span style={{ textDecoration: 'underline', color: '#fff' }}>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
