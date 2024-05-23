import http from 'http'
import EventEmitter from 'events'
import fs from 'fs'

const server = http.createServer()

console.log(server instanceof EventEmitter)

server.on('request', (req, res) => {

    switch(req.url){
        case '/home':
            res.writeHead(200, {'content-type':'text/plain'})
                res.write("Message From Server")
                res.end()
                break
        case '/api':
            res.writeHead(200, {'content-type':'application/json'})
            res.end(JSON.stringify([{name:'Iphone15', price:75456.5},{name:'OnePlus12', price:55456.5}]))
            break

        case '/about':
        case '/news':
            res.writeHead(200,{'content-type':'text/html'})
            res.end(fs.readFileSync(`.${req.url}.html`))
            res.end()
        case '/':
            res.writeHead(301, {'Location':'/home'})
            res.end()
            break
        default:
            res.writeHead(404)
            res.end()
    }
    // res.writeHead(200, {'content-type':'text/plain'})
    // res.write("Message From Server")
    // res.end()
})

server.listen(9090, ()=> console.log('server strated'))