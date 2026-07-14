import { useState, useEffect } from 'react';
import duelLogo from '../assets/duel-logo.svg';
import narsLogo from '../assets/icons/nars-logo.svg';
import grid1 from '../assets/images/grid1.jpeg';
import grid2 from '../assets/images/grid2.jpeg';
import grid3 from '../assets/images/grid3.jpeg';
import grid4 from '../assets/images/grid4.jpeg';
import grid5 from '../assets/images/grid5.jpeg';
import grid6 from '../assets/images/grid6.jpeg';

const SLIDES = [
  {
    headline: 'Not just a NARS fan. A NARS creator.',
    body: 'Apply to represent a brand you already love, as a creator they handpicked.',
  },
  {
    headline: 'Be seen, not just followed',
    body: 'The NARS team reviews your content — and can reshare, reward, or reach out.',
  },
  {
    headline: 'Unlock earning as you grow',
    body: 'Points, commissions, and gift cards. Rewards that grow the more you share.',
  },
];

const PHOTO_GRID = [
  { src: grid1, left: 0,   top: 10,  w: 159, h: 252 },
  { src: grid4, left: 0,   top: 278, w: 159, h: 252 },
  { src: grid2, left: 172, top: 0,   w: 159, h: 252 },
  { src: grid5, left: 172, top: 268, w: 159, h: 252 },
  { src: grid3, left: 344, top: 10,  w: 159, h: 252 },
  { src: grid6, left: 344, top: 278, w: 159, h: 252 },
];

export default function S0({ onNext }) {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 3500);
    return () => clearInterval(t);
  }, []);

  const { headline, body } = SLIDES[slide];

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
              style={{
                width: '100%', height: '100%', objectFit: 'cover', display: 'block',
              }}
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

      {/* Bottom content area */}
      <div style={{
        position: 'absolute', bottom: 0, left: 20, width: 350,
        paddingBottom: 32,
        display: 'flex', flexDirection: 'column', gap: 57,
        alignItems: 'center',
      }}>

        {/* Main content block */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32, width: '100%', alignItems: 'center' }}>

          {/* Text block: badge + headline + body + dots */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 21 }}>
            {/* Badge */}
            <div style={{
              background: 'rgba(255,255,255,0.15)', borderRadius: 100,
              padding: '4px 12px', display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#3d9e5f', flexShrink: 0 }} />
              <span style={{ fontSize: 14, color: '#fff', fontWeight: 400, whiteSpace: 'nowrap' }}>
                Join 12,000+ creators who love NARS
              </span>
            </div>

            {/* Headline + Body grouped at 12px gap */}
            <div key={slide} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, width: '100%', animation: 'contentFadeUp 350ms cubic-bezier(0.22,1,0.36,1) both' }}>
              <p style={{
                fontSize: 20, fontWeight: 700, color: '#fff',
                textAlign: 'center', lineHeight: '28px', margin: 0,
                whiteSpace: 'pre-line',
              }}>
                {headline}
              </p>

              <div style={{ paddingInline: 16, width: '100%' }}>
                <p style={{
                  fontSize: 16, color: 'rgba(255,255,255,0.9)',
                  textAlign: 'center', lineHeight: '22px', margin: 0,
                }}>
                  {body}
                </p>
              </div>
            </div>

            {/* Dots indicator */}
            <div style={{
              background: 'rgba(255,255,255,0.15)', borderRadius: 100,
              padding: '6px 8px', display: 'flex', gap: 6,
            }}>
              {SLIDES.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setSlide(i)}
                  style={{
                    width: i === slide ? 18 : 6, height: 6, borderRadius: 100,
                    background: i === slide ? '#fff' : 'rgba(255,255,255,0.3)',
                    transition: 'width 300ms cubic-bezier(0.34,1.56,0.64,1), background 300ms ease',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Apply now CTA + Check your application */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', alignItems: 'center' }}>
            <button
              className="pressable"
              onClick={onNext}
              style={{
                width: '100%', height: 48, borderRadius: 1000,
                background: '#fff', border: 'none',
                fontSize: 14, fontWeight: 700, color: '#000',
                fontFamily: 'inherit',
              }}
            >
              Apply now
            </button>
            <button
              style={{
                background: 'transparent', border: 'none',
                fontSize: 14, fontWeight: 400, color: '#fff',
                fontFamily: 'inherit', cursor: 'pointer', padding: '4px 0',
              }}
            >
              Already applied?{' '}
              <span style={{ textDecoration: 'underline', textUnderlineOffset: 3 }}>
                Check your application
              </span>
            </button>
          </div>
        </div>

        {/* Powered by Duel */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 10, color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Powered by
          </span>
          <img src={duelLogo} alt="Duel" style={{ height: 18, width: 'auto', filter: 'invert(1)' }} />
        </div>
      </div>
    </div>
  );
}
