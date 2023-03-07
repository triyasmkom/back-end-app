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
        // Handling body request
        let body = []

        req.on('data', (chunk)=>{
            body.push(chunk)
        })

        req.on('end', ()=>{
            body = Buffer.concat(body).toString()
            const {name} = JSON.parse(body)
            res.end(`<h1>Hai, ${name}!</h1>`)
        })


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
panggil melalui cmd:

curl -X POST -H "Content-Type: application/json" http://localhost:5000 -d "{\"name\": \"Dimas\"}"
 */



