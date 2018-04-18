import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ContestList from './ContestList';
// import Contest from './Contest';


const pushState = (obj, url) => {
  window.history.pushState(obj, '', url);
};

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests
  };
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  fetchContest = (contestId) => {
    pushState(
      {currentContestId: contestId },
      `/contests/${contestId}`
    );
    //display contests by contestsId
    this.setState({
      pageHeader: this.state.contests[contestId].contestName,
      currentContestId: contestId
    });
  };
  render(){
    return (
      <div className= "App">
        <Header message= {this.state.pageHeader} />
        <ContestList
          onContestClick={this.fetchContest}
          contests={this.state.contests} />
      </div>
    );
  }
}

App.propTypes = {
  initialContests: PropTypes.object
};

export default App;
