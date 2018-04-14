import React from 'react';
import axios from 'axios';
import Header from './Header';
import ContestPreview from './ContestPreview';



class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests
  };
  componentDidMount() {
    axios.get('/api/contests')
      .then(response => {
        console.log(response);
        this.setState ({
          contests: response.data.contests
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  componentWillUnmount() {

  }
  render(){
    return (
      <div className= "App">
        <Header message= {this.state.pageHeader} />
        <div>
          {this.state.contests.map(contest =>
            <ContestPreview key={contest.id} {...contest} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
