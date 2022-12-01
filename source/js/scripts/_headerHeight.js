const getHeaderHeight = () => {
  let headerHeight = document.querySelector('.header').getBoundingClientRect().height;
  document.documentElement.style.setProperty('--header-height', headerHeight + 'px');
}

const getNavHeight = () => {
  let headerHeight = document.querySelector('.nav').getBoundingClientRect().height;
  document.documentElement.style.setProperty('--nav-height', headerHeight + 'px');
}


getHeaderHeight();
getNavHeight();

window.addEventListener('resize', () => {
  getHeaderHeight();
  getNavHeight();
});
