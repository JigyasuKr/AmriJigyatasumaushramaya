function breakSeal() {
    const music = document.getElementById('dinner-music');
    // We try to play music, but handle browsers that block auto-play
    music.play().catch(error => console.log("Music play delayed until interaction."));
    
    // Hide the seal container
    document.getElementById('seal-container').style.display = 'none';
    
    // Reveal the scroll
    const content = document.getElementById('scroll-content');
    content.classList.remove('scroll-hidden');
    
    // Safety check: ensure display is block
    content.style.display = "block";
}

function showSecret(id) {
    const secret = document.getElementById(`secret-${id}`);
    if(secret) secret.classList.add('show-secret');
}

function hideSecret() {
    const secrets = document.querySelectorAll('.chef-secret');
    secrets.forEach(s => s.classList.remove('show-secret'));
}

function startCheers() {
    const overlay = document.getElementById('cheers-overlay');
    overlay.classList.remove('hidden');
    overlay.style.display = "flex"; // Force display
    
    document.getElementById('clink-sound').play();
    document.getElementById('left-glass').classList.add('clink-animation');
    
    const msg = "This was the Virtual Dinner For My Queen, Ammu (Softy) for her Birthday Surprise. To a lifetime of dinners together, I Love You, My Queen. I hope you enjoyed to the fullest and lets keep enjoying in Future together.";
    let i = 0;
    const speed = 50;
    const target = document.getElementById('final-message');
    target.innerHTML = ""; // Clear existing text

    function typeMsg() {
        if (i < msg.length) {
            target.innerHTML += msg.charAt(i);
            i++;
            setTimeout(typeMsg, speed);
        }
    }
    typeMsg();
}
