function add() {
    const inputField = document.getElementById('input');
    const taskText = inputField.value.trim();

    if (taskText !== "") {
        const listContainer = document.getElementById('list-container');

        const newItem = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.className = 'Delete';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            deleteItem(deleteButton);
        };

        newItem.textContent = taskText;
        newItem.appendChild(deleteButton);
        listContainer.appendChild(newItem);

        inputField.value = ""; 
    }
}

function deleteItem(button) {
    const listItem = button.parentElement;
    listItem.remove();
}
