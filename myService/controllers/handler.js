const getSessionLyrics = require('./getSessionLyrics');

'use strict';

module.exports.getLyrics = (event, context) => {

  getSessionLyrics(function (lyrics) {
  const response = {
    statusCode: 200,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({lyrics: lyrics})
  };

  context.succeed(response);
  });
};

