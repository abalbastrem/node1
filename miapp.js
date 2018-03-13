var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};
handle['/']=requestHandlers.hola;
handle['/hola']=requestHandlers.hola;
handle['/adios']=requestHandlers.adios;
handle['/inicio']=requestHandlers.inicio;

server.init(router.route, handle);
