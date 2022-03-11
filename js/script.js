// nav scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".navbar").style.backgroundColor = "#252525";
  } else {
    document.querySelector(".navbar").style.backgroundColor = "transparent";
  }
}

// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 300,
});
