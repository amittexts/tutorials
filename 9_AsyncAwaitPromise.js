
console.log('Starting........')
function add(a, b){
    return new Promise((resolve, reject)=>{
        if(typeof a == 'number' && typeof b == 'number'){
            resolve(a+b)
        }else{
            reject('a and b are not numbers')
        }        
    })
}

async function addition(a, b){
 const result = await add(a,b)   
 return result
}
addition(22, 55)
.then((data)=>{console.log(data)
     console.log('end of program')})
.catch((error)=>console.log(error))

module.exports = {
    addition,
    add
}