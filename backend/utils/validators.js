const {check, validationResult} = require('express-validator');

exports.registerValidators = [
    check('email').normalizeEmail().isEmail().withMessage('Некорректный email'),
    check('password').isLength({min: 6}).isAlphanumeric().withMessage('Минимальная длина пароля 6 символов'),
    check('confirm').custom((value, {req}) => {
        if(value !== req.body.password) throw new Error ('Пароли не совпадают');
        return true;
    }),
    check('name').isLength({min: 3}).withMessage('Минимальная длина имени 3 символа')
];

exports.loginValidators = [
    check('email').normalizeEmail().isEmail().withMessage('Некорректный email'),
    check('password').isLength({min: 6}).isAlphanumeric().withMessage('Минимальная длина пароля 6 символов'),
]