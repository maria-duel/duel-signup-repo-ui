import { useState, useEffect } from 'react';
import { IMGS } from '../assets/images';
import duelLogo from '../assets/duel-logo.svg';

const SLIDES = [
  {
    headline: 'Share what you love.\nGet rewarded.',
    body: 'Create content around a brand you love and get recognised.',
  },
  {
    headline: 'Get seen by the brand',
    body: 'Create content around a brand you love and get recognised and celebrated by your audience.',
  },
  {
    headline: 'Earn as you create',
    body: 'Create content around a brand you love and earn. Points, commissions and gift cards.',
  },
];

const PHOTO_GRID = [
  { src: IMGS.grid1, left: 0,   top: 10,  w: 159, h: 252 },
  { src: IMGS.grid4, left: 0,   top: 278, w: 159, h: 252 },
  { src: IMGS.grid2, left: 172, top: 0,   w: 159, h: 252 },
  { src: IMGS.grid5, left: 172, top: 268, w: 159, h: 252 },
  { src: IMGS.grid3, left: 344, top: 10,  w: 159, h: 252 },
  { src: IMGS.grid6, left: 344, top: 278, w: 159, h: 252 },
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
      <div style={{ position: 'absolute', left: -54, top: 0, width: 503, height: 530 }}>
        {PHOTO_GRID.map(({ src, left, top, w, h }, i) => (
          <img
            key={i} src={src} alt="" draggable={false}
            style={{
              position: 'absolute', left, top, width: w, height: h,
              borderRadius: 6, objectFit: 'cover',
              border: '1px solid rgba(0,0,0,0.08)',
            }}
          />
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

      {/* Sign in — top right */}
      <button
        style={{
          position: 'absolute', top: 20, right: 20,
          background: 'transparent', border: 'none',
          fontSize: 14, fontWeight: 700, color: '#fff',
          fontFamily: 'inherit', cursor: 'pointer',
        }}
      >
        Sign in
      </button>

      {/* NARS logo + brand name */}
      <div style={{
        position: 'absolute', top: 53, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        <div style={{ height: 60, display: 'flex', alignItems: 'center' }}>
          <img src={IMGS.narsLogo} alt="NARS" style={{ width: 84, height: 35, objectFit: 'contain' }} />
        </div>
        <p style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: 0, whiteSpace: 'nowrap', lineHeight: 'normal' }}>
          Friends With Benefits
        </p>
      </div>

      {/* Bottom content area */}
      <div style={{
        position: 'absolute', bottom: 0, left: 32, width: 326,
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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, width: '100%' }}>
              <p style={{
                fontSize: 24, fontWeight: 700, color: '#fff',
                textAlign: 'center', lineHeight: '33.6px', margin: 0,
                whiteSpace: 'pre-line',
                transition: 'opacity 0.4s ease',
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
                    width: 6, height: 6, borderRadius: '50%',
                    background: i === slide ? '#fff' : 'rgba(255,255,255,0.3)',
                    transition: 'background 0.3s ease',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Apply now CTA */}
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
