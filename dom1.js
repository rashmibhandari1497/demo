//create a div
var newDiv = document.createElement('div');
newDiv.className='hello';
newDiv.id = 'hello';
newDiv.setAttribute('title','HelloDiv');
//create a text node
var newDivText  = document.createTextNode('Hello word');
//add text to div
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
newDiv.style.fontSize="30px";
container.insertBefore(newDiv,h1);
var newNode = document.createElement('li');
var textNode = document.createTextNode('Hello word');
newNode.appendChild(textNode);
var items = document.getElementById('items');
items.insertBefore(newNode , items.children[0]);