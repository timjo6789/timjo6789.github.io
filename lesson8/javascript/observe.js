let image_data_sources = document.querySelectorAll('img[data-src]');

function load_data_source_images(image){
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
}
const image_options = {
  threshold: 0.0
}

if ('IntersectionObserver' in window){
  const observer = new IntersectionObserver( (items, observer) => {
    items.forEach( (item) => {
      if (item.isIntersecting){
        load_data_source_images(item.target);
        observer.unobserve(item.target);
      }
    });
  }, image_options);

  image_data_sources.forEach( (image) => {
    observer.observe(image);
  });
} else {
  image_data_sources.forEach( (image) => {
    load_data_source_images(image);
  });
}