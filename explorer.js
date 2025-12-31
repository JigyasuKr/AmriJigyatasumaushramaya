const destinations = [
    { city: "Luxembourg", reason: "To wander through ancient fortresses where the stones whisper tales of a love as enduring as our own." },
    { city: "Maldives", reason: "To lose ourselves where the azure sky meets the sea, mirroring the infinite depth of my devotion to you." },
    { city: "New York", reason: "To stand amidst the concrete giants and realize that even in the world's greatest city, you are the only skyline I wish to behold." },
    { city: "Paris", reason: "To prove to the City of Light that your radiance outshines the Eiffel Tower at its most brilliant hour." },
    { city: "Moscow", reason: "To walk through the snow-dusted Red Square, where the cold only serves as a reason to hold you closer to my heart." }
];

function showTicket(index, event) {
    const data = destinations[index];
    const overlay = document.getElementById('ticket-overlay');
    const card = document.getElementById('boarding-pass-card');
    
    document.getElementById('destination-name').innerText = "To: " + data.city;
    document.getElementById('destination-reason').innerText = data.reason;
    
    // Show overlay
    overlay.classList.remove('hidden-ticket');
    
    // Position the card near the click
    let x = event.clientX;
    let y = event.clientY;
    
    // Offset logic so it doesn't go off-screen
    card.style.left = (x > window.innerWidth / 2) ? (x - 350) + "px" : (x + 20) + "px";
    card.style.top = (y - 100) + "px";

    document.getElementById('explorer-music').play();
}

function closeTicket() {
    document.getElementById('ticket-overlay').classList.add('hidden-ticket');
}


