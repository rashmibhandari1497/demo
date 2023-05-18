// EXAMINE THE DOCUMENT
//console.dir(document);
//var header = document.getElementById('main-header');
//header.style.borderBottom = 'solid 3px #000';
//var item= document.querySelector('.list-group-item');
//item.style.color= 'green';
//ELEMENTBYCLASSNAME
//ELEMENTBYTAGNAME
//var li = document.getElementsByTagName('li');
//li[1].textContent = 'Hello 2';

//QUERRYSELECTOR
var item = document.querySelector('.list-group-item:nth-child(2)');
item.style.backgroundColor = 'green';
var itemThird = document.querySelector('.list-group-item:nth-child(3)');
itemThird.style.display = 'none';
 

