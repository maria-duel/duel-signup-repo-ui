const NavTitle = () => (
  <p style={{
    position: 'absolute', top: 40, left: 0, right: 0,
    fontSize: 16, fontWeight: 700, color: '#fff', textAlign: 'center', margin: 0,
  }}>
    NARS Friends With Benefits
  </p>
);

export default function S5({ onHome }) {
  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%', background: '#000',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <NavTitle />

      {/* Centered content */}
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: 20, padding: '0 32px', textAlign: 'center',
      }}>
        {/* Animated icon */}
        <div style={{
          width: 80, height: 80, borderRadius: '50%',
          background: 'rgba(255,255,255,0.12)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 4,
          animation: 's5PopIn 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, s5RingPulse 1.6s ease-out 0.55s infinite',
        }}>
          <span style={{ fontSize: 36, lineHeight: 1, userSelect: 'none' }}>🎉</span>
        </div>

        {/* Heading */}
        <p style={{
          fontSize: 24, fontWeight: 700, color: '#fff', margin: 0, lineHeight: '33.6px',
          animation: 's5FadeUp 0.5s ease 0.25s both',
        }}>
          Now it's our turn.
        </p>

        {/* Body */}
        <p style={{
          fontSize: 15, color: 'rgba(255,255,255,0.65)', margin: 0, lineHeight: '22px', maxWidth: 272,
          animation: 's5FadeUp 0.5s ease 0.38s both',
        }}>
          The NARS team will review your application and be in touch by email, usually within 1–3 days.
        </p>

        {/* Teaser */}
        <div style={{
          marginTop: 8, padding: '16px 20px', borderRadius: 14,
          background: 'rgba(255,255,255,0.07)',
          display: 'flex', flexDirection: 'column', gap: 10, textAlign: 'left', maxWidth: 300,
          animation: 's5FadeUp 0.5s ease 0.5s both',
        }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.45)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            If you're accepted, here's what happens next:
          </p>
          {[
            'Get a welcome email from NARS Friends with Benefits',
            'Build your creator profile',
            'Complete your first challenge',
          ].map((step, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontWeight: 600, flexShrink: 0, marginTop: 1 }}>
                {i < 2 ? '→' : '✦'}
              </span>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: '18px' }}>{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Back to homepage */}
      <button
        onClick={onHome}
        style={{
          position: 'absolute', bottom: 40,
          background: 'transparent', border: 'none', cursor: 'pointer',
          fontSize: 13, color: 'rgba(255,255,255,0.4)', fontFamily: 'inherit',
          textDecoration: 'underline', textUnderlineOffset: 3,
          animation: 's5FadeUp 0.5s ease 0.55s both',
        }}
      >
        Back to homepage
      </button>
    </div>
  );
}
