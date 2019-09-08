const http = require('http');
const PORT = 3001;

const server = http.createServer((req, res) => {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    response.setHeader('Access-Control-Request-Method', '*');
    response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    response.setHeader('Access-Control-Allow-Headers', '*');
    console.log('req', req.method)
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        return res.end();
    }
});

server.listen(PORT, () => {
    console.log('MOCK API is running at ', PORT);
})