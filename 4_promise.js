const done = true
const {name, number:num} = require("./2_globalvariable");

const getNumber = (number, nam) => {
  return new Promise((resolve, reject) => {
   if(done){
       resolve({num, name})
       
   }else{
       reject(500)
   }
  })
}
getNumber(9)
.then(data => console.log(data))
.catch(err => console.error("error: "+err))