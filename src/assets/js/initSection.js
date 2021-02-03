// import { setActivePageName } from './state';
import initSubSection from './initSubSection';
import { trainingTypes } from './trainings';

function clickHandler(e) {
  const sectionName = e.target.dataset.section;
  const cardsElements = initSubSection(sectionName);

  const cardsContainer = document.querySelector('.cards-container');
  cardsContainer.replaceWith(cardsElements);

  // setActivePageName(sectionName);
}

export default function initSection() {
  // remove class of subsection
  const mainContainer = document.querySelector('.main-container');
  if (mainContainer.classList.contains('subsection-container')) {
    mainContainer.classList.remove('subsection-container');
  }

  // init cards container
  const cardsContainer = document.createElement('div');
  cardsContainer.classList.add('cards-container', 'cards');

  // init cards
  trainingTypes.forEach(({ typeKey, typeName }) => {
    const cardItem = document.createElement('div');
    cardItem.classList.add('cards__item');
    cardsContainer.appendChild(cardItem);

    // init card image
    const cardImage = document.createElement('div');
    cardImage.classList.add('card__img');
    cardImage.style.backgroundImage = `url("./assets/img/bg/bg-${typeKey}.jpg")`;
    cardImage.dataset.section = typeKey;
    cardImage.addEventListener('click', clickHandler);
    cardItem.appendChild(cardImage);

    // init card name
    const cardName = document.createElement('div');
    cardName.classList.add('card__name');
    cardName.textContent = typeName;
    cardName.dataset.section = typeKey;
    cardName.addEventListener('click', clickHandler);
    cardItem.appendChild(cardName);
  });

  return cardsContainer;
}
