const reduceHeader = () => {
  const scrollSize = 70;
  //if (document.body.scrollTop > scrollSize || document.documentElement.scrollTop > scrollSize) {
  if (document.documentElement.scrollTop > scrollSize) {
    header.classList.remove('header--opened');
    header.classList.add('header--mini');

  } else if (document.body.scrollTop < (scrollSize - 20) || document.documentElement.scrollTop < (scrollSize - 20)) {
    // header.classList.add('header--opened');
    // header.classList.remove('header--mini');
  }

}

window.addEventListener('scroll', () => {
  reduceHeader();
});
