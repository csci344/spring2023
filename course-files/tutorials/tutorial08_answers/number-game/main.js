const secret = Math.floor(Math.random() * 99) + 1;
document.querySelector('#secret').innerHTML = secret;

let numGuesses = 0;

function check() {
    let num = document.querySelector('#guess').value;
    num = Number(num);

    ++numGuesses;
    document.querySelector('#num-guesses').innerHTML = `Number of Guesses: ${numGuesses}`;
    if (num === secret) {
        document.querySelector('#message').innerHTML = 'You win!';
        document.querySelector('#celebrate').classList.remove('hide');
    } else if (num < secret) {
        document.querySelector('#message').innerHTML = 'Too low.';
    } else {
        document.querySelector('#message').innerHTML = 'Too high.';
    }
}