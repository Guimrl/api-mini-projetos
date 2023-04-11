const http = require('http');
const port = 3000;

const routes = {
    '/': 'Hello, World!',
    '/projects': 'Dive into the projects',
    '/mini-projects': 'Come into the mini projects'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(routes[req.url]);
});

server.listen(port, () => {
    console.log(`server listening on port: ${port}`);
});
