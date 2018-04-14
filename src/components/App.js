import React from 'react';
//import PropTypes from 'prop-types';
import Header from './Header';
import ContestList from './ContestList';



class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests
  };

  // App.propTypes = {
  //   initialContests: PropTypes.array
  // };
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render(){
    return (
      <div className= "App">
        <Header message= {this.state.pageHeader} />,
        <ContestList contests={this.state.contests} />
      </div>
    );
  }
}

export default App;
