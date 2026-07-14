// Journey progress bar shown in the top nav row of step screens,
// to the right of the back button (per Figma node 168-343).
export default function JourneyProgress({ pct }) {
  return (
    <div style={{
      position: 'absolute', top: 47, left: '50%', transform: 'translateX(-50%)',
      width: 200, height: 6,
      borderRadius: 100, background: 'rgba(255,255,255,0.2)',
      zIndex: 50, pointerEvents: 'none', overflow: 'hidden',
    }}>
      <div style={{
        width: `${Math.round(pct * 100)}%`, height: '100%',
        borderRadius: 100, background: '#fff',
        transition: 'width 450ms cubic-bezier(0.22,1,0.36,1)',
      }} />
    </div>
  );
}
