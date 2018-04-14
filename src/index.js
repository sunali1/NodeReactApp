import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import App from './components/App';

axios.get('/api/contests')
  .then(response => {
    ReactDOM.hydrate(
      <App initialContests={response.data.contests}/>,
      document.getElementById('root')
    );
  })
  .catch(console.error);
