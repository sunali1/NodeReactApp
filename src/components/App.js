import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';


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
    this.setState({
      pageHeader: this.state.contests[contestId].contestName,
      currentContestId: contestId
    });
  };
  currentContent(){
    if (this.state.currentContestId){
      return <Contest {...this.state.contests[this.state.contestId]} />;
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
