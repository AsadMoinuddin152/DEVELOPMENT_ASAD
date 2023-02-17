const http = require('http');

const server = http.createServer((req,res) => {
    
    const pathName = req.url;

    if(pathName === '/asad') {
        res.end('Hello Asad!');
    } else if (pathName === "/moin"){
        res.end('Hello Moin!');
    } else {
        res.end('404');
    }
    
})
server.listen(8000, () => {
    console.log('listening on request port 8000');
});
