function changeImage() {
    
    const img = document.getElementById("myImage");

    
    let newUrl = prompt("Enter a new Image URL:");

    
    let newBorderColor = prompt("Enter a border color (e.g., red, blue, #00ff00):");

    
    let newWidth = prompt("Enter width in pixels (e.g., 400):");

    
    let newHeight = prompt("Enter height in pixels (e.g., 300):");

    let newRadius = prompt("Enter border radius (e.g., 50):");




    if (newUrl) {
        img.src = newUrl;
    }


    if (newBorderColor) {
        img.style.borderColor = newBorderColor;
    }

    
    if (newWidth) {
        img.style.width = newWidth + "px";
    }

    
    if (newHeight) {
        img.style.height = newHeight + "px";
    }


    if (newRadius) {
        img.style.borderRadius = newRadius + "px";
    }
}