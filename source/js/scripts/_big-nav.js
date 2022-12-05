//////////////////////////////////////////////////////////////////
// bigNav

const bigNav = () => {
  const bigLinks = document.querySelectorAll('.header__big-link');
  const whoAreYou = document.querySelector('.header__who-are-you')
  const headerParts = document.querySelectorAll('.header__title-part');
  const header = document.querySelector('.header');
  const bigBlocks = document.querySelectorAll('.blogger, .partner');
//const otherBlocks = document.querySelectorAll('.main-block, .footer');

  bigLinks.forEach(link => {

    // навели мышку
    link.addEventListener('mouseenter', (e) => {
      let currentLink = e.target.dataset.target;
      let currentHeaderPart = document.querySelector(`.header__title-part[data-part=${currentLink}]`);
      currentHeaderPart.classList.add('active');
    })

    // отвели мышку
    link.addEventListener('mouseleave', (e) => {
      let currentLink = e.target.dataset.target;
      let currentHeaderPart = document.querySelector(`.header__title-part[data-part=${currentLink}]`);
      currentHeaderPart.classList.remove('active');
    })

    // клик по пункту
    link.addEventListener('click', (e) => {
      e.preventDefault();
      let currentLink = e.target.dataset.target;
      let currentPage = document.getElementById(currentLink);
      bigBlocks.forEach(block => {
        block.classList.remove('active');
      });

      currentPage.classList.add('active');

      bigLinks.forEach(block => {
        block.classList.remove('active');
      });
      link.classList.add('active');

      header.classList.remove('header--opened');
      header.classList.add('header--mini');

      // пересчитаем высоту --header-height
      getHeaderHeight();

    })
  })
}

bigNav();

// end bigNav
//////////////////////////////////////////////////////////////////
