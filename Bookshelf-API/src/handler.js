const {nanoid} = require("nanoid");
const books = require('./books')
const addBook = (req, h)=>{
    const {
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading
    } = req.payload

    const id = nanoid(16)
    const insertedAt = new Date().toISOString()
    const updatedAt = insertedAt
    const finished = pageCount === readPage

    if (!name){
        return h.response({
            status: "fail",
            message: "Gagal menambahkan buku. Mohon isi nama buku"
        }).code(400)
    }

    if (readPage > pageCount){
        return h.response({
            status: "fail",
            message: "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount"
        }).code(400)
    }
    books.push({
        id,
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        finished,
        reading,
        insertedAt,
        updatedAt
    })

    const isSuccess = books.filter((book)=> book.id === id).length > 0

    if (isSuccess){

        return h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {
                bookId: id
            }
        }).code(201)
    }

    return h.response({
        status: "fail",
        message: "Catatan gagal ditambahkan"
    }).code(500)

}

const getAllBook = (req, h)=>{
    const {name, reading, finished} = req.query

    if(name){
        const book = books.filter((b)=> (b.name).toLowerCase === name.toLowerCase);
        console.log('name', name, book)
        if (book !== undefined){
            return h.response({
                status: 'success',
                data: {
                    books: obj(book)
                }
            }).code(200)
        }
        return h.response({
            status: 'success',
            data: {
                books:[]
            }
        }).code(200)
    }

    if (reading!==undefined){
        const book = books.filter((b)=> b.reading === (reading==='1'));
        console.log('reading', reading, book)
        if (book !== undefined){
            return h.response({
                status: 'success',
                data: {
                    books: obj(book)
                }
            }).code(200)
        }
        return h.response({
            status: 'success',
            data: {
                books:[]
            }
        }).code(200)
    }

    if (finished!==undefined){
        const book = books.filter((b)=> b.finished === (finished==='1'));
        console.log('finished', finished, book)
        if (book !== undefined){
            return h.response({
                status: 'success',
                data: {
                    books: obj(book)
                }
            }).code(200)
        }
        return h.response({
            status: 'success',
            data: {
                books:[]
            }
        }).code(200)
    }

    return h.response({status: 'success',
        data: {
            books: obj(books)
        }
    })

}

const obj = (books)=>{
    const result = []
    for (let i = 0; i< books.length; i++){
        result.push({
            id: books[i].id,
            name: books[i].name,
            publisher: books[i].publisher
        })
    }
    return result
}

const getBookById = (req, h)=>{
    const {id} = req.params

    const book = books.filter((b)=> b.id === id)[0];

    if (book !== undefined){
        return h.response({
            status: 'success',
            data: {
                book
            }
        }).code(200)
    }

    return  h.response({
        status: 'fail',
        message: 'Buku tidak ditemukan'
    }).code(404)
}

const editBookById = (req, h)=>{
    const {id} = req.params
    const {
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading
    } = req.payload

    if (!name){
        return h.response({
            status: "fail",
            message: "Gagal memperbarui buku. Mohon isi nama buku"
        }).code(400)
    }

    if (readPage > pageCount){
        return h.response({
            status: "fail",
            message: "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount"
        }).code(400)
    }

    const updatedAt = new Date().toISOString()

    const index = books.findIndex((book) => book.id === id)

    if (index !== -1){
        books[index] = {
            ...books[index],
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading,
            updatedAt
        }

        return h.response({
            status: 'success',
            message: 'Buku berhasil diperbarui'
        }).code(200)
    }

    return h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Id tidak ditemukan'
    }).code(404)

}

const deleteBookById = (req, h)=>{
    const {id} = req.params

    const index = books.findIndex((note) => note.id === id)

    if (index !== -1){
        books.splice(index, 1)
        return h.response({
            status: 'success',
            message: 'Buku berhasil dihapus'
        }).code(200)
    }

    return h.response({
        status: 'fail',
        message: 'Buku gagal dihapus. Id tidak ditemukan'
    }).code(404)
}

module.exports = {addBook, getAllBook, getBookById, editBookById, deleteBookById}
