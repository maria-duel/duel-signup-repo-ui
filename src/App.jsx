import { useState, useCallback } from 'react';
import S0 from './screens/S0';
import S0b from './screens/S0b';
import S1 from './screens/S1';
import S2 from './screens/S2';
import S3 from './screens/S3';
import S4 from './screens/S4';
import S4b from './screens/S4b';
import S5 from './screens/S5';
import CS1 from './screens/CS1';
import CS2 from './screens/CS2';
import CS3 from './screens/CS3';
import CS4 from './screens/CS4';
import O1 from './screens/O1';
import O2 from './screens/O2';
import O3 from './screens/O3';
import O4 from './screens/O4';
import O5 from './screens/O5';
import O6 from './screens/O6';
import O7 from './screens/O7';
import O8 from './screens/O8';
import O9 from './screens/O9';
import O10 from './screens/O10';
import O10b from './screens/O10b';
import O11 from './screens/O11';
import JourneyProgress from './components/JourneyProgress';

const FLOWS = {
  application: ['s0', 's0b', 's1', 's2', 's3', 's4', 's4b', 's5'],
  status:      ['cs1', 'cs2', 'cs3', 'cs4'],
  onboarding:  ['o1', 'o2', 'o3', 'o4', 'o5', 'o6', 'o7', 'o8', 'o9', 'o10', 'o10b', 'o11'],
};

// Step screens per flow that show the journey progress bar (landing
// screens, interstitials, and mocks are excluded)
const STEP_MAPS = {
  application: ['s2', 's3'],
  onboarding:  ['o5', 'o6', 'o7', 'o8', 'o9', 'o10'],
};

// Screen pairs that crossfade instead of sliding
const FADE_PAIRS = [
  ['s0b', 's1'],
  ['o10b', 'o11'],
];
const isFadePair = (from, to) =>
  FADE_PAIRS.some(([a, b]) => (from === a && to === b) || (from === b && to === a));

const NAV_ITEMS = [
  { id: 'application', label: 'Application' },
  { id: 'status',      label: 'Check application status' },
  { id: 'onboarding',  label: 'Onboarding' },
];

export default function App() {
  const [section, setSection] = useState('application');
  const [idx,     setIdx]     = useState(0);
  const [exiting, setExiting] = useState(null);
  const [form,    setForm]    = useState({
    firstName: '', lastName: '', email: '',
    dob: '', country: '', favoriteProduct: '',
    instagram: '', tiktok: '', youtube: '', twitch: '',
  });
  const [statusEmail, setStatusEmail] = useState('');
  const [onb, setOnb] = useState({
    password: '', displayName: '', phone: '', city: '', state: '',
  });

  const flow = FLOWS[section] || [];

  const navigate = useCallback((next) => {
    if (exiting !== null) return;
    const dir = next > idx ? 1 : -1;
    const from = flow[idx], to = flow[next];
    const fade = isFadePair(from, to);
    setExiting({ idx, dir });
    setIdx(next);
    setTimeout(() => setExiting(null), fade ? 620 : 340);
  }, [idx, exiting, flow]);

  const next = () => navigate(Math.min(idx + 1, flow.length - 1));
  const back = () => navigate(Math.max(idx - 1, 0));

  const screens = {
    s0:  <S0 onNext={next} />,
    s0b: <S0b onNext={next} onBack={back} />,
    s1:  <S1 d={form} set={setForm} onNext={next} onBack={back} />,
    s2:  <S2 d={form} set={setForm} onNext={next} onBack={back} onRestart={() => navigate(0)} />,
    s3:  <S3 d={form} set={setForm} onNext={next} onBack={back} />,
    s4:  <S4 email={form.email} onNext={next} />,
    s4b: <S4b onNext={next} />,
    s5:  <S5 onHome={() => navigate(0)} />,
    cs1: <CS1 email={statusEmail} setEmail={setStatusEmail} onNext={next} />,
    cs2: <CS2 email={statusEmail} onNext={next} />,
    cs3: <CS3 onNext={next} />,
    cs4: <CS4 onLogout={() => navigate(0)} />,
    o1:  <O1 onNext={next} onApply={() => selectSection('application')} />,
    o2:  <O2 onNext={next} />,
    o3:  <O3 d={onb} set={setOnb} onNext={next} onBack={() => navigate(0)} />,
    o4:  <O4 onNext={next} />,
    o5:  <O5 d={onb} set={setOnb} onNext={next} onBack={() => navigate(2)} />,
    o6:  <O6 d={onb} set={setOnb} onNext={next} onBack={back} />,
    o7:  <O7 onNext={next} onBack={back} />,
    o8:  <O8 onNext={next} onBack={back} />,
    o9:  <O9 onNext={next} onBack={back} />,
    o10: <O10 onNext={next} onBack={back} />,
    o10b: <O10b onNext={next} />,
    o11: <O11 onDone={() => navigate(0)} />,
  };

  const isFade = exiting && isFadePair(flow[exiting.idx], flow[idx]);

  const enterClass = exiting ? (isFade ? 'fade-in'    : exiting.dir > 0 ? 'enter-right' : 'enter-left') : '';
  const exitClass  = exiting ? (isFade ? 'fade-out'   : exiting.dir > 0 ? 'exit-left'   : 'exit-right') : '';

  const selectSection = (id) => {
    setSection(id);
    setExiting(null);
    setIdx(0);
  };

  return (
    <div id="layout">
      <nav id="sidenav">
        <div className="sidenav-title">User Journeys</div>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`sidenav-item ${section === item.id ? 'active' : ''}`}
            onClick={() => selectSection(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div id="device">
        {flow.length > 0 ? (
          <>
            {exiting !== null && (
              <div key={`${section}-e-${exiting.idx}`} className={`screen ${exitClass}`} style={{ zIndex: 1 }}>
                {screens[flow[exiting.idx]]}
              </div>
            )}
            <div key={`${section}-c-${idx}`} className={`screen ${enterClass}`} style={{ zIndex: exiting ? 2 : 0 }}>
              {screens[flow[idx]]}
            </div>
            {(() => {
              const steps = STEP_MAPS[section];
              const pos = steps ? steps.indexOf(flow[idx]) : -1;
              return pos >= 0 && <JourneyProgress pct={(pos + 1) / (steps.length + 1)} />;
            })()}
          </>
        ) : (
          <div className="screen" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: 8, color: '#fff', textAlign: 'center', padding: 24,
          }}>
            <div style={{ fontSize: 18, fontWeight: 700 }}>
              {NAV_ITEMS.find((i) => i.id === section)?.label}
            </div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>Coming soon</div>
          </div>
        )}
      </div>
    </div>
  );
}
