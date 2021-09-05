const lod = require('lodash')

var items = [1,[2,[4,[4,5,6]]]]

const newItems = lod.flattenDeep(items)
console.log('comment')

console.log(newItems)