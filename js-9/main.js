// Implement a function that display the urls of all images 
        // tags present on webpage using document.image property

function imagesURLS(){
    var images = document.images;
    var imageurls = [],i;

    for(i=0;i<images.length;i++){
        // push ->element store
        imageurls.push(images[i].src);
    }
    imageurls.forEach(function(url){
        document.write(url+'<br>');
    })
}
imagesURLS();

var arr1 = [23,12,56];
document.write('<br>'+ arr1 +'<br>');

arr1.push(45);
document.write(arr1);

arr1.forEach(function(value){
    document.write(value + '<br>'); 
})

document.write('<hr>');
var elements = document.body.innerText;
var elements = document.body.innerHTML;
var elements = document.getElementById('content').innerHTML;
var elements = document.getElementById('content').getAttribute('class');
var elements = document.getElementById('content').getAttribute('style');
var elements = document.getElementById('content').attributes;
var elements = document.getElementById('content').attributes[1].value;
console.log(elements);

{/* <h3>write a javascript function to replace inner html of div element with id content with string 'new content' using dom inner html property </h3> */}

function replaceText(){
    var contents = document.getElementById('contents');
    contents.innerHTML = 'hellow good afternoon all!';
}
replaceText()