const fs = require('fs')
const path = require("path");

const readableStream = fs.createReadStream(path.resolve(__dirname, 'articles.txt'),{
    highWaterMark: 10
})

readableStream.on('readable', ()=>{
    try{
        process.stdout.write(`[${readableStream.read()}]`)
    }catch (error){
        // error
        console.log("Error")
    }
})

readableStream.on('end', ()=>{
    console.log('Done')
})
