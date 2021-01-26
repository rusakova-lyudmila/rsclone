const {Router} = require('express');
const User = require('../models/User');
const authM = require('../middleware/auth.middleware');
const router = Router();

router.get('/:id', authM,  async (req,res) => {
    console.log(req.params)
    try{
        const user = await User.findById(req.params.id);
        res.json(user);
    }catch(e){
        res.status(500).json({message: "Что-то пошло не так, попробуйте снова"});
    }
});

module.exports = router;