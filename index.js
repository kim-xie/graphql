const { ApolloServer } = require("apollo-server-koa");
const Koa = require("koa");
const Router = require("koa-router");
const body = require("koa-bodyparser");
const schema = require("./schema");
const plugins = require("./plugins");

const port = 8080;

// 构造Apollo Server;
const server = new ApolloServer({
  schema,
  plugins,
  context: ctx => {
    // console.log('context',ctx)
  },
  formatError: err => {
    return err.message;
  }
});

const app = new Koa();
const router = new Router();

// 将server作为中间件
server.applyMiddleware({ app, mocks: true, cors: true });

app.use(async(ctx, next) => {
  // console.log('ctx',ctx)
  await next();
})

app.use(body()).use(router.routes()).use(router.allowedMethods());

// 启动监听，注意将原来的server改为app
app.listen(port, () => {
    console.log("================================================================================");
    console.log(`Apollo GraphQL Server are listening at http://localhost:${port}${server.graphqlPath}`);
    console.log("================================================================================");
});