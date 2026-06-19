const BackArrow = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M12.5 15L7.5 10L12.5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function BackBtn({ onClick }) {
  return (
    <button
      className="pressable"
      onClick={onClick}
      style={{
        position: 'absolute', top: 32, left: 16,
        width: 36, height: 36, borderRadius: 1000,
        background: 'rgba(255,255,255,0.05)', border: 'none',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 10,
      }}
    >
      <BackArrow />
    </button>
  );
}
