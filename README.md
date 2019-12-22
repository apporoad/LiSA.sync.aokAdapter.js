# LiSA.sync.aokAdapter.js
LiSA sync aok ilink implement

## just do it 

1. [start aok](https://github.com/apporoad/aok.js#just-step-by-step-to-understand-aok)

2. npm i
```bash
npm i lisa.sync
npm i LiSA.sync.aokAdapter

```

3. vim test.js

```js
var LiSASync = require('lisa.sync')

var data = LiSASync('data',{internal : 2000})

data.get().then(d=>{
    console.log(d)
})

LiSA.set({ name : "LiSA1" , gender : "girl"})

console.log(LiSA.getSync())

LiSA.sync(()=>{
    return {
        name : "LiSA2"
    }
})

//you can call sync 
LiSA.sync(data=>{
    data.oneNode = { name : "testNode"}
})

LiSA.get().then(d=>{
    console.log(d)
})

//stop sync
LiSA.stop()

```

4. [config](https://github.com/apporoad/cli.config#how-to-use-in-cli)
```bash
cc system LiSA.sync.aok

cc get
cc set url "http://localhost:11540/"

```