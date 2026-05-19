import { useState } from 'react';
import { C, COUNTRIES } from '../constants';
import { IcoChev } from './icons';

function formatDob(raw) {
  const digits = raw.replace(/\D/g, '').slice(0, 8);
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
}

export default function Input({ label, placeholder, value, onChange, optional, type = 'text', select, dob }) {
  const [focused, setFocused] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%', minWidth: 0 }}>
      {label && (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2px 0' }}>
          <span style={{ fontSize: 14, fontWeight: 500, color: '#292928', lineHeight: '20px' }}>{label}</span>
          {optional && <span style={{ fontSize: 12, color: C.sub }}>Optional</span>}
        </div>
      )}
      {select ? (
        <div style={{ position: 'relative' }}>
          <div
            onClick={() => setOpen(o => !o)}
            style={{
              display: 'flex', alignItems: 'center', gap: 8, height: 48, padding: '0 16px',
              borderRadius: 4, cursor: 'pointer', boxSizing: 'border-box',
              border: `1px solid ${open ? C.focusBorder : C.border}`,
              background: '#fff', transition: 'border-color 150ms',
            }}
          >
            <span style={{ fontSize: 14 }}>🌐</span>
            <span style={{ flex: 1, fontSize: 14, color: value ? C.text : C.muted, lineHeight: '18px' }}>
              {value || placeholder}
            </span>
            <span style={{ color: C.muted, display: 'flex', transition: 'transform 200ms', transform: open ? 'rotate(180deg)' : 'none' }}>
              <IcoChev />
            </span>
          </div>
          {open && (
            <div style={{
              position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0, zIndex: 200,
              background: '#fff', borderRadius: 4, border: `1px solid ${C.border}`,
              boxShadow: '0 4px 24px rgba(0,0,0,0.1)', overflow: 'hidden',
            }}>
              {COUNTRIES.map(c => (
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
        <div style={{
          display: 'flex', alignItems: 'center', height: 48, padding: '0 16px',
          borderRadius: 4, boxSizing: 'border-box', background: '#fff',
          border: `1px solid ${focused ? C.focusBorder : C.border}`,
          transition: 'border-color 150ms',
        }}>
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
        </div>
      )}
    </div>
  );
}
