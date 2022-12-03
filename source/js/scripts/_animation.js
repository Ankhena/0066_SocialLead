//////////////////////////////////////////////////////////////////
// animation

const animatedElems = document.querySelectorAll('.mean-for-you__item, .start-up-help__item, .work-scheme__step');

animatedElems.forEach((elem) => {
  new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        elem.classList.add('animation');
      }
    }, {
      threshold: 0.01
    }
  ).observe(elem)
})

// end animation
//////////////////////////////////////////////////////////////////
