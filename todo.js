
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

    // Insert the text in the li element
    todo_item.appendChild(todo_text)
    //Insert the li element in the ul listing
    todo_list.appendChild(todo_item)

    //Make the function return the text we introduced as a To-Do

    alert("You've added this task to your To-Do List " + document.getElementById("todo-input").value) 


    // add your code here
    // this should create a new list item in the to-do list
    // and set the text as the input from the todo-input field
  }

  function markAsDone() {

    //Create a conditional to check if there are any tasks pending
    if (document.getElementsByClassName("todo-list-items")[0].children.length > 1 ) {
        doneButton.classList.add('liked');
        doneButton.innerHTML = "Liked!";
        document.querySelector('h1').style.color = "red";
        var done_list = document.querySelector("ul.done-list-items")
        var done_todo = document.querySelector("ul.todo-list-items > li")

        done_todo.setAttribute("class", "done")
        done_list.appendChild(done_todo)

    }
    
    // Condition where there are no more tasks pending
    else {
      alert("You have finished all your To-Do's. Get a beer and relax")
    }
  }
  
}
