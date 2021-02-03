import initMenu from './initMenu';

export default function initHeader() {
  // init header
  const pageHeader = document.createElement('header');
  pageHeader.classList.add('header-container');
  document.body.appendChild(pageHeader);

  // insert nav menu to header
  const navMenu = initMenu();
  pageHeader.appendChild(navMenu);

  // insert mobile nav menu to header
  const navMobileMenu = initMenu(true);
  pageHeader.appendChild(navMobileMenu);

  // init main container
  const mainContainer = document.createElement('main');
  mainContainer.classList.add('main-container');
  document.body.appendChild(mainContainer);
}
