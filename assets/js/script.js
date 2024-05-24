// const gifs = [
//     'assets/gifs/IdleDino.gif',
//     'assets/gifs/WalkingDino - left.gif',
//     'assets/gifs/WalkingDino-right.gif'
// ];

// let currentGifIndex = 0;

// const gifDisplay = document.getElementById('gifDisplay');
// gifDisplay.src = gifs[currentGifIndex];

// document.addEventListener('keydown', (event) => {
//     if (event.key === 'ArrowRight') {
//         // Increment currentGifIndex
//         currentGifIndex = (currentGifIndex + 1) % gifs.length;
//         gifDisplay.src = gifs[currentGifIndex];
//     } else if (event.key === 'ArrowLeft') {
//         // Decrement currentGifIndex
//         currentGifIndex = (currentGifIndex - 1 + gifs.length) % gifs.length;
//         gifDisplay.src = gifs[currentGifIndex];
//     }
// });

const gifs = [
    'assets/gifs/IdleDino.gif',
    'assets/gifs/WalkingDino - left.gif',
    'assets/gifs/WalkingDino-right.gif'
];

let currentGifIndex = 0;

const gifDisplay = document.getElementById('gifDisplay');
gifDisplay.src = gifs[currentGifIndex];

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        currentGifIndex = 2; // Jump to the third array item
        gifDisplay.src = gifs[currentGifIndex];
    } else if (event.key === 'ArrowLeft') {
        currentGifIndex = 1; // Jump to the second array item
        gifDisplay.src = gifs[currentGifIndex];
    } else {
        currentGifIndex = 0; // Neither key is pressed, load the first array item
        gifDisplay.src = gifs[currentGifIndex];
    }
});
