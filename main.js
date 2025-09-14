const games = [
  { name: "2048", file: "2048.html" },
  { name: "Geometry Dash", file: "geometrydash.html" },
  { name: "Stack", file: "stack.html" },
  { name: "Slope", file: "slope.html" }
];

// Sidebar tab switching
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
  const card = document.createElement('div');
  card.className = 'game-card';
  card.innerHTML = `
    <p>${game.name}</p>
    <button class="play-btn" onclick="playGame(${idx})">Play</button>
  `;
  gamesListDiv.appendChild(card);
});

// Play game
function playGame(idx) {
  const mode = document.getElementById('play-mode').value;
  const frame = document.getElementById('game-frame');
  const placeholder = document.getElementById('game-placeholder');
  if (mode === "newtab") {
    window.open(games[idx].file, "_blank");
  } else {
    frame.src = games[idx].file;
    frame.style.display = 'block';
    placeholder.style.display = 'none';
  }
}

// Reset game area at start
window.onload = () => {
  document.getElementById('game-frame').style.display = 'none';
};

// Fullscreen
document.getElementById('fullscreen-btn').addEventListener('click', () => {
  const iframe = document.getElementById('game-frame');
  if (iframe.requestFullscreen) iframe.requestFullscreen();
});
