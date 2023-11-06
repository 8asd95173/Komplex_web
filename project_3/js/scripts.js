document.addEventListener('DOMContentLoaded', () => {
    
    //menu
    const iconMenu = document.querySelector('.icon-menu');
    const desktopMenu = document.querySelector('.desktop-menu');
    const bg = document.querySelector('.bg');

    iconMenu.addEventListener('click', function() {
        desktopMenu.classList.toggle('active');
        bg.style.display = desktopMenu.classList.contains('active') ? 'block' : 'none';
    });

    bg.addEventListener('click', function() {
        desktopMenu.classList.toggle('active');
        bg.style.display = desktopMenu.classList.contains('active') ? 'block' : 'none';
    });


    //theme
    const thems = {
        light: 'Light Theme',
        dark: 'Dark Theme'
    }

    const btnChange = document.querySelectorAll('#change-theme');
    
    btnChange.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.textContent === thems.light) {
                btnChange.forEach(item => item.textContent = thems.dark);

                document.body.classList.add('dark');
                document.body.classList.remove('light');
            }else{
                btnChange.forEach(item => item.textContent = thems.light); 

                document.body.classList.add('light');
                document.body.classList.remove('dark');       
            }
        })
    })



    //form
    const button = document.querySelector('.form__container button');
    const passwordInput = document.querySelector('.form__container input[name="password"]');
    const acceptInput = document.querySelector('.form__container input[name="accept"]');

    passwordInput.addEventListener('input', () => {
        passwordInput.style.color = '';
        acceptInput.style.color = '';
    })

    acceptInput.addEventListener('input', () => {
        passwordInput.style.color = '';
        acceptInput.style.color = '';
    })

    button.addEventListener('click', function() {
        const password1 = passwordInput.value;
        const password2 = acceptInput.value;
        
        if (password1 !== password2) {
            passwordInput.style.color = 'red';
            acceptInput.style.color = 'red';

            alert(`The passwords don't match`)
        } else {
            passwordInput.style.color = '';
            acceptInput.style.color = '';

            alert(`Form sent!`)
        }
    });


    //arrow
    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        
        const scrollPercentage = (scrollTop + clientHeight) / scrollHeight * 100;
        
        const toUppButton = document.getElementById('to-upp');
        
        if (scrollPercentage > 80) {
          toUppButton.classList.add('active');
        } else {
          toUppButton.classList.remove('active');
        }
      });      
})