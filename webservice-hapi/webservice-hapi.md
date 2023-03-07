# WEB SERVICE WITH FRAMEWORK HAPI

## Membuat HTTP Server
1. Buat folder project dan jalankan perintah 

```shell
npm init --y
```

kemudian setup di file package.json dan buat file server.js
```json
{
  "name": "webservice-hapi",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

2. Install package hapi

```shell
npm install @hapi/hapi
```

Struktur code Hapi Server
```js
const Hapi = require('@hapi/hapi')

const init = async ()=>{
    const server = Hapi.server({
        port: 5000,
        host: 'localhost'
    })

    await server.start()
    console.log(`Server berjalan pada ${server.info.uri}`)
}

init()
```
## Method Request dan Routing
```js
const Hapi = require('@hapi/hapi')

const init = async ()=>{
    const server = Hapi.server({
        port: 5000,
        host: 'localhost'
    })

    server.route({
        method: "GET",
        path: '/',
        handler:(req, h)=>{
            return 'Hello World!'
        }
    },{
        method:"GET",
        path: "/about",
        handler:(req, h)=>{
            return 'About Page'
        }
    })

    await server.start()
    console.log(`Server berjalan pada ${server.info.uri}`)
}

init()

```

alangkah baiknya berkas route dipisah secara mandiri:

routes.js
```js
const routes = [
    {
        method: "GET",
        path: '/',
        handler:(req, h)=>{
            return 'Homepage'
        }
    },{
        method: "*",
        path: '/',
        handler:(req, h)=>{
            return 'Halaman tidak dapat diakses dengan method tersebut'
        }
    },{
        method:"GET",
        path: "/about",
        handler:(req, h)=>{
            return 'About Page'
        }
    },{
        method: "*",
        path: '/about',
        handler:(req, h)=>{
            return 'Halaman tidak dapat diakses dengan method tersebut'
        }
    },{
        method: "*",
        path: '/{any*}',
        handler:(req, h)=>{
            return 'Halaman tidak ditemukan'
        }
    },
]

module.exports = routes

```

server.js
```js
const Hapi = require('@hapi/hapi')
const routes = require('./routes.js')
const init = async ()=>{
    const server = Hapi.server({
        port: 5000,
        host: 'localhost'
    })

    server.route(routes)

    await server.start()
    console.log(`Server berjalan pada ${server.info.uri}`)
}

init()
```


```shell
$ curl -X GET http://localhost:5000
Homepage

$ curl -X GET http://localhost:5000/about
About page

$ curl -X GET http://localhost:5000/test
Halaman tidak ditemukan

$ curl -X POST http://localhost:5000
Halaman tidak dapat diakses dengan method tersebut
```

## Path Parameter

```js
server.route({
    method: 'GET',
    path: '/users/{username}',
    handler: (request, h) => {
        const { username } = request.params;
        return `Hello, ${username}!`;
    },
});
```

routes.js
```js
const routes = [
    {
        method: "GET",
        path: '/',
        handler:(req, h)=>{
            return 'Homepage'
        }
    },

    {
        method: "*",
        path: '/',
        handler:(req, h)=>{
            return 'Halaman tidak dapat diakses dengan method tersebut'
        }
    },

    {
        method:"GET",
        path: "/about",
        handler:(req, h)=>{
            return 'About Page'
        }
    },

    {
        method: "*",
        path: '/about',
        handler:(req, h)=>{
            return 'Halaman tidak dapat diakses dengan method tersebut'
        }
    },

    {
        method: "GET",
        path: '/users/{username}',
        handler:(req, h)=>{
            const {username = 'Stranger'} = req.params
            return `Hello, ${username}`
        }
    },
    {
        method: "*",
        path: '/{any*}',
        handler:(req, h)=>{
            return 'Halaman tidak ditemukan'
        }
    },
]

module.exports = routes

```

```shell
$ curlhttp://localhost:5000/users/triyas
Hello, triyas
```

## Query Params

```js
server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        const { name, location } = request.query;
        return `Hello, ${name} from ${location}`;
    },
 });
