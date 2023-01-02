const http = require('http')

const PORT = 3000

const server = http.createServer((req, res) => { //req - хранит информацию res - это объект который мы создаем
    console.log('Server request')
    console.log(req.url, req.method)

    // res.setHeader('Content-Type', 'text/html')
    // res.write('<head><link rel="stylesheet" href="#" ></head>')
    // res.write('<h1> Hello world </h1>')
    // res.write('<h1> Hello world </h1>')

    res.setHeader('Content-Type', 'application/json')

    const data = JSON.stringify([
        {name: 'Tommy', age: 35},
        {name: 'Islam', age: 17},
    ])

    res.end(data)
})

server.listen(PORT, 'localhost', (error) => { //создание сервера на 3000 порту
    error ? console.log(error) : console.log(`Listened port ${PORT}`)
})