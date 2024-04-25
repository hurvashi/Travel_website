

    const loginBtn = document.querySelector('.login-btn');
    const loginPage = document.getElementById('loginPage');
    const closeLogin = document.getElementById('closeLogin');
    
   
    loginBtn.addEventListener('click', () => {
        loginPage.style.display = 'flex';
    });

    closeLogin.addEventListener('click', () => {
        loginPage.style.display = 'none';
    });


    
     