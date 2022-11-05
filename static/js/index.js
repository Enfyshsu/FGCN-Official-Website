$(document).ready(function() {
  $('#navbar').load('view/nav.html');
  $('#research').load('view/research.html');
  $('#activity').load('view/activity.html');
  $('#publication').load('view/publication.html');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

anime.timeline({loop: false})
  .add({
    targets: '.shift-in-1',
    translateX: [40,0],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 800 + 50 * i
  });

anime.timeline({loop: false})
  .add({
    targets: '.shift-in-2',
    translateX: [40,0],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 1000 + 50 * i
  });

anime.timeline({loop: false})
  .add({
    targets: '.shift-in-3',
    translateX: [40,0],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 1200 + 50 * i
  });
