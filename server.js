const jsonServer = require('json-server');
const compression = require('compression');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(compression());
server.use(middlewares);
server.use(router);

const port = 3000;
server.listen(port, () => {
 console.log(`Json Server is running on port ${port}`);
});

