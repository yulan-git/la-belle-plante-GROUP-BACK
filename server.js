// ___________ SERVER ______________________
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db/data.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 80

// ___________ SERVER ______________________
server.use(middlewares)
server.use(router)
server.listen(port, () => {
    console.log('JSON Server is run');
})
