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
  margin: '15px',
  cursor: 'pointer',
  gridTemplateColumns: {
    high: '200px 200px',
    huge: '500px 500px',
    little: '50px 50px'
  },
  gridCenterItems: 'center'
};

export { myTheme };
