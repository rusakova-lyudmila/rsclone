const {Router} = require('express');
const Stat = require('../models/Stat');
const config = require('config');
const authM = require('../middleware/auth.middleware');
const router = Router();

router.get('/', authM, async (req,res) => {
    try{
        const stats = await Stat.find({owner: req.user.userId});
        res.json(stats);
    }catch(e){
        res.status(500).json({message: "Что-то пошло не так, попробуйте снова"});
    }
});

router.get('/:id', authM,  async (req,res) => {
    try{
        const trainStat = await Stat.findById(req.params.id);
        res.json(trainStat);
    }catch(e){
        res.status(500).json({message: "Что-то пошло не так, попробуйте снова"});
    }
});

router.post('/save', authM, async (req, res) => {
    try{
        const {title, typeTraining, score} = req.body;
        const train = Stat.findOne({
            title: req.body.title,
            owner: req.user.userId
        });

        if(!train) {
            const firstTrain = new Stat({title, typeTraining, score, owner: req.user.userId});
            await firstTrain.save();
            res.status(201).json({message: 'Результат сохранен'});
        }
        train.score +=  Number.parseInt(score);
        await train.save();
        res.status(201).json({message: 'Результат сохранен'});
    }catch(e){
        res.status(500).json({message: "Что-то пошло не так, попробуйте снова"});
    }
});

module.exports = router;