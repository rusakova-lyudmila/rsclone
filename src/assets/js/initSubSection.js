import initTraining from './initTraining';
import { trainingTypes, trainingsItems } from './trainings';
// import { saveResult } from './statistic';

function clickHandler(e, subSectionKey) {
  const trainingKey = e.currentTarget.dataset.training;
  const training = initTraining(trainingKey, subSectionKey);

  const cardsContainer = document.querySelector('.cards-container');
  cardsContainer.replaceWith(training);
}

function getSectionDataByName(subSectionName) {
  const subSection = Object.values(trainingsItems).find((item) => item.typeKey === subSectionName);
  return subSection.trainings;
}

function rotateCard(e) {
  const targetCardName = e.currentTarget.dataset.card;
  const targetCardBlock = document.querySelector(`.cards-${targetCardName}`);

  targetCardBlock.classList.toggle('cards__block_hover');

  e.stopPropagation();
}

function replaceContent(currentBlock, newBlock, parentBlock) {
  if (currentBlock) {
    currentBlock.replaceWith(newBlock);
  } else {
    parentBlock.prepend(newBlock);
  }
}

function initSubSectionHeading(subSectionKey = '') {
  // init section header
  const sectionHeading = document.createElement('h2');
  sectionHeading.classList.add('section__heading');

  const subSectionName = Object.values(trainingTypes).find(
    (item) => item.typeKey === subSectionKey,
  );

  sectionHeading.textContent = subSectionName.typeName;
  return sectionHeading;
}

function initTrainCards(cardsContainer, cardsElements, subSectionKey) {
  cardsElements.forEach((card) => {
    // init block for cards
    const cardBlock = document.createElement('div');
    cardBlock.classList.add('cards__block', `cards-${card.key}`);
    cardsContainer.appendChild(cardBlock);

    // init front card link
    const cardLink = document.createElement('a');
    cardLink.classList.add('card__link');
    cardLink.setAttribute('href', `#${card.key}`);
    cardBlock.appendChild(cardLink);

    // init front card item
    const cardItem = document.createElement('div');
    cardItem.classList.add('cards__item', 'cards__front');
    cardItem.dataset.training = card.key;
    cardItem.addEventListener('click', (e) => {
      clickHandler(e, subSectionKey);
      // saveResult(card.word, 'trained');
    });
    cardLink.appendChild(cardItem);

    // init front card image
    const cardImage = document.createElement('div');
    cardImage.classList.add('card__img');
    cardImage.style.backgroundImage = `url("./assets/${card.image}")`;
    cardItem.appendChild(cardImage);

    // init front card content
    const cardContent = document.createElement('div');
    cardContent.classList.add('card__content');
    cardItem.appendChild(cardContent);

    // init front card name
    const cardName = document.createElement('div');
    cardName.classList.add('card__name');
    cardName.textContent = card.name;
    cardContent.appendChild(cardName);

    // init front card rotate button
    const cardRotateButton = document.createElement('i');
    cardRotateButton.classList.add('card__button', 'material-icons');
    cardRotateButton.dataset.card = card.key;
    cardRotateButton.textContent = 'rotate_left';
    cardRotateButton.addEventListener('click', rotateCard);
    cardContent.appendChild(cardRotateButton);

    // init back card item
    const cardBackItem = document.createElement('div');
    cardBackItem.classList.add('cards__item', 'cards__back');
    cardBackItem.dataset.card = card.key;
    cardBackItem.addEventListener('mouseleave', rotateCard);
    cardBlock.appendChild(cardBackItem);

    // init back card description
    const cardBackDescr = document.createElement('div');
    cardBackDescr.classList.add('card__descr');
    cardBackDescr.textContent = card.description;
    cardBackItem.appendChild(cardBackDescr);

    // init front card content
    const cardBackContent = document.createElement('div');
    cardBackContent.classList.add('card__content');
    cardBackItem.appendChild(cardBackContent);

    // init back card name
    const cardBackName = document.createElement('div');
    cardBackName.classList.add('card__name');
    cardBackName.textContent = card.name;
    cardBackContent.appendChild(cardBackName);
  });
}

export default function initSubSection(subSectionName) {
  const mainContainer = document.querySelector('.main-container');
  mainContainer.classList.add('subsection-container');

  // set section header
  const sectionHeader = initSubSectionHeading(subSectionName);
  const sectionHeadingContainer = document.querySelector('.section__heading');
  replaceContent(sectionHeadingContainer, sectionHeader, mainContainer);

  // init cards container
  const cardsContainer = document.createElement('div');
  cardsContainer.classList.add('cards-container', 'cards');
  mainContainer.appendChild(cardsContainer);

  // get info for cards
  const cardsElements = getSectionDataByName(subSectionName);

  // init cards
  initTrainCards(cardsContainer, cardsElements, subSectionName);

  return cardsContainer;
}
