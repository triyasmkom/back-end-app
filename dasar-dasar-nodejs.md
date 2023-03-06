# NODE JS

## Apa itu node js?
Node js diciptakan oleh Ryan Dahl pada tahun 2009, Tak disangka saat ini teknologi yang diciptakannya menuai popularitas tinggi. Node.js banyak digunakan oleh perusahaan besar sekelas Netflix, Uber, Paypal, dan eBay.  
Node.js berhasil menjadi JavaScript Runtime yang dapat mengeksekusi kode JavaScript di luar browser. Node.js seolah-olah menjadi gerbang bagi para JavaScript Developer untuk mengembangkan sistem di luar dari browser. JavaScript menjadi bahasa multiplatform yang banyak menggiring developer untuk menggunakannya. Popularitas JavaScript pun meroket! Pada tahun 2014 hingga 2020 JavaScript menjadi bahasa pemrograman nomor satu yang banyak digunakan oleh developer.
JavaScript menjadi salah satu pilihan tepat dalam membangun web server, terlebih bila Anda adalah seorang Front-End Web Developer. Anda tentu tidak perlu menggunakan bahasa yang berbeda dalam membangun Back-End. Anda bisa menjadi Full-Stack Developer dengan mempelajari satu bahasa pemrograman saja.

## Node Js Basic
### Membuat Project
1. Buatlah folder untuk project yang akan kita buat.
2. Buka folder tersebut dengan text editor, misalnya vs code, intellej IDEA atau yang sejenisnya.
3. Buka terminal pada text editor anda. Kemudian jalankan perintah command:
```shell
npm init -y

Wrote to /home/triyas/data/project/belajar-backend/my-project/package.json:

{
  "name": "my-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

### Menjalankan javascript menggunakan node js
Kita dapat menjalankan kode javascript menggunakan Node REPL (Read-Eval-Print Loop) dan mengeksekusi berkas berekstensi .js

#### Node js REPL
R -> membaca kode javascript
E -> mengevaluasi kode javascript
P -> mencetak hasil evaluasi ke console
L -> proses tersebut selalu berulang

```shell
$ node

Welcome to Node.js v16.18.1.
Type ".help" for more information.
> console.log('Hello, bro')
Hello, bro
undefined
> 2+2
4
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
const welcome = (name) => {
   return `Welcome ${name}`;
}

welcome('Node REPL');

'Welcome Node REPL'
> 
> 
> 
> .exit
```

#### Menjalankan Node js dengan file .js
1. Silakan buatlah file index.js di dalam folder project anda. Kemudian isikan:
```js
const welcome = (name) => {
   console.log(`Welcome ${name}`);
}

welcome('Node File .js');

```
2. Lalu jalankan dengan perintah:
```shell
node index.js 
Welcome Node File .js
```


### Node Js Global Object

```shell
$ node
Welcome to Node.js v16.18.1.
Type ".help" for more information.
> Object.getOwnPropertyNames(global)
[
  'Object',               'Function',          'Array',
  'Number',               'parseFloat',        'parseInt',
  'Infinity',             'NaN',               'undefined',
  'Boolean',              'String',            'Symbol',
  'Date',                 'Promise',           'RegExp',
  'Error',                'AggregateError',    'EvalError',
  'RangeError',           'ReferenceError',    'SyntaxError',
  'TypeError',            'URIError',          'globalThis',
  'JSON',                 'Math',              'console',
  'Intl',                 'ArrayBuffer',       'Uint8Array',
  'Int8Array',            'Uint16Array',       'Int16Array',
  'Uint32Array',          'Int32Array',        'Float32Array',
  'Float64Array',         'Uint8ClampedArray', 'BigUint64Array',
  'BigInt64Array',        'DataView',          'Map',
  'BigInt',               'Set',               'WeakMap',
  'WeakSet',              'Proxy',             'Reflect',
  'FinalizationRegistry', 'WeakRef',           'decodeURI',
  'decodeURIComponent',   'encodeURI',         'encodeURIComponent',
  'escape',               'unescape',          'eval',
  'isFinite',             'isNaN',             'process',
  'global',               'Buffer',            'atob',
  'btoa',                 'URL',               'URLSearchParams',
  'TextEncoder',          'TextDecoder',       'AbortController',
  'AbortSignal',          'EventTarget',       'Event',
  'MessageChannel',       'MessagePort',       'MessageEvent',
  'clearInterval',        'clearTimeout',      'setInterval',
  'setTimeout',           'queueMicrotask',    'performance',
  'clearImmediate',       'setImmediate',      'SharedArrayBuffer',
  'Atomics',              'WebAssembly',       'module',
  'require',              'assert',            'async_hooks',
  'buffer',               'child_process',     'cluster',
  'constants',            'crypto',            'dgram',
  'diagnostics_channel',  'dns',               'domain',
  'events',
  ... 29 more items
]
> 

