import React, {Component} from 'react';
import './App.css';
import AllTaskBlock from './components/container/AllTaskBlock';

class App extends Component {

  render() {

    return (
      <div className="App">
        <AllTaskBlock/>
      </div>
    );
  }
}

export default App;
