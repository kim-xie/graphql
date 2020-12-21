module.exports = (context) => {
  console.log(context.errors.map(item => item.message))
}