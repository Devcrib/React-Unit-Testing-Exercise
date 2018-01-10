function isResultReal(a, b, c){
    var  pre = Math.pow(b, 2) - 4 * a * c;
    if (pre < 0) throw new Error("Would produce a complex number")
}

// function isArgumentAlpha(){
//     for (a of arguments)
//         if(isNaN(a)) throw new Error ("Alphabets not allowed");
// }

// function isResultANumber(){
    
// }

function quadratic(a, b, c){
    let arr = [];

    isResultReal(a, b, c);
    var result1 =  (-b + Math.sqrt((Math.pow(b, 2) - 4 * a * c)))/ (2 * a)
    var result2 =  (-b - Math.sqrt((Math.pow(b, 2) - 4 * a * c)))/ (2 * a)
    if (isNaN(result1) || isNaN(result2)) throw new Error('Not solvable');
    arr.push(result1);
    arr.push(result2);
    return arr;
}
module.exports = quadratic;