export default function SelectCard({ label, selected, onClick }) {
  return (
    <button
      className="pressable"
      onClick={onClick}
      style={{
        width: '100%', minHeight: 48, borderRadius: 4,
        padding: '13px 16px', textAlign: 'left',
        background: selected ? '#fff' : 'rgba(255,255,255,0.06)',
        border: `1px solid ${selected ? '#fff' : 'rgba(255,255,255,0.4)'}`,
        fontSize: 15, fontWeight: 400, lineHeight: '22px',
        color: selected ? '#000' : '#fff',
        fontFamily: 'inherit', cursor: 'pointer',
        transition: 'background 150ms ease, color 150ms ease, border-color 150ms ease',
      }}
    >
      {label}
    </button>
  );
}
