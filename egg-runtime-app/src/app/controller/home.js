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
    <h1>Serverless Devs + Egg.js</h1>
    <p>Welcome to Alibaba Serverless Devs + Egg.js</p>
    <h2> 部署一个 Egg 应用</h2>
    <img style="width: 500px" src="https://images.devsapp.cn/devs-github/logo.jpg"/>
    <h3>步骤一. 准备工作</h3>
    <p>具体步骤请参照 <a href="https://www.serverless-devs.com/docs/install">准备云开发环境和 Serverless Devs 命令工具</a>
    </p>
    <h3>步骤二. 初始化应用示例</h3>
    <p>s init egg-runtime-app</p>
    <h3>步骤三. 一键部署</h3>
    <p>进入到项目目录，在命令行执行</p>
    <pre>s deploy</pre>
    <h2>开发部署工具: <a href="https://github.com/Serverless-Devs/Serverless-Devs">Serverless Devs</a></h2>
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
