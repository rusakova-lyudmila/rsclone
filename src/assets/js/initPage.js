export default function initPage() {
  // init header
  const pageHeader = document.createElement('header');
  pageHeader.classList.add('header-container');
  document.body.appendChild(pageHeader);

  // insert nav menu to header
  /* const navMenu = initMenu();
  pageHeader.appendChild(navMenu); */

  // init main container
  const mainContainer = document.createElement('main');
  mainContainer.classList.add('main-container');
  document.body.appendChild(mainContainer);

  // init h1
  const pageHeading = document.createElement('h1');
  pageHeading.textContent = 'Smart Kids';
  mainContainer.appendChild(pageHeading);

  // init h2
  const pageSubHeading = document.createElement('h2');
  pageSubHeading.textContent = 'Тренажеры для развития памяти, внимания, логики и мышления';
  mainContainer.appendChild(pageSubHeading);

  // init buttons container
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('buttons-container');
  mainContainer.appendChild(buttonsContainer);

  // init login button
  const buttonLogin = document.createElement('button');
  buttonLogin.classList.add('btn', 'btn-lg', 'btn-login');
  buttonLogin.setAttribute('type', 'button');
  buttonLogin.textContent = 'Тренироваться';
  buttonsContainer.appendChild(buttonLogin);

  // init register button
  const registerLogin = document.createElement('button');
  registerLogin.classList.add('btn', 'btn-lg', 'btn-register');
  registerLogin.setAttribute('type', 'button');
  registerLogin.textContent = 'Зарегистрироваться';
  buttonsContainer.appendChild(registerLogin);

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
