document.write('<hr>');
document.write('<h2>ques</h2>');

function checkscore(score){
    var grade;
    switch(true){
case score >= 90 && score <=100:
grade = 'A';
break;
case score>= 80 && score <=89:
grade = 'B';
break;
case score>= 70 && score <=79:
grade = 'C';
break;
case score>= 60 && score <=69:
grade = 'D';
break;
case score>= 50 && score <=59:
grade = 'E';
break;
case score <= 40:
grade = 'F';
break;
default:
grade = 'Invalid';
break;
    }
    return grade;
}
document.write(`Grade is: ${checkscore(67)} <br>`);

document.write('<hr>');
document.write('<h2>ques</h2>');

function checkday(day){
var dayName;
switch(day){
    case 1:
    dayName = 'Monday';
    break;
    case 2: 
    dayName = 'Tuesday';
    break;
    case 3: 
    dayName = 'Wednesday';
    break;
    case 4: 
    dayName = 'Thursday';
    break;
    case 5: 
    dayName = 'Friday';
    break;
    case 6: 
    dayName = 'Saturday';
    break;
    case 7: 
    dayName = 'Sunday';
    break;
    default: 
    dayName = 'invalid ';
    break;
}
return dayName;
}
document.write(`this is: ${checkday(6)} <br>`);


document.write('<hr>');
document.write('<h2>ques</h2>');

function checkmonth(month){
var monthName;
switch(month){
    case 1:
    monthName = 'January';
    break;
    case 2: 
    monthName = 'febuary';
    break;
    case 3: 
    monthName = 'March';
    break;
    case 4: 
    monthName = 'April';
    break;
    case 5: 
    monthName = 'May';
    break;
    case 6: 
    monthName = 'June';
    break;
    case 7: 
    monthName = 'July';
    break;
    case 8: 
    monthName = 'August';
    break;
    case 9: 
    monthName = 'September';
    break;
    case 10: 
    monthName = 'October';
    break;
    case 11: 
    monthName = 'November';
    break;
    case 12: 
    monthName = 'December';
    break;
    default: 
    monthName = 'invalid ';
    break;
}
return monthName;
}
document.write(`this is: ${checkmonth(6)} <br>`);


document.write('<h2>Javascript Basic Array</h2>')
var arr1 = ['sanjika','sakshi','sonam','prachi','ravi'];

document.write(arr1 +'<br>');
document.write(arr1[2] +'<br>');
document.write(arr1[4] +'<br>');


var i;
for(i=0;i<5;i++){
    document.write(arr1[i]+"  ");
}

var j;
document.write('<ul>');
for(j=0;j<5;j++){
    document.write('<li>' + arr1[j]+'</li>');
}
document.write('<ul>');

document.write('<hr>');
document.write('<h2>ques</h2>');

var arr2 = [20,30,40,50,60];
 var i,sum=0;
 for(i=0;i<=4;i++){
    sum=sum+arr2[i];
 }
 document.write(sum);