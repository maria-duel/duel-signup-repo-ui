import narsLogo from '../assets/icons/nars-logo.svg';
import grid1 from '../assets/images/grid1.jpeg';
import grid2 from '../assets/images/grid2.jpeg';
import grid3 from '../assets/images/grid3.jpeg';
import grid4 from '../assets/images/grid4.jpeg';
import grid5 from '../assets/images/grid5.jpeg';
import grid6 from '../assets/images/grid6.jpeg';
import icoGoogle from '../assets/icons/ico-google.svg';
import icoTikTok from '../assets/icons/ico-tiktok.svg';
import icoMeta from '../assets/icons/ico-meta.svg';
import icoMail from '../assets/icons/ico-mail.svg';

const PHOTO_GRID = [
  { src: grid1, left: 0,   top: 10,  w: 159, h: 252 },
  { src: grid4, left: 0,   top: 278, w: 159, h: 252 },
  { src: grid2, left: 172, top: 0,   w: 159, h: 252 },
  { src: grid5, left: 172, top: 268, w: 159, h: 252 },
  { src: grid3, left: 344, top: 10,  w: 159, h: 252 },
  { src: grid6, left: 344, top: 278, w: 159, h: 252 },
];

const SSO_OPTIONS = [
  { label: 'Continue with Google', img: icoGoogle },
  { label: 'Continue with TikTok', img: icoTikTok },
  { label: 'Continue with Meta',   img: icoMeta   },
];

export default function O1({ onNext, onApply }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#000', overflow: 'hidden' }}>

      {/* Photo grid — 503px wide, offset left by 54px */}
      <div style={{ position: 'absolute', left: -54, top: 0, width: 503, height: 530, animation: 'gridDrift 22s ease-in-out -7s infinite' }}>
        {PHOTO_GRID.map(({ src, left, top, w, h }, i) => (
          <div
            key={i}
            style={{
              position: 'absolute', left, top, width: w, height: h,
              borderRadius: 6, overflow: 'hidden',
              border: '1px solid rgba(0,0,0,0.08)',
            }}
          >
            <img
              src={src} alt="" draggable={false}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        ))}
        {/* Top gradient fade */}
        <div style={{
          position: 'absolute', left: 19, top: -18, width: 465, height: 188,
          background: 'linear-gradient(to bottom, #000 12.5%, rgba(0,0,0,0) 100%)',
          pointerEvents: 'none',
        }} />
        {/* Bottom gradient fade */}
        <div style={{
          position: 'absolute', left: 19, top: 280, width: 465, height: 250,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 75%)',
          pointerEvents: 'none',
        }} />
      </div>

      {/* NARS logo + brand name */}
      <div style={{
        position: 'absolute', top: 53, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        <div style={{ height: 60, display: 'flex', alignItems: 'center' }}>
          <img src={narsLogo} alt="NARS" style={{ width: 84, height: 35, objectFit: 'contain' }} />
        </div>
        <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: 0, whiteSpace: 'nowrap', lineHeight: 'normal' }}>
          Friends With Benefits
        </p>
      </div>

      {/* Bottom content */}
      <div style={{
        position: 'absolute', bottom: 0, left: 16, width: 358,
        paddingBottom: 24,
        display: 'flex', flexDirection: 'column', gap: 24,
        animation: 'contentFadeUp 420ms cubic-bezier(0.22,1,0.36,1) both',
      }}>
        {/* Heading */}
        <p style={{ fontSize: 24, fontWeight: 700, color: '#fff', margin: 0, lineHeight: '33.6px', textAlign: 'center' }}>
          Log in to your account
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

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.2)' }} />
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>or</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.2)' }} />
        </div>

        {/* Continue with email */}
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
          <img src={icoMail} alt="" style={{ position: 'absolute', left: 20, width: 20, height: 20, filter: 'invert(1)' }} />
          Continue with email
        </button>

        {/* Footer */}
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', margin: 0, textAlign: 'center' }}>
          Don't have an account?{' '}
          <span
            onClick={onApply}
            style={{ fontWeight: 700, color: '#fff', cursor: 'pointer' }}
          >
            Apply now
          </span>
        </p>
      </div>
    </div>
  );
}
