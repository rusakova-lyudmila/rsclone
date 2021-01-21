const {Router} = require ('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');
const {validationResult} = require('express-validator');
const {registerValidators, loginValidators} = require('../utils/validators');
const router = Router();

router.post('/register', registerValidators, async (req, res)=>{
    try{
        // console.log(req.body)
        const errors = validationResult(req);
        if(!errors.isEmpty()) return res.status(400).json({
            errors: errors.array(),
            message: 'Некорректные данные при регистрации'
        });

        const {email, password, name, surname} = req.body;
        const candidate = await User.findOne({email});

        if(candidate) return res.status(400).json({message: 'Такой пользователь существует.'});

        const hashedPassword = await bcrypt.hash(password, 15);
        const user = new User({
            email,
            name, 
            surname,
            password: hashedPassword
        });

        await user.save();
        res.status(201).json({message: 'Пользователь создан.'});
    
    }catch(e){
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова...' + e.message});
    }
});

router.post('/login', loginValidators, async (req, res)=>{
    console.log(req.body)
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()) return res.status(400).json({
            errors: errors.array(),
            message: 'Некорректные данные при регистрации'
        });

        const {email, password} = req.body;
        const user = await User.findOne({email});

        if(!user) return res.status(400).json({message: 'Пользователь не найден'});

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) return res.status(400).json({message: 'Логин или пароль введены некорректно'});

        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            {expiresIn: '1h'} 
        );

        res.json({token, userId: user.id, message: 'Authorization success!'});
    
    }catch(e){
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова...'});
    }
});


module.exports = router;