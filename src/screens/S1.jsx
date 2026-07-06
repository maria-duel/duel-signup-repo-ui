import Btn from '../components/Btn';
import BackBtn from '../components/BackBtn';
import streetPortrait from '../assets/images/street-portrait.jpeg';
import icoGoogle from '../assets/icons/ico-google.svg';
import icoTikTok from '../assets/icons/ico-tiktok.svg';
import icoMeta from '../assets/icons/ico-meta.svg';
import icoMail from '../assets/icons/ico-mail.svg';

const NavTitle = () => (
  <p style={{
    position: 'absolute', top: 40, left: 0, right: 0,
    fontSize: 16, fontWeight: 700, color: '#fff', textAlign: 'center', margin: 0,
  }}>
    NARS Friends With Benefits
  </p>
);

const SSO_OPTIONS = [
  { label: 'Continue with Google', img: icoGoogle },
  { label: 'Continue with TikTok', img: icoTikTok },
  { label: 'Continue with Meta',   img: icoMeta   },
];

export default function S1({ d, set, onNext, onBack }) {
  const emailOk = d.email.includes('@') && d.email.includes('.');

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#000', overflow: 'hidden' }}>

      {/* Blurred background photo */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 480 }}>
        <img
          src={streetPortrait} alt="" draggable={false}
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(22px)', transform: 'scale(1.05)' }}
        />
        {/* Gradient: clear mid, fully black before bottom content */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, #000 12%, rgba(0,0,0,0) 45%, #000 82%)',
        }} />
      </div>
      {/* Solid black fill below the photo */}
      <div style={{ position: 'absolute', top: 480, left: 0, right: 0, bottom: 0, background: '#000' }} />

      <BackBtn onClick={onBack} />
      <NavTitle />

      {/* Bottom content */}
      <div style={{
        position: 'absolute', bottom: 0, left: 32, width: 326,
        paddingBottom: 32,
        display: 'flex', flexDirection: 'column', gap: 24,
        animation: 'contentFadeUp 420ms cubic-bezier(0.22,1,0.36,1) both',
      }}>
        {/* Heading */}
        <p style={{ fontSize: 24, fontWeight: 700, color: '#fff', margin: 0, lineHeight: '33.6px', textAlign: 'center' }}>
          Start your application
        </p>

        {/* Social auth buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {SSO_OPTIONS.map(({ label, img }) => (
            <button
              key={label}
              className="pressable"
              onClick={onNext}
              style={{
                width: '100%', height: 48, borderRadius: 1000,
                border: '1px solid rgba(66,66,66,0.2)',
                background: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'inherit', fontSize: 14, fontWeight: 600, color: '#101010',
                position: 'relative',
              }}
            >
              <img src={img} alt="" style={{ position: 'absolute', left: 20, width: 20, height: 20 }} />
              {label}
            </button>
          ))}
        </div>

        {/* OR divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.5)' }} />
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', fontWeight: 400 }}>or</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.5)' }} />
        </div>

        {/* Email input + button */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {/* Email field */}
          <div style={{
            height: 48, borderRadius: 4,
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.6)',
            display: 'flex', alignItems: 'center', padding: '0 17px',
          }}>
            <input
              type="email"
              placeholder="Email address"
              value={d.email}
              onChange={e => set(p => ({ ...p, email: e.target.value }))}
              style={{
                flex: 1, border: 'none', outline: 'none', background: 'transparent',
                fontSize: 14, color: '#fff', lineHeight: '18px', fontFamily: 'inherit',
              }}
            />
          </div>

          {/* Continue with email (outline) */}
          <button
            className="pressable"
            onClick={onNext}
            style={{
              width: '100%', height: 48, borderRadius: 1000,
              border: '1px solid #fff', background: 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'inherit', fontSize: 14, fontWeight: 700, color: '#fff',
              position: 'relative',
            }}
          >
            <img src={icoMail} alt="" style={{ position: 'absolute', left: 20, width: 20, height: 20 }} />
            Continue with email
          </button>
        </div>
      </div>
    </div>
  );
}
