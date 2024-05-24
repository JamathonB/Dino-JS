// const gifs = [
//     'assets/gifs/IdleDino.gif',
//     'assets/gifs/WalkingDino - left.gif',
//     'assets/gifs/WalkingDino-right.gif',
//     'assets/gifs/IdleDinoRotate.gif'
//   ];

//   let currentGifIndex = 0;
//   let moveStep = 100; // Initial distance to move
//   const gifDisplay = document.getElementById('gifDisplay');
//   gifDisplay.src = gifs[currentGifIndex]; // Set initial image

//   document.addEventListener('keydown', (event) => {
//     if (event.key === 'ArrowRight') {
//       currentGifIndex = 2; // Jump to the third array item
//       gifDisplay.src = gifs[currentGifIndex];
//       moveStep += 50;
//       moveImage(moveStep);
//     } else if (event.key === 'ArrowLeft') {
//       currentGifIndex = 1; // Jump to the second array item
//       gifDisplay.src = gifs[currentGifIndex];
//       moveStep += 50;
//       moveImage(-moveStep);
//     } else {
//       if (currentGifIndex === 1) {
//         currentGifIndex = 3; // Display reversed idle image of the dino gif
//       } else {
//         currentGifIndex = 0; // Neither key is pressed, load the first array item
//       }
//       gifDisplay.src = gifs[currentGifIndex];
//     }
//   });

//   function moveImage(step) {
//     const windowWidth = window.innerWidth;
//     const gifWidth = gifDisplay.offsetWidth;
//     let currentPosition = parseInt(gifDisplay.style.left) || 0; // Get current position

//     // Calculate the new position
//     const newPosition = currentPosition + step;

//     // Ensure the new position stays within the window bounds
//     const finalPosition = Math.min(Math.max(newPosition, 0), windowWidth - gifWidth);

//     // Animate the movement using requestAnimationFrame
//     function animate() {
//       currentPosition += (finalPosition - currentPosition) * 0.1; // Smooth animation
//       gifDisplay.style.left = currentPosition + 'px';

//       if (Math.abs(finalPosition - currentPosition) > 1) {
//         requestAnimationFrame(animate);
//       }
//     }

//     requestAnimationFrame(animate);
//   }

const gifs = [
  'assets/gifs/IdleDino.gif',
  'assets/gifs/WalkingDino - left.gif',
  'assets/gifs/WalkingDino-right.gif',
  'assets/gifs/IdleDinoRotate.gif'
];

let currentGifIndex = 0;
let moveStep = 100; // Initial distance to move
let stopTransition = false; // Flag to stop transition
const gifDisplay = document.getElementById('gifDisplay');
gifDisplay.src = gifs[currentGifIndex]; // Set initial image

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    currentGifIndex = 2; // Jump to the third array item
    gifDisplay.src = gifs[currentGifIndex];
    moveStep += 100;
    moveImage(moveStep);
  } else if (event.key === 'ArrowLeft') {
    currentGifIndex = 1; // Jump to the second array item
    gifDisplay.src = gifs[currentGifIndex];
    moveStep += 100;
    moveImage(-moveStep);
  } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    stopTransition = true; // Set flag to stop transition
  } else {
    if (currentGifIndex === 1) {
      currentGifIndex = 3; // Display reversed idle image of the dino gif
    } else {
      currentGifIndex = 0; // Neither key is pressed, load the first array item
    }
    gifDisplay.src = gifs[currentGifIndex];
  }
});

function moveImage(step) {
  const windowWidth = window.innerWidth;
  const gifWidth = gifDisplay.offsetWidth;
  let currentPosition = parseInt(gifDisplay.style.left) || 0; // Get current position

  // Calculate the new position
  const newPosition = currentPosition + step;

  // Ensure the new position stays within the window bounds
  const finalPosition = Math.min(Math.max(newPosition, 0), windowWidth - gifWidth);

  // Animate the movement using requestAnimationFrame
  function animate() {
    currentPosition += (finalPosition - currentPosition) * 0.1; // Smooth animation
    gifDisplay.style.left = currentPosition + 'px';

    if (!stopTransition && Math.abs(finalPosition - currentPosition) > 1) {
      requestAnimationFrame(animate);
    } else {
      stopTransition = false; // Reset flag
    }
  }

  requestAnimationFrame(animate);
}










