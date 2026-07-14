// Dark theme (NARS brand)
export const C = {
  bg:          '#000000',
  text:        '#ffffff',
  sub:         'rgba(255,255,255,0.8)',
  muted:       'rgba(255,255,255,0.5)',
  dimmed:      'rgba(255,255,255,0.7)',
  inputBg:     'rgba(255,255,255,0.1)',
  inputBorder: 'rgba(255,255,255,0.4)',
  inputFocus:  'rgba(255,255,255,0.6)',
  border:      'rgba(255,255,255,0.2)',
};

export const COUNTRIES = [
  'United Kingdom','United States','United Arab Emirates','Australia','Canada',
  'Germany','France','Netherlands','Spain','Ireland','New Zealand',
];

// The market this programme is open to, and sibling programmes in other markets
export const PROGRAMME_MARKET = 'United Kingdom';
export const SIBLING_PROGRAMMES = {
  'United Arab Emirates': { region: 'the UAE', name: 'NARS Friends With Benefits UAE' },
};

// City options for the signup details screen; cities outside the
// programme market map to their country for the conflict check
export const CITIES = [
  'London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow',
  'Edinburgh', 'Bristol', 'Dubai', 'Berlin', 'New York',
];
export const CITY_TO_COUNTRY = {
  Dubai: 'United Arab Emirates',
  Berlin: 'Germany',
  'New York': 'United States',
};
