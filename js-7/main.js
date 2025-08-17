document.write('Multidimensional Array');

var arr1 = [
    ['Neha',2301301017,'BTech',18],
    ['Prachi',2301301018,'BSC',18],
    ['Kajal',2301301019,'BTech',18],
    ['Pooja',2301301016,'NEET',17],
    ['Mohit',2301301015,'Hotel Management',20],
];
document.write(arr1+'<br>');
document.write(arr1[3]+'<br>');
document.write(arr1[2]+'<br>');
document.write(arr1[1]+'<br>');
document.write(arr1[4]+'<br>');
document.write(arr1[0][0]+'<br>');

var i;
for(i=0;i<arr1.length;i++){
    document.write(arr1[i]+'<br>');

}

document.write('<hr>')
var i,j;
for(i=0;i<arr1.length;i++){
    for(j=0;j<arr1[i].length;j++){
        document.write(arr1[i][j]+"  ");
    }
    document.write('<br>')
    
}


document.write('<hr>')
var i,j;
document.write('<table border="1" width="80% align="center" cellpading="10" height="500px">');
document.write(
    `<tr>
      <th>Name</th>
      <th>Roll</th>
      <th>Course</th>
      <th>Age</th>
    </tr>`
)
for(i=0;i<arr1.length;i++){
    document.write('<tr>')
    for(j=0;j<arr1[i].length;j++){
        document.write('<td>' + arr1[i][j]+ '</td>');
    }
    
    document.write('</tr>');
}
document.write('</table>');

// write script for print employee detail(name,destination,salary and contact)


var arr1 = [
    ['Neha','Delhi','75000',9896380424],
    ['Pooja','Mumbai','75000',9896380422],
    ['Prachi','Kolkata','75000',9896380724],
    ['Kajal','Gurugram','75000',9896380674],
];

document.write(arr1+'<br>');
document.write(arr1[3]+'<br>');
document.write(arr1[2]+'<br>');
document.write(arr1[1]+'<br>');
document.write(arr1[4]+'<br>');
document.write(arr1[0][0]+'<br>');

var i;
for(i=0;i<arr1.length;i++){
    document.write(arr1[i]+'<br>');

}

document.write('<hr>')
var i,j;
for(i=0;i<arr1.length;i++){
    for(j=0;j<arr1[i].length;j++){
        document.write(arr1[i][j]+"  ");
    }
    document.write('<br>')
    
}

document.write('<hr>')
var i,j;
document.write('<table border="1" width="80% align="center" cellpading="10" height="500px">');
document.write(
    `<tr>
      <th>Name</th>
      <th>destination</th>
      <th>salary</th>
      <th>contact</th>
    </tr>`
)
for(i=0;i<arr1.length;i++){
    document.write('<tr>')
    for(j=0;j<arr1[i].length;j++){
        document.write('<td>' + arr1[i][j]+ '</td>');
    }
    
    document.write('</tr>');
}
document.write('</table>');


document.write('<h2>Javascript dom</h2>');
var elements;
elements = document.getElementById('heading1');
elements = document.getElementByClassName('heading2');
elements = document.getElementByTagName('h3');
console.log(elements);

document.write('<h2> write a function that take an HTML element 10 as input and return count of all child element within element use document.getElementById to retrive the parent element </h2>')

function countChildElements(idname){
    var parentElement = document.getElementById(idname);
    if(parentElement){
        return parentElement.childElementCount;

    }
    else{
        return 0;
    }
}
var counts = countChildElements('demo');
document.write(`total elements is: $(counts) <br>`);


document.write('<hr>');


