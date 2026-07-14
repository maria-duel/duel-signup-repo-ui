import { useState } from 'react';
import { C, COUNTRIES } from '../constants';
import globeIcon from '../assets/icons/globe.svg';

function formatDob(raw) {
  const digits = raw.replace(/\D/g, '').slice(0, 8);
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
}

const ChevronDown = ({ open }) => (
  <svg
    width="20" height="20" viewBox="0 0 20 20" fill="none"
    style={{ flexShrink: 0, transition: 'transform 200ms', transform: open ? 'rotate(180deg)' : 'none' }}
  >
    <path d="M5 7.5L10 12.5L15 7.5" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Input({ label, placeholder, value, onChange, optional, type = 'text', select, dob, valid, options = COUNTRIES }) {
  const [focused, setFocused] = useState(false);
  const [open, setOpen] = useState(false);

  const fieldStyle = {
    display: 'flex', alignItems: 'center', height: 48, padding: '0 17px',
    borderRadius: 4, boxSizing: 'border-box',
    background: C.inputBg,
    border: `1px solid ${focused || open ? C.inputFocus : C.inputBorder}`,
    transition: 'border-color 150ms',
    gap: 8,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%', minWidth: 0 }}>
      {label && (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2px 0' }}>
          <span style={{ fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.9)', lineHeight: '20px' }}>{label}</span>
          {optional && <span style={{ fontSize: 12, color: C.dimmed }}>Optional</span>}
        </div>
      )}
      {select ? (
        <div style={{ position: 'relative' }}>
          <div onClick={() => setOpen(o => !o)} style={{ ...fieldStyle, cursor: 'pointer' }}>
            <img src={globeIcon} alt="" style={{ width: 20, height: 20, flexShrink: 0 }} />
            <span style={{ flex: 1, fontSize: 14, color: value ? C.text : C.sub, lineHeight: '18px' }}>
              {value || placeholder}
            </span>
            <ChevronDown open={open} />
          </div>
          {open && (
            <div style={{
              position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0, zIndex: 200,
              background: '#1a1a1a', borderRadius: 4, border: `1px solid ${C.inputBorder}`,
              boxShadow: '0 8px 32px rgba(0,0,0,0.6)', overflow: 'hidden',
            }}>
              {options.map(c => (
                <div
                  key={c}
                  className="dropdown-item"
                  onClick={() => { onChange(c); setOpen(false); }}
                  style={{ padding: '11px 16px', fontSize: 14, color: C.text, cursor: 'pointer' }}
                >
                  {c}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div style={fieldStyle}>
          <input
            type={type}
            inputMode={dob ? 'numeric' : undefined}
            maxLength={dob ? 10 : undefined}
            value={value}
            onChange={e => onChange(dob ? formatDob(e.target.value) : e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={placeholder}
            style={{
              flex: 1, border: 'none', outline: 'none', background: 'transparent',
              fontSize: 14, color: C.text, lineHeight: '18px', fontFamily: 'inherit',
            }}
          />
          {valid && (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
              <circle cx="8" cy="8" r="8" fill="#3d9e5f" />
              <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      )}
    </div>
  );
}
