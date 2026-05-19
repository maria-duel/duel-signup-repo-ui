import { C } from '../constants';
import { IcoGoogle, IcoTikTok, IcoMeta } from '../components/icons';
import Input from '../components/Input';
import Btn from '../components/Btn';
import BackBtn from '../components/BackBtn';
import Footer from '../components/Footer';

const SSO_OPTIONS = [
  { label: 'Continue with Google', Ico: IcoGoogle },
  { label: 'Continue with TikTok', Ico: IcoTikTok },
  { label: 'Continue with Meta',   Ico: IcoMeta   },
];

export default function S1({ d, set, onNext, onBack }) {
  const emailOk = d.email.includes('@') && d.email.includes('.');

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <BackBtn onClick={onBack} />

      <div style={{ position: 'absolute', top: 140, left: 16, width: 358, display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div>
          <p style={{ fontSize: 20, color: C.text, margin: '0 0 4px', lineHeight: '28px' }}>Create your account</p>
          <p style={{ fontSize: 14, color: C.sub, margin: 0, lineHeight: '20px' }}>Choose how you'd like to sign up. Takes about 2 minutes.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {SSO_OPTIONS.map(({ label, Ico }) => (
            <button
              key={label}
              className="pressable"
              onClick={onNext}
              style={{
                width: '100%', height: 48, borderRadius: 12,
                border: `1px solid ${C.border}`,
                background: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                cursor: 'pointer', fontFamily: 'inherit',
                fontSize: 14, fontWeight: 600, color: C.text,
              }}
            >
              <Ico />
              {label}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ flex: 1, height: 1, background: C.border }} />
          <span style={{ fontSize: 13, color: C.muted }}>or</span>
          <div style={{ flex: 1, height: 1, background: C.border }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Input
            placeholder="Email address"
            type="email"
            value={d.email}
            onChange={v => set(p => ({ ...p, email: v }))}
          />
          <Btn label="Continue with email" enabled={emailOk} onClick={onNext} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
