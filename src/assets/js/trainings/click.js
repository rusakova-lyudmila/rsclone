import { gameStatus, getGameAudioStatus, gameLevel } from '../game';
import { startTimer } from '../components/timer';
import { initHelpButtons, initOverlay, closeTrainingHandler } from '../components/helpButtons';
import initAudio from '../components/audio';
import { makeMatrix, shuffleMatrix } from '../utils/matrix';

export const gameLevelInfo = {
  [gameLevel.easy.levelName]: {
    gameLevel: gameLevel.easy,
    termsCount: 4,
    answersCount: 12,
  },
  [gameLevel.medium.levelName]: {
    gameLevel: gameLevel.medium,
    termsCount: 5,
    answersCount: 19,
  },
  [gameLevel.hard.levelName]: {
    gameLevel: gameLevel.hard,
    termsCount: 6,
    answersCount: 27,
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
  const answers = Array(answersCount).fill(0).map((elem, index) => index + 1);
  const matrixArr = makeMatrix(termsCount, answers);
  return shuffleMatrix(matrixArr);
}

function initAnswers(matrix, clickHandler) {
  const matrixContainer = document.createElement('div');
  matrixContainer.classList.add('training__matrix');
  matrixContainer.style.gridTemplateColumns = `repeat(${matrix.size}, 1fr)`;

  matrix.store.forEach((item) => {
    const matrixItem = document.createElement('div');
    matrixItem.classList.add('training__matrix__item', 'training__matrix__item_white');
    matrixItem.textContent = item > 0 ? item : '';
    matrixItem.dataset.id = item;
    matrixItem.onclick = clickHandler;
    matrixContainer.appendChild(matrixItem);
  });

  return matrixContainer;
}

function displayScore(value) {
  const scoreItem = document.querySelector('.score__item');
  scoreItem.textContent = value;
}

function renderMatrix(gameObj) {
  const { container, matrix, level } = gameObj;
  displayScore(gameObj.score);

  const newGameState = { ...gameObj };
  let attemptCount = 0;

  const clickHandler = (e) => {
    attemptCount += 1;
    if (attemptCount === +e.target.dataset.id) {
      newGameState.score += 1;
      e.target.classList.add('training__matrix__item_green');
      e.target.onclick = null;

      displayScore(newGameState.score);

      const audioAllowing = getGameAudioStatus();
      if (audioAllowing) {
        audioSound('right-answer');
      }
    } else {
      newGameState.score -= 1;
      e.target.classList.add('training__matrix__item_red');
      attemptCount = level.answersCount;

      const audioAllowing = getGameAudioStatus();
      if (audioAllowing) {
        audioSound('wrong-answer');
      }
    }

    if (attemptCount === level.answersCount) {
      setTimeout(() => {
        const newMatrix = generateMatrix(level);
        renderMatrix({ ...newGameState, matrix: newMatrix });
      }, 500);
    }
  };

  const answers = initAnswers(matrix, clickHandler);
  container.innerHTML = '';
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
