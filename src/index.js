import React from 'react';
import ReactDOM from 'react-dom';
import {PropTypes} from 'prop-types';

const Header = ({message}) => {
  return(
    <h2 className="Header text-center">
      {message}
    </h2>
  );
};
Header.propTypes = {
  message: PropTypes.string.isRequired
};

Header.defaultProps = {
  message: 'Hello Default Message'
};

const App = () => {
  return (
    <div className= "App">
      <Header message= 'Naming Contests' />
    </div>
  );
};

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
