const config = require('config');

module.exports = function (email) {
    return {
        to: email,
        from: config.get('email_from'),
        subject: 'Аккаунт создан',
        html: `
            <h1>Добро пожаловать в приложение RSClone</h1>
            <p>Ваш аккаунт успешно создан - ${email}</p>
            <hr /> 
            <a href="${config.get('baseURL')}">Вернуться в RSClone</a> 
        `
    }
}