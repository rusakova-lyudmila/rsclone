import { gameStatus, getGameAudioStatus } from '../game';

export const gameLevelInfo = {
  easy: {
    termsCount: 2,
    maxTerm: 20,
    answersCount: 3,
  },
  medium: {
    termsCount: 3,
    maxTerm: 40,
    answersCount: 4,
  },
  hard: {
    termsCount: 4,
    maxTerm: 60,
    answersCount: 5,
  },
};

function audioSound(audioName) {
  const audio = document.querySelector(`audio[data-name="${audioName}"]`);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

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

function initQuestion(question) {
  const questionContainer = document.createElement('div');
  questionContainer.classList.add('adding__question');
  questionContainer.textContent = question;
  return questionContainer;
}

function initAnswers(example, successHandler, failHandler) {
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

function renderExample(gameObj, example) {
  const { container, level } = gameObj;
  container.innerHTML = '';

  // init question(example to sum) container
  const question = initQuestion(example.question);
  container.appendChild(question);

  // init answer buttons container
  const newGameState = { ...gameObj };

  const successHandler = () => {
    newGameState.score += 1;
    if (newGameState.status === gameStatus.start) {
      const newExample = generateExample(level);
      renderExample(newGameState, newExample);

      const audioAllowing = getGameAudioStatus();
      if (audioAllowing) {
        audioSound('right-answer');
      }

      const scoreItem = document.querySelector('.score__item');
      scoreItem.textContent = newGameState.score;
    }
  };

  const failHandler = () => {
    if (newGameState.status === gameStatus.start) {
      const newExample = generateExample(gameObj.level);
      renderExample(newGameState, newExample);

      const audioAllowing = getGameAudioStatus();
      if (audioAllowing) {
        audioSound('wrong-answer');
      }
    }
  };

  const answers = initAnswers(example, successHandler, failHandler);
  container.appendChild(answers);
}

export function initGame(level, container) {
  return {
    score: 0,
    level,
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
