import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System', // fallback for web or unkown
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  bgColors: {
    nav: '#24292e',
  },
};

export default theme;
