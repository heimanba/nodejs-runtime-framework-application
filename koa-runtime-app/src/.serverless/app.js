const Koa = require('koa');
const Router = require("koa-router");
const router = new Router()
const app = new Koa();

router
  .get("/koa", (ctx) => {
    ctx.body = 'Hello Koa!';
  })
  .get("/", async (ctx) => {
    ctx.body = "Hello World!";
  })
app.use(router.routes());

// app.listen(3003);
module.exports = app
