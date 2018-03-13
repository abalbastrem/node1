var exec = require('child_process').exec;
var querystring = require('querystring');

function inicio(response,dataPost){

	var body = '<html>' +
		'<head>' +
		'</head>' +
		'<body>' +
			'<form action="/adios" method="post">' +
				'<input type="text" />' +
				'<input type="submit" value="envia">' +
			'</form>' +
		'</body>' +
		'</html>';
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write(body);
	response.end();
}

function hola(response, dataPost){
	console.log('Resolviendo petición hola');
	response.writeHead(200, {'Content-type':'text/html'});
        response.write('hola mundo');
        response.end();
//	return 'hola mundo';
}

function adios(response, dataPost){
	console.log('Resolviendo petición adiós');
	response.writeHead(200, {'Content-type':'text/html'});
	response.write(querystring.parse(dataPost)['text']);
	response.write('adios mundo');
	response.end();
//	return 'adios mundo cruel';
}

exports.hola=hola;
exports.adios=adios;
exports.inicio=inicio;
