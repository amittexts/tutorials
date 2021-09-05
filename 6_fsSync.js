const fs = require('fs')

//****blocking functions*/
//fs.readFileSync
//fs.writeFileSync
console.log('Starting.......')
const first = fs.readFileSync('./dataFile/1st.txt', 'utf-8')
console.log(first);
const second = fs.readFileSync('./dataFile/2nd.txt', 'utf-8')
console.log(second)



fs.writeFileSync('./dataFile/resultSync.csv', first+ " "+ second, {flag: 'a'})
console.log('passed....')
console.log('starting a new task')