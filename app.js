//fs - file system
//наша задача используя fs прочитать содержимое файла text.txt

const fs = require('fs')

fs.readFile('./text.txt', 'utf-8', (error, data) => { // './text.txt' путь к файлу , текст которого мы хотим прочесть
    fs.mkdir('./files', () => { //создает папку
        //console.log(data) //что бы получить текст нужо использовать toString(), если этого не сделать то в ответ мы получим цифры, или используем utf-8
        fs.writeFile('./files/text2.txt', `${data} New text`, (error) => {
            error ? console.log(error) : null
        })
    })
})

setTimeout(() => {
    if (fs.existsSync('./files/text2.txt')) { //existsSync - удаляет если есть такая путь как - ./files/text2.txt
        fs.unlink('./files/text2.txt', () => { console.log('file deletes') })
    }
}, 4000)

setTimeout(() => {
    if (fs.existsSync('./files')) {
        fs.rmdir('./files', () => { console.log('dir deletes') })
    }
}, 6000)


