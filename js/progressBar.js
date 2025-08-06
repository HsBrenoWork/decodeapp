const audioTwo = document.getElementById('video');
const progressBar = document.getElementById('progress-bar');

audioTwo.addEventListener('timeupdate', () => {
    const currentTime = audioTwo.currentTime;
    const duration = audioTwo.duration;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
});

audio.addEventListener('ended', () => {
    progressBar.style.width = '0';
    progressBar.parentElement.style.display = 'none';
});