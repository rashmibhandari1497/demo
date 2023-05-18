// EXAMINE THE DOCUMENT
//console.dir(document);
//var header = document.getElementById('main-header');
//header.style.borderBottom = 'solid 3px #000';
//var item= document.querySelector('.list-group-item');
//item.style.color= 'green';
//ELEMENTBYCLASSNAME
var items = document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor = 'yellow';
for (var i = 0 ; i<items.length ; i++){
    items[i].style.fontWeight = 'bold';
}
//ELEMENTBYTAGNAME
var li = document.getElementsByTagName('li');
li[1].textContent = 'Hello 2';
