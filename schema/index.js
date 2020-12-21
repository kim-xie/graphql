const {makeExecutableSchema} = require("apollo-server-koa");
const typeDefs = require("../types");
const resolvers = require("../resolver");

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
})