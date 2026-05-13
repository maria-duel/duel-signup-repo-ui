import { C } from '../constants';

export default function Btn({ label, enabled = true, onClick, outline = false }) {
  return (
    <button
      className="pressable"
      onClick={enabled ? onClick : undefined}
      style={{
        width: '100%', height: 48, borderRadius: 12, flexShrink: 0,
        border: outline ? `1px solid ${C.border}` : 'none',
        background: outline ? 'transparent' : (enabled ? '#101010' : 'rgba(66,66,66,0.1)'),
        color: outline ? C.text : (enabled ? '#fff' : C.muted),
        fontSize: 14, fontWeight: 700, fontFamily: 'inherit',
        cursor: enabled ? 'pointer' : 'default',
        transition: 'background 220ms ease, color 220ms ease',
      }}
    >
      {label}
    </button>
  );
}
