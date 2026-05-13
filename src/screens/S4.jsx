import { useState } from 'react';
import { C } from '../constants';
import { IcoMail } from '../components/icons';

export default function S4({ email }) {
  const [sent, setSent] = useState(false);
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '0 32px', textAlign: 'center' }}>
        <div style={{
          width: 44, height: 44, borderRadius: 1000, background: C.stepActive,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: C.sub, marginBottom: 12,
        }}>
          <IcoMail />
        </div>
        <p style={{ fontSize: 20, color: C.text, margin: 0, lineHeight: '28px' }}>Check your inbox</p>
        <p style={{ fontSize: 14, color: C.sub, margin: 0, lineHeight: '20px', maxWidth: 300 }}>
          We've sent a verification link to{' '}
          <strong style={{ color: C.text, fontWeight: 600 }}>{email || 'your email'}</strong>.
          {' '}Tap it to confirm your account.
        </p>
        <p style={{ fontSize: 14, color: C.sub, margin: '8px 0 0', lineHeight: '20px', maxWidth: 300 }}>
          Didn't get the email? Check your spam folder, or resend the email.
        </p>
        <button
          className="pressable"
          style={{
            background: 'transparent', border: 'none', padding: '4px 0', marginTop: 4,
            fontSize: 14, fontWeight: 700, color: C.sub,
            textDecoration: 'underline', cursor: 'pointer', fontFamily: 'inherit',
          }}
          onClick={() => { setSent(true); setTimeout(() => setSent(false), 3000); }}
        >
          {sent ? 'Email sent!' : 'Resend email'}
        </button>
      </div>
    </div>
  );
}
