var adapter = require('./index')

console.log(adapter.getId("http://localhost:11540/data"))


adapter.reader('data').then(d=>{
    console.log(d)
})

adapter.reader('http://localhost:11540/data').then(d=>{
    console.log(d)
})

adapter.writer('data',{
    hello:"good day " + Date.now(),
    world:{
        hi : "fine"
    }
})