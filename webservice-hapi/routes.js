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
