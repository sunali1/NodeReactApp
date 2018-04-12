import config from './config';
import router from './api';

import sassMiddleware from 'node-sass-middleware';
import path from 'path';


import express from 'express';
const server = express();
//node-sass-middleware
server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));
server.set('view engine', 'ejs');

import './serverRender'; //this first serves the data before React kicks in

server.get('/', (req, res) => {
  res.render('index', {
    content: '...'
  });
});
//express middleware
server.use('/api', router);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Express listening on port ', config.port);
});
