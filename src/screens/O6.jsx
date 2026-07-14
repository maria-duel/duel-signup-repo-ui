import Input from '../components/Input';
import OnbScreen from '../components/OnbScreen';

const CITIES = [
  'New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami',
  'Austin', 'Seattle', 'Denver', 'Boston', 'Atlanta',
];

const STATES = [
  'New York', 'California', 'Illinois', 'Texas', 'Florida',
  'Washington', 'Colorado', 'Massachusetts', 'Georgia', 'Oregon',
];

export default function O6({ d, set, onNext, onBack }) {
  const ok = d.phone.trim().length > 1 && d.city && d.state;

  return (
    <OnbScreen
      title="Where can we reach you?"
      description="A few details so we can set up your creator profile."
      onBack={onBack}
      ctaEnabled={!!ok}
      onCta={onNext}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Input
          label="Phone Number"
          placeholder="+1"
          type="tel"
          value={d.phone}
          onChange={v => set(f => ({ ...f, phone: v }))}
        />
        <Input
          label="City/region"
          placeholder="Select your city"
          select
          options={CITIES}
          value={d.city}
          onChange={v => set(f => ({ ...f, city: v }))}
        />
        <Input
          label="US State"
          placeholder="Select your state"
          select
          options={STATES}
          value={d.state}
          onChange={v => set(f => ({ ...f, state: v }))}
        />
      </div>
    </OnbScreen>
  );
}
