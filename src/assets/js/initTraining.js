import { trainingsItems } from './trainings';
import { initGame, startGame, gameLevel } from './trainings/addition';

function replaceContent(currentBlock, newBlock, parentBlock) {
  if (currentBlock) {
    currentBlock.replaceWith(newBlock);
  } else {
    parentBlock.prepend(newBlock);
  }
}

function initSubSectionHeading(trainingInfo) {
  // init section header
  const sectionHeading = document.createElement('h2');
  sectionHeading.classList.add('section__heading');
  sectionHeading.textContent = trainingInfo.name;
  return sectionHeading;
}

export default function initTraining(trainingKey, subSectionKey) {
  const mainContainer = document.querySelector('.main-container');

  const subSectionTraining = Object.values(trainingsItems).find(
    (item) => item.typeKey === subSectionKey,
  );

  const trainingInfo = Object.values(subSectionTraining.trainings).find(
    (item) => item.key === trainingKey,
  );

  // set section header
  const sectionHeader = initSubSectionHeading(trainingInfo);
  const sectionHeadingContainer = document.querySelector('.section__heading');
  replaceContent(sectionHeadingContainer, sectionHeader, mainContainer);

  // init training container
  const trainingContainer = document.createElement('div');
  trainingContainer.classList.add('training', 'cards');
  mainContainer.appendChild(trainingContainer);

  // init training card
  const trainingCard = document.createElement('div');
  trainingCard.classList.add('training__card', 'cards__item', trainingInfo.key);
  trainingCard.style.backgroundImage = `url("./assets/${trainingInfo.bg}")`;
  trainingContainer.appendChild(trainingCard);

  // init game
  const game = initGame(gameLevel.easy, 60, trainingCard);
  startGame(game);
  return trainingContainer;
}
