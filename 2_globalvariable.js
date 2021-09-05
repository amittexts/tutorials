//********Global variables**********
// __dirname --> current diractory path
// __filename --> current file name
// module --> return properties of current module/file.
// process --> provide enviornment details

//********Funcion***********
// require --> to use other module properties

// console.log(__dirname);
// console.log(__filename);
let data = 2;
console.log(data);

function helloworld(){
    console.log('hello world')
}

helloworld()
function multiply(num){
return num*2
}

const number = multiply(15)
module.exports = {
    number,
    name: "amit"

}
//console.log(module);