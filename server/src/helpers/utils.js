const log = type => (...msg) => {
  if (process.env.NODE_ENV.toLowerCase() !== 'debug') {
    return;
  }

  const now = new Date(Date.now()).toGMTString();
  const out = `[${now}]: ${msg}`;

  if (type === 'err') {
    return console.error(out);
  }

  console.info(out);
}

exports.log = {
  info: log('info'),
  err: log('err')
}
