'use strict';
console.log('Arrow Function');
console.log('\n');
var sum = function(x, y){
    return x+y
}

console.log(sum(1,2));

var sumArrow = (x,y) => x+y
var add1 = x => sumArrow(x,1);

console.log('\n');

console.log(sumArrow(1,2));
console.log(add1(1,2));
