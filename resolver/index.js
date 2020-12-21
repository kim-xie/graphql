const books = require("../datasource");

const resolvers = {
  // 查询
  Query: {
    books: () => books,
  },
  // 修改
  // Mutations: {

  // },
  // 订阅
  // Subscribe: {

  // }
};

module.exports = resolvers;