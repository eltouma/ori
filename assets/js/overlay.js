document.addEventListener('DOMContentLoaded', () => {
		const startBtn = document.getElementById('startBtn');
		const overlay = document.getElementById('blackOverlay');
		const section2 = document.getElementById('section2');

		if (!startBtn || !overlay || !section2) return ;
		// Black fade
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

});
