import { useState } from 'react';
import narsLogo from '../assets/icons/nars-logo.svg';
import streetPortrait from '../assets/images/street-portrait.jpeg';

export default function CS1({ email, setEmail, onNext }) {
  const [focused, setFocused] = useState(false);
  const emailOk = email.includes('@') && email.includes('.');

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#000', overflow: 'hidden' }}>

      {/* Full-bleed background photo */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 529 }}>
        <img
          src={streetPortrait} alt="" draggable={false}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Vignette: dark top, clear mid, dark bottom */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, #000 14%, rgba(0,0,0,0) 45%, #000 85%)',
        }} />
      </div>

      {/* NARS logo + tagline */}
      <div style={{
        position: 'absolute', top: 53, left: 0, right: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
      }}>
        <img src={narsLogo} alt="NARS" style={{ height: 35, width: 84, objectFit: 'contain' }} />
        <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: 0 }}>
          Friends With Benefits
        </p>
      </div>

      {/* Bottom content */}
      <div style={{
        position: 'absolute', bottom: 0, left: 16, width: 358,
        paddingBottom: 32,
        display: 'flex', flexDirection: 'column', gap: 24,
        animation: 'contentFadeUp 420ms cubic-bezier(0.22,1,0.36,1) both',
      }}>
        {/* Heading */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, textAlign: 'center' }}>
          <p style={{ fontSize: 24, fontWeight: 700, color: '#fff', margin: 0, lineHeight: '33.6px' }}>
            Check your application status
          </p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: '20px' }}>
            Enter your email to receive a magic link to check your application status.
          </p>
        </div>

        {/* Email + Continue */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{
            display: 'flex', alignItems: 'center', height: 48, padding: '0 17px',
            borderRadius: 4,
            background: 'rgba(255,255,255,0.1)',
            border: `1px solid ${focused ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.4)'}`,
            transition: 'border-color 150ms',
          }}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Email address"
              style={{
                flex: 1, border: 'none', outline: 'none', background: 'transparent',
                fontSize: 14, color: '#fff', lineHeight: '18px', fontFamily: 'inherit',
              }}
            />
          </div>
          <button
            className={emailOk ? 'pressable' : undefined}
            onClick={emailOk ? onNext : undefined}
            style={{
              width: '100%', height: 48, borderRadius: 1000, border: 'none',
              background: emailOk ? '#fff' : 'rgba(255,255,255,0.12)',
              color: emailOk ? '#000' : 'rgba(255,255,255,0.4)',
              fontSize: 14, fontWeight: 700, fontFamily: 'inherit',
              cursor: emailOk ? 'pointer' : 'default',
              transition: 'background 220ms ease, color 220ms ease',
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
