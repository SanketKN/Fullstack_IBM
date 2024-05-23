import FileSearch from './fsdemo4eventemitter.js'

const fileSearch = new FileSearch(/dddk/g)
fileSearch.addFile('mydata/a.txt')
.addFile('mydata/b.txt')
.addFile('mydata/c.txt')

fileSearch.on('start', () => console.log('Started'))
fileSearch.on('fileread', (data) => console.log(data))
fileSearch.on('found', (data, match) => console.log(data,match))
.search()

//order doesn't matter here, as callbacks will be called when events will be triggered