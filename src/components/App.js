import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';


class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: []
  };
  componentDidMount() {
    this.setState ({
      contests: data.contests
    });
  }
  componentWillUnmount() {

  }
  render(){
    return (
      <div>
        <div className= "App">
          <Header message= {this.state.pageHeader} />
        </div>
        {this.state.contests.map(contest =>
          <ContestPreview key={contest.id} {...contest} />
        )}
      </div>
    );
  }
}

export default App;
