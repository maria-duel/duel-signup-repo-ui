import { C } from '../constants';
import Btn from '../components/Btn';
import duelLogo from '../assets/duel-logo.svg';

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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <p style={{ fontSize: 20, fontWeight: 700, textAlign: 'center', lineHeight: '28px', color: C.text, margin: 0 }}>
            Share what you love. Get rewarded.
          </p>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: C.stepIdle, borderRadius: 100, padding: '4px 12px',
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#3d9e5f', flexShrink: 0 }} />
            <span style={{ fontSize: 12, color: C.sub, lineHeight: '16px' }}>
              Join 12,000+ creators who love this brand
            </span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            ['Do what you already do',   'Create content around brands you love and get recognised.'],
            ['Get seen by the brand',    'Your content noticed, shared, and celebrated by your audience and the brand.'],
            ['Earn as you create',       'Points, commissions, and gift cards. Rewards that grow the more you share.'],
          ].map(([h, b], i) => (
            <div key={i} style={{ border: `1px solid ${C.border}`, borderRadius: 4, padding: '12px 16px', display: 'flex', gap: 12, alignItems: 'center' }}>
              <div style={{ width: 44, height: 44, borderRadius: 1000, background: C.stepIdle, flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: 16, color: C.text, margin: '0 0 2px', lineHeight: '20px' }}>{h}</p>
                <p style={{ fontSize: 14, color: C.sub,  margin: 0,         lineHeight: '18px' }}>{b}</p>
              </div>
            </div>
          ))}
        </div>
        <Btn label="Apply now" onClick={onNext} />
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, paddingBottom: 24,
        paddingInline: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <div style={{ fontSize: 10, color: C.sub, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Powered by</div>
          <img src={duelLogo} alt="Duel" style={{ height: 18, width: 'auto', opacity: 0.7 }} />
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
