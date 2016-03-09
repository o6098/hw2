// Your Javascript Code Goes Here
function hi() {
    console.log('hi');
}
hi();

function logHi(fh) {
    fh();
}
logHi(hi);

var hiMe = function () {
    console.log('hi NTU...E');
}
hiMe();

logHi(hiMe);

logHi(function () {
    console.log('hello NTU...E');
});