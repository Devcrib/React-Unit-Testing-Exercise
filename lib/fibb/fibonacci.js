function isNumberGiven(num){
    if(num === undefined) throw new Error("Must have a specific fibonacci number it is looking for");
}
function isNumberAPositiveInteger(num){
    if(num <= 0 || num % 1 !== 0 ) throw new Error("Number must be a positive integer");
}
function isArgumentAlpha(num){
    if(num === isNaN) throw new Error("Alphabets not allowed");
}

function fibo(num) {
    isNumberGiven(num);
    isNumberAPositiveInteger(num);
    isArgumentAlpha(num);
    var arr = [];

    arr.push(0);
    arr.push(1);

    num = num - 1;

    for (let i = 0; i < num; i++) {
        var a = arr[arr.length-1];
        var b = arr[arr.length-2];
        
        var newNum = a + b;
        arr.push(newNum);
    }
    num = num + 1;
    return arr[num];
}

// var res = fibo(50);
// console.log(res);
module.exports = fibo;