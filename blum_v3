// Blum with Trump face and Kamala face
(() => {
  if (window.BlumAC) return;
  window.BlumAC = true;

  function clickPlayButton() {
    const playButton = document.querySelector(".play-btn");
    if (playButton) {
      playButton.click();
      console.log("Clicked Play button.");
    }
  }

  function clickGamePlayButton() {
    const gamePlayButton = document.querySelector(
      ".kit-button.is-large.is-primary"
    );
    if (gamePlayButton) {
      gamePlayButton.click();
      console.log("Clicked game Play button.");
    }
  }

  // Click button every 2 seconds
  setInterval(() => {
    clickPlayButton();
    clickGamePlayButton();
  }, 2000);

  // Color detection ranges
  const greenTarget = [208, 216, 0]; // RGB for green leaves
  const greenTolerance = 15;

  const faceTarget = [150, 100, 100]; // Example RGB for faces (adjust as needed)
  const faceTolerance = 30;

  const bombTarget = [220, 220, 220]; // Example RGB for bombs (adjust as needed)
  const bombTolerance = 20;

  // Check canvas every 100ms
  setInterval(() => {
    const canvas = document.querySelector("canvas");
    if (canvas && canvas.width > 0 && canvas.height > 0) {
      findAndClickObjects(canvas);
    }
  }, 100);

  function findAndClickObjects(screenCanvas) {
    const context = screenCanvas.getContext("2d");
    const width = screenCanvas.width;
    const height = screenCanvas.height;
    const imageData = context.getImageData(0, 0, width, height);
    const pixels = imageData.data;

    for (let x = 0; x < width; x += 3) {
      for (let y = 0; y < height; y += 3) {
        const index = (y * width + x) * 4;
        const r = pixels[index];
        const g = pixels[index + 1];
        const b = pixels[index + 2];

        // Check if pixel matches the bomb color range
        const isBomb = isWithinRange(r, g, b, bombTarget, bombTolerance);
        if (isBomb) {
          // Skip clicking on bombs
          continue;
        }

        // Check if pixel matches green leaves or new face items
        const isGreen = isWithinRange(r, g, b, greenTarget, greenTolerance);
        const isFace = isWithinRange(r, g, b, faceTarget, faceTolerance);

        if (isGreen || isFace) {
          simulateClick(screenCanvas, x, y);
        }
      }
    }
  }

  function isWithinRange(r, g, b, target, tolerance) {
    return (
      target[0] - tolerance < r && r < target[0] + tolerance &&
      target[1] - tolerance < g && g < target[1] + tolerance &&
      target[2] - tolerance < b && b < target[2] + tolerance
    );
  }

  function simulateClick(canvas, x, y) {
    const eventProperties = {
      clientX: x,
      clientY: y,
      bubbles: true,
    };
    canvas.dispatchEvent(new MouseEvent("click", eventProperties));
    canvas.dispatchEvent(new MouseEvent("mousedown", eventProperties));
    canvas.dispatchEvent(new MouseEvent("mouseup", eventProperties));
  }
})();
