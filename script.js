let show = true;
const menuContent =document.querySelector('.content');
const menuToogle = menuContent.querySelector('.menu-toggle');


menuToogle.addEventListener('click', () => {

  menuContent.classList.toggle('on', show);
  show = !show;
})
