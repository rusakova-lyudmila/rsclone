const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.render('trainings/index', {
    title: 'Тренажеры',
    isTrainings: true
  })
})

router.get('/attention', (req, res) => {
    res.render('trainings/attention/click', {
      title: 'Тренажер "Клик-клик"',
      isAttention: true
    })
})

router.get('/logic/addition', (req, res) => {
    res.render('trainings/logic/addition', {
      title: 'Тренажер "Сложение"',
      isAddition: true
    })
})

router.get('/logic/substraction', (req, res) => {
    res.render('trainings/logic/substraction', {
      title: 'Тренажер "Вычитание"',
      isSubstraction: true
    })
})

router.get('/memory', (req, res) => {
    res.render('trainings/memory/matrix', {
      title: 'Тренажер "Матрица памяти"',
      isMemory: true
    })
})

router.get('/thinking', (req, res) => {
    res.render('trainings/thinking/unikum', {
      title: 'Тренажер "Уникум"',
      isThinking: true
    })
})

module.exports = router