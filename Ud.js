const games = [
  { file: '2048.html.html', name: '2048' },
  { file: 'bloonstowerdefense5.html.html', name: 'Bloons Tower Defense 5' },
  { file: 'bloxorz.html.html', name: 'Bloxorz' },
  { file: 'celeste.html', name: 'Celeste' },
  { file: 'drivemad.html', name: 'Drive Mad' },
  { file: 'geometrydash.html.html', name: 'Geometry Dash' },
  { file: 'ninjavsevilcorp.html.html', name: 'Ninja vs Evil Corp' },
  { file: 'offlineparadise.html', name: 'Offline Paradise' },
  { file: 'radiusraid.html', name: 'Radius Raid' },
  { file: 'slope.html.html', name: 'Slope' },
  { file: 'spacebarclicker.html.html', name: 'Spacebar Clicker' },
  { file: 'stack.html', name: 'Stack' },
  { file: 'stickmanhook.html', name: 'Stickman Hook' },
  { file: 'supermario64.html', name: 'Super Mario 64' },
  { file: 'tetris.html', name: 'Tetris' },
  { file: 'trex.html', name: 'T-Rex Game' }
];

function populateGameList() {
  const ul = document.getElementById('gameList');
  games.forEach(({file, name}) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = file;
    a.textContent = name;
    a.setAttribute('aria-label', `Play ${name} offline`);
    a.setAttribute('target', '_blank'); // Open in new tab for clean session
    li.appendChild(a);
    ul.appendChild(li);
  });
}

function setActiveTab(newActiveTabId) {
  const tabs = document.querySelectorAll('nav[role="tablist"] button[role="tab"]');
  const panels = document.querySelectorAll('main > section[role="tabpanel"]');

  tabs.forEach(tab => {
    const isActive = (tab.id === newActiveTabId);
    tab.setAttribute('aria-selected', isActive);
    tab.tabIndex = isActive ? 0 : -1;
  });

  panels.forEach(panel => {
    panel.hidden = !(panel.id === `panel-${newActiveTabId.split('-')[1]}`);
  });

  // Move focus to active panel
  const activePanel = document.getElementById(`panel-${newActiveTabId.split('-')[1]}`);
  activePanel.focus();
}

function handleTabClick(event) {
  setActiveTab(event.target.id);
}

function handleTabKeyboard(event) {
  const tabs = Array.from(document.querySelectorAll('nav[role="tablist"] button[role="tab"]'));
  const currentIndex = tabs.findIndex(tab => tab === event.target);
  let newIndex;

  switch(event.key) {
    case 'ArrowRight':
    case 'ArrowDown':
      newIndex = (currentIndex + 1) % tabs.length;
      break;
    case 'ArrowLeft':
    case 'ArrowUp':
      newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      break;
    case 'Home':
      newIndex = 0;
      break;
    case 'End':
      newIndex = tabs.length - 1;
      break;
    default:
      return;
  }
  event.preventDefault();
  tabs[newIndex].focus();
}

function initTabs() {
  const tabs = document.querySelectorAll('nav[role="tablist"] button[role="tab"]');
  tabs.forEach(tab => {
    tab.addEventListener('click', handleTabClick);
    tab.addEventListener('keydown', handleTabKeyboard);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  populateGameList();
  initTabs();
  setActiveTab('tab-play');
});
