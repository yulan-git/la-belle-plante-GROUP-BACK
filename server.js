// ___________ SERVER ______________________
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db/data.json')
const middlewares = jsonServer.defaults()

// ___________ SERVER ______________________
server.use(middlewares)
server.use(router)
server.listen(4000, () => {
    console.log('JSON Server is run');
})
