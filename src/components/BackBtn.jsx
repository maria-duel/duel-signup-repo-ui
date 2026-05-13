import { C } from '../constants';
import { IcoBack } from './icons';

export default function BackBtn({ onClick }) {
  return (
    <button
      className="pressable"
      onClick={onClick}
      style={{
        position: 'absolute', top: 16, left: 16, width: 36, height: 36,
        borderRadius: 1000, background: C.stepIdle, border: 'none',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', color: C.text, zIndex: 10,
      }}
    >
      <IcoBack />
    </button>
  );
}
