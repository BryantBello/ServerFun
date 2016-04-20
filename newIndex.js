var http = require('http');
var url = require('url');

var port = 2424;

var server = http.createServer(handleRequest);

function handleRequest(req,res){
	var urlParts = url.parse(req.url);
	console.log(urlParts);

	switch(urlParts.pathname){
		case'/':
			home(urlParts.pathname,req,res);
			break;
		case'/portfolio':
			portfolio(urlParts.pathname,req,res);
			break;
		case'/about-me':
			aboutMe(urlParts.pathname,req,res);
			break;
		case'/contact':
			contact(urlParts.pathname,req,res);
			break;
		default:
			fourOhFour(urlParts.pathname,req,res);
	};

	function home(url,req,res){
		var myhtml = 	'<html>' +
						'<body>'+
						'<h1>Home Page</h1>'+
						'<a href="/">Home</a><br>'+
						'<a href="/portfolio">Portfolio</a><br>'+
						'<a href="/about-me">About Me</a><br>'+
						'<a href="/contact">Contact Me</a><br>'+
						'</body>'+
						'</html>';
		res.writeHead(200, {'Content-Type': 'text/html'});

		res.end(myhtml);
	};

	function portfolio(url,req,res){
		var myhtml = 	'<html>' +
						'<body>'+
						'<h1>My Portfolio</h1>'+
						'<a href="/">Home</a><br><br>'+
						'<a href="/portfolio">Portfolio</a><br>'+
						'<a href="/about-me">About Me</a><br>'+
						'<a href="/contact">Contact Me</a><br>'+
						'</body>'+
						'</html>';
		res.writeHead(200, {'Content-Type': 'text/html'});

		res.end(myhtml);
	};
	
	function aboutMe(url,req,res){
		var myhtml = 	'<html>' +
						'<body>'+
						'<h1>About Me</h1>'+
						'<a href="/">Home</a><br><br>'+
						'<a href="/portfolio">Portfolio</a><br>'+
						'<a href="/about-me">About Me</a><br>'+
						'<a href="/contact">Contact Me</a><br>'+
						'</body>'+
						'</html>';
		res.writeHead(200, {'Content-Type': 'text/html'});

		res.end(myhtml);
	};

	function contact(url,req,res){
		var myhtml = 	'<html>' +
						'<body>'+
						'<h1>Contact Us</h1>'+
						'<a href="/">Home</a><br>'+
						'<a href="/portfolio">Portfolio</a><br>'+
						'<a href="/about-me">About Me</a><br>'+
						'<a href="/contact">Contact Me</a><br>'+
						'</body>'+
						'</html>';
		res.writeHead(200, {'Content-Type': 'text/html'});

		res.end(myhtml);
	};

	function fourOhFour(url,req,res){
		var myhtml = 	'<html>' +
						'<body>'+
						'<h1>404 NOT FOUND</h1>'+
						'<h1>Nothing found at URL: '+url+'</h1>'+
						'<a href="/">Home</a><br>'+
						'<a href="/portfolio">Portfolio</a><br>'+
						'<a href="/about-me">About Me</a><br>'+
						'<a href="/contact">Contact Me</a><br>'+
						'</body>'+
						'</html>';
		res.writeHead(200, {'Content-Type': 'text/html'});

		res.end(myhtml);
	};

};

server.listen(port,function(){
	console.log("Server is listening on PORT: " + port);
});