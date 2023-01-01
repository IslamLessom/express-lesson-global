const fs = require('fs')
const zlib = require('zlib')

const readStream = fs.createReadStream("./docs/text.txt") //читает файл
const writeStream = fs.createWriteStream("./docs/text-new.txt") //создает файл
const compressStream = zlib.createGzip() // сжимает файл

//начинаем взаимодейсоввать с ним 

//читаем поток
// readStream.on('data', (chunk) => {
//     console.log('--------')
//     console.log(chunk.toString())
// })

//переписываем поток
// readStream.on('data', (chunk) => {
//     writeStream.write("\n-------Chunk START-----\n")
//     writeStream.write(chunk)
//     writeStream.write("\n-------Chunk END-----\n")
// })

const handleError = () => {
    console.log('Error')
    readStream.destroy() // destroy - уничножает читающий проект если есть ошибка
    writeStream.end('Finished with error....') // end - если есть ошибка то в конце выведет текст
}

//поток

readStream
    .on('error', handleError) //ошибка
    .pipe(compressStream) //сжимает 
    .pipe(writeStream) //создает файл
    .on('error', handleError) //ошибка