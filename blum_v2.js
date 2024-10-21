// click all the green leaves
// risk: sometime boom is clicked - BOOM

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

  // click button every 2 seconds
  setInterval(() => {
    clickPlayButton();
    clickGamePlayButton();
  }, 2000);

  const c = [208, 216, 0]; // Target: green leaves
  const t = 15; //

  // check canvas every 100ms
  setInterval(() => {
    const canvas = document.querySelector("canvas");
    if (canvas && canvas.width > 0 && canvas.height > 0) {
      findAndClickGreenObjects(canvas);
    }
  }, 100);

  function findAndClickGreenObjects(screenCanvas) {
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
        const greenishRange =
          c[0] - t < r &&
          r < c[0] + t &&
          c[1] - t < g &&
          g < c[1] + t &&
          c[2] - t < b &&
          b < c[2] + t;

        if (greenishRange) {
          simulateClick(screenCanvas, x, y);
        }
      }
    }
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
