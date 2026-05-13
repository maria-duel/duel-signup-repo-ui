import { C } from '../constants';
import { IcoCheck, IcoUser, IcoList, IcoCam } from './icons';

const defs = [
  { label: 'Basic Info', Ico: IcoUser },
  { label: 'Details',    Ico: IcoList },
  { label: 'Socials',    Ico: IcoCam  },
];

export default function Steps({ step }) {
  return (
    <div style={{ position: 'relative', width: 252 }}>
      {[52, 152].map(x => (
        <div key={x} style={{ position: 'absolute', top: 22, left: x, width: 48, height: 1, background: C.border }} />
      ))}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {defs.map(({ label, Ico }, i) => {
          const st = i + 1 < step ? 'done' : i + 1 === step ? 'active' : 'idle';
          const Icon = st === 'done' ? IcoCheck : Ico;
          return (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, width: 52, zIndex: 1 }}>
              <div
                className="step-circle"
                style={{
                  width: 44, height: 44, borderRadius: 1000,
                  background: st === 'active' ? C.stepActive : C.stepIdle,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: C.sub,
                }}
              >
                <Icon />
              </div>
              <span style={{ fontSize: 12, fontWeight: st === 'active' ? 700 : 400, color: C.text, lineHeight: '16px', whiteSpace: 'nowrap' }}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
