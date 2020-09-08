import React from 'react';
import './App.scss';
import Quotes from './pages/Quote';


class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Quotes/>
      </div>
    );
  }
}

export default App;
