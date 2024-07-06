import { DefaultTheme } from 'styled-components';

// export const darkTheme: DefaultTheme = {
//   bodyColor: 'black',
//   sideBarBgColor: 'black',
//   sideBarTextColor: '#888888',
//   bgColor: 'black',
//   borderColor: 'rgba(255, 255, 255, 0.4)',
//   blurBgColor: 'rgba(172, 172, 172, 0.8)',
//   textColor: '#888888',
//   highLightBgColor: '#626161',
//   highLightTextColor: '#FFFFFF',
//   logInTheme: {
//     textColor: '#ffffff',
//   },
//   mainPage: {
//     highlightTextColor: '#FAFAFA',
//     TitleColor: '#D6D6D6',
//     textColor: '#888888',
//     mostHighlightColor: '#FFFFFF',
//     boxShadow: 'rgba(255, 255, 255, 0.14) 0px 0px 0px 1px',
//   },
// };

const deviceSizes = {
  tablet: 910,
  laptop: 1200,
};

export const darkTheme: DefaultTheme = {
  device: {
    mobile: `(max-width: ${deviceSizes.tablet}px)`,
    tablet: `(min-width: ${deviceSizes.tablet}px) and (max-width: ${deviceSizes.laptop}px)`,
    laptop: `screen and (min-width: ${deviceSizes.laptop}px)`,
  },
  bodyColor: 'black',
  sideBarBgColor: 'black',
  sideBarTextColor: '#888888',
  bgColor: '#ffffff',
  borderColor: 'black',
  blurBgColor: 'rgba(172, 172, 172, 0.8)',
  textColor: 'black',
  highLightBgColor: '#626161',
  highLightTextColor: '#FFFFFF',
  logInTheme: {
    textColor: '#ffffff',
  },
  mainPage: {
    highlightTextColor: '#FAFAFA',
    TitleColor: '#D6D6D6',
    textColor: '#888888',
    mostHighlightColor: '#FFFFFF',
    boxShadow: 'rgba(255, 255, 255, 0.14) 0px 0px 0px 1px',
  },
};

export const lightTheme: DefaultTheme = {
  bodyColor: 'black',
  sideBarBgColor: 'black',
  sideBarTextColor: '#888888',
  bgColor: '#ffffff',
  borderColor: 'black',
  blurBgColor: 'rgba(172, 172, 172, 0.8)',
  textColor: 'black',
  highLightBgColor: '#626161',
  highLightTextColor: '#FFFFFF',
  logInTheme: {
    textColor: '#ffffff',
  },
  mainPage: {
    highlightTextColor: '#FAFAFA',
    TitleColor: '#D6D6D6',
    textColor: '#888888',
    mostHighlightColor: '#FFFFFF',
    boxShadow: 'rgba(255, 255, 255, 0.14) 0px 0px 0px 1px',
  },
};
