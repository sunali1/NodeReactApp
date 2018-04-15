/* initially fetch data directly from the api instead of waiting for React to fetch data and render */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App.js';

import config from './config';
import axios from 'axios';


const serverRender = () =>
  axios.get(`${config.serverUrl}/api/contests`)
    .then(response => {
      return ReactDOMServer.renderToString(
        <App initialContests={response.data.contests} />
      );
    });
    
export default serverRender;
