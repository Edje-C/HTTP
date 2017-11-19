const fs = require('fs')
const http = require('http');
const url = require('url')
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.writeHead(200, {'Content-Type': 'text/html'});

    if(req.url === "/page-2"){  
        data = fs.readFile('./index.html', 'utf8', (err, data) => {
            if(err){
                throw err
            }
            return data
        })

    res.write('hi');
    }
    
    res.end();
})

server.listen(port, () => console.log('Server listening'))