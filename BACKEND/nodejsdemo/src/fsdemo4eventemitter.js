import {EventEmitter} from 'events'
import { readFile } from 'fs'

class FileSearch extends EventEmitter{
    constructor(pattern){
        super()
        this.pattern = pattern
        this.files = []
    }

    addFile(file){
        this.files.push(file)
        return this
        //it allows function chaining
        //meaning you don't need to call each function later separately
    }
    search() {
        this.files.forEach(file => {
            this.emit('start')
            readFile(file, 'utf-8', (error,data) => {
                if(error){
                    return this.emit('error', err)
                }
                this.emit('fileread', file)
                const match = data.match(this.pattern)
                if(match){
                    match.forEach(elem => this.emit('found', file, elem))
                }
            })

        })
        return this
   }
}

export default FileSearch
//    without function chaining
//    const search = new FileSearch()
//    search.addFile()
//    search.search()
//    new FileSearch().addFile().search()