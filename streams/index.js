const fs = require('fs');


const zlib = require('zlib');
const gzip= zlib.createGzip();



const readableStream = fs.createReadStream('./file.txt', {
    encoding: 'utf-8',
    highWaterMark: 2,
})

const WriteableStream = fs.createWriteStream('./file2.txt');
readableStream.pipe(gzip).pipe(fs.createWriteStream('./file.txt.gz'))
readableStream.pipe(WriteableStream)

readableStream.on('data', (chunk) => {
    console.log(chunk)
    WriteableStream.write(chunk)
})