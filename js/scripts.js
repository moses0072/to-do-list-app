function newItem () {


//new item to the list
let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);

if (inputValue === '') {
    alert('You must write something!');
} else {
    let list = $('#list');
    list.append(li);
}

//crossing out an item 
li.on('dblclick', function(){
    li.addClass('strike');
});

//Adding the delet button "X"
let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

crossOutButton.on('click', deleteListItem);

//display none
function deleteListItem(){
    li.addClass('delete')
}

//Reordering items
$('#list').sortable();

}

