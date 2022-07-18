const mario = document.querySelector('.mario');
const cano = document.querySelector('.mario');

const jump = () => {
    
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)

}

const loop = setInterval(() => {

    const canoPosition = cano.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (canoPosition <= 120 && canoPosition > 0 && marioPosition < 80){

        cano.style.animation = 'none';
        cano.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imag/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump)