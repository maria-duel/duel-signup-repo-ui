import { useState, useRef, useEffect } from 'react';
import { SIBLING_PROGRAMMES, CITIES, CITY_TO_COUNTRY } from '../constants';
import Input from '../components/Input';
import BackBtn from '../components/BackBtn';
import CountrySheet from '../components/CountrySheet';

const TermsFooter = () => (
  <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
    {['Terms', 'Privacy Policy'].map(t => (
      <span key={t} style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'underline', cursor: 'pointer' }}>
        {t}
      </span>
    ))}
  </div>
);

export default function S2({ d, set, onNext, onBack, onRestart }) {
  const ok = d.firstName.trim() && d.lastName.trim() && d.dob.trim() && d.country.trim();

  // Country-conflict sheet: null | { country }
  const [conflict, setConflict] = useState(null);
  const [notified, setNotified] = useState(false);
  const dismissTimer = useRef(null);
  useEffect(() => () => clearTimeout(dismissTimer.current), []);

  const selectCity = (v) => {
    set(p => ({ ...p, country: v }));
    const country = CITY_TO_COUNTRY[v];
    if (country) {
      setNotified(false);
      setConflict({ country });
    }
  };

  const dismissConflict = () => {
    clearTimeout(dismissTimer.current);
    set(p => ({ ...p, country: '' }));
    setConflict(null);
  };

  const sibling = conflict && SIBLING_PROGRAMMES[conflict.country];

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
        {/* Heading block */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}>Step 1 of 2</span>
          <p style={{ fontSize: 24, fontWeight: 700, color: '#fff', margin: 0, lineHeight: '33.6px' }}>
            Tell us about you
          </p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: '20px' }}>
            Tell us about yourself — we review every application.
          </p>
        </div>

        {/* Form fields */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Name */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.9)', lineHeight: '20px' }}>Name</span>
            <div style={{ display: 'flex', gap: 8 }}>
              <Input placeholder="First name" value={d.firstName} onChange={v => set(p => ({ ...p, firstName: v }))} />
              <Input placeholder="Last name"  value={d.lastName}  onChange={v => set(p => ({ ...p, lastName: v }))}  />
            </div>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', margin: '0 4px', lineHeight: '16px' }}>
              Use your legal name. You can add a preferred name later.
            </p>
          </div>

          <Input label="Date of birth" placeholder="dd/mm/yyyy" value={d.dob} onChange={v => set(p => ({ ...p, dob: v }))} dob />
          <Input label="City" placeholder="Select your city" value={d.country} onChange={selectCity} select options={CITIES} />
        </div>

        {/* CTA */}
        <button
          onClick={ok ? onNext : undefined}
          style={{
            width: '100%', height: 48, borderRadius: 1000,
            background: '#fff', border: 'none',
            fontSize: 14, fontWeight: 700, color: '#000',
            fontFamily: 'inherit', cursor: ok ? 'pointer' : 'default',
            opacity: ok ? 1 : 0.4,
            transform: ok ? 'scale(1)' : 'scale(0.97)',
            transition: 'opacity 250ms ease, transform 350ms cubic-bezier(0.34,1.56,0.64,1)',
          }}
        >
          Continue
        </button>

        <TermsFooter />
      </div>

      {/* Country-conflict sheet */}
      {conflict && (sibling ? (
        <CountrySheet
          title={`There's a NARS programme in ${sibling.region}`}
          body={`Friends With Benefits is currently open to UK-based creators — but NARS runs a programme in ${sibling.region}.`}
          cta={`Apply to the ${sibling.region.replace('the ', '')} programme`}
          onCta={() => { set(p => ({ ...p, country: '' })); onRestart(); }}
          onDismiss={dismissConflict}
          dismissLabel="I'm based in the UK"
        />
      ) : (
        <CountrySheet
          title="This programme is UK-only"
          body="NARS Friends With Benefits is currently open to UK-based creators only."
          cta={`Notify me when it opens in ${conflict.country}`}
          ctaDone="We'll let you know ✓"
          done={notified}
          onCta={() => {
            setNotified(true);
            dismissTimer.current = setTimeout(dismissConflict, 1600);
          }}
          onDismiss={dismissConflict}
          dismissLabel="I'm based in the UK"
        />
      ))}
    </div>
  );
}
