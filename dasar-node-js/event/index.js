const {EventEmitter} = require('events')

const myEventEmitter = new EventEmitter();

// Fungsi akan dijalankan ketika event terjadi
const makeCoffee = ({name})=>{
    console.log(`Kopi ${name} telah dibuat!`)
}

const makeBill = ({price})=>{
    console.log(`Bill sebesar ${price} telah dibuat!`)
}

const onCoffeeOrderedListener = ({name, price})=>{
    makeCoffee({name})
    makeBill({price})
}

// mendaftarkan fungsi makeCOffee sebagai listener event coffee-order
myEventEmitter.on('coffee-order', makeCoffee)
myEventEmitter.on('coffee-order', makeBill)
myEventEmitter.on('coffee-order', onCoffeeOrderedListener)



// memicu event 'coffee-order' terjadi
myEventEmitter.emit('coffee-order', {name:'Tubruk', price:15000})
