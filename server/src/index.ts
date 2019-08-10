const debug = require('debug')('api');
require('dotenv').config();
debug('Elucidat server starting...');
debug('logging with debug enabled!');

import startServer from './server';

startServer(process.env.PORT || 8080, PORT => {
  debug(`🚀 launched on ${PORT}`);
});
