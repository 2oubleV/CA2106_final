function redirect(path) {
  event.preventDefault();
  window.location.href = path;
}
$(document).ready(function() {
  let currentIndex = 0,
    items = $('.thumb'),
    itemCount = items.length,
    slidesToShow = 6,
    itemsPerScroll = 1;

  $('.carrousel').css('width', (itemCount / slidesToShow * 100) + '%');

  $('html, body').on('wheel', function(event) {
    if (event.originalEvent.deltaY > 0) {
      showNextSlides();
    } else {
      showPrevSlides();
    }
  });

  function showNextSlides() {
    currentIndex = (currentIndex + itemsPerScroll) % itemCount;
    updateCarousel();
  }

  function showPrevSlides() {
    currentIndex = (currentIndex - itemsPerScroll + itemCount) % itemCount;
    updateCarousel();
  }

  function updateCarousel() {
    let translateValue = -currentIndex * (100 / slidesToShow) + '%';
    $('.carrousel').css('transform', 'translateX(' + translateValue + ')');
  }
});


