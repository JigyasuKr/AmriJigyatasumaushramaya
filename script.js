// Countdown Logic
const targetDate = new Date("January 1, 2026 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((diff % (1000 * 60)) / 1000);
}, 1000);

// Falling Roses Effect
function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = Math.random() * 3 + 2 + 's';
    petal.innerHTML = `<img src="https://res.cloudinary.com/dsitvhpg2/image/upload/v1767217942/rose_petal_uknsni.png" width="30">`;
    document.getElementById('rose-container').appendChild(petal);

    setTimeout(() => { petal.remove(); }, 5000);
}
setInterval(createPetal, 300);

const modal = document.getElementById("passwordModal");
const passwordInput = document.getElementById("passwordInput");

function openModal() {
    modal.style.display = "block";
    passwordInput.focus();
}

function closeModal() {
    modal.style.display = "none";
    passwordInput.value = ""; // Clear input
}

function validatePassword() {
    const correctPassword = "Jigrita211@#$"; // Set your password here
    
    if (passwordInput.value === correctPassword) {
        window.location.href = "page2.html";
    } else {
        alert("The gates remain closed. Incorrect key!");
        passwordInput.value = "";
    }
}

// Close modal if user clicks outside of the box
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Browsers require a click to play audio. 
    // Since she clicked the "Save" button to get here, 
    // we play the music as soon as she interacts with this page.
    window.addEventListener('click', () => {
        const audio = document.getElementById('index-audio');
        audio.play();
    }, { once: true });

