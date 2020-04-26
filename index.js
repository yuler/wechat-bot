const { json, send } = require('micro')

module.exports = (res, req) => {
  const data = await json(req)
  console.log(data)
  return 'xxx'
}