import { useState, useCallback } from 'react';
import S0 from './screens/S0';
import S0b from './screens/S0b';
import S1 from './screens/S1';
import S2 from './screens/S2';
import S3 from './screens/S3';
import S4 from './screens/S4';
import S4b from './screens/S4b';
import S5 from './screens/S5';

const FLOW = ['s0', 's0b', 's1', 's2', 's3', 's4', 's4b', 's5'];

export default function App() {
  const [idx,     setIdx]     = useState(0);
  const [exiting, setExiting] = useState(null);
  const [form,    setForm]    = useState({
    firstName: '', lastName: '', email: '',
    dob: '', country: '', favoriteProduct: '',
    instagram: '', tiktok: '', youtube: '', twitch: '',
  });

  const navigate = useCallback((next) => {
    if (exiting !== null) return;
    const dir = next > idx ? 1 : -1;
    const from = FLOW[idx], to = FLOW[next];
    const fade = (from === 's0b' && to === 's1') || (from === 's1' && to === 's0b');
    setExiting({ idx, dir });
    setIdx(next);
    setTimeout(() => setExiting(null), fade ? 620 : 340);
  }, [idx, exiting]);

  const next = () => navigate(Math.min(idx + 1, FLOW.length - 1));
  const back = () => navigate(Math.max(idx - 1, 0));

  const screens = {
    s0:  <S0 onNext={next} />,
    s0b: <S0b onNext={next} onBack={back} />,
    s1:  <S1 d={form} set={setForm} onNext={next} onBack={back} />,
    s2:  <S2 d={form} set={setForm} onNext={next} onBack={back} />,
    s3:  <S3 d={form} set={setForm} onNext={next} onBack={back} />,
    s4:  <S4 email={form.email} onNext={next} />,
    s4b: <S4b onNext={next} />,
    s5:  <S5 onHome={() => navigate(0)} />,
  };

  const isFade = exiting && (() => {
    const from = FLOW[exiting.idx], to = FLOW[idx];
    return (from === 's0b' && to === 's1') || (from === 's1' && to === 's0b');
  })();

  const enterClass = exiting ? (isFade ? 'fade-in'    : exiting.dir > 0 ? 'enter-right' : 'enter-left') : '';
  const exitClass  = exiting ? (isFade ? 'fade-out'   : exiting.dir > 0 ? 'exit-left'   : 'exit-right') : '';

  return (
    <div id="device">
      {exiting !== null && (
        <div key={`e-${exiting.idx}`} className={`screen ${exitClass}`} style={{ zIndex: 1 }}>
          {screens[FLOW[exiting.idx]]}
        </div>
      )}
      <div key={`c-${idx}`} className={`screen ${enterClass}`} style={{ zIndex: exiting ? 2 : 0 }}>
        {screens[FLOW[idx]]}
      </div>
    </div>
  );
}
