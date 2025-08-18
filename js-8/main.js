var rows = document.getElementsByTagName('tr');
var i;
for(i=0;i<rows.length;i++){
    if(i%2==0){
        rows[i].className='even';     
    }
    else{
        rows[i].className='odd';
    }
}

function hideElements(cname){
 var elements = document.getElementsByClassName(cname);
 var i;
 for(i=0;i<elements.length;i++){
    elements[i].style.display = 'none';
 }
}

function countLinks(){
 var links = document.links;
 var tlinks = links.length;
 document.write('<br> total Links is:'+tlinks);
}
countLinks();
 
var pagetitle = document.title;
document.write('page title is: +pagetitle');

function changeBG(){
    var body = document.body;
    body.style.backgroundColor = 'skyblue';
    body.style.color = 'orange';
}
































































































