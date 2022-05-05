
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {responsiveThreshold: 0});
  });


document.addEventListener('DOMContentLoaded',()=>{
const elementosCarousel=document.querySelectorAll('.carousel');
M.Carousel.init(elementosCarousel,{
    fullWidtth: true,
    duration:300,
    dist: -80,
    shift: 5,
    padding: 10,
    numVisible: 5,
    indicators: true,
    noWrap: false
});

let indicatorItems = document.querySelectorAll('.carousel .indicator-item'),
slideTime = 3000,
activeClass = "active";

setInterval(() => {
indicatorItems.forEach(el => {
if (el.classList.contains(activeClass)) {
  sib = el.nextElementSibling;
  if (sib == null) {
    indicatorItems[0].click();
  } else {
    sib.click()
  }
}
});
}, slideTime);

});




