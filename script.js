const ball = document.getElementById('ball');
const obsticle1 = document.getElementById('obsticle1');
const obsticle2 = document.getElementById('obsticle2');
const shootButton = document.getElementById('shootButton'); 

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
	let obsticle1Left = parseInt(window.getComputedStyle(obsticle1).getPropertyValue('left'));
	let obsticle1Top = parseInt(window.getComputedStyle(obsticle1).getPropertyValue('top'));
	let obsticle2Left = parseInt(window.getComputedStyle(obsticle2).getPropertyValue('left'));
	let obsticle2Top = parseInt(window.getComputedStyle(obsticle2).getPropertyValue('top'));
	//Kolizija nastaje kad je ballLeft izmedu 170 i 230, a obsticleTop izmedu 70 i 130
	//Druga kolizija nastaje kad je ballLeft izmedu 220 i 280, a obsticle2Top izmedu 70 i 130
	if ((ballLeft > 170 && ballLeft < 230) && (obsticle1Top > 70 && obsticle1Top < 130) || 
		(ballLeft > 220 && ballLeft < 280) && (obsticle2Top > 70 && obsticle2Top < 130)) {
		alert("COLLLISIONNNN!!!");
	};
	if (ballLeft > 350) {
		alert("Goal!!!");
	};
}, 10);


shootButton.addEventListener('click', pass);
