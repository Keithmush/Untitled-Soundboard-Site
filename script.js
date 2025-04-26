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




