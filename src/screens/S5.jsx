import { C } from '../constants';
import { IcoParty } from '../components/icons';

export default function S5() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '0 32px', textAlign: 'center' }}>
        <div style={{
          width: 44, height: 44, borderRadius: 1000, background: C.stepActive,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: C.sub, marginBottom: 12,
        }}>
          <IcoParty />
        </div>
        <p style={{ fontSize: 20, color: C.text, margin: 0, lineHeight: '28px' }}>You're in the queue!</p>
        <p style={{ fontSize: 14, color: C.sub, margin: 0, lineHeight: '20px', maxWidth: 280 }}>
          We're reviewing your application and will be in touch within 3–5 business days. Keep an eye on your inbox.
        </p>
      </div>
    </div>
  );
}
