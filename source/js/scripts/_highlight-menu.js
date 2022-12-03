//////////////////////////////////////////////////////////////////
// highlight-menu

const mainBlocks = document.querySelectorAll(".main-block section, footer");
const navClass = "floating-menu__link"
const navLinks = document.querySelectorAll(`.${navClass}`);

//const animatedElems = document.querySelectorAll('h1, h2, .clubs__item, .girls__item');

mainBlocks.forEach((elem) => {
  new IntersectionObserver(
    (entries) => {
      //let sectionID = elem.getAttribute("id");
      let sectionID = elem.id;
      let currentLink = document.querySelector(`.${navClass}[href="#${sectionID}"]`);


      if (entries[0].isIntersecting) {
        elem.classList.add('visible');
        if (currentLink) {
          currentLink.classList.add('active');
        }

      } else {
        elem.classList.remove("visible");
        if (currentLink) {
          currentLink.classList.remove('active');
        }

      }
    },
    {
      threshold: 0.3,
    }
  ).observe(elem);
});

// end highlight-menu
//////////////////////////////////////////////////////////////////
