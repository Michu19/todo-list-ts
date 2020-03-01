import 'styled-components'

declare module 'styled-components' {
  interface DefaultTheme {
    borderRadius: string;
    colors: {
      main: string;
      secondary: string;
      white: string;
      gray: string;
      brown: string;
      purple: string;
    };
    display: {
      flex: string;
      grid: string;
    };
    margin: {
      m10: string;
      auto: string;
    }
    padding: {
      p5: string;
    }
    cursor: string;
    gridTemplateColumns: {
      high: string;
      huge: string;
      little: string;
    };
    wrap: string;
    centerItems: string;
    spaceBetween: string;
    shadow: string;
    border: {
      solid: {
        p1: string,
        p14: string,
      } 
    };
    overflow: {
      scroll: string;
      hidden: string;
      visible: string;
      breakWord: string;
    };
    transform: {
      scale: {
        min: string;
        average: string;
        max: string;
      };
    }
    transition: {
      all05: string;
    }
    width: {
      w3: string;
      w60p: string;
      w100: string;
      w200: string;
      w300: string;
      w500: string;
      w800: string;
    }
    height: {
      h55: string;
      h100: string;
      h200: string;
      h300: string;
      h500: string;
      h800: string;
      h100vh: string;
    }
  };
}
