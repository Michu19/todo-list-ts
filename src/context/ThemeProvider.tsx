import React from 'react';
import ThemeContext, { themes, Theme } from './ThemeContext';

interface State {
  theme: Theme;
}
export class ThemeProvider extends React.Component<{}, State> {
  readonly state: State = { theme: themes.dark };

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    }));
  }

  render() {
    const { theme } = this.state;
    const { toggleTheme } = this;
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}