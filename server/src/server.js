const morgan = require('morgan');
const app = require('./app');
const config = require('./config.json');
const PORT = process.env.PORT || config.port;

app.use(morgan('dev'));
app.disable('x-powered-by');

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
