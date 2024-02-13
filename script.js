const container = document.getElementById('container');
const phase = document.getElementById('phase');

const totalTime = 10000;
const breatheInOutTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

const animateBreath = () => {
	phase.textContent = 'Breathe In';
	container.classList = 'container grow';

	setTimeout(() => {
		phase.textContent = 'Hold';

		setTimeout(() => {
			phase.textContent = 'Breathe out';
			container.classList = 'container shrink';
		}, holdTime);
	}, breatheInOutTime);
};

animateBreath();
setInterval(animateBreath, totalTime);
