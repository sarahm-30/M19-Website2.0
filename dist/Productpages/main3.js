const carouselSection = document.querySelector('.carousel-section');
const carouselInner = document.querySelector('.carousel-inner');
const images = carouselInner.querySelectorAll('img');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const imageWidth = images[0].clientWidth;
  const numImages = images.length;

  const carouselWidth = imageWidth * numImages;
  const maxScroll = carouselWidth - carouselContainer.clientWidth;

  const scrollPercent = (scrollPosition / maxScroll) * 100;
  carouselInner.style.transform = `translateX(-${scrollPercent}%)`;
});