```

routes.js
```js
const routes = [
    {
        method: "GET",
        path: '/',
        handler:(req, h)=>{
            return 'Homepage'
        }
    },

    {
        method: "*",
        path: '/',
        handler:(req, h)=>{
            return 'Halaman tidak dapat diakses dengan method tersebut'
        }
    },

    {
        method:"GET",
        path: "/about",
        handler:(req, h)=>{
            return 'About Page'
        }
    },

    {
        method: "*",
        path: '/about',
        handler:(req, h)=>{
            return 'Halaman tidak dapat diakses dengan method tersebut'
        }
    },

    {
        method: "GET",
        path: '/users/{username}',
        handler:(req, h)=>{
            const {username = 'Stranger'} = req.params
            return `Hello, ${username}`
        }
    },
    {
        method: "GET",
        path: '/user/{name?}',
        handler: (req, h)=>{
            const {name = "stranger"} = req.params
            const {lang} = req.query
            if (lang === 'id'){
                return `Hai, ${name}!`
            }
            return `Hello, ${name}!`
        }
    },

    {
        method: "*",
        path: '/{any*}',
        handler:(req, h)=>{
            return 'Halaman tidak ditemukan'
        }
    },
]

module.exports = routes

```

```shell
$ curl -X GET http://localhost:5000/user/triyas?lang=id
Hai, triyas!

$ http://localhost:5000/user/triyas
Hello, triyas!

```

## Body Payload Request
```js
server.route({
    method: 'POST',
    path: '/login',
    handler: (request, h) => {
        const { username, password } = request.payload;
        return `Welcome ${username}!`;
    },
});
```

contoh payload:
```json
{ 
  "username": "harrypotter", 
  "password": "encryptedpassword"
}
```

routes.js
```js
const routes = [
    {
        method: "GET",
        path: '/',
        handler:(req, h)=>{
            return 'Homepage'
        }
    },

    {
        method: "*",
        path: '/',
        handler:(req, h)=>{
            return 'Halaman tidak dapat diakses dengan method tersebut'
        }
    },

    {
        method:"GET",
        path: "/about",
        handler:(req, h)=>{
            return 'About Page'
        }
    },

    {
        method: "*",
        path: '/about',
        handler:(req, h)=>{
            return 'Halaman tidak dapat diakses dengan method tersebut'
        }
    },

    {
        method: "GET",
        path: '/users/{username}',
        handler:(req, h)=>{
            const {username = 'Stranger'} = req.params
            return `Hello, ${username}`
        }
    },
    {
        method: "GET",
        path: '/user/{name?}',
        handler: (req, h)=>{
            const {name = "stranger"} = req.params
            const {lang} = req.query
            if (lang === 'id'){
                return `Hai, ${name}!`
            }
            return `Hello, ${name}!`
        }
    },{
        method: "POST",
        path: '/users',
        handler: (req, h)=>{
            const {username, password} = req.payload
            if(password=== '12345'){
                return `Hello, ${username} bisa masuk !`
            }
            return `Hello, ${username} unauthorized!`
        }
    },

    {
        method: "*",
        path: '/{any*}',
        handler:(req, h)=>{
            return 'Halaman tidak ditemukan'
        }
    },
]

module.exports = routes

```

```shell
$ curl -X POST -H "Content-Type:application/json" http://localhost:5000/users  -d "{\"username\":\"triyas\", \"password\":\"123453\"}"
Hello, triyas unauthorized!
```

## Response Toolkit

```js
server.route({
    method: 'POST',
    path: '/user',
    handler: (request, h) => {
        return h.response('created').code(201);
    },
});
```


```js
// Detailed notation
const handler = (request, h) => {
    const response = h.response('success');
    response.type('text/plain');
    response.header('X-Custom', 'some-value');
    return response;
};
 
// Chained notation
const handler = (request, h) => {
    return h.response('success')
        .type('text/plain')
        .header('X-Custom', 'some-value');
};
```


