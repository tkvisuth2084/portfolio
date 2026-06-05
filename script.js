const grid = document.getElementById('grid');
const cols = 26;
const rows = 16;

// Create grid
for (let i = 0; i < cols * rows; i++) {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  grid.appendChild(pixel);

  pixel.classList.add('active');
}

// Message pixel positions for "Hi! I'm TK" (you can customize this layout)
const messageFrames = [
  [1,27,53,79,105,131,157,80,81,82,5,31,57,83,109,135,161], //H
  [1,27,53,79,105,131,157,80,81,82,5,31,57,83,109,135,161, 7, 59,85,111,137,163], // i
  [1,27,53,79,105,131,157,80,81,82,5,31,57,83,109,135,161, 7, 59,85,111,137,163, 166,167,193,218], //,
  [235,287,313,339,365,391], //i
  [235,287,313,339,365,391,289,291,293,315,316,318,320,341,344,346,367,370,372,393,396,398], //m
  [275,276,277,278,279,303,329,355,381,407], //T
  [275,276,277,278,279,303,329,355,381,407,281,284,307,309,333,334,359,360,385,387,411,414],//K
  [66,92,118,41,16,17,18,19,20,47,74,100,126,94,98,145,146,147,148,149,150,151,173,176,198,201,225,228] //jellyfish

];

let frame = 0;

function showNextFrame() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach(p => p.classList.remove('active'));

  if (frame < messageFrames.length) {
    const indices = messageFrames[frame];
    indices.forEach(i => {
      if (pixels[i]) pixels[i].classList.add('active');
    });
    frame++;
  } else {
    frame = 0;
  }
}

setInterval(showNextFrame, 800); // every 0.8s
