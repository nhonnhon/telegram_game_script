 function clickPlayButton() {
   const playButton = document.querySelectorAll('button.flex.font-semibold')
  if (playButton) {
    playButton.click();
    console.log("Clicked Play button.");
  }
}

function clickRock() {
  const rockItem = document.querySelector('img[alt="rock"]')
  if (rockItem) {
    rockItem.click();
    console.log("Clicked rock.");
  }
}

function clickPlayLeft() {
  const playLeftBtn = document.querySelectorAll('button.border-solid.text-white')
  if (playLeftBtn) {
    playLeftBtn.click();
    console.log("Clicked Play continue.");
  }
}

setInterval(() => {
  clickPlayButton();
  clickPlayLeft();
}, 2000);


setInterval(() => {
  clickRock()
}, 500);
