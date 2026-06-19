export default function Footer() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
      {['Terms', 'Privacy Policy'].map(t => (
        <span key={t} style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', textDecoration: 'underline', cursor: 'pointer' }}>{t}</span>
      ))}
    </div>
  );
}
