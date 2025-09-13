// Game files from your repo
const games = [
    { name: "2048", file: "2048.html.html" },
    { name: "Bloons TD 5", file: "bloonstowerdefense5.html.html" },
    { name: "Bloxorz", file: "bloxorz.html.html" },
    { name: "Geometry Dash", file: "geometrydash.html.html" },
    { name: "It's Raining Boxes", file: "itsrainingboxes.html" },
    { name: "Just One Boss", file: "justoneboss.html" },
    { name: "Ninja vs Evil Corp", file: "ninjavsevilcorp.html.html" },
    { name: "Slope", file: "slope.html.html" },
    { name: "Spacebar Clicker", file: "spacebarclicker.html.html" },
    { name: "Stack", file: "stack.html" },
    { name: "Stickman Hook", file: "stickmanhook.html" },
    { name: "Stickman Hook (Alt)", file: "stickmanhook.html.html" },
    { name: "Super Mario 64", file: "supermario64.html" }
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

// Render games list
const gamesListDiv = document.getElementById('games-list');
games.forEach((game, idx) => {
    const btn = document.createElement('button');
    btn.textContent = game.name;
    btn.className = 'game-btn';
    btn.onclick = () => loadGame(idx);
    btn.id = 'game-btn-' + idx;
    gamesListDiv.appendChild(btn);
});

// Load game in iframe
function loadGame(idx) {
    const frame = document.getElementById('game-frame');
    frame.src = games[idx].file;
    frame.style.display = 'block';
    document.getElementById('game-placeholder').style.display = 'none';
    games.forEach((_, i) => {
        document.getElementById('game-btn-' + i).classList.toggle('active', i === idx);
    });
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