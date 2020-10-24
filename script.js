const ball = document.getElementById('ball');
const obsticle = document.getElementById('obsticle');
const obsticle2 = document.getElementById('obsticle2');

const pass = () => {
	if (ball.classList != 'pass') {
			ball.classList.add('pass');
			setTimeout(function () {
				ball.classList.remove('pass');
		}, 1500);
	}
}

let isAlive = setInterval(function () {
	let ballLeft = parseInt(window.getComputedStyle(ball).getPropertyValue('left'));
	let obsticleLeft = parseInt(window.getComputedStyle(obsticle).getPropertyValue('left'));
	let obsticleTop = parseInt(window.getComputedStyle(obsticle).getPropertyValue('top'));
	let obsticle2Left = parseInt(window.getComputedStyle(obsticle2).getPropertyValue('left'));
	let obsticle2Top = parseInt(window.getComputedStyle(obsticle2).getPropertyValue('top'));
	//Kolizija nastaje kad je ballLeft izmedu 170 i 230, a obsticleTop izmedu 70 i 130
	//Druga kolizija nastaje kad je ballLeft izmedu 220 i 280, a obsticle2Top izmedu 70 i 130
	if ((ballLeft > 170 && ballLeft < 230) && (obsticleTop > 70 && obsticleTop < 130) || 
		(ballLeft > 220 && ballLeft < 280) && (obsticle2Top > 70 && obsticle2Top < 130)) {
		console.log("COLLLISIONNNN!!!")
	};
}, 10);



document.addEventListener('keydown', pass);
document.addEventListener('click', pass);
