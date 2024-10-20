const btnMenu = document.getElementById('btnMenu');

function toggleMenu(){
  const nav = document.getElementById('menu_container');
  nav.classList.toggle('active')

}

btnMenu.addEventListener('click', toggleMenu);

