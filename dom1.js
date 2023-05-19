var form = document.getElementById('addForm');
var itemList = document.getElementById('items');



form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
//add item
function addItem(event){
    event.preventDefault();

   //get input value
    var newItem = document.getElementById('item').value;
    //create new li element
    var li = document.createElement('li');
    //add class
    li.className='list-group-item';

    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    
    itemList.appendChild(li);
    //creAte a delete button
    var deletebtn = document.createElement('button');
    //add class 
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    //add textnode X
    deletebtn.appendChild(document.createTextNode('X'));
    
    li.appendChild(deletebtn);
    
    itemList.appendChild(li);

}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }

}