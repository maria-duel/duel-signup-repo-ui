import { useState } from 'react';
import { C } from '../constants';
import Btn from '../components/Btn';
import BackBtn from '../components/BackBtn';

const IcoCheck = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" flexShrink="0">
    <circle cx="11" cy="11" r="11" fill="#101010" />
    <path d="M6 11l3.5 3.5L16 8" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CRITERIA = [
  ['Based in the United States',                         null],
  ['18 years or older',                                  null],
  ['Public profile on at least one platform',            null],
];

export default function S0b({ onNext, onBack }) {
  const [declined, setDeclined] = useState(false);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <BackBtn onClick={onBack} />

      <div style={{
        position: 'absolute', top: 140, left: 16, width: 358,
        display: 'flex', flexDirection: 'column', gap: 24,
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <p style={{ fontSize: 20, color: C.text, margin: 0, lineHeight: '28px' }}>
            Before you start
          </p>
          <p style={{ fontSize: 14, color: C.sub, margin: 0, lineHeight: '20px' }}>
            You'll need to meet these requirements to join.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {CRITERIA.map(([label], i) => (
            <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <div style={{ flexShrink: 0 }}>
                <IcoCheck />
              </div>
              <p style={{ fontSize: 15, color: C.text, margin: 0, lineHeight: '22px' }}>
                {label}
              </p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Btn label="I meet all of these" onClick={onNext} />

          {declined ? (
            <p style={{
              fontSize: 13, color: C.sub, textAlign: 'center',
              margin: 0, lineHeight: '18px',
            }}>
              No worries — check back when you're ready.
            </p>
          ) : (
            <button
              onClick={() => setDeclined(true)}
              style={{
                background: 'transparent', border: 'none', padding: '4px 0',
                fontSize: 14, color: C.muted, cursor: 'pointer',
                fontFamily: 'inherit', textDecoration: 'underline',
                textUnderlineOffset: 3,
              }}
            >
              I don't meet these requirements
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
