document.addEventListener('keydown', e => {
  const sound = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`div[data-key="${e.code}"]`);

  if (!sound) {
    console.log('not a valid key');
    return;
  }

  // Plays note
  sound.play();
  sound.currentTime = 0;

  // Gives the styling for a pressed key
  key.classList.add('playing');
});

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('transitionend', e => {
    // A lot of things will transition here (boarder, scale, shadow, ...)
    // Pick one of them
    if (e.propertyName === 'transform') {
      // Removes the styling to return to regular keys
      key.classList.remove('playing');
    }
  });
});
