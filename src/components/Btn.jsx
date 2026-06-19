export default function Btn({ label, enabled = true, onClick, outline = false }) {
  return (
    <button
      className="pressable"
      onClick={enabled ? onClick : undefined}
      style={{
        width: '100%', height: 48, borderRadius: 1000, flexShrink: 0,
        border: outline ? '1px solid #fff' : 'none',
        background: outline ? 'transparent' : '#fff',
        color: outline ? '#fff' : '#000',
        opacity: enabled ? 1 : 0.5,
        fontSize: 14, fontWeight: 700, fontFamily: 'inherit',
        transition: 'opacity 220ms ease',
      }}
    >
      {label}
    </button>
  );
}
