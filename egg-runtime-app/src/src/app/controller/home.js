'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.type = 'html';
    ctx.body = `<!DOCTYPE html>
<html>
  <head>
    <title>Egg.js</title>
  </head>
  <body>
    <h1>Egg.js</h1>
    <p>Welcome to Egg.js</p>
  </body>
</html>
`;
  }

  async api() {
    const { ctx } = this;
    ctx.body = { foo: 'bar' };
  }
}

module.exports = HomeController;
