const message = `By order of the King Jigyasu, the year 2026 and 
ahead all years are hereby dedicated to the happiness and Safety of 
the Queen Amrita. My bold Queen is the ruler of "The Kingdom of Heart🖤💜". 
The king states that after this year you ought to and must be with 
king Physically for lifetime. The distances will be erased. Your 
priority will prevail. Come to the Kingdom my queen, Cells are waiting 
to be ruled with your wisdom and love.`;

let i = 0;
const speed = 50; // Speed of typing in milliseconds

function typeWriter() {
    if (i < message.length) {
        document.getElementById("typed-text").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        // Show signature and button after typing ends
        document.getElementById("signature").classList.add("show-signature");
    }
}

// Start typing when page loads
window.onload = typeWriter;

// Browsers require a click to play audio. 
    // Since she clicked the "Save" button to get here, 
    // we play the music as soon as she interacts with this page.
    window.addEventListener('click', () => {
        const audio = document.getElementById('page2-audio');
        audio.play();
    }, { once: true });