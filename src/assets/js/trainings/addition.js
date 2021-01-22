export const gameLevel = {
  easy: {
    termsCount: 2,
    maxTerm: 20,
    answersCount: 3,
  },
  medium: {
    termsCount: 3,
    maxTerm: 50,
    answersCount: 5,
  },
};

const gameStatus = {
  init: 'init',
  start: 'start',
  stop: 'stop',
};

function mixAnswers(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function getAnswers(correctAnswer, maxTerm, answersCount) {
  const answers = [correctAnswer];
  while (answers.length < answersCount) {
    const nextAnswer = correctAnswer + Math.round((Math.random() - 0.5) * maxTerm * 0.5);
    if (!answers.includes(nextAnswer)) {
      answers.push(nextAnswer);
    }
  }
  return mixAnswers(answers);
}

function generateExample({ termsCount, maxTerm, answersCount }) {
  const terms = Array(termsCount).fill(0).map(() => Math.round(Math.random() * maxTerm) + 1);
  const correctAnswer = terms.reduce((sum, term) => sum + term);
  const answers = getAnswers(correctAnswer, maxTerm, answersCount);

  return {
    question: terms.join(' + '),
    correctAnswer,
    answers,
  };
}

function renderTimer(time) {
  const elem = document.createElement('div');
  elem.classList.add('adding__timer');
  elem.textContent = time;
  return elem;
}

function renderQuestion(question) {
  const elem = document.createElement('div');
  elem.classList.add('adding__question');
  elem.textContent = question;
  return elem;
}

function renderAnswers(example, successHandler, failHandler) {
  const answersContainer = document.createElement('div');
  answersContainer.classList.add('adding__answers');

  example.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-lg');
    button.textContent = answer;
    button.addEventListener('click', example.correctAnswer === answer
      ? successHandler
      : failHandler);
    answersContainer.appendChild(button);
  });

  return answersContainer;
}

function renderHelpButtons() {
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('adding__buttons');

  // init exit button
  const buttonExit = document.createElement('button');
  buttonExit.classList.add('btn');
  buttonExit.textContent = 'Выйти';
  buttonExit.addEventListener('click', () => {});
  buttonsContainer.appendChild(buttonExit);

  // init sound button
  const buttonSound = document.createElement('button');
  buttonSound.classList.add('btn');
  buttonSound.textContent = 'Звук';
  buttonSound.addEventListener('click', () => {});
  buttonsContainer.appendChild(buttonSound);

  // init info button
  const buttonInfo = document.createElement('button');
  buttonInfo.classList.add('btn');
  buttonInfo.textContent = 'Инфо';
  buttonInfo.addEventListener('click', () => {});
  buttonsContainer.appendChild(buttonInfo);

  return buttonsContainer;
}

function renderExample(gameObj, example) {
  const { container, level } = gameObj;
  container.innerHTML = '';

  const timer = renderTimer(gameObj.duration);
  container.appendChild(timer);

  const question = renderQuestion(example.question);
  container.appendChild(question);

  const newGameState = { ...gameObj };

  const successHandler = () => {
    newGameState.score += 1;
    if (newGameState.status === gameStatus.start) {
      const newExample = generateExample(level);
      renderExample(newGameState, newExample);
    }
  };

  const failHandler = () => {
    if (newGameState.status === gameStatus.start) {
      const newExample = generateExample(gameObj.level);
      renderExample(newGameState, newExample);
    }
  };

  const answers = renderAnswers(example, successHandler, failHandler);
  container.appendChild(answers);

  const buttons = renderHelpButtons();
  container.appendChild(buttons);
}

export function initGame(level, duration, container) {
  return {
    score: 0,
    level,
    duration,
    status: gameStatus.init,
    container,
  };
}

export function startGame(gameObj) {
  const example = generateExample(gameObj.level);
  const newGameState = { ...gameObj, status: gameStatus.start };
  renderExample(newGameState, example);

  return newGameState;
}
