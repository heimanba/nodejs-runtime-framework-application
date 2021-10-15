import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<!DOCTYPE html>
    <html>
      <head>
        <title>nestjs</title>
      </head>
      <body>
        <h1>Serverless Devs + nestjs</h1>
        <p>Welcome to Alibaba Serverless Devs + nestjs</p>
        <h2> 部署一个 Nest 应用</h2>
        <img style="width: 500px" src="https://images.devsapp.cn/devs-github/logo.jpg"/>
        <h3>步骤一. 准备工作</h3>
        <p>
        具体步骤请参照 <a href="https://www.serverless-devs.com/docs/install">准备云开发环境和 Serverless Devs 命令工具</a>
        </p>
        <h3>步骤二. 初始化应用示例</h3>
        <pre>s init nest-runtime-app</pre>
        <h3>步骤三. 一键部署</h3>
        <p>进入到项目目录，在命令行执行</p>
        <pre>s deploy</pre>
        <h2>开发部署工具: <a href="https://github.com/Serverless-Devs/Serverless-Devs">Serverless Devs</a></h2>
      </body>
    </html>`;
  }
}
