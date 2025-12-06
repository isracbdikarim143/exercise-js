// 1. Select the elements
const colorInput = document.getElementById('colorInput');
const colorPreview = document.getElementById('colorPreview');
const historyList = document.getElementById('historyList');


colorInput.addEventListener('input', function() {
    const selectedColor = colorInput.value;
    colorPreview.style.backgroundColor = selectedColor;
});

colorInput.addEventListener('change', function() {
    const selectedColor = colorInput.value;
    
    // Create a new list item
    const newItem = document.createElement('li');
    
    newItem.textContent = selectedColor;

    newItem.style.color = selectedColor;
    
    historyList.appendChild(newItem);
});