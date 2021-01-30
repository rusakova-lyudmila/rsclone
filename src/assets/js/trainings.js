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
        image: 'img/memory/matrix.png',
        bg: 'img/memory/bg/memory.jpg',
        description: 'Тренажер для развития образной памяти',
        rules: '<p>В клетчатом поле на некоторое время подсветятся зеленым цветом квадратики, расположение которых нужно запомнить.</p><p>Далее квадратики станут одного цвета, нужно за определенное время успеть нажать на те квадратики, которые были подсвечены зеленым цветом, в любом порядке.</p><p>Если выбранный квадратик окажется неверным, то он подсветится красным цветом.</p><p>Игра повторяется, пока не закончилось время таймера.</p>',
      },
    ],
  },
  {
    typeKey: 'attention',
    trainings: [
      {
        key: 'click',
        name: 'Клик-Клик',
        image: 'img/attention/click.png',
        bg: 'img/attention/bg/attention.jpg',
        description: 'Тренажер для развития внимания',
        rules: '<p>В клетчатом поле появятся числа, которые нужно прокликать (нажать) по возрастанию.</p></p><p>Игра повторяется, пока не закончилось время таймера.</p>',
      },
    ],
  },
  {
    typeKey: 'logic',
    trainings: [
      {
        key: 'addition',
        name: 'Сложение',
        image: 'img/logic/addition.png',
        bg: 'img/logic/bg/logic.jpg',
        description: 'Тренажер для развития логики',
        rules: '<p>Необходимо в уме сложить все числа в предложенном примере и нажать на кнопку с правильным ответом.</p><p>Нужно решать примеры, пока не закончилось время таймера.</p>',
      },
      {
        key: 'subtraction',
        name: 'Вычитание',
        image: 'img/logic/subtraction.png',
        bg: 'img/logic/bg/logic.jpg',
        description: 'Тренажер для развития логики',
        rules: '<p>Необходимо в уме вычесть все числа в предложенном примере и нажать на кнопку с правильным ответом.</p><p>Нужно решать примеры, пока не закончилось время таймера.</p>',
      },
      {
        key: 'multiplication',
        name: 'Умножение',
        image: 'img/logic/multiplication.png',
        bg: 'img/logic/bg/logic.jpg',
        description: 'Тренажер для развития логики',
        rules: '<p>Необходимо в уме перемножить все числа в предложенном примере и нажать на кнопку с правильным ответом.</p><p>Нужно решать примеры, пока не закончилось время таймера.</p>',
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
