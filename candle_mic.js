let audioContext;
let analyst;
let microphone;
let candlesBlown = false;

async function setupMic() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyst = audioContext.createAnalyser();
        microphone = audioContext.createMediaStreamSource(stream);
        microphone.connect(analyst);
        analyst.fftSize = 256;
        processVolume();
    } catch (err) {
        console.error("Mic access denied", err);
        alert("The Queen must grant microphone access to blow the candles!");
    }
}

function processVolume() {
    const dataArray = new Uint8Array(analyst.frequencyBinCount);
    analyst.getByteFrequencyData(dataArray);
    
    let values = 0;
    for (let i = 0; i < dataArray.length; i++) {
        values += dataArray[i];
    }
    let average = values / dataArray.length;
    
    // Update Meter UI
    document.getElementById('breath-level').style.width = Math.min(average * 2, 100) + "%";

    // Threshold to "blow out" (Value usually goes 50+ for a blow)
    if (average > 95 && !candlesBlown) {
        blowOut();
    }
    
    if (!candlesBlown) requestAnimationFrame(processVolume);
}

function blowOut() {
    candlesBlown = true;
    const flames = document.querySelectorAll('.flame');
    flames.forEach(f => f.style.display = 'none');
    
    const magicSound = new Audio('https://res.cloudinary.com/dsitvhpg2/video/upload/v1767218145/magic_sparkle_t0jdzu.mp3');
    magicSound.play();
    
    revealWish();
}

function revealWish() {
    document.getElementById('wish-message').classList.add('show-wish');
    startConfetti();
}

function startConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = i % 2 === 0 ? '#C0C0C0' : '#2e0854';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        document.getElementById('confetti-wrapper').appendChild(confetti);
    }
}

// Start Mic listener on user interaction
window.addEventListener('click', () => {
    if (!audioContext) setupMic();
}, { once: true });