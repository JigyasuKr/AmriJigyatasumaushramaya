const locations = {
    1: {
        title: "The Secret Royal Garden",
        note: "I chose this garden because your beauty rivals the rarest emerald blooms. Here, the world stays silent so I can hear your laughter.",
        music: "garden_theme.mp3",
        link: "memory_garden.html"
    },
    2: {
        title: "The Moonlit Balcony",
        note: "Under the vast sky, I want to hold you and watch the stars. They are bright, but they pale in comparison to the light in your eyes.",
        music: "balcony_theme.mp3",
        link: "memory_balcony.html"
    },
    3: {
        title: "The Grand Banquet Hall",
        note: "Because my Queen deserves the finest feast. A royal night of wine, music, and the celebration of Us.",
        music: "banquet_theme.mp3",
        link: "memory_banquet.html"
    },
    4: {
        title: "Our Secret Sanctuary",
        note: "This spot is just for us. No titles, no kingdoms—just Jigyasu and Amrita, forever together.",
        music: "sanctuary_theme.mp3",
        link: "memory_sanctuary.html"
    }
};

function openDate(id) {
    const data = locations[id];
    document.getElementById('location-title').innerText = data.title;
    document.getElementById('love-note-text').innerText = data.note;
    
    const saveBtn = document.querySelector('#date-overlay .royal-btn');
    saveBtn.href = data.link;
    
    // Change Music
    const audio = document.getElementById('bg-music');
    audio.src = data.music;
    audio.play();

    document.getElementById('date-overlay').classList.add('overlay-visible');
}

function closeDate() {
    document.getElementById('date-overlay').classList.remove('overlay-visible');
    const audio = document.getElementById('bg-music');
    audio.src = "main_map_theme.mp3";
    audio.play();
}

// Play initial theme on first click
window.addEventListener('click', () => {
    const audio = document.getElementById('bg-music');
    if (audio.paused) audio.play();
}, { once: true });
