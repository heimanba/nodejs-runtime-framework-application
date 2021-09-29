const serverless = require('@serverless-devs/fc-http');
const nest = require('./nest');

exports.handler = serverless(nest);
