 function clickPlayButton() {
   const playButton = document.querySelector('button.flex.font-semibold')
  if (playButton) {
    playButton.click();
    console.log("Clicked Play button.");
  }
}

function clickRock() {
  const rockItem = document.querySelector('.transition-all:not(.from-transparent) > .transition-opacity img[alt="rock"]')
  if (rockItem) {
    rockItem.click();
    console.log("Clicked rock.");
  }
}

function clickPlayLeft() {
  const playLeftBtn = document.querySelector('button.border-solid.text-white')
  if (playLeftBtn) {
    playLeftBtn.click();
    console.log("Clicked Play continue.");
  }
}

clickPlayButton()

setInterval(() => {
  clickPlayLeft();
}, 2000);


setInterval(() => {
  clickRock()
}, 300);
