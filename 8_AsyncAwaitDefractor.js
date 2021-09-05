//****Async await, promise, defractor*/
const fs = require('fs')
console.log('Starting.......')

function read(filePath){
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (error, data)=>{
            if(error){
                console.log(error)
                reject(error)
            }
            resolve(data)
        })
       })
}
function write(filePath, data){
    return new Promise((resolve, reject) =>{
        fs.writeFile(filePath, data, (error, data)=>{
            if(error){
                reject(error)
            }resolve('passed')
        })
    })
}

async function readWriteFile(){
    const first = await read('./dataFile/1st.txt')
    console.log(first)
    const second = await read('./dataFile/2nd.txt')
    console.log(second)
    const status = await write('./dataFile/resultAwait.txt', first+" "+second)
    console.log(status)
    return "work done"
}

readWriteFile()
.then((data)=>{console.log(data)})
.catch((error)=> console.log(error))
console.log('starting a new task')