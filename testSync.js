var LiSASync = require('lisa.sync')

var data = LiSASync('data',{internal : 2000})

data.get().then(d=>{
    console.log(d)
})

data.set({ name : "LiSA1" , gender : "girl"})

data.sync(()=>{
    return {
        name : "LiSA2"
    }
})

//you can call sync 
data.sync(data=>{
    data.oneNode = { name : "testNode"}
    data.abc= "a"
})

data.get().then(d=>{
    console.log(d)
})

// //stop sync
data.stop()