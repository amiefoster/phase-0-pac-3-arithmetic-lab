//basic math functions

function add(x, y){
    return x + y ;
}

function subtract(x, y) {
    return x - y ;
}

function multiply(x, y){
    return x * y ;
}

function divide(x, y){
    return x / y ;
}


//increment and decrement

function increment(n) {
    return n += 1;
}

function decrement(n){
    return n -= 1;
}

//makeint

function makeInt(string) {
    return parseInt(string, 10);
}

function preserveDecimal(string){
    return parseFloat(string);
}