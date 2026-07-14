import { useState } from 'react';
import BackBtn from '../components/BackBtn';
import igIcon from '../assets/icons/ig-icon.svg';
import tiktokIcon from '../assets/icons/tiktok-icon.svg';
import ytIcon from '../assets/icons/yt-icon.svg';
import fbIcon from '../assets/icons/fb-icon.svg';

const TermsFooter = () => (
  <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
    {['Terms', 'Privacy Policy'].map(t => (
      <span key={t} style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'underline', cursor: 'pointer' }}>
        {t}
      </span>
    ))}
  </div>
);

const PLATFORMS = [
  { key: 'ig',  label: 'Instagram', icon: igIcon,     iconSize: 18, optional: false },
  { key: 'tt',  label: 'TikTok',   icon: tiktokIcon,  iconSize: 18, optional: false },
  { key: 'yt',  label: 'YouTube',  icon: ytIcon,      iconSize: 18, optional: true  },
  { key: 'fb',  label: 'Facebook', icon: fbIcon,      iconSize: 20, optional: true  },
];

function PlatformRow({ platform, connected, onToggle, hasDivider }) {
  return (
    <>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 30,
      }}>
        {/* Platform info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src={platform.icon} alt={platform.label} style={{ width: platform.iconSize, height: platform.iconSize }} />
          <span style={{ fontSize: 15, fontWeight: 500, color: '#fff', lineHeight: '17px' }}>
            {platform.label}
          </span>
          {platform.optional && (
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontWeight: 400 }}>Optional</span>
          )}
        </div>

        {/* Connect / Connected */}
        {connected ? (
          <button
            onClick={onToggle}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              border: '1px solid rgba(255,255,255,0.4)', borderRadius: 1000,
              padding: '6px 13px', cursor: 'pointer', background: 'transparent',
              fontFamily: 'inherit',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="7" fill="#3d9e5f" />
              <path d="M3.5 7.5l2.5 2.5 4.5-5" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}>Connected</span>
          </button>
        ) : (
          <button
            onClick={onToggle}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              border: '1px solid rgba(255,255,255,0.5)', borderRadius: 1000,
              padding: '6px 13px', cursor: 'pointer', background: 'transparent',
              fontFamily: 'inherit',
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>Connect</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>
      {hasDivider && (
        <div style={{ height: 1, background: 'rgba(255,255,255,0.12)', margin: '20px 0' }} />
      )}
    </>
  );
}

export default function S3({ onNext, onBack }) {
  const [connected, setConnected] = useState({});
  const anyConnected = Object.values(connected).some(Boolean);
  const toggle = key => setConnected(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#000', overflow: 'hidden' }}>
      <BackBtn onClick={onBack} />

      {/* Bottom-anchored content */}
      <div style={{
        position: 'absolute', bottom: 0, left: 32, width: 326,
        paddingBottom: 32,
        display: 'flex', flexDirection: 'column', gap: 32,
        animation: 'contentFadeUp 420ms cubic-bezier(0.22,1,0.36,1) both',
      }}>
        {/* Heading */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}>Step 2 of 2</span>
          <p style={{ fontSize: 24, fontWeight: 700, color: '#fff', margin: 0, lineHeight: '33.6px' }}>
            Connect your Socials
          </p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: '20px', marginTop: 8 }}>
            We use this to review your content — we never post on your behalf.
          </p>
        </div>

        {/* Platform rows */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {PLATFORMS.map((p, i) => (
            <PlatformRow
              key={p.key}
              platform={p}
              connected={!!connected[p.key]}
              onToggle={() => toggle(p.key)}
              hasDivider={i < PLATFORMS.length - 1}
            />
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={anyConnected ? onNext : undefined}
          style={{
            width: '100%', height: 48, borderRadius: 1000,
            background: '#fff', border: 'none',
            fontSize: 14, fontWeight: 700, color: '#000',
            fontFamily: 'inherit', cursor: anyConnected ? 'pointer' : 'default',
            opacity: anyConnected ? 1 : 0.4,
            transform: anyConnected ? 'scale(1)' : 'scale(0.97)',
            transition: 'opacity 250ms ease, transform 350ms cubic-bezier(0.34,1.56,0.64,1)',
          }}
        >
          Submit application
        </button>

        <TermsFooter />
      </div>
    </div>
  );
}
