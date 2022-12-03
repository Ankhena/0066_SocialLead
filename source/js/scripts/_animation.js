//////////////////////////////////////////////////////////////////
// animation

const animatedElems = document.querySelectorAll('.intro__text span, .about__descr p, .about__stages, .about__benefits li, .cases__item, .vacancies__item, .ask-question__form, .footer__nav, .footer__social, .footer__address');

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
