function b1() {
    //var myVar;
    console.log(myVar);
}

function a1() {
    var myVar = 1;
    b1();
    console.log(myVar);
}

var myVar = 2;
console.log(myVar);
a1();

function a2() {
    var myVar = 1;
    function b2() {
        //var myVar;
        console.log(myVar);
    }
    b2();
    console.log(myVar);
}

var myVar = 2;
console.log(myVar);
a2();

var x = 'takashi';
var name = (() => {
    var z = 'yamamoto';
    var y = x + ' ' + z;
    var x = 'sadoshi';
    console.log(y);
})();
