export const trainingTypes = [
  {
    typeKey: 'memory',
    typeName: 'Память',
  },
  {
    typeKey: 'attention',
    typeName: 'Внимание',
  },
  {
    typeKey: 'logic',
    typeName: 'Логика',
  },
  {
    typeKey: 'thinking',
    typeName: 'Мышление',
  },
];

export const trainingsItems = [
  {
    typeKey: 'memory',
    trainings: [
      {
        key: 'matrix',
        name: 'Матрицы памяти',
        image: 'img/memory/matrix.jpg',
        description: 'Тренажер для развития образной памяти',
      },
      {
        key: 'matrix1',
        name: 'Матрицы памяти',
        image: 'img/memory/matrix.jpg',
        description: 'Тренажер для развития образной памяти',
      },
      {
        key: 'matrix2',
        name: 'Матрицы памяти',
        image: 'img/memory/matrix.jpg',
        description: 'Тренажер для развития образной памяти',
      },
      {
        key: 'matrix3',
        name: 'Матрицы памяти',
        image: 'img/memory/matrix.jpg',
        description: 'Тренажер для развития образной памяти',
      },
    ],
  },
  {
    typeKey: 'attention',
    trainings: [
      {
        key: 'click',
        name: 'Клик-Клик',
        image: 'img/attention/click.jpg',
        description: 'Тренажер для развития внимания',
      },
    ],
  },
  {
    typeKey: 'logic',
    trainings: [
      {
        key: 'addition',
        name: 'Сложение',
        image: 'img/logic/adding.jpg',
        bg: 'img/logic/bg/adding.jpg',
        description: 'Тренажер для развития логики',
        rules: '<p>Необходимо в уме сложить все числа в предложенном примере и нажать на кнопку с правильным ответом.</p><p>Нужно решать примеры, пока не закончилось время таймера.</p>',
      },
      {
        key: 'subtraction',
        name: 'Вычитание',
        image: 'img/logic/adding.jpg',
        bg: 'img/logic/bg/subtraction.jpg',
        description: 'Тренажер для развития логики',
        rules: '<p>Необходимо в уме вычесть все числа в предложенном примере и нажать на кнопку с правильным ответом.</p><p>Нужно решать примеры, пока не закончилось время таймера.</p>',
      },
    ],
  },
  {
    typeKey: 'thinking',
    trainings: [
      {
        key: 'unikum',
        name: 'Уникум',
        image: 'img/thinking/unikum.jpg',
        description: 'Тренажер для развития образного мышления',
      },
    ],
  },
];
