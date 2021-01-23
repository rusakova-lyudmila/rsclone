import { trainingsItems } from './trainings';
import { gameLevel, getGameAudioStatus, setGameAudioStatus } from './game';
import { initGame, startGame, gameLevelInfo } from './trainings/addition';
import initSection from './initSection';

function closeTrainingHandler() {
  const pageContent = initSection('trainings');
  const mainContainer = document.querySelector('.main-container');
  mainContainer.textContent = '';
  mainContainer.appendChild(pageContent);
}

function closeOverlayHandler() {
  const overlayContainer = document.querySelector('.training__overlay');
  overlayContainer.classList.add('hidden');
}

function soundTrainingHandler(e) {
  const audioAllowing = getGameAudioStatus();
  const buttonSound = e.target;

  console.log(audioAllowing);
  console.log(e.target);

  if (audioAllowing) {
    setGameAudioStatus(false);
    buttonSound.textContent = 'volume_off';
  } else {
    setGameAudioStatus(true);
    buttonSound.textContent = 'volume_up';
  }
}

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

function initInfoContainer(level, time, score) {
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('training__info');

  // init level info container
  const levelItem = document.createElement('div');
  levelItem.classList.add('training__level');
  levelItem.innerHTML = `<span>Уровень:</span> ${level.name}`;
  infoContainer.appendChild(levelItem);

  // init timer info container
  const timerItem = document.createElement('div');
  timerItem.classList.add('training__timer', 'timer');
  infoContainer.appendChild(timerItem);

  // init timer
  const timer = document.createElement('div');
  timer.classList.add('timer__item');
  timer.textContent = time;
  timerItem.appendChild(timer);

  // init score info container
  const scoreItem = document.createElement('div');
  scoreItem.classList.add('training__score');
  scoreItem.innerHTML = `<span>Очки:</span> <span class="score__item">${score}</span>`;
  infoContainer.appendChild(scoreItem);

  return infoContainer;
}

function initHelpButtons() {
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('training__buttons');

  // init exit button
  const buttonExit = document.createElement('i');
  buttonExit.classList.add('material-icons');
  buttonExit.setAttribute('title', 'Закончить тренировку');
  buttonExit.textContent = 'close';
  buttonExit.addEventListener('click', closeTrainingHandler);
  buttonsContainer.appendChild(buttonExit);

  // init sound button
  const buttonSound = document.createElement('i');
  buttonSound.classList.add('material-icons');
  buttonSound.setAttribute('title', 'Включить/выключить звук');
  buttonSound.textContent = 'volume_off';
  buttonSound.addEventListener('click', soundTrainingHandler);
  buttonsContainer.appendChild(buttonSound);

  // init info button
  const buttonInfo = document.createElement('i');
  buttonInfo.classList.add('material-icons');
  buttonInfo.setAttribute('title', 'Прочитать правила');
  buttonInfo.textContent = 'help_outline';
  buttonInfo.addEventListener('click', () => {
    const overlay = document.querySelector('.training__overlay');
    overlay.classList.remove('hidden');
  });
  buttonsContainer.appendChild(buttonInfo);

  return buttonsContainer;
}

function initAudio() {
  const audioContainer = document.createElement('div');
  audioContainer.classList.add('training__audio');

  // init right answer click audio
  const rightAnswerAudio = document.createElement('audio');
  rightAnswerAudio.classList.add('audio__item');
  rightAnswerAudio.setAttribute('src', './assets/audio/answer_right.mp3');
  rightAnswerAudio.dataset.name = 'right-answer';
  audioContainer.appendChild(rightAnswerAudio);

  // init wrong click audio
  const wrongAnswerAudio = document.createElement('audio');
  wrongAnswerAudio.classList.add('audio__item');
  wrongAnswerAudio.setAttribute('src', './assets/audio/answer_wrong.mp3');
  wrongAnswerAudio.dataset.name = 'wrong-answer';
  audioContainer.appendChild(wrongAnswerAudio);

  // init timeout audio
  const timeoutAudio = document.createElement('audio');
  timeoutAudio.classList.add('audio__item');
  timeoutAudio.setAttribute('src', './assets/audio/timeout.mp3');
  timeoutAudio.dataset.name = 'timeout';
  audioContainer.appendChild(timeoutAudio);

  return audioContainer;
}

function initOverlay(content) {
  const overlayContainer = document.createElement('div');
  overlayContainer.classList.add('training__overlay', 'overlay', 'hidden');

  // init overlay content
  const overlayContent = document.createElement('div');
  overlayContent.classList.add('overlay__content');
  overlayContent.innerHTML = content;
  overlayContainer.appendChild(overlayContent);

  // init overlay button
  const buttonOverlay = document.createElement('i');
  buttonOverlay.classList.add('material-icons');
  buttonOverlay.setAttribute('title', 'Закрыть');
  buttonOverlay.textContent = 'close';
  buttonOverlay.addEventListener('click', closeOverlayHandler);
  overlayContainer.appendChild(buttonOverlay);

  return overlayContainer;
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

  // init level, timer and score info container
  const info = initInfoContainer(gameLevel.easy, gameLevel.easy.duration, 0);
  const infoContainer = document.querySelector('.training__info');
  replaceContent(infoContainer, info, trainingCard);

  // init game container
  const gameContainer = document.createElement('div');
  gameContainer.classList.add('training__game');
  trainingCard.appendChild(gameContainer);

  // init game
  const game = initGame(gameLevelInfo.easy, gameContainer);

  // start game
  startGame(game);

  // init help buttons container
  const buttons = initHelpButtons();
  const buttonsContainer = document.querySelector('.training__buttons');
  replaceContent(buttonsContainer, buttons, trainingCard);

  // init overlay
  const overlay = initOverlay(trainingInfo.rules);
  const overlayContainer = document.querySelector('.training__overlay');
  replaceContent(overlayContainer, overlay, trainingCard);

  // init audio
  const audio = initAudio();
  const audioContainer = document.querySelector('.training__audio');
  replaceContent(audioContainer, audio, trainingCard);

  return trainingContainer;
}
