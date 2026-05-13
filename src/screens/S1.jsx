import { C } from '../constants';
import Input from '../components/Input';
import Btn from '../components/Btn';
import Steps from '../components/Steps';
import BackBtn from '../components/BackBtn';
import Footer from '../components/Footer';

export default function S1({ d, set, onNext, onBack }) {
  const ok = d.firstName.trim() && d.lastName.trim() && d.email.includes('@') && d.email.includes('.');
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <BackBtn onClick={onBack} />
      <div style={{ position: 'absolute', top: 84, left: '50%', transform: 'translateX(-50%)' }}>
        <Steps step={1} />
      </div>
      <div style={{ position: 'absolute', top: 192, left: 16, width: 358, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div>
          <p style={{ fontSize: 20, color: C.text, margin: '0 0 4px', lineHeight: '28px' }}>First, tell us who you are</p>
          <p style={{ fontSize: 14, color: C.sub, margin: 0, lineHeight: '18px' }}>Step 1 of 3</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <div style={{ display: 'flex', gap: 8, minWidth: 0 }}>
              <Input placeholder="First Name" value={d.firstName} onChange={v => set(p => ({ ...p, firstName: v }))} />
              <Input placeholder="Last Name"  value={d.lastName}  onChange={v => set(p => ({ ...p, lastName: v }))} />
            </div>
            <p style={{ fontSize: 12, color: C.text, margin: '8px 4px 0', lineHeight: '16px' }}>
              Use your legal name. You can add a preferred name later.
            </p>
          </div>
          <Input placeholder="Email address" type="email" value={d.email} onChange={v => set(p => ({ ...p, email: v }))} />
        </div>
        <Btn label="Continue" enabled={!!ok} onClick={onNext} />
      </div>
      <Footer />
    </div>
  );
}
