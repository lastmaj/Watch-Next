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

var doc = document.documentElement;
var w = window;

var prevScroll = w.scrollY || doc.scrollTop;
var curScroll;
var direction = 0;
var prevDirection = 0;

var header = document.querySelector('nav');

var checkScroll = function () {
  /*
   ** Find the direction of scroll
   ** 0 - initial, 1 - up, 2 - down
   */
  curScroll = w.scrollY || doc.scrollTop;
  if (curScroll > prevScroll) {
    //scrolled up
    direction = 2;
  } else if (30 < prevScroll - curScroll) {
    //scrolled down
    direction = 1;
  }

  if (direction !== prevDirection) {
    toggleHeader(direction, curScroll);
  }

  prevScroll = curScroll;
};

var toggleHeader = function (direction, curScroll) {
  if (direction === 2 && curScroll > 180) {
    header.classList.add('hide');
    prevDirection = direction;
  } else if (direction === 1) {
    header.classList.remove('hide');
    prevDirection = direction;
  }
};

window.addEventListener('scroll', checkScroll);


// search bar event listener 
const navSearchButton = document.querySelector('#nav-search-button');
const searchBar = document.querySelector('#search-bar');

navSearchButton.addEventListener('click', (e) => {
  if (searchBar.classList.contains('hidden')) {
    searchBar.classList.remove('hidden');
  }
  else searchBar.classList.add('hidden');
})

