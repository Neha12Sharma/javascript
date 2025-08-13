// IIFE infoked function expression (iife) function 

document.write('<h2>Arrow Function</h2>');

// single statement then do not need  to use bracket and return
// single parameter then do not need to use paranthesis
let factorial=(n) =>{
    let fact = (n==1 || n==0)? 1:n*factorial(n-1);
    return fact;
}
let f = factorial(8);
document.write('factorial is:'+f);

document.write('<hr>');

// odd even

let oddeven =n =>(n%2==0)? 'even number':'odd number';
    
let chk = oddeven(5);
document.write('number is:'+chk);