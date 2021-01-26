const profilePage = () => {
    const authData = JSON.parse(localStorage.getItem('auth'));
    const {token, userId} = authData;
    
    const getStats = async () => {
        try{
            const request =await fetch('http://localhost:5000/api/stat/',{
                method: 'GET',
                mode: 'cors',
                headers: {
                    "Authorization": `Bearer ${token}`,
                
                }
            })
            const data = await request.json();
            console.log('Statistic: ',data);
        }catch(e){
            console.log('Error fetch: ', e.message);
        }
    }

    const getUserInfo = async () => {
        try{
            console.log('UserId: ',userId)
            const request =await fetch(`http://localhost:5000/api/profile/${userId}`,{
                method: 'GET',
                mode: 'cors',
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            })
            const data = await request.json();
        
            profile(data.name, data.surname, data.email);

        }catch(e){
            console.log('Error fetch: ', e.message);
        }
    };

    const profile = (name, surname, email) => {
        const html = `<div class="container">
        <div class="row">
        <div class="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-12">
        <div class="well profile">
        <div class="col-sm-12 info">
        <div class="col-xs-12 col-sm-8 stat">
        <h2>${name + ' ' + surname}</h2>
        <p><strong><span class="info_span">Email:</span> </strong> ${email} </p>
        <p><strong><span class="info_span">Хобби:</span> </strong> Книги, природа, активный отдых, сайтостроение, дизайн, верстка </p>
        <p><strong><span class="info_span">Знания:</span> </strong>
        <span class="tags">HTML5</span>
        <span class="tags">CSS3</span>
        <span class="tags">jQuery</span>
        <span class="tags">Bootstrap</span>
        </p>
        </div>
        <div class="col-xs-12 col-sm-4 text-center">
        <figure>
        <img src="../../assets/img/avatar.jpg" alt="user" class="img-circle img-responsive ava">
        <figcaption class="ratings">
        <p>Рейтинг
        <a href="#">
        <span class="fa fa-star"></span>
        </a>
        <a href="#">
        <span class="fa fa-star"></span>
        </a>
        <a href="#">
        <span class="fa fa-star"></span>
        </a>
        <a href="#">
        <span class="fa fa-star"></span>
        </a>
        <a href="#">
        <span class="fa fa-star-o"></span>
        </a>
        </p>
        </figcaption>
        </figure>
        </div>
        </div>
        <div class="col-xs-12 divider text-center">
        <div class="col-xs-12 col-sm-4 emphasis">
        <h2><strong> 32,4K </strong></h2>
        <p><small>Подписчиков</small></p>
        <button class="btn btn-success btn-block"><span class="fa fa-plus-circle"></span> Подписатся</button>
        </div>
        <div class="col-xs-12 col-sm-4 emphasis">
        <h2><strong>723</strong></h2>
        <p><small>Записей</small></p>
        <button class="btn btn-info btn-block"><span class="fa fa-user"></span> Профиль</button>
        </div>
        <div class="col-xs-12 col-sm-4 emphasis">
        <h2><strong>74</strong></h2>
        <p><small>Работы</small></p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>`;

        // document.querySelector('.main-container').insertAdjacentHTML('beforeend', html);
        document.body.insertAdjacentHTML('beforeend', html);
    };

    getUserInfo ();
    getStats ();

}

export default profilePage;