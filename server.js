var http = require('http');
var url = require('url');

function init(route,handle) {
	function onRequest(request,response) {
		var dataPost="";
		request.addListener('data', function(chunk){
			dataPost+=chunk;
		});
		request.addListener('end', function(){
			route(url.parse(request.url).pathname, handle, response, dataPost;
		}
		/* DE ESTO SE ENCARGAN AHORA LOS HANDLERS
		body=route(url.parse(request.url).pathname, handle, response);
		response.writeHead(200,{'Content-type':'text/html'});
		response.write(body);
		response.end();
		*/
	}
http.createServer(onRequest).listen(8888);
console.log('init server');
}

exports.init=init;
