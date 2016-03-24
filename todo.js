
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);



   

  function addToDoItem() {

    //This is the content of the new to-do
    var new_todo = document.getElementById("todo-input").value
    //This is the new item list created where the content will be placed
    var last_item = document.createElement("li")
    //This is the current last item of the list
    var last_item_todo = document.getElementById("lasttodo")

    last_item.parentNode.insertBefore(new)
    last_item_todo.parentNode.insertBefore(new_todo, last_item_todo.nextSibling)


    // add your code here
    // this should create a new list item in the to-do list
    // and set the text as the input from the todo-input field
  }

  function markAsDone() {
    doneButton.classList.add('liked');
    doneButton.innerHTML = "Liked!";
    document.querySelector('h1').style.color = "red";
  }
  
}
