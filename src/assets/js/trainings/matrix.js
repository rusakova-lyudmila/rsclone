import { gameStatus, getGameAudioStatus, gameLevel } from '../game';
import { startTimer } from '../components/timer';
import { initHelpButtons, initOverlay, closeTrainingHandler } from '../components/helpButtons';
import initAudio from '../components/audio';
import { makeMatrix } from '../utils/matrix';

export const gameLevelInfo = {
  [gameLevel.easy.levelName]: {
    gameLevel: gameLevel.easy,
    termsCount: 4,
    answersCount: 3,
  },
  [gameLevel.medium.levelName]: {
    gameLevel: gameLevel.medium,
    termsCount: 5,
    answersCount: 5,
  },
  [gameLevel.hard.levelName]: {
    gameLevel: gameLevel.hard,
    termsCount: 6,
    answersCount: 7,
  },
};

function audioSound(audioName) {
  const audio = document.querySelector(`audio[data-name="${audioName}"]`);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

function generateMatrix({ termsCount, answersCount }) {
  /* const terms = Array(termsCount).fill(0).map(() => Math.round(Math.random() * maxTerm) + 1);
  const correctAnswer = terms.reduce((sum, term) => sum + term);
  const answers = getAnswers(correctAnswer, maxTerm, answersCount);

  return {
    matrix: terms.join(' + '),
    correctAnswer,
    answers,
  }; */

  const matrixArr = makeMatrix(termsCount);
  return {
    matrix: matrixArr.store,
    size: matrixArr.size,
  };
}

function initMatrix(matrix) {
  const matrixContainer = document.createElement('div');
  matrixContainer.classList.add('training__matrix');
  matrixContainer.style.gridTemplateColumns = `repeat(${matrix.size}, 1fr)`;

  matrix.matrix.forEach((item) => {
    const matrixItem = document.createElement('div');
    matrixItem.classList.add('training__matrix__item');
    matrixItem.textContent = item;
    matrixItem.dataset.id = item;
    matrixContainer.appendChild(matrixItem);
  });

  return matrixContainer;
}

function initAnswers(matrix, successHandler, failHandler) {
  const answersContainer = document.createElement('div');
  answersContainer.classList.add('training__answers');

  /* matrix.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-lg');
    button.textContent = answer;
    button.addEventListener('click', matrix.correctAnswer === answer
      ? successHandler
      : failHandler);
    answersContainer.appendChild(button);
  }); */

  return answersContainer;
}

function renderMatrix(gameObj) {
  const { container, level, matrix } = gameObj;
  container.innerHTML = '';

  // init matrix square container
  const matrixSquare = initMatrix(matrix);
  container.appendChild(matrixSquare);

  const scoreItem = document.querySelector('.score__item');
  scoreItem.textContent = gameObj.score;

  // init answer buttons container
  const newGameState = { ...gameObj };

  const successHandler = () => {
    newGameState.score += 1;
    if (newGameState.status === gameStatus.start) {
      const newExample = generateMatrix(level);
      renderMatrix({ ...newGameState, example: newExample });

      const audioAllowing = getGameAudioStatus();
      if (audioAllowing) {
        audioSound('right-answer');
      }
    }
  };

  const failHandler = () => {
    if (newGameState.status === gameStatus.start) {
      const newExample = generateMatrix(gameObj.level);
      renderMatrix({ ...newGameState, example: newExample });

      const audioAllowing = getGameAudioStatus();
      if (audioAllowing) {
        audioSound('wrong-answer');
      }
    }
  };

  const answers = initAnswers(matrix, successHandler, failHandler);
  container.appendChild(answers);
}

function renderInfo(gameState) {
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('training__info');
  gameState.gameContainer.appendChild(infoContainer);

  // init level info container
  const levelItem = document.createElement('div');
  levelItem.classList.add('training__level');
  levelItem.innerHTML = `<span>Уровень:</span> ${gameState.level.gameLevel.name}`;
  infoContainer.appendChild(levelItem);

  // init timer info container
  const timerItem = document.createElement('div');
  timerItem.classList.add('training__timer', 'timer');
  infoContainer.appendChild(timerItem);

  // init score info container
  const scoreItem = document.createElement('div');
  scoreItem.classList.add('training__score');
  scoreItem.innerHTML = '<span>Очки:</span> <span class="score__item">0</span>';
  infoContainer.appendChild(scoreItem);

  return { timerContainer: timerItem };
}

function stopGame(gameState) {
  const scoreItem = document.querySelector('.score__item');
  const score = scoreItem.textContent;
  const { gameContainer } = gameState;

  // init finish training container
  const finishTrainingContainer = document.createElement('div');
  finishTrainingContainer.classList.add('training__finish');

  // init finish score container
  const finishScore = document.createElement('div');
  finishScore.classList.add('finish__score');
  finishScore.innerHTML = `<p>Ваш результат:</p><div>${score}</div>`;
  finishTrainingContainer.appendChild(finishScore);

  // init finish training button
  const finishButton = document.createElement('button');
  finishButton.classList.add('training__button', 'btn');
  finishButton.innerHTML = '<i class="material-icons">close</i>Выйти';
  finishButton.addEventListener('click', closeTrainingHandler);
  finishTrainingContainer.appendChild(finishButton);

  gameContainer.textContent = '';
  gameContainer.appendChild(finishTrainingContainer);
}

function renderGame(gameState) {
  const { status, gameContainer, trainingInfo } = gameState;
  if (status === gameStatus.start) {
    gameContainer.innerHTML = '';
    const result = renderInfo(gameState);

    const matrixContainer = document.createElement('div');
    matrixContainer.classList.add('training__game');
    gameContainer.appendChild(matrixContainer);

    const buttonsContainer = initHelpButtons();
    gameContainer.appendChild(buttonsContainer);

    const overlayContainer = initOverlay(trainingInfo.rules);
    gameContainer.appendChild(overlayContainer);

    // init audio
    const audio = initAudio();
    gameContainer.appendChild(audio);

    startTimer(gameState.duration, result.timerContainer, () => { stopGame(gameState); });
    renderMatrix({ ...gameState, container: matrixContainer });
  }
}

export function initGame(level, gameContainer, trainingInfo, duration = 60) {
  return {
    score: 0,
    level,
    status: gameStatus.init,
    gameContainer,
    matrix: {},
    duration,
    trainingInfo,
  };
}

export function startGame(gameObj) {
  const matrix = generateMatrix(gameObj.level);
  const newGameState = { ...gameObj, status: gameStatus.start, matrix };
  renderGame(newGameState);

  return newGameState;
}
