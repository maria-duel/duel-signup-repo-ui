import Input from '../components/Input';
import OnbScreen from '../components/OnbScreen';

export default function O5({ d, set, onNext, onBack }) {
  const ok = d.displayName.trim().length > 0;

  return (
    <OnbScreen
      title="How you'll appear"
      description="This is the name NARS and the community will see on your creator profile."
      onBack={onBack}
      ctaEnabled={ok}
      onCta={onNext}
      below={(
        <button style={{
          background: 'transparent', border: 'none', padding: '4px 0',
          fontSize: 14, color: '#fff', cursor: 'pointer', fontFamily: 'inherit',
          textDecoration: 'underline', textUnderlineOffset: 3,
        }}>
          Need help?
        </button>
      )}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Input
          label="Display Name"
          placeholder="e.g. @yourhandle or Jane Doe"
          value={d.displayName}
          onChange={v => set(f => ({ ...f, displayName: v }))}
        />
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: '18px' }}>
          You can change this anytime in your profile settings.
        </p>
      </div>
    </OnbScreen>
  );
}
