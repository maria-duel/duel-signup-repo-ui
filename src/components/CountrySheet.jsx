// Dark bottom sheet raised when the selected country conflicts with the
// programme's market. Two states: redirect to a sibling programme, or
// graceful "this programme is UK-only" with a notify option.
export default function CountrySheet({ title, body, cta, ctaDone, done, onCta, onDismiss, dismissLabel }) {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 100 }}>
      {/* Dim overlay */}
      <div
        onClick={onDismiss}
        style={{
          position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)',
          animation: 'fadeIn 250ms ease both',
        }}
      />

      {/* Sheet */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: '#161616', borderRadius: '24px 24px 0 0',
        padding: '10px 24px 32px',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        animation: 'contentFadeUp 380ms cubic-bezier(0.22,1,0.36,1) 60ms both',
      }}>
        {/* Drag handle */}
        <div style={{ width: 36, height: 4, borderRadius: 100, background: 'rgba(255,255,255,0.25)' }} />

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 24, marginTop: 22 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <p style={{ fontSize: 20, fontWeight: 700, color: '#fff', margin: 0, lineHeight: '27px' }}>
              {title}
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: '20px' }}>
              {body}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
            <button
              className={done ? undefined : 'pressable'}
              onClick={done ? undefined : onCta}
              style={{
                width: '100%', height: 48, borderRadius: 1000, border: 'none',
                background: done ? 'rgba(255,255,255,0.12)' : '#fff',
                color: done ? '#fff' : '#000',
                fontSize: 14, fontWeight: 700, fontFamily: 'inherit',
                cursor: done ? 'default' : 'pointer',
                transition: 'background 250ms ease, color 250ms ease',
              }}
            >
              {done ? ctaDone : cta}
            </button>
            <button
              onClick={onDismiss}
              style={{
                background: 'transparent', border: 'none', padding: '4px 0',
                fontSize: 14, color: 'rgba(255,255,255,0.7)', cursor: 'pointer', fontFamily: 'inherit',
                textDecoration: 'underline', textUnderlineOffset: 3,
              }}
            >
              {dismissLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
