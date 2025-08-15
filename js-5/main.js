function msg(){
    // document.write('Hellow Evaryone!');
    alert('Hellow Evaryone!');
}
function changeTheme(){
document.body.style.background = 'pink';
}

function changeTheme1(){
    document.getElementById('input').style.background = 'skyblue';
    }

    document.write('<hr>');
    document.write('<h2>ques1</h2>');

function checkNumber(n){
    if(n>0){
        document.write('this is: +ve <br>');
    }
    else if(n<0){
        document.write('this is: -ve <br>');
    }
    else{
    document.write('this is: zero');}
}
checkNumber(4);

document.write('<hr>');
 document.write('<h2>ques2</h2>');

function checkWeekDay(day){
    if(day>=1 && day<=5){
        document.write(`this is:weekday <br>`);
    }
    else if(day>=6 && day<=7){
        document.write(`this is:weekEnd <br>`);
    }
    else{
        document.write(`this is:invalid day <br>`);
    }
}
checkWeekDay(3);
checkWeekDay(4);
checkWeekDay(9);

document.write('<hr>');
 document.write('<h2>write a javascript function that takes three numbers as input and return the largest one </h2>');

function checkGreater(a,b,c){
    if(a>b){
        if(a>c){
            document.write(`Greater is A <br>`);   
        }
        else{
            document.write(`Greater is c <br>`);
        }
    }
    else{
        if(b>c){
            document.write(`Greater is b <br>`) ;
        }
        else{
            document.write(`Greater is C <br>`) ;
        }
    }
}
checkGreater(5,6,9);
checkGreater(54,97,42);











