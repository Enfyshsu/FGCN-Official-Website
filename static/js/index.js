$(document).ready(function() {
  $('#navbar').load('view/navbar.html');
  $('#research').load('view/research.html');
  $('#activities').load('view/activities.html');
  $('#publications').load('view/publications.html');
  $('#about').load('view/about.html');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

function readJsonFile(file)
{
    var rawFile = new XMLHttpRequest();
    var allText;
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return allText;
}

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
