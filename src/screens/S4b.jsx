import narsLogo from '../assets/icons/nars-logo.svg';
import gmailArrowBack from '../assets/icons/gmail-arrow-back.svg';
import gmailArchive from '../assets/icons/gmail-archive.svg';
import gmailDelete from '../assets/icons/gmail-delete.svg';
import gmailMailOutline from '../assets/icons/gmail-mail-outline.svg';
import gmailMoreVert from '../assets/icons/gmail-more-vert.svg';
import gmailStar from '../assets/icons/gmail-star.svg';
import gmailChevDown from '../assets/icons/gmail-chev-down.svg';
import gmailReply from '../assets/icons/gmail-reply.svg';
import gmailMailFilled from '../assets/icons/gmail-mail-filled.svg';
import gmailVideoCall from '../assets/icons/gmail-video-call.svg';

export default function S4b({ onNext }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#fff', fontFamily: 'Roboto, sans-serif', overflow: 'hidden' }}>

      {/* Top action bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 54,
        background: '#fff', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '0 14px',
      }}>
        <img src={gmailArrowBack} alt="" style={{ width: 24, height: 24 }} />
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <img src={gmailArchive}     alt="" style={{ width: 24, height: 24 }} />
          <img src={gmailDelete}      alt="" style={{ width: 24, height: 24 }} />
          <img src={gmailMailOutline} alt="" style={{ width: 24, height: 24 }} />
          <img src={gmailMoreVert}    alt="" style={{ width: 24, height: 24 }} />
        </div>
      </div>

      {/* Email content area */}
      <div style={{
        position: 'absolute', top: 54, left: 0, right: 0, bottom: 56,
        overflowY: 'auto',
      }}>
        {/* Subject line */}
        <div style={{
          display: 'flex', alignItems: 'flex-start', gap: 8,
          padding: '12px 16px 8px',
        }}>
          <span style={{ flex: 1, fontSize: 22, lineHeight: '30px', color: '#1b1a1f', fontWeight: 400 }}>
            Verify your application
          </span>
          <div style={{ background: '#eee', borderRadius: 4, padding: '3px 6px', fontSize: 12, color: '#222', whiteSpace: 'nowrap', marginTop: 4, flexShrink: 0 }}>
            Inbox
          </div>
          <img src={gmailStar} alt="" style={{ width: 24, height: 24, marginTop: 4, flexShrink: 0 }} />
        </div>

        {/* Sender row */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '8px 16px 12px',
        }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#c0b8d0', flexShrink: 0 }} />
            <div>
              <div style={{ display: 'flex', gap: 6, alignItems: 'baseline' }}>
                <span style={{ fontSize: 14, fontWeight: 500, color: '#1b1a1f' }}>Creator Program</span>
                <span style={{ fontSize: 12, color: '#47474f' }}>Yesterday</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <span style={{ fontSize: 13, color: '#47474f' }}>to me</span>
                <img src={gmailChevDown} alt="" style={{ width: 16, height: 16 }} />
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <img src={gmailReply}    alt="" style={{ width: 24, height: 24 }} />
            <img src={gmailMoreVert} alt="" style={{ width: 24, height: 24 }} />
          </div>
        </div>

        {/* Email body card */}
        <div style={{ padding: '0 16px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>

          {/* NARS logo + tagline */}
          <div style={{
            width: '100%', background: '#000',
            borderRadius: '8px 8px 0 0',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            padding: '24px 0 20px', gap: 6,
          }}>
            <img src={narsLogo} alt="NARS" style={{ height: 35, width: 84, objectFit: 'contain' }} />
            <span style={{ fontSize: 14, fontWeight: 600, color: '#fff', letterSpacing: '0.01em' }}>
              Friends With Benefits
            </span>
          </div>

          {/* Dark body section */}
          <div style={{
            width: '100%', background: '#1a1a1a',
            borderRadius: '0 0 8px 8px',
            padding: '24px 20px',
            display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center',
          }}>
            <p style={{
              fontSize: 18, fontWeight: 700, color: '#fff',
              margin: 0, lineHeight: '26px', textAlign: 'center',
              fontFamily: "'DM Sans', sans-serif",
            }}>
              Thanks for applying to NARS Friends with Benefits!
            </p>
            <p style={{
              fontSize: 14, color: 'rgba(255,255,255,0.7)',
              margin: 0, lineHeight: '20px', textAlign: 'center',
              fontFamily: "'DM Sans', sans-serif",
            }}>
              Please verify your email address using the link below to complete your application.
            </p>

            {/* CTA button */}
            <button
              onClick={onNext}
              className="pressable"
              style={{
                width: '100%', height: 48, borderRadius: 1000,
                border: 'none', background: '#fff',
                fontSize: 14, fontWeight: 700, color: '#000',
                fontFamily: "'DM Sans', sans-serif", cursor: 'pointer',
              }}
            >
              Confirm my email address
            </button>
          </div>

          {/* Copyright */}
          <p style={{ fontSize: 12, color: '#888', margin: '16px 0 0', textAlign: 'center' }}>
            Copyright © 2025 <strong>Duel</strong>
          </p>
        </div>
      </div>

      {/* Gmail bottom nav */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <div style={{
          background: '#f0edf6', display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: 98, padding: '8px 0',
        }}>
          {/* Mail tab (active) */}
          <div style={{
            background: '#e2e0f8', borderRadius: 100,
            padding: '4px 18px', display: 'flex', alignItems: 'center', position: 'relative',
          }}>
            <img src={gmailMailFilled} alt="" style={{ width: 24, height: 24 }} />
            <div style={{
              position: 'absolute', top: -2, right: -2,
              background: '#b3261d', borderRadius: 100,
              padding: '1px 4px', minWidth: 18,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontSize: 10, color: '#fff', fontWeight: 500 }}>99+</span>
            </div>
          </div>
          {/* Video tab */}
          <div style={{ background: '#f0edf6', borderRadius: 100, padding: '4px 18px' }}>
            <img src={gmailVideoCall} alt="" style={{ width: 24, height: 24 }} />
          </div>
        </div>
        {/* Home bar */}
        <div style={{ background: '#f0edf6', height: 15, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 108, height: 4, background: '#a6a3aa', borderRadius: 100 }} />
        </div>
      </div>
    </div>
  );
}
