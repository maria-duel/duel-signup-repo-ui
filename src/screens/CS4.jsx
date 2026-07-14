const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="10" cy="10" r="7.5" stroke="#3d9e5f" strokeWidth="1.5" />
    <path d="M6.8 10.2l2.2 2.2 4-4.6" stroke="#3d9e5f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ActiveIcon = () => (
  <div style={{
    width: 20, height: 20, flexShrink: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  }}>
    <div style={{
      width: 16, height: 16, borderRadius: '50%',
      border: '2px solid #fff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      animation: 's5RingPulse 1.8s ease-out infinite',
    }}>
      <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#fff' }} />
    </div>
  </div>
);

const PendingIcon = () => (
  <div style={{
    width: 20, height: 20, flexShrink: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  }}>
    <div style={{
      width: 16, height: 16, borderRadius: '50%',
      border: '1.5px dotted rgba(255,255,255,0.4)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.4)' }} />
    </div>
  </div>
);

const STEPS = [
  {
    icon: <CheckIcon />,
    title: 'Application received',
    titleColor: '#fff',
    sub: 'Sunday 5 July',
    subColor: 'rgba(255,255,255,0.6)',
  },
  {
    icon: <ActiveIcon />,
    title: 'In review',
    titleColor: '#fff',
    sub: 'We check every application against the same requirements.',
    subColor: 'rgba(255,255,255,0.6)',
  },
  {
    icon: <PendingIcon />,
    title: 'Decision',
    titleColor: 'rgba(255,255,255,0.5)',
    sub: 'By Wednesday 8 July',
    subColor: 'rgba(255,255,255,0.4)',
  },
];

export default function CS4({ onLogout }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#000', overflow: 'hidden' }}>

      {/* Header title */}
      <p style={{
        position: 'absolute', top: 40, left: 0, right: 0,
        fontSize: 16, fontWeight: 700, color: '#fff', textAlign: 'center', margin: 0,
      }}>
        NARS Friends With Benefits
      </p>

      {/* Main content */}
      <div style={{
        position: 'absolute', top: 180, left: 0, right: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        {/* Stopwatch icon */}
        <div style={{
          width: 80, height: 80, borderRadius: '50%',
          background: 'rgba(255,255,255,0.12)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: 's5PopIn 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        }}>
          <span style={{ fontSize: 36, lineHeight: 1, userSelect: 'none' }}>⏱️</span>
        </div>

        {/* Heading */}
        <p style={{
          fontSize: 24, fontWeight: 700, color: '#fff', margin: '20px 0 0',
          lineHeight: '33.6px', textAlign: 'center',
          animation: 's5FadeUp 0.5s ease 0.2s both',
        }}>
          Your application is in review
        </p>

        {/* Status card */}
        <div style={{
          width: 326, marginTop: 20,
          background: '#161616', borderRadius: 20,
          padding: 24,
          display: 'flex', flexDirection: 'column', gap: 20,
          animation: 's5FadeUp 0.5s ease 0.32s both',
        }}>
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', margin: 0,
          }}>
            Application status
          </p>

          {STEPS.map((step) => (
            <div key={step.title} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              {step.icon}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
                <p style={{ fontSize: 15, fontWeight: 700, color: step.titleColor, margin: 0, lineHeight: '20px' }}>
                  {step.title}
                </p>
                <p style={{ fontSize: 13, color: step.subColor, margin: 0, lineHeight: '19px' }}>
                  {step.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Email note */}
        <div style={{
          width: 326, marginTop: 20,
          display: 'flex', gap: 8, alignItems: 'flex-start',
          animation: 's5FadeUp 0.5s ease 0.44s both',
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
            <rect x="1.5" y="3" width="13" height="10" rx="1.5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" />
            <path d="M2 4l6 5 6-5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinejoin="round" />
          </svg>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: '19px' }}>
            We'll email you the decision, nothing you need to do.
          </p>
        </div>
      </div>

      {/* Log out */}
      <button
        onClick={onLogout}
        style={{
          position: 'absolute', bottom: 38, left: 0, right: 0,
          background: 'transparent', border: 'none',
          fontSize: 14, color: '#fff', fontFamily: 'inherit', cursor: 'pointer',
          textDecoration: 'underline', textUnderlineOffset: 3,
        }}
      >
        Log out
      </button>
    </div>
  );
}
