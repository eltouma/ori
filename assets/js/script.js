
document.addEventListener('DOMContentLoaded', () => {
		// Slowdown first video
		const video = document.getElementById('bg-video')
		if (video)
			video.playbackRate = 0.5;

		const startBtn = document.getElementById('startBtn');
		if (!startBtn)
			return ;
		// Btn: interactive glow
		startBtn.addEventListener('mousemove', (e) => {
				const rect = startBtn.getBoundingClientRect();
				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;
				startBtn.style.setProperty('--x', `${x}px`);
				startBtn.style.setProperty('--y', `${y}px`);
				});
		});
