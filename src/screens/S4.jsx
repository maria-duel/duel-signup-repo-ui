import { useState, useEffect } from 'react';

export default function S4({ email, onNext }) {
  const [seconds, setSeconds] = useState(29);

  useEffect(() => {
    if (seconds <= 0) return;
    const t = setInterval(() => setSeconds(s => s - 1), 1000);
    return () => clearInterval(t);
  }, [seconds]);

  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%', background: '#000',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    }}>
      {/* Centered content */}
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
        padding: '0 32px', width: '100%', textAlign: 'center',
      }}>
        {/* Animated mail icon */}
        <div style={{
          width: 80, height: 80, borderRadius: '50%',
          background: 'rgba(255,255,255,0.12)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 4,
          animation: 's5PopIn 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, s5RingPulse 1.6s ease-out 0.55s infinite',
        }}>
          <span style={{ fontSize: 36, lineHeight: 1, userSelect: 'none' }}>✉️</span>
        </div>

        {/* Heading */}
        <p style={{
          fontSize: 24, fontWeight: 700, color: '#fff', margin: 0, lineHeight: '33.6px',
          animation: 's5FadeUp 0.5s ease 0.25s both',
        }}>
          You're almost there
        </p>

        {/* Body */}
        <div style={{
          display: 'flex', flexDirection: 'column', gap: 8,
          animation: 's5FadeUp 0.5s ease 0.38s both',
        }}>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: '22px' }}>
            We've sent a verification link to{' '}
            <strong style={{ color: '#fff', fontWeight: 700 }}>{email || 'your email'}</strong>
          </p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: '20px' }}>
            Can't find it? Check your spam folder.
          </p>
        </div>

        {/* Open email app link */}
        <button
          onClick={onNext}
          style={{
            background: 'transparent', border: 'none', padding: '4px 0',
            fontSize: 15, fontWeight: 700, color: '#fff',
            fontFamily: 'inherit', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 6,
            marginTop: 8,
            animation: 's5FadeUp 0.5s ease 0.48s both',
          }}
        >
          Open email app
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2.5 11.5l9-9M11.5 2.5H5M11.5 2.5V9" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Bottom: Resend button */}
      <div style={{
        position: 'absolute', bottom: 32, left: 32, width: 326,
        animation: 's5FadeUp 0.5s ease 0.55s both',
      }}>
        <button
          disabled={seconds > 0}
          onClick={() => setSeconds(29)}
          style={{
            width: '100%', height: 48, borderRadius: 1000,
            border: '1px solid #fff', background: 'transparent',
            fontSize: 14, fontWeight: 700, color: '#fff',
            fontFamily: 'inherit',
            opacity: seconds > 0 ? 0.5 : 1,
            cursor: seconds > 0 ? 'default' : 'pointer',
            transition: 'opacity 300ms',
          }}
        >
          {seconds > 0 ? (
            <>Resend email (<span key={seconds} style={{ display: 'inline-block', animation: 'timerTick 300ms ease' }}>{seconds}s</span>)</>
          ) : 'Resend email'}
        </button>
      </div>
    </div>
  );
}
