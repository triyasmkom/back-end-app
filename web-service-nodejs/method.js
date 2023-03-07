console.log('Hallo, kita akan belajar membuat server')

const http = require('http')

const requestListener = (req, res) =>{
    res.setHeader('Content-Type', 'text/html')
    res.statusCode = 200

    // Handling with method request
    if (req.method === 'GET'){
        res.end(`<h1>Hallo HTTP Server with method ${req.method}!</h1>`)
    }

    if (req.method === 'POST'){
        res.end(`<h1>Hallo HTTP Server with method ${req.method}!</h1>`)
    }

    if (req.method === 'DELETE'){
        res.end(`<h1>Hallo HTTP Server with method ${req.method}!</h1>`)
    }

    if (req.method === 'PUT'){
        res.end(`<h1>Hallo HTTP Server with method ${req.method}!</h1>`)
    }

}

const server = http.createServer(requestListener)
const port = 5000
const host = 'localhost'
/*
port (number) : jalur yang digunakan untuk mengakses HTTP server.
hostname (string) : nama domain yang digunakan oleh HTTP server.
backlog (number) : maksimal koneksi yang dapat ditunda (pending) pada HTTP server.
listeningListener (function) : callback yang akan terpanggil ketika HTTP server sedang bekerja (listening).
 */


server.listen(port, host, ()=>{
    console.log(`Server berjalan pada http://${host}:${port}`)
})

/*
panggil melalui cmd

curl -X GET http://localhost:5000
curl -X POST http://localhost:5000
curl -X PUT http://localhost:5000
curl -X DELETE http://localhost:5000
 */




