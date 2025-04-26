const sounds = [
  "/mnt/data/sound1.mp3",
  "/mnt/data/sound2.mp3",
  "/mnt/data/sound3.mp3",
  "/mnt/data/sound4.mp3",
  "/mnt/data/sound5.mp3",
  "/mnt/data/sound6.mp3",
  "/mnt/data/sound7.mp3",
  "/mnt/data/sound8.mp3",
  "/mnt/data/sound9.mp3",
  "/mnt/data/sound10.mp3",
  "/mnt/data/sound11.mp3",
  "/mnt/data/sound12.mp3",
  "/mnt/data/sound13.mp3",
  "/mnt/data/sound14.mp3",
  "/mnt/data/sound15.mp3",
  "/mnt/data/sound16.mp3"
];

const chaosSoundPath = "/mnt/data/legendarypull.mp3";
const chaosBackground = "/mnt/data/tele.webp";

let currentAudios = [];
let globalVolume = 1.0;
let canClick = true;

// Generate sound buttons
const soundboard = document.getElementById('soundboard');
sounds.forEach((sound, index) => {
  const button = document.createElement('div');
  button.className = 'sound-button';
  button.innerText = `Sound ${index + 1}`;
  button.onclick = () => {
    if (canClick) {
      playSound(index);
      canClick = false;
      setTimeout(() => {
        canClick = true;
      }, 100); // 0.1 seconds cooldown
    }
  };
  soundboard.appendChild(button);
});

function playSound(index) {
  const audio = new Audio(sounds[index]);
  audio.volume = globalVolume;
  audio.play();
  currentAudios.push(audio);
}

function stopAllSounds() {
  currentAudios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
  currentAudios = [];
}

function playRandomSound() {
  if (canClick) {
    const randomIndex = Math.floor(Math.random() * sounds.length);
    playSound(randomIndex);
    canClick = false;
    setTimeout(() => {
      canClick = true;
    }, 100);
  }
}

const volumeSlider = document.getElementById('volumeSlider');
volumeSlider.addEventListener('input', function() {
  globalVolume = parseFloat(this.value);
});

window.onload = function () {
  const chance = Math.floor(Math.random() * 2500) + 1;
  if (chance === 1) {
    document.body.style.backgroundImage = `url('${chaosBackground}')`;

    const chaosAudio = new Audio(chaosSoundPath);
    chaosAudio.loop = true;
    chaosAudio.volume = 1.0;
    chaosAudio.play();
    currentAudios.push(chaosAudio);

    const chaosText = document.createElement('div');
    chaosText.innerText = "نحن قادمون ، استعد لوصولنا.";
    chaosText.style.position = "fixed";
    chaosText.style.top = "50%";
    chaosText.style.left = "50%";
    chaosText.style.transform = "translate(-50%, -50%)";
    chaosText.style.color = "red";
    chaosText.style.fontSize = "4rem";
    chaosText.style.fontWeight = "bold";
    chaosText.style.textAlign = "center";
    chaosText.style.zIndex = "9999";
    chaosText.style.fontFamily = "Calibri, sans-serif";
    document.body.appendChild(chaosText);
  }
};



