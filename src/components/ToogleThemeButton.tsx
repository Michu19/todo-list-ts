import * as React from 'react';
import ThemeContext from '../context/ThemeContext';
import Button from '@material-ui/core/Button';

type Props = {};

export default function ToggleThemeButton(props: Props) {
  return (
    <ThemeContext.Consumer>
      {({ toggleTheme }) => <Button color="secondary" onClick={toggleTheme} {...props} >Zmień kolor</Button>}
    </ThemeContext.Consumer>
  );
}