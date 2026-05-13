const sp = { stroke: 'currentColor', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' };
const Svg = ({ size = 20, children }) => (
  <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">{children}</svg>
);

export const IcoCheck = () => <Svg><path d="M4 10.5l4.5 4.5 7.5-9" {...sp} /></Svg>;
export const IcoUser  = () => <Svg><path d="M10 9.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" {...sp} /><path d="M3.5 17.5c0-3 2.9-5.5 6.5-5.5s6.5 2.5 6.5 5.5" {...sp} /></Svg>;
export const IcoList  = () => <Svg><path d="M3.5 5h13M3.5 10h13M3.5 15h13" {...sp} /></Svg>;
export const IcoCam   = () => <Svg><rect x="2" y="6" width="16" height="11" rx="2" {...sp} /><circle cx="10" cy="11.5" r="2.5" {...sp} /><path d="M7.5 6l1.2-2h2.6l1.2 2" {...sp} /></Svg>;
export const IcoMail  = () => <Svg><rect x="2" y="4" width="16" height="12" rx="2" {...sp} /><path d="M2 7.5l8 5 8-5" {...sp} /></Svg>;
export const IcoParty = () => <Svg><path d="M3.5 17L9 4l7 7.5L3.5 17z" {...sp} /><path d="M13 3l1 2.5M16.5 7l2-.5M15.5 12l2 1.5" {...sp} /></Svg>;
export const IcoChev  = () => <Svg><path d="M6 9l4 4 4-4" {...sp} /></Svg>;
export const IcoBack  = () => <Svg><path d="M13 4l-7 6 7 6" {...sp} /></Svg>;
