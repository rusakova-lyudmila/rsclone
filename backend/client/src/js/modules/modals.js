export const modals = () => {
    const modal = document.getElementById("my_modal");
    document.addEventListener('click', (e) => {
        if(e.target.classList.contains("btn-register")){
            modal.style.display = "block";
        }
    });

    document.addEventListener('click', (e) => {
        if (e.target == modal || e.target.classList.contains('btn-close')) {
            modal.style.display = "none";
        }
   
    });
}

export const modalHtml = () => {
    const html = `
    <div class="container">
    <div id="my_modal" class="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Войти в приложение</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div id="mywrap-tabs" class="mywrap-tabs">
              <div class="mycontent">
                <div class="mytab-content active">
                  <div class="p-x-1 p-y-3">
                    <div class="log-message"></div> 
                    <form name="loginForm" class="card card-block m-x-auto bg-faded form-width" id="logForm">
                      <legend class="m-b-1 text-xs-center">Авторизация</legend>
                      <div class="form-group input-group">
                        <span class="input-group-addon">@</span>
                        <span class="has-float-label">
                          <input class="form-control" id="email" type="email"  name="email"/>
                          <label for="email">E-mail</label>
                        </span>
                      </div>
                      <div class="form-group has-float-label">
                        <input class="form-control" id="password" type="password"  name="password"/>
                        <label for="password">Пароль</label>
                      </div>
                      <button type="submit" class="btn btn-block btn-primary">Войти</button>
                    </form>
                  </div>
                </div>
                <div class="mytab-content">
                  <div class="p-x-1 p-y-3">
                    <div class="reg-message"></div>  
                    <form name="registerFrom" class="card card-block m-x-auto bg-faded form-width" id="regForm">
                      <legend class="m-b-1 text-xs-center">Регистрация</legend>
                      <div class="form-group input-group">
                        <span class="has-float-label">
                          <input class="form-control" id="first" type="text" name="name"/>
                          <label for="first">Имя</label>
                        </span>
                        <span class="has-float-label">
                          <input class="form-control" id="last" type="text" name="surname"/>
                          <label for="last">Фамилия</label>
                        </span>
                      </div>
                      <div class="form-group input-group">
                        <span class="input-group-addon">@</span>
                        <span class="has-float-label">
                          <input class="form-control" id="email" type="email"  name="email"/>
                          <label for="email">E-mail</label>
                        </span>
                      </div>
                      <div class="form-group has-float-label">
                        <input class="form-control" id="password" type="password"  name="password"/>
                        <label for="password">Пароль</label>
                      </div>
                      <div class="form-group has-float-label">
                        <input class="form-control" id="confirm" type="password" name="confirm"/>
                        <label for="password">Пароль повторно</label>
                      </div>
                      <div class="form-group">
                        <label class="custom-control custom-checkbox">
                          <input class="custom-control-input" type="checkbox"/>
                          <span class="custom-control-indicator"></span>
                          <span class="custom-control-description">Получать новости</span>
                        </label>
                      </div>
                      <div class="text-xs-center">
                        <button class="btn btn-block btn-primary" type="submit">Регистрация</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="mytabs">
                <div class="mytab active">Авторизация</div>
                <div class="mytab">Регистрация</div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <p>version 0.1</p>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  document.querySelector('.main-container').insertAdjacentHTML('beforeend', html);
};