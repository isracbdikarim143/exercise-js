// script.js

const videoElement = document.getElementById('video-element'); 

// Xulashada walxaha aasaasiga ah
const playPauseBtn = document.getElementById('play-pause-btn');
const progressBar = document.getElementById('progress-bar');
const currentTimeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('duration');
const volumeSlider = document.getElementById('volume-slider');
const videoTitleDisplay = document.getElementById('video-title');

// Xulashada Liiska Qarsoon
const videoContainer = document.querySelector('.video-container');
const contextMenu = document.getElementById('context-menu');
const copyUrlBtn = document.getElementById('copy-url-btn');
const copyEmbedBtn = document.getElementById('copy-embed-btn');
const loopBtn = document.getElementById('loop-btn');

let isPlaying = false;

// ===================================
// A. Shaqaaynta Ciyaarista Aasaasiga ah
// ===================================

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        videoElement.pause();
        playPauseBtn.textContent = '▶'; 
    } else {
        videoElement.play();
        playPauseBtn.textContent = '⏸'; 
    }
    isPlaying = !isPlaying;
});

// Maamulka Wakhtiga
videoElement.addEventListener('loadedmetadata', () => {
    // Hubi inuu cinwaanka faylka muuqaalka ku jiro videoElement.src
    const filename = videoElement.src.split('/').pop();
    videoTitleDisplay.textContent = File: ${filename}; 
    
    if (videoElement.duration && isFinite(videoElement.duration)) {
        durationDisplay.textContent = formatTime(videoElement.duration);
        progressBar.max = videoElement.duration;
    } else {
        durationDisplay.textContent = '0:00';
    }
});

videoElement.addEventListener('timeupdate', () => {
    currentTimeDisplay.textContent = formatTime(videoElement.currentTime);
    progressBar.value = videoElement.currentTime;
});

progressBar.addEventListener('input', () => {
    videoElement.currentTime = progressBar.value;
});

// Maamulka Codka
volumeSlider.addEventListener('input', () => {
    videoElement.volume = volumeSlider.value / 100;
});

// Muuqaalka oo dhamaada
videoElement.addEventListener('ended', () => {
    isPlaying = false;
    playPauseBtn.textContent = '▶';
    videoElement.currentTime = 0; // Dib u celi bilowga
});

// Shaqaaynta beddelidda wakhtiga (0:00)
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
    return ${minutes}:${formattedSeconds};
}

// ===================================
// B. Shaqaaynta Liiska Qarsoon (Context Menu)
// ===================================

// Tusaale ahaan, waxaan u malaynaynaa in URL-ka uu yahay mid taagan hadda
const videoUrlBase = "https://yourwebsite.com/videos/my_single_video.mp4"; 
const embedCode = <iframe src="${videoUrlBase}" width="560" height="315" frameborder="0"></iframe>;


// 1. Soo Saarida Liiska (Jooji Right-Click-ka caadiga ah)
videoContainer.addEventListener('contextmenu', (e) => {
    e.preventDefault(); 
    contextMenu.style.top = ${e.clientY}px;
    contextMenu.style.left = ${e.clientX}px;
    contextMenu.style.display = 'block';
});

// 2. Qari Menu-ka haddii meel kale la riixo
document.addEventListener('click', () => {
    contextMenu.style.display = 'none';
});

// 3. Copy Video URL
copyUrlBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(videoUrlBase)
        .then(() => {
            alert('Video URL-ka waa la koobiyay!'); 
        });
});

// 4. Copy Embed Code
copyEmbedBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(embedCode)
        .then(() => {
            alert('Embed Code waa la koobiyay!');
        });
});

// 5. Loop (Ku Soo Noqnoqo)
loopBtn.addEventListener('click', () => {
    videoElement.loop = !videoElement.loop; 
    loopBtn.textContent = videoElement.loop ? 'Loop (Waa shidan yahay)' : 'Loop (Waa dansan yahay)';
});

// Bilaabidda Ugu Horeysa
videoElement.loop = false;