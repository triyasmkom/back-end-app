const {EventEmitter} = require('events')

const event = new EventEmitter()

const birthdayEventListener = (name)=>{
    console.log(`Happy birthday ${name}`)
}

event.on('birthday', birthdayEventListener)

event.emit('birthday', 'triyas')
