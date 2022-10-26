const Koa = require('koa');

const app = new Koa();
const Config = require('config');
const bodyParser = require('koa-bodyparser');
const { router } = require('./routers');
const { errorHandlingMiddleware } = require('./core/middlewares');

app.use(errorHandlingMiddleware);
app.use(bodyParser());
app.use(router.routes());

app.on('error', (err) => {
  console.log(err);
});

app.listen(Config.get('app.port'), () => {
  console.log(`App si running on port: ${Config.get('app.port')}`);
});
