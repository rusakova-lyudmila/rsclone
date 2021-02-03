import initMainPage from './initMainPage';
import initSection from './initSection';
import { setActivePageName, getActivePageName } from './state';
// import initStatisticPage from './statisticPage';

const menuItems = {
  main: 'Главная',
  training: 'Тренажеры',
  statistic: 'Статистика',
};

function clickHandler(e) {
  const sectionName = e.target.dataset.section;
  let pageContent;

  if (sectionName === 'main') {
    pageContent = initMainPage();
  } else if (sectionName === 'statistic') {
    // pageContent = initStatisticPage();
  } else {
    pageContent = initSection(sectionName);
  }

  const mainContainer = document.querySelector('.main-container');
  mainContainer.textContent = '';
  mainContainer.appendChild(pageContent);

  setActivePageName(sectionName);
}

export default function initMenu(mobile = false) {
  // init nav menu
  const navMenu = document.createElement('nav');
  if (mobile) {
    navMenu.classList.add('menu');
  } else {
    navMenu.classList.add('navbar', 'navbar-expand-lg');
  }

  if (mobile) {
    // init menu toggle
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu__toggle');
    navMenu.appendChild(menuToggle);

    // init menu icon
    const menuIcon = document.createElement('i');
    menuIcon.classList.add('menu__icon', 'material-icons');
    menuIcon.textContent = 'menu';
    menuToggle.appendChild(menuIcon);
  }

  // init menu list
  const activePageName = getActivePageName();
  const menuList = document.createElement('ul');

  if (mobile) {
    menuList.classList.add('menu__list');
    navMenu.appendChild(menuList);
  } else {
    // init menu container
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('collapse', 'navbar-collapse');
    navMenu.appendChild(menuContainer);

    menuList.classList.add('navbar-nav', 'mr-auto');
    menuContainer.appendChild(menuList);
  }

  Object.keys(menuItems).forEach((item) => {
    // init menu list item
    const menuItem = document.createElement('li');
    menuItem.classList.add('menu__item');
    if (!mobile) {
      menuItem.classList.add('nav-item');
    }

    if (item === activePageName) {
      menuItem.classList.add('menu__item_active');
    }
    menuItem.dataset.name = item;
    menuList.appendChild(menuItem);

    if (mobile) {
      // init menu list item icon
      const menuItemIcon = document.createElement('i');
      menuItemIcon.classList.add('link__icon');
      menuItemIcon.style.backgroundImage = `url("./assets/img/icons/icon-${item}.png")`;
      menuItem.appendChild(menuItemIcon);
    }

    // init menu list item link
    const menuItemLink = document.createElement('a');
    menuItemLink.classList.add(mobile ? 'menu__link' : 'nav-link');
    menuItemLink.setAttribute('href', `#${item}`);
    menuItemLink.dataset.section = item;
    menuItemLink.textContent = menuItems[item];
    menuItemLink.addEventListener('click', clickHandler);
    menuItem.appendChild(menuItemLink);
  });

  return navMenu;
}
