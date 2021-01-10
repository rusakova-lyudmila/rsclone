export default function initPage() {
  // init header
  const pageHeader = document.createElement('header');
  pageHeader.classList.add('header-container');
  document.body.appendChild(pageHeader);

  // insert nav menu to header
  /* const navMenu = initMenu();
  pageHeader.appendChild(navMenu); */

  // init h1
  const pageHeading = document.createElement('h1');
  pageHeading.textContent = 'Smart Kids';
  pageHeader.appendChild(pageHeading);

  // init header buttons
  const headerButtons = document.createElement('div');
  headerButtons.classList.add('header__buttons');
  pageHeader.appendChild(headerButtons);

  // init main container
  const mainContainer = document.createElement('main');
  mainContainer.classList.add('main-container');
  document.body.appendChild(mainContainer);

  // insert cards to main container
  /* const cardsContainer = initCards();
  mainContainer.appendChild(cardsContainer); */

  // init footer
  const pageFooter = document.createElement('footer');
  pageFooter.classList.add('footer-container', 'footer');
  document.body.appendChild(pageFooter);

  // init footer author info
  const pageInfoContainer = document.createElement('div');
  pageInfoContainer.classList.add('footer__info');
  pageInfoContainer.innerHTML = '2020 © <a href="https://github.com/rusakova-lyudmila" target="_blank">Rusakova Lyudmila</a>, <a href="https://github.com/snaipp1" target="_blank">Yury Halushko</a>';
  pageFooter.appendChild(pageInfoContainer);

  // init footer logo
  const pageLogoContainer = document.createElement('div');
  pageLogoContainer.classList.add('footer__logo');
  pageLogoContainer.innerHTML = '<a href="https://rs.school/js/" target="_blank"><img src="assets/img/rs_school_logo.svg" alt="RS School"></a>';
  pageFooter.appendChild(pageLogoContainer);
}
