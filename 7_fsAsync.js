//****************Callback hell---> multiple nested callbacks */

const fs = require('fs')

console.log('Starting.......')

fs.readFile('./dataFile/1st.txt', 'utf-8', (error,data)=>{
    if(error){
        console.log(error)
    }else{
        const first=data
        fs.readFile('./dataFile/2nd.txt', 'utf-8', (err,res)=>{
            if(err){
                console.log(err)
            }else{
                const second=res
                fs.writeFile('./dataFile/resultAsync.txt', first +" "+second, {flag:'a'}, (error1, result1)=> {
                    if(error1){
                        console.log(error1)
                    }else{
                        console.log('passed')
                    }
                })
            }
        })
    }
})
console.log('starting a new task')