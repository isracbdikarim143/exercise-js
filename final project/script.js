const API_URL = 'https://api.tvmaze.com/search/shows?q=';

/* ===========================================================
   QAYBTA 1: MARKA WEBSITE-KA LA FURO (AUTO LOAD LOGIC)
   =========================================================== */
document.addEventListener('DOMContentLoaded', function() {
    

    const movieGrid = document.getElementById('movieGrid');
    if (movieGrid) {
        
        fetchMovies('Action');

        
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener("keypress", function(event) {
                if (event.key === "Enter") {
                    searchMovies();
                }
            });
        }
    }

    // B. HADDII AAN JOOGNO WATCHLIST PAGE (watchlist.html)
    const watchlistGrid = document.getElementById('watchlistGrid');
    if (watchlistGrid) {
        loadWatchlist();
    }

    // C. HADDII AAN JOOGNO DETAILS PAGE (movie.html)
    const movieDetails = document.getElementById('movieDetails');
    if (movieDetails) {
        getDetails();
    }

}); // Dhamaadka DOMContentLoaded


/* ===========================================================
   QAYBTA 2: FUNCTIONS-KA HTML-KU U BAAHAN YAHAY (GLOBAL)
   =========================================================== */

// 1. MENU TOGGLE (MOBILE)
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    if (navLinks) {
        
        if (navLinks.classList.contains("show")) {
            navLinks.classList.remove("show");
            navLinks.style.display = "none"; // Mobile fix
        } else {
            navLinks.classList.add("show");
            navLinks.style.display = "flex"; // Mobile fix
        }
    }
}


function searchMovies() {
    const input = document.getElementById('searchInput');
    if (input && input.value !== "") {
        fetchMovies(input.value);
        const title = document.getElementById('resultsTitle');
        if (title) {
            title.innerText = 'Natiijada: ' + input.value;
        }
    } else {
        alert("Fadlan qor magaca filimka.");
    }
}


function goToDetails(id) {
    window.location.href = 'movie.html?id=' + id;
}


function addToWatchlist(id, name, image) {
    let list = [];
    
    
    const storedList = localStorage.getItem('watchlist');
    if (storedList) {
        list = JSON.parse(storedList);
    }


    let exists = false;
    for (let i = 0; i < list.length; i++) {
        if (list[i].id == id) {
            exists = true;
            break;
        }
    }

    if (!exists) {
        list.push({ id: id, name: name, image: image });
        localStorage.setItem('watchlist', JSON.stringify(list));
        alert(name + " waa la kaydiyay!");
    } else {
        alert("Filimkan horey ayuu u jiray.");
    }
}

// 5. REMOVE FROM WATCHLIST
function removeFromList(index) {
    const storedList = localStorage.getItem('watchlist');
    if (storedList) {
        let list = JSON.parse(storedList);
        list.splice(index, 1); // Tirtir 1 xabo
        localStorage.setItem('watchlist', JSON.stringify(list));
        window.location.reload(); // Refresh page
    }
}


/* ===========================================================
   QAYBTA 3: LOGIC-GA SOO JIIDASHADA XOGTA (FETCHING)
   =========================================================== */

// FETCH MOVIES FUNCTION
async function fetchMovies(searchTerm) {
    const grid = document.getElementById('movieGrid');
    if (!grid) return; 


    grid.innerHTML = '<p style="color:white; text-align:center;">Loading...</p>';

    try {
        const response = await fetch(API_URL + searchTerm);
        const data = await response.json();

        // Clear Loading
        grid.innerHTML = '';

        if (data.length === 0) {
            grid.innerHTML = '<p style="color:white;">Waxba lama helin.</p>';
            return;
        }

        
        for (let i = 0; i < data.length; i++) {
            const show = data[i].show;
            const image = show.image ? show.image.medium : 'https://via.placeholder.com/210x295?text=No+Image';

            const card = document.createElement('div');
            card.className = 'card';
            
        
            card.onclick = function() {
                goToDetails(show.id);
            };

            card.innerHTML = `
                <img src="${image}" alt="${show.name}">
                <div class="card-info">
                    <h3>${show.name}</h3>
                    <div class="rating">⭐ ${show.rating.average || '7.5'}</div>
                </div>
            `;
            grid.appendChild(card);
        }

    } catch (error) {
        console.error("Error:", error);
        grid.innerHTML = '<p style="color:red;">Cilad ayaa dhacday.</p>';
    }
}


function loadWatchlist() {
    const grid = document.getElementById('watchlistGrid');
    if (!grid) return;

    let list = [];
    const storedList = localStorage.getItem('watchlist');
    
    if (storedList) {
        list = JSON.parse(storedList);
    }

    if (list.length === 0) {
        grid.innerHTML = "<p style='color:white'>Liiskaagu wuu maran yahay.</p>";
        return;
    }

    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <img src="${item.image}">
            <div class="card-info">
                <h3>${item.name}</h3>
                <button onclick="removeFromList(${i})" style="background:red; color:white; border:none; padding:5px; width:100%; margin-top:5px; cursor:pointer;">Remove</button>
            </div>
        `;
        grid.appendChild(card);
    }
}


async function getDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const div = document.getElementById('movieDetails');

    if (!id || !div) return;

    try {
        const res = await fetch('https://api.tvmaze.com/shows/' + id);
        const show = await res.json();
        
        const image = show.image ? show.image.original : 'https://via.placeholder.com/300';
        
        
        const safeName = show.name.replace(/'/g, "\\'"); 
        const youtubeLink = 'https://www.youtube.com/results?search_query=' + show.name + ' trailer';

        div.innerHTML = `
            <img src="${image}" alt="${show.name}">
            <div class="details-text">
                <h1>${show.name}</h1>
                <p><strong>Genre:</strong> ${show.genres.join(', ')}</p>
                <p><strong>Language:</strong> ${show.language}</p>
                <p>${show.summary || 'Faahfaahin lagama hayo.'}</p>
                
                <div style="margin-top:20px;">
                    <a href="${youtubeLink}" target="_blank" class="btn-trailer" style="background:red; padding:10px; color:white; text-decoration:none; margin-right:10px;">▶ Watch Trailer</a>
                    
                    <button class="btn-add" onclick="addToWatchlist('${show.id}', '${safeName}', '${image}')" style="background:green; padding:10px; color:white; border:none; cursor:pointer;">
                        + Add to Watchlist
                    </button>
                </div>
                <br>
                <a href="index.html" style="color:white; text-decoration:underline;">⬅ Back to Home</a>
            </div>
        `;
    } catch (error) {
        console.error(error);
        div.innerHTML = "<p>Cilad ayaa dhacday.</p>";
    }
}