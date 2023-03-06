const fs = require('fs')
const path = require("path");

const writableStream = fs.createWriteStream(path.resolve(__dirname,'output.txt'))


writableStream.write('Ini merupakan baris pertama!\n')
writableStream.write('Ini merupakan baris kedua!\n')
writableStream.end('Akhir dari writable stream!')
