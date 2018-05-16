var url = require('url');
var fs = require('fs');
//eval(fs.readFileSync('gpsScript.js')+'');


function render(path, response) {
	fs.readFile(path, null, function(error, data) {
		if(error){
			response.writeHead(404);
			response.write('File not found');
		}
		else{
			response.write(data);
		}
		response.end();
	});
}

module.exports = {
	handleRequest: function(request, response){
		response.writeHead(200, {'Content-Type': 'text/html'});
		
		var path = url.parse(request.url).pathname;
		switch(path){
			case '/':
				render('./home.html', response);
				break;
			case '/process':
				render('./process.html', response);
				break;
			case '/gpsScript.js':
				render('./gpsScript.js', response);
				break;
			default:
				response.writeHead(404);
				response.write('Route not defined');
				response.end();
		}
	}
};