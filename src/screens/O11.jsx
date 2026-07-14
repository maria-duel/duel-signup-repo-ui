import ambassadorHome from '../assets/images/ambassador-home.png';

export default function O11({ onDone }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#000', overflow: 'hidden' }}>

      {/* App home behind the sheet */}
      <img
        src={ambassadorHome} alt="" draggable={false}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      {/* Dim overlay */}
      <div style={{
        position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)',
        animation: 'fadeIn 300ms ease both',
      }} />

      {/* Bottom sheet */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: '#fff', borderRadius: '24px 24px 0 0',
        padding: '10px 16px 28px',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        animation: 'contentFadeUp 420ms cubic-bezier(0.22,1,0.36,1) 80ms both',
      }}>
        {/* Drag handle */}
        <div style={{ width: 36, height: 4, borderRadius: 100, background: '#D9D9D9' }} />

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 24, marginTop: 22 }}>
          {/* Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <p style={{ fontSize: 20, fontWeight: 700, color: '#000', margin: 0, lineHeight: '27px' }}>
              One last thing
            </p>
            <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.8)', margin: 0, lineHeight: '20px' }}>
              Kick off your journey. Complete your first challenge and start earning points.
            </p>
          </div>

          {/* Featured task card */}
          <div style={{
            background: '#fff', border: '1px solid #ECECEC', borderRadius: 12,
            boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
            padding: 16,
            display: 'flex', flexDirection: 'column', gap: 4,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
              <p style={{ fontSize: 16, fontWeight: 700, color: '#000', margin: 0, lineHeight: '21px' }}>
                Set up your profile
              </p>
              <span style={{
                background: '#F2F2F2', borderRadius: 100, padding: '5px 10px',
                fontSize: 12, fontWeight: 700, color: 'rgba(0,0,0,0.75)', whiteSpace: 'nowrap',
              }}>
                25 pts
              </span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.55)', margin: 0, lineHeight: '18px' }}>
              Now that you know all about us, it's your time to shine! ✨ We want to know more about you.
            </p>
          </div>

          {/* CTA + dismiss */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
            <button
              className="pressable"
              onClick={onDone}
              style={{
                width: '100%', height: 48, borderRadius: 1000, border: 'none',
                background: '#0a0a0a', color: '#fff',
                fontSize: 14, fontWeight: 700, fontFamily: 'inherit',
              }}
            >
              Set up my profile
            </button>
            <button
              onClick={onDone}
              style={{
                background: 'transparent', border: 'none', padding: '4px 0',
                fontSize: 14, color: 'rgba(0,0,0,0.6)', cursor: 'pointer', fontFamily: 'inherit',
                textDecoration: 'underline', textUnderlineOffset: 3,
              }}
            >
              I'll do this later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
