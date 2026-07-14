import { useState } from 'react';
import OnbScreen from '../components/OnbScreen';
import SelectCard from '../components/SelectCard';

const OPTIONS = [
  'Woman',
  'Man',
  'Non-binary',
  'Prefer to self-describe',
  'Prefer not to say',
];

export default function O7({ onNext, onBack }) {
  const [selected, setSelected] = useState(null);
  const [selfDescribe, setSelfDescribe] = useState('');
  const [focused, setFocused] = useState(false);

  return (
    <OnbScreen
      title="How do you identify?"
      description="This helps us personalize your experience and isn't shared publicly."
      onBack={onBack}
      ctaEnabled={selected !== null}
      onCta={onNext}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {OPTIONS.map(label => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <SelectCard
              label={label}
              selected={selected === label}
              onClick={() => setSelected(label)}
            />
            {label === 'Prefer to self-describe' && selected === label && (
              <div style={{
                display: 'flex', alignItems: 'center', height: 48, padding: '0 17px',
                borderRadius: 4,
                background: 'rgba(255,255,255,0.1)',
                border: `1px solid ${focused ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.4)'}`,
                transition: 'border-color 150ms',
              }}>
                <input
                  value={selfDescribe}
                  onChange={e => setSelfDescribe(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  placeholder="How do you identify?"
                  autoFocus
                  style={{
                    flex: 1, border: 'none', outline: 'none', background: 'transparent',
                    fontSize: 14, color: '#fff', lineHeight: '18px', fontFamily: 'inherit',
                  }}
                />
              </div>
            )}
          </div>
        ))}
        <button
          onClick={onNext}
          style={{
            background: 'transparent', border: 'none', padding: '8px 0 0',
            fontSize: 14, color: '#fff', cursor: 'pointer', fontFamily: 'inherit',
            textDecoration: 'underline', textUnderlineOffset: 3, alignSelf: 'center',
          }}
        >
          None of these
        </button>
      </div>
    </OnbScreen>
  );
}
