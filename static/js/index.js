document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.navbar-burger').forEach(function (burger) {
    burger.addEventListener('click', function () {
      document.querySelectorAll('.navbar-burger, .navbar-menu').forEach(function (element) {
        element.classList.toggle('is-active');
      });
    });
  });

  if (typeof bulmaCarousel !== 'undefined') {
    bulmaCarousel.attach('.carousel', {
      slidesToScroll: 1,
      slidesToShow: 3,
      loop: true,
      infinite: true,
      autoplay: false
    });
  }

  // Initialize after the carousel has created its cloned slides as well.
  document.querySelectorAll('video[data-playback-rate]').forEach(function (video) {
    var rate = Number(video.dataset.playbackRate);
    if (!Number.isFinite(rate) || rate <= 0) { return; }
    video.defaultPlaybackRate = rate;
    video.playbackRate = rate;
    video.addEventListener('loadedmetadata', function () {
      video.playbackRate = rate;
    });
  });
});
