import { C } from '../constants';
import Input from '../components/Input';
import BackBtn from '../components/BackBtn';

const NavTitle = () => (
  <p style={{
    position: 'absolute', top: 40, left: 0, right: 0,
    fontSize: 16, fontWeight: 700, color: '#fff', textAlign: 'center', margin: 0,
  }}>
    NARS Friends With Benefits
  </p>
);

const TermsFooter = () => (
  <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
    {['Terms', 'Privacy Policy'].map(t => (
      <span key={t} style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', textDecoration: 'underline', cursor: 'pointer' }}>
        {t}
      </span>
    ))}
  </div>
);

export default function S2({ d, set, onNext, onBack }) {
  const ok = d.firstName.trim() && d.lastName.trim() && d.dob.trim() && d.country.trim();

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#000', overflow: 'hidden' }}>
      <BackBtn onClick={onBack} />
      <NavTitle />

      {/* Bottom-anchored content */}
      <div style={{
        position: 'absolute', bottom: 0, left: 32, width: 326,
        paddingBottom: 32,
        display: 'flex', flexDirection: 'column', gap: 32,
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
          <Input label="Country" placeholder="Select your country" value={d.country} onChange={v => set(p => ({ ...p, country: v }))} select />
        </div>

        {/* CTA */}
        <button
          onClick={ok ? onNext : undefined}
          style={{
            width: '100%', height: 48, borderRadius: 1000,
            background: '#fff', border: 'none',
            fontSize: 14, fontWeight: 700, color: '#000',
            fontFamily: 'inherit', cursor: ok ? 'pointer' : 'default',
            opacity: ok ? 1 : 0.5,
            transition: 'opacity 200ms',
          }}
        >
          Continue
        </button>

        <TermsFooter />
      </div>
    </div>
  );
}
