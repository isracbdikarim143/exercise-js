
let posts = [];


function savePost() {
    // Soo qaado xogta input-yada
    const title = document.getElementById('postTitle').value;
    const image = document.getElementById('postImage').value;
    const content = document.getElementById('postContent').value;

    
    if (title === "" || content === "") {
        alert("Fadlan gali Title iyo Qoraalka.");
        return;
    }

    
    const newPost = { title, image, content };
    posts.push(newPost);

    
    clearForm();
    
    // Dib u soo bandhig posts-ka
    renderPosts();
}


function renderPosts() {
    const postsList = document.getElementById('postsList');
    postsList.innerHTML = ""; 

    
    posts.forEach((post, index) => {
        postsList.innerHTML += `
            <div class="post-card">
                <div class="post-title">${post.title}</div>
                ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
                <div class="post-content">${post.content}</div>
                <div class="actions">
                    <button class="edit-btn" onclick="editPost(${index})">Edit</button>
                    <button class="delete-btn" onclick="deletePost(${index})">Delete</button>
                </div>
            </div>
        `;
    });
}


function editPost(index) {
    const post = posts[index];

    
    let newTitle = prompt("Badal Ciwaanka (Title):", post.title);
    
    
    if (newTitle === null) return; 

    
    let newImage = prompt("Badal URL-ka Sawirka:", post.image);
    if (newImage === null) return;

    
    let newContent = prompt("Badal Qoraalka (Content):", post.content);
    if (newContent === null) return;

    
    if(newTitle === "") newTitle = post.title;
    if(newContent === "") newContent = post.content;

    
    posts[index] = {
        title: newTitle,
        image: newImage,
        content: newContent
    };

    
    renderPosts();
}

// Function-ka Delete (Tirtirid)
function deletePost(index) {
    const confirmDelete = confirm("Ma hubtaa inaad tirtirto?");
    if (confirmDelete) {
        posts.splice(index, 1); 
        renderPosts(); 
    }
}

// Function foomka nadiifiya
function clearForm() {
    document.getElementById('postTitle').value = "";
    document.getElementById('postImage').value = "";
    document.getElementById('postContent').value = "";
}