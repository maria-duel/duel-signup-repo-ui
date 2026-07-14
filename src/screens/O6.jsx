import Input from '../components/Input';
import OnbScreen from '../components/OnbScreen';

export default function O6({ d, set, onNext, onBack }) {
  const ok = d.phone.trim().length > 1;

  return (
    <OnbScreen
      title="Where can we reach you?"
      description="A few details so we can set up your creator profile."
      onBack={onBack}
      ctaEnabled={ok}
      onCta={onNext}
    >
      <Input
        label="Phone Number"
        placeholder="+1"
        type="tel"
        value={d.phone}
        onChange={v => set(f => ({ ...f, phone: v }))}
      />
    </OnbScreen>
  );
}
