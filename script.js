function playSound(soundFile) {
    let audio = new Audio("sounds/" + soundFile);
    let volumeSlider = document.getElementById("volume");
    audio.volume = volumeSlider.value;
    audio.play();
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

let playingSounds = [];

function playSound(soundFile) {
    let audio = new Audio("sounds/" + soundFile);
    let volumeSlider = document.getElementById("volume");
    audio.volume = volumeSlider.value;
    audio.play();
    playingSounds.push(audio);
}

function stopAllSounds() {
    playingSounds.forEach(audio => audio.pause());
    playingSounds = [];
}

function playRandomSound() {
    let sounds = ["sound1.mp3", "sound2.mp3", "sound3.mp3", "sound4.mp3", "sound5.mp3", "sound6.mp3",];
    let randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    playSound(randomSound);
}



