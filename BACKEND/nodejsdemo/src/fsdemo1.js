import fs from 'fs'

const readFile = (fileName, cb) => {
    fs.readFile(fileName, (err, data) => {
        if(err) {
            return cb (err)
        }
        const lines = data.toString()
        cb(null, lines)
    })
}

readFile('data', (err, data) => {
    if(err){
        console.error(err)
    }
    console.log(data.split('\n').map(Number).filter(i => i%2===0))
})

console.log("after file read")

