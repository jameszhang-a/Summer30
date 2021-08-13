const values = document.querySelectorAll('.control input');

function handleUpdate() {
  // dataset returns an object containing all of the data-
  const suffix = this.dataset.suffix || '';

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

values.forEach((value) => {
  value.addEventListener('change', handleUpdate);
  // Makes sure changes apply as mouse is draging the slider
  value.addEventListener('mousemove', handleUpdate);
});
