const http = require('http')
const reqListener = (req, res)=>{
    res.setHeader('Content-Type', 'text/html')
    res.statusCode = 200
    res.end(`<h1>Hallo HTTP Server!</h1>`)

}

const server = http.createServer(reqListener)
const port = 5000
const host = 'localhost'

server.listen(port, host, ()=>{
    console.log(`Server, ${port}:${host}`)
})
