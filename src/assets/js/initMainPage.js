export default function initMainPage() {
  // remove class of subsection
  const mainContainer = document.querySelector('.main-container');
  if (mainContainer.classList.contains('subsection-container')) {
    mainContainer.classList.remove('subsection-container');
  }

  // init page container
  const pageContainer = document.createElement('div');
  pageContainer.classList.add('page-container');

  // init h1
  const pageHeading = document.createElement('h1');
  pageHeading.textContent = 'Smart Kids';
  pageContainer.appendChild(pageHeading);

  // init h2
  const pageSubHeading = document.createElement('h2');
  pageSubHeading.textContent = 'Тренажеры для развития памяти, внимания, логики и мышления';
  pageContainer.appendChild(pageSubHeading);

  // init buttons container
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('buttons-container');
  pageContainer.appendChild(buttonsContainer);

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

  return pageContainer;
}
