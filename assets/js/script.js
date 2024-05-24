// const gifs = [
//     'assets/gifs/IdleDino.gif',
//     'assets/gifs/WalkingDino - left.gif',
//     'assets/gifs/WalkingDino-right.gif',
//     'assets/gifs/IdleDinoRotate.gif'
// ];

// let currentGifIndex = 0;
// let positionX = 0; // Initial position

// const gifDisplay = document.getElementById('gifDisplay');
// gifDisplay.src = gifs[currentGifIndex];

// document.addEventListener('keydown', (event) => {
//     const windowWidth = window.innerWidth;
//     const gifWidth = gifDisplay.offsetWidth;

//     if (event.key === 'ArrowRight') {
//         currentGifIndex = 2; // Jump to the third array item
//         positionX += 2000; // Move right by 1000 pixels

//         // Ensure the element doesn't move out of the window on the right
//         if (positionX + gifWidth > windowWidth) {
//             positionX = windowWidth - gifWidth;
//         }

//         gifDisplay.src = gifs[currentGifIndex];
//         gifDisplay.style.left = positionX + 'px'; // Update the image position
//     } else if (event.key === 'ArrowLeft') {
//         currentGifIndex = 1; // Jump to the second array item
//         positionX -= 2000; // Move left by 1000 pixels

//         // Ensure the element doesn't move out of the window on the left
//         if (positionX < 0) {
//             positionX = 0;
//         }

//         gifDisplay.src = gifs[currentGifIndex];
//         gifDisplay.style.left = positionX + 'px'; // Update the image position
//     } else {
//         if (currentGifIndex === 1) {
//             currentGifIndex = 3; // Display reversed idle image of the dino gif
//         } else {
//             currentGifIndex = 0; // Neither key is pressed, load the first array item
//         }

//         gifDisplay.src = gifs[currentGifIndex];
//     }
// });

// const gifs = [
//     'assets/gifs/IdleDino.gif',
//     'assets/gifs/WalkingDino - left.gif',
//     'assets/gifs/WalkingDino-right.gif',
//     'assets/gifs/IdleDinoRotate.gif'
// ];

// let currentGifIndex = 0;
// let moveStep = 100; // Initial distance to move
// const transitionDuration = 25 * 1000; // Transition duration in milliseconds
// const stepDuration = 50; // Step duration in milliseconds for smoother animation
// const totalSteps = transitionDuration / stepDuration; // Total steps
// let currentPosition = 0; // Current position of the image
// const gifDisplay = document.getElementById('gifDisplay');
// gifDisplay.src = gifs[currentGifIndex];

// document.addEventListener('keydown', (event) => {
//     if (event.key === 'ArrowRight') {
//         currentGifIndex = 2; // Jump to the third array item
//         gifDisplay.src = gifs[currentGifIndex];

//         // Increase the move step
//         moveStep += 50;

//         // Incrementally move the image to the right
//         moveImage(moveStep);
//     } else if (event.key === 'ArrowLeft') {
//         currentGifIndex = 1; // Jump to the second array item
//         gifDisplay.src = gifs[currentGifIndex];

//         // Increase the move step
//         moveStep += 50;

//         // Incrementally move the image to the left
//         moveImage(-moveStep);
//     } else {
//         if (currentGifIndex === 1) {
//             currentGifIndex = 3; // Display reversed idle image of the dino gif
//         } else {
//             currentGifIndex = 0; // Neither key is pressed, load the first array item
//         }
//         gifDisplay.src = gifs[currentGifIndex];
//     }
// });

// function moveImage(step) {
//     const windowWidth = window.innerWidth;
//     const gifWidth = gifDisplay.offsetWidth;

//     // Calculate the new position
//     const newPosition = currentPosition + step;

//     // Ensure the new position stays within the window bounds
//     currentPosition = Math.min(Math.max(newPosition, 0), windowWidth - gifWidth);

//     // Update the image position
//     gifDisplay.style.left = currentPosition + 'px';
// }

const gifs = [
    'assets/gifs/IdleDino.gif',
    'assets/gifs/WalkingDino - left.gif',
    'assets/gifs/WalkingDino-right.gif',
    'assets/gifs/IdleDinoRotate.gif'
  ];

  let currentGifIndex = 0;
  let moveStep = 100; // Initial distance to move
  const gifDisplay = document.getElementById('gifDisplay');
  gifDisplay.src = gifs[currentGifIndex]; // Set initial image

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      currentGifIndex = 2; // Jump to the third array item
      gifDisplay.src = gifs[currentGifIndex];
      moveStep += 50;
      moveImage(moveStep);
    } else if (event.key === 'ArrowLeft') {
      currentGifIndex = 1; // Jump to the second array item
      gifDisplay.src = gifs[currentGifIndex];
      moveStep += 50;
      moveImage(-moveStep);
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

      if (Math.abs(finalPosition - currentPosition) > 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }











