import { useState } from 'react';
import OnbScreen from '../components/OnbScreen';
import SelectCard from '../components/SelectCard';

const OPTIONS = [
  'I already love NARS and want to get more involved',
  'I want NARS to actually see and recognise my content',
  "I want to earn rewards for content I'd create anyway",
  'I want to grow my creator profile by working with brands I love',
  'I enjoy working towards goals and levelling up',
];

export default function O8({ onNext, onBack }) {
  const [selected, setSelected] = useState(null);

  return (
    <OnbScreen
      title="Why are you joining?"
      description="There's no wrong answer — this just helps us tailor your experience."
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
      </div>
    </OnbScreen>
  );
}
