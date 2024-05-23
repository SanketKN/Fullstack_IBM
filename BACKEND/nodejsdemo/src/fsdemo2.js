import fs from 'fs'

const readFile = (fileName, cb) => {
    return fs.readFileSync(fileName, 'utf-8')
}

console.log(readFile(data))
console.log('After read line')