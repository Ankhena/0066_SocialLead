// toggle menu

const toggleMenu = () => {
  const toggle = document.querySelector('.btn-toggle');
  const nav = document.querySelector('.nav');
  const header = document.querySelector('.header');


  if (toggle !== null) {
    document.querySelector('body').classList.remove('no-js');

    toggle.addEventListener('click', function () {
      //nav.classList.toggle('nav--opened');
      header.classList.toggle('header--opened');
      header.classList.toggle('header--mini');
      //toggle.classList.toggle('btn-toggle--close');
      //body.classList.toggle('body-with-open-modal');

      //document.querySelector('.header__big-nav').classList.toggle('header__big-nav--mini');
    });
  }

}

toggleMenu();

// end toggle menu
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
