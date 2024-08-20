// Get html elements
const input = document.getElementById("todo-input");
const button = document.getElementById("add-button");
const list = document.getElementById("todo-list");

// Function to create html elements and attach them to the DOM
function addTaskItem() {
    const todoText = input.value;
    if (todoText) {
        // Create a checkbox "input" to mark completed items
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                li.classList.add("completed");
            } else {
                li.classList.remove("completed");
            }
        });

        // 1. Create a new "li" element to hold the todoText
        const li = document.createElement("li");
        li.textContent = todoText;

        // 2. Create a "button" element to delete current "li" element
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            list.removeChild(li);
        });

        // 3. Add new "li" element to the to do list and reset text box
        li.prepend(checkbox);
        li.appendChild(deleteButton);
        list.appendChild(li);
        input.value = "";
    }
}

// Add event listener to input text box for when "Enter" key is hit
input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addTaskItem();
    }
});

// Add event listener to the "Add" button
button.addEventListener("click", () => {
    addTaskItem();
});

// Create a "Clear Completed" button to remove items with a ticked checkbox
const clearCompletedButton = document.createElement("button");
clearCompletedButton.textContent = "Clear Completed";
clearCompletedButton.setAttribute("id", "clear-completed-button");
clearCompletedButton.addEventListener("click", () => {
    list.querySelectorAll(".completed").forEach((li) => li.remove());
});

list.parentNode.appendChild(clearCompletedButton);
