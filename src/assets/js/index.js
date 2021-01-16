import initHeader from './initHeader';
import initMainPage from './initMainPage';
import initFooter from './initFooter';
import { toggleMenu, activeMenuItem } from './toggleMenu';

// init header
initHeader();

// init main page
const mainContainer = document.querySelector('.main-container');
mainContainer.textContent = '';
mainContainer.appendChild(initMainPage());

// init header
initFooter();

// open and close mobile menu
toggleMenu();

// active desktop menu item
activeMenuItem();
