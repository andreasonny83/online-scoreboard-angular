const http = require('http');
const app = require('./app');
const config = require('./config.json');
const PORT = process.env.PORT || config.port;

app.set('port', PORT);

const server = http
  .createServer(app)
  .listen(app.get('port'), () => {
    console.log(`Server listening on port ${server.address().port} in ${app.get('env')} mode`);
  });
