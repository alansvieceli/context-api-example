import React from 'react';

const ThemeContext = React.createContext('light');

function ThemedButton(props) {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <a style={{ backgroundColor: theme === 'dark' ? '#333' : '#CCC' }}>
          Meu botão
        </a>
      )}
    </ThemeContext.Consumer>
  );
}

class App extends React.Component {
  state = {
    theme: 'light',
  };

  changeTheme = () => {
    this.setState({ 
      theme: this.state.theme === 'light' 
        ? 'dark' 
        : 'light'
    });
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <button onClick={this.changeTheme}>Alterar tema</button>
        <ThemedButton />
      </ThemeContext.Provider>
    );
  }

}

export default App;
