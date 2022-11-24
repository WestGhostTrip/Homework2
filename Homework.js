"use strict";
let solveEquation = (a, b, c) => {
    if(a == 0)
        return false;
    let res = {};
    let D = b * b - 4 * a * c;
    console.log('D = ' + D);
    if(D < 0)
        return false;
    res['discriminant'] = D;
    if(D == 0)
        res["quadratic roots"] = -b/(2*a);
    else if(D > 0){
        let tmp = [];
        tmp.push((-b + Math.sqrt(D)) / (2 * a));
        tmp.push((-b - Math.sqrt(D)) / (2 * a));
        res["quadratic roots"] = tmp;
    }
    return res;
}
console.log(solveEquation(5,-6,1));




"use strict";
function solveEquation(a, b, c) {
    if(a == 0)
        return false;
let D = b * b - 4 * a * c;
let arr = {};
if(D < 0)
    return false;
arr['discriminant'] = D;
if(D == 0)
    arr["quadratic roots"] = -b/(2*a);
else if(D > 0){
    let tmp = [];
    tmp.push((-b + Math.sqrt(D)) / (2 * a));
    tmp.push((-b - Math.sqrt(D)) / (2 * a));
arr["quadratic roots"] = tmp;
}   
 return arr; // array
}
console.log(solveEquation(5,-6,1));
