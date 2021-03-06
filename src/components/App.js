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
  static propTypes = {
    initialData: PropTypes.object.isRequired
  };
  state = this.props.initialData;
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
        currentContestId: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest
        }
      });
    });
  }
  currentContest() {
    return this.state.contests[this.state.currentContestId];
  }
  //pageHeader -if currentContest has an Id return its name or return 'Naming Contests'
  pageHeader() {
    if(this.state.currentContestId){
      return this.currentContest().contestName;
    }

    return 'Naming Contests';
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
        <Header message= {this.pageHeader()} />
        {this.currentContent()}
      </div>
    );
  }
}

export default App;
