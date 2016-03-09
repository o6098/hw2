
(() => {
    outage = 20;
    var height = 170;
    if(outage == 20) height = 180;
    console.log(`height:${height}`);
    
})();
console.log(`outage:${outage}`);
console.log(`outHeight:${height}`);

'use strict';
var a = 5;
var b = 10;
if(a===5){
    let a = 4;
    var b = 1;
    console.log(`a:${a}`);
    console.log(`b:${b}`);
}

console.log(`outA:${a}`);
console.log(`outB:${b}`);