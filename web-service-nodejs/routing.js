const http = require('http')

const requestListener = (req, res) =>{
    res.setHeader('Content-Type', 'text/html')
    res.statusCode = 200

    if (req.url === '/'){
        if (req.method==='GET'){
            res.end(`<h1>curl -X GET http://localhost:5000/</h1>`)
        }
        res.end(`<h1>curl -X any http://localhost:5000/</h1>`)
    }

    if (req.url === '/about'){
        if (req.method === 'POST'){
            res.end(`<h1>curl -X ${req.method} http://localhost:5000/about</h1>`)
        }
        if (req.method === 'GET'){
            res.end(`<h1>curl -X ${req.method} http://localhost:5000/about</h1>`)
        }
        res.end(`<h1>curl -X any http://localhost:5000/about</h1>`)
    }

    res.end(`<h1>curl http://localhost:5000/any</h1>`)

}

const server = http.createServer(requestListener)
const port = 5000
const host = 'localhost'


server.listen(port, host, ()=>{
    console.log(`Server berjalan pada http://${host}:${port}`)
})






