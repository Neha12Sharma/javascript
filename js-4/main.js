document.write('Immediate invoked Function Epression(IIFE)');
// ()()

(function msg(){
document.write('good morning everyone');
})();

document.write('<hr>');

(function sum(a,b){
    let add = a+b;
    document.write('sum is:'+add+'<br>');
})(34,89);

document.write('<hr>');

((n)=>{
    let sq = n*n;
    document.write('square is:'+sq);
})(6);

document.write('<h2>Template string</h2>');
function calculate(a,b){
let sum=a+b;
let sub=a-b;
let div=a/b;
document.write('sum is:'+sub+'<br>'+'sum is:'+sum+'<br>'+'division is:'+div);
document.write('<hr>');
document.write(`sum is: ${sum} <br> "sub" is: ${sub} <br>
division is: ${div}`);
}
calculate(34,20);

document.write('<h2>Javascript Object</h2>');

let obj1 = {
    name:'sahil',
    roll:'12345',
    brach:'CSE',
    message:function(){
        return 'hellow javascript!';
    
    },
    arr1:['B.TECH','MBA','BBA','M.TECH'],
    obj2:{
        course1:'BBA',
        course1:'MBA',
        course2:'B.TECH',
    },
    details:function(){
       return `name is: ${this.name} <br>  roll is: ${this.roll} <br>
        branch is:${this.branch}`;
    }
}
let name = obj1.name;
document.write(`name is: ${name}<br>`);
document.write(`roll is: ${obj1.roll}<br>`);
document.write(`roll is: ${obj1.branch}<br>`);
document.write(`message is: ${obj1.message()}<br>`);
document.write(`course is: ${obj1.arr1}<br>`);
document.write(`course is: ${obj1.obj2.course2}<br>`);
document.write('course is:'+obj1.details()+'<br>');


document.write('<hr>');

let object={
     name :'Neha Sharma',
     email: 'neha@123@gmail.com',
     dor: '23.4.2024',

     detail: function(){
        return `name is: ${this.name}<br> email: ${this.email}<br> dor:${this.dor}`;
        
     }

}
document.write('User Profile:');
document.write('<hr>'+object.detail()+'<hr>');