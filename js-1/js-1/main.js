document.write('<h2 align="center">javascript datatype</h2>');

document.write('<h2>number datatype</h2>');

let a=23;
let b=9.8;
document.write('value A is: '+a+'<br>');
document.write('datatype A is: '+typeof a+'<br>');

document.write('value b is: '+b+'<br>');
document.write('datatype b is: '+typeof b+'<br>');

let str1 = 'geeta university';
let str2 = "34";

document.write('value str1 is: '+str1+'<br>');
document.write('datatype str1 is: '+typeof str1+'<br>');

document.write('value str2 is: '+str2+'<br>');
document.write('datatype str2 is: '+typeof str2+'<br>');

document.write('<h2>object datatype</h2>');

let arr1 = ['geeta',34,true,'university'];


document.write('value arr1 is: '+arr1+'<br>');
document.write('datatype arr1 is: '+typeof arr1+'<br>');

let obj1 ={
    fname:'Geeta',
    lname:'university',

}
document.write('value obj1 is: '+obj1+'<br>');
document.write('datatype obj1 is: '+typeof obj1+'<br>');

let n =null;
let n1=undefined;
let n2;

document.write('value N is: '+n+'<br>');
document.write('datatype N is: '+typeof n+'<br>');
document.write('datatype N1 is: '+typeof n1+'<br>');
document.write('datatype N2 is: '+typeof n2+'<br>');

document.write('<h2 align="center">javascript function</h2>');

// basic function syntax
function message(){
document.write('hellow javascript <br>');
}
message();
message();
message();
message();

document.write('<h4>function with argument and parameter</h4>');

function fullname(fname,lname){
document.write(fname+""+lname);
}
fullname('geeta','university');

document.write('<hr>');

function sum(a,b){
   let add = a+b;
   document.write('addition is:'+add+'<br>');
}
sum (12,45);
sum (14,45);
sum (12,55);
sum (56,2);

document.write('<h4>function with return value</h4>');

function square(n){
let sq=n*n;
return sq;
}
let s = square(32);
let s1 = square(9);
document.write('square is:'+s+'<br>');
document.write('square is:'+s1);

document.write('<br>');

function summarks(sub1,sub2,sub3,sub4,sub5){
    let total_marks = sub1+sub2+sub3+sub4+sub5;
    return total_marks;
}
let tm=summarks(56,56,27,19,99);
document.write('total marks is'+tm);

function percentage(t){
    let pr = t/500*100;
    return pr;
}
let per = percentage(tm);
document.write('percentage is:'+per+'%');

document.write('<h4>function expression</h4>');

let oddeven = function oddev(n){
    let chek = (n%2===0)? 'even number':'odd number';
    return chek;
}
let c = oddeven(9);
document.write('number is:'+c);
















