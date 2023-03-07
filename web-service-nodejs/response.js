const http = require('http')


const reqListener = (req, res)=>{
    res.setHeader('Content-Type', 'text/html')

    if (req.url ==='/'){
        if (req.method === 'GET'){
            res.setHeader('X-Powered-By', 'Node-JS')
            res.statusCode = 200
            res.end('<h1>Ini adalah homepage</h1>')
        } else{
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({
                message: 'Halaman tidak dapat diakses dengan ${req.method} request '
            }))
        }
    } else if (req.url === '/about'){
        if (req.method === 'GET'){
            res.statusCode = 200;
            res.end('<h1>Halo! Ini adalah halaman about</h1>')
        } else if (req.method === 'POST'){
            let body = []

            req.on('data', (chunk)=>{
                body.push(chunk)
            })

            req.on('end', ()=>{
                body = Buffer.concat(body).toString()
                const {name} = JSON.parse(body)

                res.statusCode = 200
                res.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`)
            })
        } else{
            res.statusCode = 400;
            res.end(`<h1>Halaman tidak dapat diakses menggunakan ${req.method} request</h1>`);
        }
    } else {
        res.statusCode = 404;
        res.end('<h1>Halaman tidak ditemukan!</h1>')
    }
}

const server = http.createServer(reqListener)
const port = 5000
const host = 'localhost'

server.listen(port, host, ()=>{
    console.log(`Server, ${port}:${host}`)
})



/*
curl -X GET http://localhost:5000/about -i

curl -X GET http://localhost:5000/test -i

curl -X DELETE http://localhost:5000/ -i

 */
