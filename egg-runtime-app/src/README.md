# Egg 应用示例

这个目录是基于云开发的一个 [Egg](https://eggjs.org/zh-cn/) 应用示例，包含 Egg + 云函数，可以基于 **[Serverless Devs](https://www.serverless-devs.com/)** 框架将项目一键部署到云开发环境

## 部署一个 Egg 应用
![img](https://images.devsapp.cn/devs-github/logo.jpg)

### 步骤一. 准备工作

具体步骤请参照 [准备云开发环境和 Serverless Devs 命令工具](https://www.serverless-devs.com/docs/install)

### 步骤二. 初始化应用示例

在命令行执行

```
s init egg-runtime-app
```

### 步骤三. 一键部署

进入到项目目录，在命令行执行

```
s deploy
```

## 开发命令及配置

### 本地开发

```
npm run dev
```

### 上线部署

```
npm run deploy
```

### Serverless Devs 相关开发配置

查看 [Serverless Devs 配置](https://github.com/Serverless-Devs/Serverless-Devs).

### Egg 开发文档

查看 [starter](https://eggjs.org/en/intro/quickstart.html).
