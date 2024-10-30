function playMoonbix() {
  const playGameButton = document.querySelector("button.bn-button__primary");

  playGameButton.click();
  console.log("Clicked Play game.");

  const interval = setInterval(() => {
    const canvasElement = document.querySelector(".canvas-wrapper canvas");
    console.log("Click gold - ");

    if (canvasElement) {
      console.log("Clicking on the canvas...");

      // Get the center coordinates of the canvas
      const width = canvasElement.width;
      const height = canvasElement.height;
      const x = width / 2;
      const y = height / 2;

      // Create and dispatch a mouse event
      const clickEvent = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: x,
        clientY: y,
      });

      const mousedownEvent = new MouseEvent("mousedown", {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: x,
        clientY: y,
      });

      const mouseupEvent = new MouseEvent("mouseup", {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: x,
        clientY: y,
      });

      canvasElement.dispatchEvent(clickEvent);
      canvasElement.dispatchEvent(mousedownEvent);
      canvasElement.dispatchEvent(mouseupEvent);
    } else {
      const buttons = document.querySelectorAll(".w-full.px-4 button");
      const continueButton = Array.from(buttons).find(
        (button) => button.textContent.trim() === "Continue"
      );
      if (continueButton) {
        console.log("Out of ticket");
        clearInterval(interval);
      } else {
        console.log("Click play again");
        const playAgainElement = document.querySelector(
          ".w-full.px-4 .bn-button.bn-button__primary"
        );
        if (playAgainElement) {
          playAgainElement.click();
        }
      }
    }
  }, 850);
}
playMoonbix();
