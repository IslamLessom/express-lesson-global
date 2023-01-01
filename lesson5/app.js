// const EventEmitter = require('events') // создает экземпляры для отслеживания событий 
// const emitter = new EventEmitter() // создает экземпляр

const Logger = require("./log")
const logger = new Logger()

logger.on('some_event', (args) => { //on создает событие
    const {id,text} = args
    console.log(id,text)
})

logger.g('user logged')



