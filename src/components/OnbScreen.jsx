import Btn from './Btn';
import BackBtn from './BackBtn';

// Shared layout for onboarding question screens:
// back button, heading + description, content, pinned bottom CTA.
export default function OnbScreen({ title, description, onBack, children, cta = 'Continue', ctaEnabled = true, onCta, below }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#000', overflow: 'hidden' }}>
      {onBack && <BackBtn onClick={onBack} />}

      <div style={{
        position: 'absolute', top: 128, left: 16, width: 358,
        display: 'flex', flexDirection: 'column', gap: 32,
        animation: 'contentFadeUp 420ms cubic-bezier(0.22,1,0.36,1) both',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <p style={{ fontSize: 24, fontWeight: 700, color: '#fff', margin: 0, lineHeight: '32px' }}>
            {title}
          </p>
          {description && (
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: '20px' }}>
              {description}
            </p>
          )}
        </div>
        {children}
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 16, width: 358, paddingBottom: 32,
        display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center',
      }}>
        <Btn label={cta} enabled={ctaEnabled} onClick={onCta} />
        {below}
      </div>
    </div>
  );
}
