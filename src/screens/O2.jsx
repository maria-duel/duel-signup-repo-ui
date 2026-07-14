import { useEffect } from 'react';

export default function O2({ onNext }) {
  useEffect(() => {
    const t = setTimeout(onNext, 2200);
    return () => clearTimeout(t);
  }, [onNext]);

  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%', background: '#000',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
        padding: '0 16px', width: '100%', textAlign: 'center',
      }}>
        <div style={{
          width: 80, height: 80, borderRadius: '50%',
          background: 'rgba(255,255,255,0.12)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: 's5PopIn 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, s5RingPulse 1.6s ease-out 0.55s infinite',
        }}>
          <span style={{ fontSize: 36, lineHeight: 1, userSelect: 'none' }}>🎉</span>
        </div>
        <p style={{
          fontSize: 24, fontWeight: 700, color: '#fff', margin: 0, lineHeight: '33.6px',
          animation: 's5FadeUp 0.5s ease 0.25s both',
        }}>
          Great news: you're in!
        </p>
        <p style={{
          fontSize: 14, color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: '20px',
          animation: 's5FadeUp 0.5s ease 0.38s both',
        }}>
          1111 members are already here waiting for you
        </p>
      </div>
    </div>
  );
}
