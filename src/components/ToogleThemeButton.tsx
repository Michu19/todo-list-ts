import * as React from 'react';
import ThemeContext from '../context/ThemeContext';

type Props = {};

export default function ToggleThemeButton(props: Props) {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => <button style={theme} onClick={toggleTheme} {...props} />}
    </ThemeContext.Consumer>
  );
}