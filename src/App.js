import React from 'react';
import './App.scss';
import Quotes from './pages/Quote';


class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Quotes/>
      </div>
    );
  }
}

export default App;
