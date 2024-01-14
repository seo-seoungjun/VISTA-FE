import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bodyColor: string;
    sideBarBgColor: string;
    sideBarTextColor: string;
    borderColor: string;
    bgColor: string;
    blurBgColor: string;
    textColor: string;
    highLightBgColor: string;
    highLightTextColor: string;
    logInTheme: {
      textColor: string;
    };
  }
}
