import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';


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
    api.fetchContest(contestId).then(contest => {
      this.setState({
        pageHeader: contest.contestName,
        currentContestId: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest
        }
      });
    });
  }
  currentContest() {
    this.state.contests[this.state.currentContestId];
  }
  currentContent(){
    if (this.state.currentContestId){
      return <Contest {...this.currentContest()} />;
    }
    return <ContestList
      onContestClick={this.fetchContest}
      contests={this.state.contests} />;
  }
  render(){
    return (
      <div className= "App">
        <Header message= {this.state.pageHeader} />
        {this.currentContent()}
      </div>
    );
  }
}

App.propTypes = {
  initialContests: PropTypes.object
};

export default App;
