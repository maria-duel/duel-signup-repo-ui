import { C } from '../constants';
import Btn from '../components/Btn';

export default function S0({ onNext }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div style={{
        position: 'absolute', top: 85, left: 136, width: 120, height: 60,
        borderRadius: 4, background: 'rgba(32,41,57,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: 'rgba(0,0,0,0.25)' }}>Logo Area</span>
      </div>

      <div style={{ position: 'absolute', top: 192, left: 16, width: 358, display: 'flex', flexDirection: 'column', gap: 24 }}>
        <p style={{ fontSize: 20, textAlign: 'center', lineHeight: '28px', color: C.text, margin: 0 }}>
          Start earning as a creator
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            ['Earn points and commission', 'Complete brand challenges to get rewarded'],
            ['Make money from every sale',  'Share your unique link with your audience'],
            ['Refer friends, earn more',    'Get rewarded every time you bring someone new'],
          ].map(([h, b], i) => (
            <div key={i} style={{ border: `1px solid ${C.border}`, borderRadius: 4, padding: '12px 16px' }}>
              <p style={{ fontSize: 16, color: C.text, margin: '0 0 2px', lineHeight: '20px' }}>{h}</p>
              <p style={{ fontSize: 14, color: C.sub,  margin: 0,         lineHeight: '18px' }}>{b}</p>
            </div>
          ))}
        </div>
        <Btn label="Start your application" outline onClick={onNext} />
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, paddingBottom: 24,
        paddingInline: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 10, color: C.sub, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 2 }}>Powered by</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: C.text }}>duel.</div>
        </div>
        <p style={{ fontSize: 12, color: C.sub, textAlign: 'center', margin: 0, lineHeight: '16px' }}>
          By continuing, I confirm I am 18 or older and accept the{' '}
          <span style={{ textDecoration: 'underline' }}>Terms</span> and{' '}
          <span style={{ textDecoration: 'underline' }}>Privacy Policy.</span>
        </p>
      </div>
    </div>
  );
}
