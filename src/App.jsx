import { useState, useCallback } from 'react';
import S0 from './screens/S0';
import S1 from './screens/S1';
import S2 from './screens/S2';
import S3 from './screens/S3';
import S4 from './screens/S4';
import S4b from './screens/S4b';
import S5 from './screens/S5';

const FLOW = ['s0', 's1', 's2', 's3', 's4', 's4b', 's5'];

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
    setExiting({ idx, dir });
    setIdx(next);
    setTimeout(() => setExiting(null), 360);
  }, [idx, exiting]);

  const next = () => navigate(Math.min(idx + 1, FLOW.length - 1));
  const back = () => navigate(Math.max(idx - 1, 0));

  const screens = {
    s0:  <S0 onNext={next} />,
    s1:  <S1 d={form} set={setForm} onNext={next} onBack={back} />,
    s2:  <S2 d={form} set={setForm} onNext={next} onBack={back} />,
    s3:  <S3 d={form} set={setForm} onNext={next} onBack={back} />,
    s4:  <S4 email={form.email} onNext={next} />,
    s4b: <S4b onNext={next} />,
    s5:  <S5 />,
  };

  const enterClass = exiting ? (exiting.dir > 0 ? 'enter-right' : 'enter-left') : '';
  const exitClass  = exiting ? (exiting.dir > 0 ? 'exit-left'   : 'exit-right') : '';

  return (
    <div id="device">
      <div key={`c-${idx}`} className={`screen ${enterClass}`}>
        {screens[FLOW[idx]]}
      </div>
      {exiting !== null && (
        <div key={`e-${exiting.idx}`} className={`screen ${exitClass}`} style={{ zIndex: 1 }}>
          {screens[FLOW[exiting.idx]]}
        </div>
      )}
    </div>
  );
}
