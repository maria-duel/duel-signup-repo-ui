import { C } from '../constants';

export default function Footer() {
  return (
    <div style={{ position: 'absolute', bottom: 12, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 8 }}>
      {['Terms', 'Privacy Policy'].map(t => (
        <span key={t} style={{ fontSize: 12, color: C.sub, textDecoration: 'underline', cursor: 'pointer' }}>{t}</span>
      ))}
    </div>
  );
}
