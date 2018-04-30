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

import serverRender from './serverRender'; //this first serves the data before React kicks in

server.get(['/', '/contests/:contestId'], (req, res) => {
  serverRender(req.params.contestId)
    .then(({ initialMarkup, initialData }) => {
      res.render('index', {
        initialMarkup,
        initialData
      });
    })
    .catch(error => {
      console.log(error);
    });
});

//express middleware
server.use('/api', router);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});
