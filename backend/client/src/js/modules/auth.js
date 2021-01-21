const auth = () => {
  const regstrForma = document.getElementById('regForm');
  const lgnForma = document.getElementById('logForm');
  const regOut = document.querySelector('.reg-message');
  const logOut = document.querySelector('.log-message');
  const regformaData = document.forms.registerFrom;
  const logformaData = document.forms.loginForm;
  const baseUrl = 'http://localhost:5000/api/auth/';
  const options = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
  };
      
  regstrForma.addEventListener('submit', async (e) => {
    try{
      e.preventDefault();
      const data = {
        name: regformaData.elements.name.value,
        surname: regformaData.elements.surname.value,
        email: regformaData.elements.email.value,
        password: regformaData.elements.password.value,
        confirm: regformaData.elements.confirm.value

      };     
      const request = await fetch(`${baseUrl}register`,options);
      const response = await request.json();
    }catch(e){
      console.log('Error: ',e);
    }
  });

  lgnForma.addEventListener('submit', async (e) => {
    try{
      e.preventDefault();
      const data = {
              email: logformaData.elements.email.value,
              password: logformaData.elements.password.value
      };
      const request = await fetch(`${baseUrl}login`,options);
      const response = await request.json();
      logOut.innerHTML = response.message;
    }catch(e){
      console.log('Error: ',e);
    }
  });
}

module.exports = auth;