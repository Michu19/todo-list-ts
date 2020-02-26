import { DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    main: 'cyan',
    secondary: 'magenta'
  },

  display: {
    flex: 'flex',
    grid: 'grid',
  },
  border: {
    solid: '1px solid #000'
  },
  margin: '10px',
  cursor: 'pointer',
  gridTemplateColumns: {
    high: '300px 300px',
    huge: '500px 500px',
    little: '50px 50px'
  },

  gridCenterItems: 'center',
  shadow: '0px 0px 9px -6px #000'
};

export { myTheme };
