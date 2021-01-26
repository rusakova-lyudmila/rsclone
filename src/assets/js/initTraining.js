import { trainingsItems } from './trainings';
import { gameLevel } from './game';
import { initGame, startGame, gameLevelInfo } from './trainings/addition';

function replaceContent(currentBlock, newBlock, parentBlock) {
  if (currentBlock) {
    currentBlock.replaceWith(newBlock);
  } else {
    parentBlock.appendChild(newBlock);
  }
}

function initSubSectionHeading(trainingInfo) {
  // init section header
  const sectionHeading = document.createElement('h2');
  sectionHeading.classList.add('section__heading');
  sectionHeading.textContent = trainingInfo.name;
  return sectionHeading;
}

function initStartTraining(trainingInfo, game) {
  // init start training container
  const startTrainingContainer = document.createElement('div');
  startTrainingContainer.classList.add('training__start');
  startTrainingContainer.innerHTML = `<p>${trainingInfo.description}</p>`;

  // init level game select container
  const levelSelectContainer = document.createElement('div');
  levelSelectContainer.classList.add('training__select');
  startTrainingContainer.appendChild(levelSelectContainer);

  // init level game select label
  const levelSelectLabel = document.createElement('div');
  levelSelectLabel.textContent = 'Выберите уровень:';
  levelSelectContainer.appendChild(levelSelectLabel);

  // init level game select
  const levelSelect = document.createElement('select');
  levelSelectContainer.appendChild(levelSelect);

  // init select options
  Object.keys(gameLevel).map((item) => {
    const option = document.createElement('option');
    option.setAttribute('value', item);
    option.textContent = gameLevel[item].name;
    levelSelect.appendChild(option);

    return option;
  });

  // init start training button
  const startButton = document.createElement('button');
  startButton.classList.add('training__button', 'btn');
  startButton.innerHTML = '<i class="material-icons">play_circle_outline</i>Начать';
  startButton.addEventListener('click', () => {
    const selectedGameLevel = levelSelect.value;
    startGame({
      ...game,
      level: gameLevelInfo[gameLevel[selectedGameLevel].levelName],
      duration: gameLevel[selectedGameLevel].duration,
    });
  });
  startTrainingContainer.appendChild(startButton);

  return startTrainingContainer;
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
  const game = initGame(gameLevelInfo[gameLevel.easy.levelName], trainingCard, trainingInfo);

  // start training
  const startTraining = initStartTraining(trainingInfo, game);
  const startTrainingContainer = document.querySelector('.training__start');
  replaceContent(startTrainingContainer, startTraining, trainingCard);

  return trainingContainer;
}
