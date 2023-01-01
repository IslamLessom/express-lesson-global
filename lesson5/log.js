const EventEmitter = require('events') // создает экземпляры для отслеживания событий 

//случай если нужно передать один аргумент

//emitter.emit('some_event', 'Event test text!') 

//вызывает событие которое создали emit. 
//Первый аргумент имя нашего события , 
//второй аргумент это данные (в моем случае текст)
 
//случай если нужно передать несколько аргументов


class Logger extends EventEmitter { //мы наследуем все функции EventEmitter в класс Logger
    g = (msg) => {
        console.log(msg)
        this.emit('some_event', { id: 1, text: 'Event test text!' }) //emmit вызывает событие 
    }
}

module.exports = Logger