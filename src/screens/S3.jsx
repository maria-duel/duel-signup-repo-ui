import { C } from '../constants';
import Input from '../components/Input';
import Btn from '../components/Btn';
import Steps from '../components/Steps';
import BackBtn from '../components/BackBtn';
import Footer from '../components/Footer';

export default function S3({ d, set, onNext, onBack }) {
  const ok = d.instagram.trim().length > 0 || d.tiktok.trim().length > 0;
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <BackBtn onClick={onBack} />
      <div style={{ position: 'absolute', top: 84, left: '50%', transform: 'translateX(-50%)' }}>
        <Steps step={2} />
      </div>
      <div style={{ position: 'absolute', top: 192, left: 16, width: 358, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div>
          <p style={{ fontSize: 20, color: C.text, margin: '0 0 4px', lineHeight: '28px' }}>Connect your Socials</p>
          <p style={{ fontSize: 14, color: C.sub, margin: 0, lineHeight: '18px' }}>Add Instagram or TikTok to continue. Other platforms are optional.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Input label="Instagram" placeholder="@yourhandle or instagram.com/yourhandle" value={d.instagram} onChange={v => set(p => ({ ...p, instagram: v }))} valid={d.instagram.trim().length > 0} />
          <Input label="TikTok"    placeholder="@yourhandle or tiktok.com/yourhandle"    value={d.tiktok}    onChange={v => set(p => ({ ...p, tiktok: v }))}    valid={d.tiktok.trim().length > 0} />
          <Input label="YouTube"   placeholder="@yourhandle or youtube.com/@yourhandle"  value={d.youtube}   onChange={v => set(p => ({ ...p, youtube: v }))}   valid={d.youtube.trim().length > 0} optional />
          <Input label="Twitch"    placeholder="@yourhandle or twitch.com/yourhandle"    value={d.twitch}    onChange={v => set(p => ({ ...p, twitch: v }))}    valid={d.twitch.trim().length > 0} optional />
        </div>
        <Btn label="Submit application" enabled={!!ok} onClick={onNext} />
      </div>
      <Footer />
    </div>
  );
}
