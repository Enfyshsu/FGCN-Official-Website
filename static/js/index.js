$(document).ready(function() {
  $('#navbar').load('view/nav.html');
  $('#home').load('view/home.html');
  $('#research').load('view/research.html');
  $('#activity').load('view/activity.html');
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
