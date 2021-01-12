// import { getActivePageName } from './state';

function setActiveMenuItem() {
  const activePageName = getActivePageName();
  const menuItems = [...document.querySelectorAll('.menu__item')];
  menuItems.forEach((item) => {
    if (item.dataset.name === activePageName) {
      item.classList.add('menu__item_active');
    } else {
      item.classList.remove('menu__item_active');
    }
  });
}

export default function toggleMenu() {
  const menuList = document.querySelector('.menu__list');
  const menuIcon = document.querySelector('.menu__icon');

  const menuBackground = document.createElement('div');
  menuBackground.classList.add('menu_open');
  document.body.appendChild(menuBackground);

  const overlayPage = document.createElement('div');
  overlayPage.classList.add('overlay', 'hidden');
  document.body.appendChild(overlayPage);

  menuIcon.addEventListener('click', (e) => {
    menuList.classList.toggle('menu_transformed');
    menuBackground.classList.toggle('menu_transformed');
    overlayPage.classList.toggle('hidden');

    const textMenuIcon = e.target.textContent;
    e.target.textContent = textMenuIcon === 'menu' ? 'close' : 'menu';

    setActiveMenuItem();
  });

  const menuItemIcons = [...document.querySelectorAll('.link__icon')];
  document.addEventListener('click', (e) => {
    if (menuIcon.textContent === 'close'
      && e.target !== menuBackground
      && e.target !== menuIcon
      && !menuItemIcons.includes(e.target)
    ) {
      menuList.classList.remove('menu_transformed');
      menuBackground.classList.remove('menu_transformed');
      overlayPage.classList.add('hidden');

      menuIcon.textContent = 'menu';
    }
  });
}
