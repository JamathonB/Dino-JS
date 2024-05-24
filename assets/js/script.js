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
    'assets/gifs/WalkingDino-right.gif',
    'assets/gifs/IdleDinoRotate.gif'
];

let currentGifIndex = 0;
let positionX = 0; // Initial position

const gifDisplay = document.getElementById('gifDisplay');
gifDisplay.src = gifs[currentGifIndex];

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        currentGifIndex = 2; // Jump to the third array item
        gifDisplay.src = gifs[currentGifIndex];
        positionX += 1000; // Move right by 10 pixels
    } else if (event.key === 'ArrowLeft') {
        currentGifIndex = 1; // Jump to the second array item
        gifDisplay.src = gifs[currentGifIndex];
        positionX -= 1000; // Move left by 10 pixels
    } else {
        if (currentGifIndex === 1) {
            currentGifIndex = 3; // Display reversed idle image of the dino gif
        } else {
            currentGifIndex = 0; // Neither key is pressed, load the first array item
        }
    }
    gifDisplay.src = gifs[currentGifIndex];
    gifDisplay.style.left = positionX + 'px'; // Update the image position
});









