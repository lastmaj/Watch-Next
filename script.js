let dropdown = document.querySelector('.dropdown');

//event listeners
dropdown.addEventListener('click', (e) => {
  if (dropdown.classList.contains('closed')) {
    dropdown.classList.remove('closed');
  } else {
    dropdown.classList.add('closed');
  }
});

//close categories menu when outside is clicked
document.addEventListener('click', (e) => {
  let isClickOutside = !dropdown.contains(e.target);

  if (isClickOutside) dropdown.classList.add('closed');
});
