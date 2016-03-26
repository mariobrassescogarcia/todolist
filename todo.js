
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

    //Create a variable containing the content of the new to-do
    var todo_text = document.createTextNode(document.getElementById("todo-input").value)
    //Create a variable containing the to-do list.
    var todo_list = document.querySelector("ul.todo-list-items")
    //Create the li container that will keep the todo_text
    var todo_item = document.createElement("li")


    last_item_todo.parentNode.insertBefore(last_item, last_item_todo.nextSibling)
    last_item.parentNode.insertBefore(new_todo, last_item.nextSibling)


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
