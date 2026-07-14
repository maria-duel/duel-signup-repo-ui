import { useState, useEffect } from 'react';

const CONFETTI_COLORS = ['#ffffff', '#e8c46a', '#7fb98a', '#d98fa5', 'rgba(255,255,255,0.6)'];

// Deterministic pseudo-random confetti particles (stable across renders)
const PARTICLES = Array.from({ length: 24 }, (_, i) => {
  const h = (i * 2654435761) % 1000;
  return {
    left: (h % 100),
    delay: (h % 700),
    duration: 1800 + (h % 900),
    size: 5 + (h % 5),
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    drift: ((h % 80) - 40),
  };
});

export default function O10b({ onNext }) {
  const [pts, setPts] = useState(0);

  useEffect(() => {
    const t = setTimeout(onNext, 2600);
    return () => clearTimeout(t);
  }, [onNext]);

  useEffect(() => {
    if (pts >= 25) return;
    const t = setTimeout(() => setPts(p => Math.min(p + 1, 25)), 40);
    return () => clearTimeout(t);
  }, [pts]);

  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%', background: '#000',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Confetti */}
      {PARTICLES.map((c, i) => (
        <div
          key={i}
          style={{
            position: 'absolute', top: -12, left: `${c.left}%`,
            width: c.size, height: c.size * 1.6, borderRadius: 1,
            background: c.color,
            '--drift': `${c.drift}px`,
            animation: `confettiFall ${c.duration}ms cubic-bezier(0.3,0,0.8,1) ${c.delay}ms both`,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Centered content */}
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
          fontSize: 36, fontWeight: 700, color: '#fff', margin: 0, lineHeight: '44px',
          animation: 's5FadeUp 0.5s ease 0.25s both',
          fontVariantNumeric: 'tabular-nums',
        }}>
          +{pts} pts
        </p>
        <p style={{
          fontSize: 14, color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: '20px',
          animation: 's5FadeUp 0.5s ease 0.38s both',
        }}>
          You've earned your first points for joining.
        </p>
      </div>
    </div>
  );
}
