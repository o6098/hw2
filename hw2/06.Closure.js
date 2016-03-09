var counter = 0;
var addglobal = () => {
    counter += 1;
    console.log(counter);
}
addglobal();
addglobal();
addglobal();


var addlocal = () => {
    var counter = 0;
    counter += 1;
    console.log(counter);
}
addlocal();
addlocal();
addlocal();

var addclosure = (() => {
    var counter = 0;
    return () =>{
        counter += 1;
        console.log(counter);
    }
})();
addclosure();
addclosure();
addclosure();