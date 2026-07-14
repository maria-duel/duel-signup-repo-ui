import { useState } from 'react';
import OnbScreen from '../components/OnbScreen';

const EyeIcon = ({ off }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M2 10s3-5.5 8-5.5S18 10 18 10s-3 5.5-8 5.5S2 10 2 10z" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" strokeLinejoin="round" />
    <circle cx="10" cy="10" r="2.5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" />
    {off && <path d="M4 16L16 4" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" strokeLinecap="round" />}
  </svg>
);

export default function O3({ d, set, onNext, onBack }) {
  const [focused, setFocused] = useState(false);
  const [show, setShow] = useState(false);
  const ok = d.password.length >= 7;

  return (
    <OnbScreen
      title="One last step to activate your account"
      description="Define your password. It must have at least 7 characters."
      onBack={onBack}
      cta="Activate my account"
      ctaEnabled={ok}
      onCta={onNext}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.9)', lineHeight: '20px', padding: '2px 0' }}>
          Password
        </span>
        <div style={{
          display: 'flex', alignItems: 'center', height: 48, padding: '0 17px',
          borderRadius: 4, gap: 8,
          background: 'rgba(255,255,255,0.1)',
          border: `1px solid ${focused ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.4)'}`,
          transition: 'border-color 150ms',
        }}>
          <input
            type={show ? 'text' : 'password'}
            value={d.password}
            onChange={e => set(f => ({ ...f, password: e.target.value }))}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Type a password"
            style={{
              flex: 1, border: 'none', outline: 'none', background: 'transparent',
              fontSize: 14, color: '#fff', lineHeight: '18px', fontFamily: 'inherit',
            }}
          />
          <button
            onClick={() => setShow(s => !s)}
            style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', display: 'flex' }}
          >
            <EyeIcon off={show} />
          </button>
        </div>
      </div>
    </OnbScreen>
  );
}
