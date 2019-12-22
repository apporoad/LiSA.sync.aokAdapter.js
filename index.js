const axios = require('axios')
const utils = require('lisa.utils')
const path = require('path')
const defaultConfig = {
    url : "http://localhost:11540/"
}
var cc = require('cli.config.js').system('LiSA.sync.aok')
    .default(defaultConfig)

//console.log(cc.get())


const getUrl = D=>{
    if(utils.startWith(D,'http://')){
        return D
    }
    return utils.endTrim(cc.get().url,'/') + '/' + utils.startTrim(D,'/')
}

exports.getId= D=>{
    return D.replace(/\\/g,'/')
}

exports.syncReader= D=>{
    return "" 
}
exports.reader = D=>{
    return new Promise((r,j)=>{
        var url = getUrl(D)
        //console.log(url)
        axios.get(url).then(res=>{
            r(res.data)
        }).catch(d=>{
            //console.log(d)
            j(d)
        })
    })
}
exports.writer = (D,data)=>{
    axios.post(getUrl(D),data).catch(error=>{
        console.log('error when writing')
    })
}