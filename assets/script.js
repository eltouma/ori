// Ralentir la vidéo de la 2e section
document.getElementById('bg-video').playbackRate = 0.5;

const startBtn = document.getElementById('startBtn');
const overlay = document.getElementById('blackOverlay');
const section2 = document.getElementById('section2');

// Glow interactif sur le bouton
startBtn.addEventListener('mousemove', (e) => {
  const rect = startBtn.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  startBtn.style.setProperty('--x', `${x}px`);
  startBtn.style.setProperty('--y', `${y}px`);
});

// Animation plongée + fondu noir
startBtn.addEventListener('click', () => {
  overlay.classList.remove('pointer-events-none');
  overlay.classList.add('opacity-100');

  setTimeout(() => {
    section2.classList.add('active');
    section2.scrollIntoView({ behavior: 'smooth' });
  }, 1000);

  setTimeout(() => {
    overlay.classList.remove('opacity-100');
    overlay.classList.add('opacity-0');
  }, 2000);

  setTimeout(() => {
    overlay.classList.add('pointer-events-none');
  }, 3000);
});

