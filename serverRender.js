/* initially fetch data directly from the api instead of waiting for React to fetch data and render */
import axios from 'axios';
import config from './config';

axios.get(`${config.serverUrl}/api/contests`)
  .then(response => {
    //console.log(response.data.contests);
    contests: response.data.contests;
  })
  .catch(error => {
    console.log(error);
  });
