const Koa = require("koa");
const render = require('koa-art-template');
const path = require("path");
const static = require("koa-static");

const app = new Koa();

// art-template模板渲染
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.art',
    debug: process.env.NODE_ENV !== 'production'
  });

// 使用koa-static中间件
app.use(static(__dirname + "/public"));


app.use(async ctx => {
    await ctx.render('index');
})

app.listen(3000);