import { DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    main: 'black',
    secondary: 'green',
    white: '#f1f1f1',
    gray: '#888',
    brown: '#555',
  },

  display: {
    flex: 'flex',
    grid: 'grid',
  },
  border: {
    solid: '1px solid #000'
  },
  padding: {
    p5: '5px 21px'
  },
  margin: {
    m10: '10px',
    auto: 'auto',
  },
  cursor: 'pointer',
  gridTemplateColumns: {
    high: '300px 300px',
    huge: '1fr 1fr',
    little: '50px 50px'
  },
  wrap: 'wrap',
  centerItems: 'center',
  spaceBetween: 'space-between',
  shadow: '5px 5px 15px -6px #000',
  overflow: {
    scroll: 'scroll',
    hidden: 'hidden',
    visible: 'visible',
    breakWord: 'break-word',
  },
  transform: {
    scale: {
      min: 'scale(1.03)',
      average: 'scale(1.2)',
      max: 'scale(2)',
    },
  },
  transition: {
    all05: "all 0.5s"
  },
  width: {
    w3: '3px',
    w60p: '60%',
    w100: '100px',
    w200: '200px',
    w300: '300px',
    w500: '500px',
    w800: '800px'
  },
  height: {
    h55: '55px',
    h100: '100px',
    h200: '200px',
    h300: '300px',
    h500: '500px',
    h800: '800px',
    h100vh: '100vh',
  },
  
};

export { myTheme };
