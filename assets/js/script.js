document.addEventListener('DOMContentLoaded', () => {
		// Slowdown first video
		const video = document.getElementById('bg-video')
		if (video)
			video.playbackRate = 0.5;
		});