```

Banyak sekali yah member dari global objek. Namun dilansir dari website Node.js, sebenarnya mereka hanya menambahkan beberapa objek saja. Objek tersebut dinamakan dengan ‘true globals’. [2]
Berikut adalah daftarnya:

- global : Global namespace. Member apa pun di dalam object ini dapat diakses pada cakupan global.
- process : menyediakan interaksi dengan proses Node.js yang berjalan.
- console : menyediakan berbagai fungsionalitas STDIO.
- setTimeout, clearTimeout, setInterval, clearInterval.


### Process Object
```js
const server = new Server({
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'abc.test.com',
});
```
Untuk memberikan ```process.env``` ketika mengeksekusi javascript.

Linux dan macOS

```shell
NODE_ENV=production node app.js
```

Windows CMD

```shell
SET NODE_ENV=production && node app.js
```

```process.argv```

```js
const firstName = process.argv[2];
const lastName = process.argv[3];

console.log(`Hello ${firstName} ${lastName}`);
```

```shell
$ node process-env.js triyas hevianto

Hello triyas hevianto

```


Latihan
```js
// Isi dengan nilai heapUsed dari instance process.memoryUsage.
const initialMemoryUsage = process.memoryUsage().heapUsed

// Isi dengan nilai index ke-2 dari process.argv.
const yourName = process.argv[2]

// Isi dengan nilai NODE_ENV dari process.env.
const environment = process.env.NODE_ENV

for(let i = 0; i <= 10000; i++) {
// Proses looping ini akan membuat penggunaan memori naik
}

// Isi dengan nilai heapUsed dari instance process.memoryUsage.
const currentMemoryUsage = process.memoryUsage().heapUsed

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);

```

Jalankan: 

windows
```shell
SET NODE_ENV=development && node ./process-object/index.js <Nama Anda> 
```

Linux dan macOS
```shell
$ NODE_ENV=prod node ./process-env/index.js triyas hevianto
Hai, triyas
Mode environment: prod
Penggunaan memori dari 4163952 naik ke 4165696
```

### Modularization

coffee.js
```js
const coffee = {
    name: 'Tubruk',
    price: 15000,
}
 
 
module.exports = coffee;
```

app.js
```js
const coffee = require('./coffee');
 
console.log(coffee);
```


Jalankan
```shell
$ node ./modularization/app.js 
{ name: 'Tubruk', price: 15000 }
```

Coba lagi:
user.js
```js
const firstName = 'Harry';
const lastName = 'Potter';
 
 
/* gunakan object literal
untuk mengekspor lebih dari satu nilai. */
module.exports = { firstName, lastName };
```

app.js
```js
/**
* Gunakan object destructuring untuk mengimpor lebih dari satu nilai pada modul.
*/
const { firstName, lastName } = require('./user');
 
 
console.log(firstName);
console.log(lastName);
```

Jalankan:
```shell
$ node ./modularization/app.js 
{ firstName: 'Harry', lastName: 'Potter' }
```

### NPM

```shell
npm install moment

npm uninstall moment
```

app.js
```js
const moment = require('moment');
 
const date = moment().format("MMM Do YY");
console.log(date);
```

package.json
```json
{
  "name": "npm",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "moment": "^2.29.4"
  }
}
```

### Event

```js
const { EventEmitter } = require('events');
 
const myEventEmitter = new EventEmitter();
```

contoh:
```js
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

```


```shell
$ node event/index.js 
Kopi Tubruk telah dibuat!
Bill sebesar 15000 telah dibuat!
Kopi Tubruk telah dibuat!
Bill sebesar 15000 telah dibuat!
```


### File System
Node.js menyediakan core modules fs yang dapat mempermudah kita dalam mengakses filesystem. Setiap method yang ada di module fs tersedia dalam dua versi, yakni versi asynchronous (default) dan versi synchronous. 

```js
const fs = require('fs');
 
const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};
 
fs.readFile('todo.txt', 'UTF-8', fileReadCallback);
```

```js
const fs = require('fs');
 
const data = fs.readFileSync('todo.txt', 'UTF-8');
console.log(data);
```



### Readable Stream

```js
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
```

### Writeable Stream
```js

const fs = require('fs')
const path = require("path");

const writableStream = fs.createWriteStream(path.resolve(__dirname,'output.txt'))


writableStream.write('Ini merupakan baris pertama!\n')
writableStream.write('Ini merupakan baris kedua!\n')
writableStream.end('Akhir dari writable stream!')

```


