export const gameLevel = {
  easy: {
    levelName: 'easy',
    name: 'легкий',
<<<<<<< HEAD
    duration: 10,
=======
    duration: 30,
>>>>>>> 27fa0443c4d16b556f889684de4f952b8684b578
  },
  medium: {
    levelName: 'medium',
    name: 'средний',
    duration: 50,
  },
  hard: {
    levelName: 'hard',
    name: 'тяжелый',
    duration: 45,
  },
};

export const gameStatus = {
  init: 'init',
  start: 'start',
  stop: 'stop',
};

const gameAudio = {
  audio: false,
};

export function setGameAudioStatus(audioStatus) {
  gameAudio.audio = audioStatus;
}

export function getGameAudioStatus() {
  return gameAudio.audio;
}
