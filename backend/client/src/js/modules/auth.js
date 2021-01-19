const auth = () => {
      const regstrForma = document.getElementById('regForm');
      const lgnForma = document.getElementById('logForm');
      const regformaData = document.forms.registerFrom;
      const logformaData = document.forms.loginForm;

      regstrForma.addEventListener('submit', async (e) => {
            console.log('click')
            const data = {
             name: regformaData.elements.name.value,
             surname: regformaData.elements.surname.value,
             email: regformaData.elements.email.value,
             password: regformaData.elements.password.value,
             confirm: regformaData.elements.confirm.value

            };
            console.log(data)
            e.preventDefault();
            const request = await fetch('http://localhost:5000/api/auth/register',{
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
          const response = await request.json();
        });

        lgnForma.addEventListener('submit', async (e) => {
            console.log('click')
            const data = {
             email: logformaData.elements.email.value,
             password: logformaData.elements.password.value
            };
            console.log(data)
            e.preventDefault();
            const request = await fetch('http://localhost:5000/api/auth/login',{
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
          const response = await request.json();
          console.log(response)
        });
}

module.exports = auth;