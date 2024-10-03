const mostrarMenu = (navButtonId, navId) => {
    const navButton = document.getElementById(navButtonId);
    const nav = document.getElementById(navId);
    if(navButton && nav){
        navButton.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
        });
    }
}

mostrarMenu('nav-button-menu', 'nav-menu');