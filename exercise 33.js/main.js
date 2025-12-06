function changeContent() {
    // 1. Soo qabo elements-ka
    const titleElement = document.getElementById("myTitle");
    const paragraphElement = document.getElementById("myParagraph");

    // 2.  qoraalka kaliya (textContent)
    titleElement.textContent = "Welcome to the Website!";

    // 3. HTML-ka (innerHTML)

    paragraphElement.innerHTML = "kuso dhawow wll page kayga.";
}