import { C } from '../constants';

const sp = { stroke: 'currentColor', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' };

// Material-style filled icons matching Gmail UI
const IcoArrowBack   = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="#1b1a1f"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>;
const IcoArchive     = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1b1a1f" {...sp}><rect x="2" y="4" width="20" height="4" rx="1"/><path d="M4 8v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg>;
const IcoDelete      = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1b1a1f" {...sp}><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/></svg>;
const IcoMailOutline = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1b1a1f" {...sp}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 8l10 6 10-6"/></svg>;
const IcoMoreVert    = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="#1b1a1f"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>;
const IcoStar        = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1b1a1f" {...sp}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>;
const IcoReply       = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="#5f6368"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></svg>;
const IcoChevDown    = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="#47474f"><path d="M4 6l4 4 4-4"/></svg>;
const IcoMailFilled  = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="#1b1a1f"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>;
const IcoVideoCall   = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="#47474f"><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z"/></svg>;

export default function S4b({ onNext }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#fff', fontFamily: 'Roboto, sans-serif' }}>

      {/* Top bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 54, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 14px' }}>
        <IcoArrowBack />
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <IcoArchive />
          <IcoDelete />
          <IcoMailOutline />
          <IcoMoreVert />
        </div>
      </div>

      {/* Scrollable email content */}
      <div style={{ position: 'absolute', top: 54, left: 0, right: 0, bottom: 56, overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* Subject + Inbox badge */}
        <div style={{ width: 375, display: 'flex', alignItems: 'flex-start', gap: 8, padding: '8px 10px 8px 18px', position: 'relative' }}>
          <span style={{ flex: 1, fontSize: 22, lineHeight: '30px', color: '#1b1a1f', fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}>
            Verify your application
          </span>
          <div style={{ background: '#eee', borderRadius: 4, padding: '3px 6px', fontSize: 12, color: '#222', whiteSpace: 'nowrap', marginTop: 6 }}>
            Inbox
          </div>
          <div style={{ marginTop: 6 }}><IcoStar /></div>
        </div>

        {/* Sender row */}
        <div style={{ width: 375, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 8px 12px 16px' }}>
          <div style={{ display: 'flex', gap: 15, alignItems: 'flex-start' }}>
            <div style={{ width: 44, height: 44, borderRadius: 1000, background: 'rgba(0,0,0,0.2)', flexShrink: 0 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={{ display: 'flex', gap: 4, alignItems: 'baseline' }}>
                <span style={{ fontSize: 16, fontWeight: 500, color: '#1b1a1f', lineHeight: '18px' }}>Creator Program</span>
                <span style={{ fontSize: 12, color: '#47474f', lineHeight: '16px' }}>Yesterday</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <span style={{ fontSize: 14, color: '#47474f', lineHeight: '18px' }}>to me</span>
                <IcoChevDown />
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', paddingBottom: 6 }}>
            <IcoReply />
            <IcoMoreVert />
          </div>
        </div>

        {/* Email body */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', padding: '20px 0', width: '100%' }}>
          {/* Logo area */}
          <div style={{ width: 120, height: 32, borderRadius: 30, overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(32,41,57,0.1)', borderRadius: 4 }} />
            <span style={{ fontSize: 18, fontWeight: 500, color: 'rgba(0,0,0,0.3)', fontFamily: "'DM Sans', sans-serif", position: 'relative' }}>
              Logo Area
            </span>
          </div>

          {/* Email card */}
          <div style={{ width: 328, background: '#fff', borderRadius: 4, padding: 24, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', fontFamily: "'DM Sans', sans-serif" }}>
              <p style={{ fontSize: 20, lineHeight: '28px', color: '#101010', textAlign: 'center', margin: 0 }}>
                Thanks for applying to the Creator Program!
              </p>
              <p style={{ fontSize: 14, lineHeight: '18px', color: C.sub, margin: 0, width: '100%' }}>
                Please verify your application using the link below.
              </p>
              <p style={{ fontSize: 14, lineHeight: '18px', color: C.sub, margin: 0, width: '100%' }}>
                Verify your application:
              </p>
            </div>

            {/* CTA button */}
            <button
              onClick={onNext}
              style={{
                width: '100%', height: 48, borderRadius: 12, border: `1px solid ${C.border}`,
                background: 'transparent', color: C.text, fontSize: 14, fontWeight: 700,
                fontFamily: "'DM Sans', sans-serif", cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              Confirm my email address
            </button>
          </div>

          {/* Copyright */}
          <div style={{ display: 'flex', gap: 4, alignItems: 'center', fontSize: 12, lineHeight: '18px', color: '#101010' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>Copyright © 2025</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>Duel</span>
          </div>
        </div>
      </div>

      {/* Bottom Gmail-style nav */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ background: '#f0edf6', display: 'flex', gap: 98, alignItems: 'center', justifyContent: 'center', padding: '8px 0' }}>
          {/* Mail tab (active) */}
          <div style={{ background: '#e2e0f8', borderRadius: 100, padding: '2px 18px', display: 'flex', alignItems: 'center', gap: 8, position: 'relative' }}>
            <IcoMailFilled />
            {/* Badge */}
            <div style={{ position: 'absolute', top: -2, right: 0, background: '#b3261d', border: '1px solid #9a312d', borderRadius: 100, padding: '2px 4px', minWidth: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 10, color: '#fff', fontWeight: 500, lineHeight: '14px', fontFamily: 'Roboto, sans-serif' }}>99+</span>
            </div>
          </div>
          {/* Video tab */}
          <div style={{ background: '#f0edf6', borderRadius: 100, padding: '2px 18px', display: 'flex', alignItems: 'center' }}>
            <IcoVideoCall />
          </div>
        </div>
        {/* Home indicator */}
        <div style={{ background: '#f0edf6', height: 15, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 108, height: 4, background: '#a6a3aa', borderRadius: 100 }} />
        </div>
      </div>
    </div>
  );
}
