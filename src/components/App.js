import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {

  state = {
    pageHeader: 'Naming Contests',
    test: 47
  };
  render(){
    return (
      <div>
        <div className= "App">
          <Header message= {this.state.pageHeader} />
        </div>
        <div>
          <ContestPreview {...this.props.contests}/>
        </div>
      </div>
    );
  }
}

export default App;
