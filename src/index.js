import React from 'react';
import ReactDOM from 'react-dom';
import {PropTypes} from 'prop-types';

const Header = ({message}) => {
  return(
    <h2 className="text-center">
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
    <div>
      <Header message= 'Naming Contests' />
    </div>
  );
};

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
