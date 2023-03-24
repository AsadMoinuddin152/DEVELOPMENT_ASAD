/** @format */

const fs = require('fs');
const http = require('http');
const url = require('url');

/*
setTimeout(() => console.log('Time 1 finished'), 0);
setImmediate(() => console.log('Immediate 1 finished'));

//third one to get executes
const text = fs.readFIle('test-file.txt', 'utf-8');

console.log(text);
//First one to get executed
console.log('Hello from top level code');
*/
////////////////////////////////////////////////

const server = http.createServer();

server.on('request', (req, res) => {
    const { pathname } = url.parse(req.url);
    //Routing example
    //Default page '/' or 'home'
    if (pathname === '/' || pathname === '/home') {
        res.end('This is home page');
        console.log('Hello from home page');
    }
    //Page 2 'asad'
    else if (pathname === '/asad') {
        res.end('This is the asad page');
        console.log('Hello from asad page');
    }
    //Page 3 'swathi'
    else if (pathname === '/swathi') {
        res.end('This is the swathi page');
        console.log('Hello from swathi page');
    }
    //Page not found
    else {
        res.end('Page not Found');
    }
});

server.on('close', () => {
    console.log('Server closed');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Waiting for requests... on port 3000');
});
