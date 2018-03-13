function route(pathname, handle, response) {
        console.log('petición de ' + pathname);
	if ( typeof handle[pathname] === 'function' ){
		handle[pathname](response); // del response se n'encarrega el handle
	} else {
		response.writeHead(404, {'Content-type':'text/html'});
		response.write('404');
		response.end();
	}
}       

exports.route=route;

