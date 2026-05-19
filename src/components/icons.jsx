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

export const IcoGoogle = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M18.17 10.23c0-.67-.06-1.32-.17-1.94H10v3.67h4.59a3.93 3.93 0 0 1-1.7 2.57v2.14h2.74c1.6-1.48 2.54-3.65 2.54-6.44z" fill="#4285F4"/>
    <path d="M10 18.5c2.3 0 4.23-.76 5.64-2.06l-2.74-2.14c-.76.51-1.73.81-2.9.81-2.23 0-4.12-1.5-4.8-3.53H2.37v2.2A8.5 8.5 0 0 0 10 18.5z" fill="#34A853"/>
    <path d="M5.2 11.58A5.1 5.1 0 0 1 4.93 10c0-.55.1-1.08.27-1.58V6.22H2.37A8.5 8.5 0 0 0 1.5 10c0 1.37.33 2.67.87 3.78l2.83-2.2z" fill="#FBBC05"/>
    <path d="M10 4.89c1.26 0 2.38.43 3.27 1.28l2.44-2.44A8.46 8.46 0 0 0 10 1.5a8.5 8.5 0 0 0-7.63 4.72l2.83 2.2C5.88 6.4 7.77 4.89 10 4.89z" fill="#EA4335"/>
  </svg>
);

export const IcoTikTok = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M14.24 1h-2.97v11.83a2.63 2.63 0 0 1-2.62 2.52 2.63 2.63 0 0 1-2.62-2.52 2.63 2.63 0 0 1 2.62-2.52c.26 0 .5.04.74.1V7.44a5.97 5.97 0 0 0-.74-.05 5.57 5.57 0 0 0-5.57 5.44 5.57 5.57 0 0 0 5.57 5.44 5.57 5.57 0 0 0 5.57-5.44V6.1a7.72 7.72 0 0 0 4.52 1.45V4.6a4.54 4.54 0 0 1-4.5-3.6z"/>
  </svg>
);

export const IcoMeta = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M2 12.8c0 2.1 1.3 3.5 3.1 3.5.9 0 1.8-.5 2.8-1.9l1.6-2.4 1.6 2.4c1 1.4 1.9 1.9 2.8 1.9 1.8 0 3.1-1.4 3.1-3.5 0-1.7-.9-3.6-2.3-5.2-.9-1.1-1.8-1.6-2.6-1.6-.7 0-1.4.4-2.3 1.8L10 9l-.8-1.2C8.3 6.4 7.6 6 6.9 6c-.8 0-1.7.5-2.6 1.6C2.9 9.2 2 11.1 2 12.8z" fill="url(#meta-g)"/>
    <defs>
      <linearGradient id="meta-g" x1="2" y1="6" x2="18" y2="16.3" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0082FB"/>
        <stop offset="1" stopColor="#0064E1"/>
      </linearGradient>
    </defs>
  </svg>
);
