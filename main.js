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
  { name: "Drive Mad", file: "drivemad.html" },
  { name: "Super Mario 64", file: "supermario64.html" },
  { name: "Trex", file: "trex.html" },
];

// Sidebar nav switching
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const target = btn.dataset.tab;
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.getElementById(target + "-tab").classList.add('active');
  });
});

// Render games list
const grid = document.getElementById('games-grid');
games.forEach(game => {
  const card = document.createElement('div');
  card.className = 'game-card';
  card.innerHTML = `
    <h3>${game.name}</h3>
    <button class="play-btn" onclick="openGame('${game.file}','${game.name}')">▶ Play</button>
  `;
  grid.appendChild(card);
});

// Always open standalone page
function openGame(file, title) {
  window.location.href = `game-page.html?file=games/${file}&title=${encodeURIComponent(title)}`;
}
