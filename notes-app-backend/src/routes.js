const {addNoteHandler, getAllNotesHandler, getNoteByIdHandler, updateNoteByIdHandler, deleteNoteByIdHandler} = require("./handler");
const routes = [
    // curl -X POST -H "Content-Type:application/json"  http://localhost:5000/notes -d "{\"title\":\"test\",\"body\":\"testing-body\",\"tags\":\"test-tags\"}"
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
        // options:{
        //     cors:{
        //         origin: ['*']
        //     }
        // }
    },

    // curl -X GET  http://localhost:5000/notes
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },

    // curl -X GET  http://localhost:5000/notes/{id}
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },

    // curl -X PUT -H "Content-Type:application/json"  http://localhost:5000/not":\"test-update\",\"body\":\"testing-body-update\",\"tags\":\"test-tags-update\"}"
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: updateNoteByIdHandler
    },

    // curl -X DELETE  http://localhost:5000/notes/{}
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler
    }
]

module.exports = routes
