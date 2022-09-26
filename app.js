const btnStart = document.getElementsByTagName('button')[0];
const btnPause = document.getElementsByTagName('button')[1];
const btnReset = document.getElementsByTagName('button')[2];

const clock = document.getElementsByClassName('stopwatch')[0];
let id;
let time = new Date();
time.setHours(0, 0, 0, 0);

btnStart.addEventListener('click', start);
btnPause.addEventListener('click', pause);
btnReset.addEventListener('click', reset);


function start() {
	btnStart.disabled = true;
    btnPause.disabled = false;

	id = setInterval(stopwatch, 1);
}

function reset() {
	btnStart.disabled = false;
	time.setHours(0, 0, 0, 0);
	clock.innerHTML = `00:00:000`;
	clearInterval(id);
}

function pause() {
    btnStart.disabled = false;
    btnPause.disabled = true;
    clearInterval(id);
}

function stopwatch() {
	time.setMilliseconds(time.getMilliseconds() + 1);
	let m = addTwoDigits(time.getMinutes());
	let s = addTwoDigits(time.getSeconds());
	let ms = time.getMilliseconds().toString().padStart(3, '0');
	clock.innerHTML = `${m}:${s}:${ms}`;
}

function addTwoDigits(n) {
	return (n < 10 ? '0' : '') + n;
}
