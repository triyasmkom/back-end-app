const {nanoid} = require("nanoid");
const notes = require('./notes')
const addNoteHandler = (req, h)=>{

    // get parameter dari client
    const {title, tags, body} = req.payload

    // create parameter yang tidak ada di client
    const id = nanoid(16)
    const  createdAt = new Date().toISOString()
    const updatedAt = createdAt

    // simpan nilai/paramater di object
    const newNote = {
        id,title,tags,body, createdAt, updatedAt
    }
    console.log("Note", newNote)
    // simpan note di array
    notes.push(newNote)

    // cek note sudah tersimpan di array atau belum
    const isSuccess = notes.filter((note)=> note.id === id).length > 0
    console.log("isSuccess: ", isSuccess)
    if (isSuccess){
        const res = h.response({
            status: 'success',
            message: 'catatan berhasil ditambahkan',
            data: {
                noteId: id
            }
        })
        // res.header('Access-Control-Allow-Origin', '*')
        res.code(201)
        return res
    }

    const res = h.response({
        status: "fail",
        message: "Catatan gagal ditambahkan"
    })

    res.code(500)
    return res

}

const getAllNotesHandler = ()=>({
    status: 'success',
    data: {
        notes
    }
})

const getNoteByIdHandler = (req, h)=>{
    const {id} = req.params

    const note = notes.filter((n)=> n.id === id)[0];
    console.log(req.params, note, notes)
    if (note !== undefined){
        return {
            status: 'success',
            data: {
                note
            }
        }
    }

    const res = h.response({
        status: 'fail',
        messsage: 'catatan tidak ditemukan'
    })

    res.code(404)
    return  res
}

const updateNoteByIdHandler = (req, h)=>{
    const {id} = req.params

    const {title, tags, body} =  req.payload
    const updatedAt = new Date().toISOString()

    const index = notes.findIndex((note) => note.id === id)


    if (index !== -1){
        notes[index] = {
            ...notes[index],
            title,
            tags,
            body,
            updatedAt
        }

        const res = h.response({
            status: 'success',
            message: 'Catatan berhasil diperbarui'
        })

        res.code(200)
        return res
    }

    return h.response({
        status: 'fail',
        message: 'Gagal memperbarui catatan. Id tidak ditemukan'
    }).code(404)

}

const deleteNoteByIdHandler = (req, h)=>{
    const {id} = req.params

    const index = notes.findIndex((note) => note.id === id)

    if (index !== -1){
        notes.splice(index,1)
        return h.response({
            status: 'success',
            message: 'Catatan berhasil dihapus'
        }).code(200)
    }

    return h.response({
        status: 'fail',
        message: 'Gagal menghapus catatan. Id tidak ditemukan'
    }).code(404)
}
module.exports = {addNoteHandler, getAllNotesHandler, getNoteByIdHandler, updateNoteByIdHandler, deleteNoteByIdHandler}
