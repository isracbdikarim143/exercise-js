// Function to add a new item to the list
function addItem() {
    // 1. Select the list
    const list = document.getElementById("myList");

    // 2. Create a new <li> element
    const newItem = document.createElement("li");

    // 3. Set the text content for the new item
    // We count the current items to give it a number
    const count = list.children.length + 1;
    newItem.textContent = "Item " + count;

    // 4. Add the new item to the list
    list.appendChild(newItem);
}

// Function to remove the last item from the list
function removeItem() {
    // 1. Select the list
    const list = document.getElementById("myList");

    // 2. Check if the list has any items left
    if (list.lastElementChild) {
        // 3. Remove the last child element
        list.removeChild(list.lastElementChild);
    } else {
        alert("No more items to remove!");
    }
}