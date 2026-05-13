import { C } from '../constants';
import { IcoCheck } from '../components/icons';
import Btn from '../components/Btn';

export default function S4b({ onNext }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '0 32px', textAlign: 'center', width: '100%' }}>
        <div style={{
          width: 44, height: 44, borderRadius: 1000, background: C.stepActive,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: C.sub, marginBottom: 12,
        }}>
          <IcoCheck />
        </div>
        <p style={{ fontSize: 20, color: C.text, margin: 0, lineHeight: '28px' }}>Verify your application</p>
        <p style={{ fontSize: 14, color: C.sub, margin: 0, lineHeight: '20px', maxWidth: 300 }}>
          Click the link in your email to verify your address and confirm your application.
        </p>
        <div style={{ width: '100%', marginTop: 16 }}>
          <Btn label="I've verified my email" onClick={onNext} />
        </div>
      </div>
    </div>
  );
}
