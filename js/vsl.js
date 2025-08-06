var video = document.getElementById('video');
let play = document.querySelector(".play");
var elem = document.querySelector(".media-player-container");
/* var fullScreenVideo = document.getElementById("fullscreen"); */

var counterText = document.getElementById("counter-text");

var videoTwo = document.getElementById("video-two");
let playTwo = document.querySelector(".play-two");

let mediaPlayer = document.getElementById("media-player").onclick = function() { playPauseBtn() };
let mediaPlayerTwo = document.getElementById("media-player-two").onclick = function() { playPauseBtnTwo() };

function playPauseBtn() {
    if (video.paused) {
        video.play();
        play.style.display = "none";
        video.playbackRate = 1.2;
        /* fullScreenVideo.style.display = "none"; */
        mediaPlayer.classList.toggle('pause');
    } else {
        video.pause();
        play.style.display = "block";
        /* fullScreenVideo.style.display = "block"; */
        mediaPlayer.classList.toggle('pause');
    }
}

function playPauseBtnTwo() {
    if (videoTwo.paused) {
        videoTwo.play();
        playTwo.style.display = "none";
        videoTwo.playbackRate = 1.2;
        /* fullScreenVideo.style.display = "none"; */
        mediaPlayerTwo.classList.toggle('pause');
    } else {
        videoTwo.pause();
        playTwo.style.display = "block";
        /* fullScreenVideo.style.display = "block"; */
        mediaPlayerTwo.classList.toggle('pause');
    }
}





// Get references to the video and button elements
let contentSection = document.getElementById("content-section");

// Define the time (in seconds) when you want to show the button (2 minutes and 32 seconds)
const showButtonTime = 1 * 60 + 52; // 1 minutes * 60 seconds + 52 seconds

// Add an event listener to the video's time update event
video.addEventListener("timeupdate", function() {
    // Check if the current time of the video is greater than or equal to the showButtonTime
    if (video.currentTime >= showButtonTime) {
        // Show the button by setting its display property to an empty string
        contentSection.style.display = "block";
    }
});