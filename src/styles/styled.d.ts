import 'styled-components'

declare module 'styled-components' {
  interface DefaultTheme {
    borderRadius: string;
    colors: {
      main: string;
      secondary: string;
    };
    display: {
      flex: string;
      grid: string;
    }
    margin: string;
    cursor: string;
    gridTemplateColumns: {
      high: string;
      huge: string;
      little: string;
    }
    gridCenterItems: string
  };
}
