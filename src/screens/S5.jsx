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
          You're in the queue!
        </p>

        {/* Body */}
        <p style={{
          fontSize: 15, color: 'rgba(255,255,255,0.65)', margin: 0, lineHeight: '22px', maxWidth: 272,
          animation: 's5FadeUp 0.5s ease 0.38s both',
        }}>
          We're reviewing your application and will be in touch within 3–5 business days. Keep an eye on your inbox.
        </p>
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
