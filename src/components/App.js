import React from 'react';
import Header from './Header';

class App extends React.Component {
  state = {
    test: 47
  };
  render(){
    return (
      <div>
        <div className= "App">
          <Header message= 'Naming Contests' />
        </div>
        <div>
          {this.state.test}
        </div>
      </div>
    );
  }
}

export default App;
