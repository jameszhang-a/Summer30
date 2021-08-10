document.addEventListener('keydown', e => {
  const sound = document.querySelector(`audio[data-key="${e.code}"]`);
  console.log(sound);
});
