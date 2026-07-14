import { useState } from 'react';
import OnbScreen from '../components/OnbScreen';
import SelectCard from '../components/SelectCard';

const OPTIONS = [
  'Social media',
  'Word of mouth / Friend or family',
  'Referral',
  'In-store',
  'Direct message',
];

export default function O9({ onNext, onBack }) {
  const [selected, setSelected] = useState(null);

  return (
    <OnbScreen
      title="How did you hear about Friends With Benefits?"
      description="Just curious — helps us know what's working."
      onBack={onBack}
      ctaEnabled={selected !== null}
      onCta={onNext}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {OPTIONS.map(label => (
          <SelectCard
            key={label}
            label={label}
            selected={selected === label}
            onClick={() => setSelected(label)}
          />
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
