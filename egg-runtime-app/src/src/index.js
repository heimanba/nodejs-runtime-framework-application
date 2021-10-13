const { Application } = require('egg');
const serverless = require('@serverless-devs/fc-http');

const app = async (req, res, context) => {
  const instance = await new Application({
    env: 'prod',
    baseDir: __dirname,
  });

  instance.callback()(req, res, context)
}

exports.handler = serverless(app)


// const Http = require('http');

// Http.createServer(async (req, res, context) => {
//   await app(req, res)
// }).listen(3000);

