const games = [
    { name: "2048", file: "2048.html.html" },
    { name: "Geometry Dash", file: "geometrydash.html.html" },
    { name: "It's Raining Boxes", file: "itsrainingboxes.html" },
    { name: "Just One Boss", file: "justoneboss.html" },
    { name: "Ninja vs Evil Corp", file: "ninjavsevilcorp.html.html" },
    { name: "Slope", file: "slope.html.html" },
    { name: "Spacebar Clicker", file: "spacebarclicker.html.html" },
    { name: "Stack", file: "stack.html" },
    { name: "Stickman Hook", file: "stickmanhook.html" },
    { name: "drive mad", file: "drivemad.html" },
    { name: "Super Mario 64", file: "supermario64.html" },

];

// Sidebar navigation logic
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const target = btn.getAttribute('data-tab');
        document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
        document.getElementById(target + '-tab').classList.add('active');
    });
});

// Render games list as cards w/ play buttons
const gamesListDiv = document.getElementById('games-list');
games.forEach((game, idx) => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
        <div class="game-title">${game.name}</div>
        <div class="play-btn-group">
            <button class="play-btn" onclick="playGame(${idx})" title="Play">▶ Play</button>
        </div>
    `;
    gamesListDiv.appendChild(card);
});

// Play game (mode: here, newtab, blank)
function playGame(idx) {
    const mode = document.getElementById('play-mode').value;
    const gameFile = games[idx].file;
    if (mode === "newtab") {
        window.open(gameFile, "_blank");
    } else if (mode === "blank") {
        fetch(gameFile).then(res => res.text()).then(html => {
            const win = window.open('about:blank');
            win.document.open();
            win.document.write(html);
            win.document.close();
        }).catch(() => alert("Couldn't open in about:blank!"));
    } else {
        // Play in iframe (default)
        const frame = document.getElementById('game-frame');
        frame.src = gameFile;
        frame.style.display = 'block';
        document.getElementById('game-placeholder').style.display = 'none';
    }
}

// Hide iframe and show placeholder at start
window.onload = () => {
    document.getElementById('game-frame').style.display = 'none';
    document.getElementById('game-placeholder').style.display = 'block';
};

// Keyboard shortcut: Tab between sidebar nav
document.addEventListener('keydown', (e) => {
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'SELECT') return;
    if (e.key === '1') document.querySelector('.nav-btn[data-tab="games"]').click();
    if (e.key === '2') document.querySelector('.nav-btn[data-tab="about"]').click();
    if (e.key === '3') document.querySelector('.nav-btn[data-tab="settings"]').click();
});
