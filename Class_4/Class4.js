//function adding
function mySum (a, b){
    return a + b;
}

console.log(mySum(5,5));

//function subtracting
function mySubs (a, b){
    return a - b;
}

console.log(mySubs(10, 5));

//function multiplication
function myMult (a, b){
    return a * b;
}

console.log(myMult(5, 8));

//function square root does't work
function mySqrt (a){
    return Math.sqrt(a);
}

console.log(mySqrt(5));

//function exponentiation
function myExponen (a, b){
    return Math.pow(a, b);
}

console.log(myExponen(7, 2));

//Divide function with error catch
try {
    let result = divide (20, 0);
    console.log("Result:", result);
}  catch (error) {
        console.error("An error occurred:", error.message);
}  finally {
    console.log()
}

function divide(c, d) {
    if (d === 0){
        throw new Error("Oops! Division by zero is not allowed.");
    }
    return c / d;
}

