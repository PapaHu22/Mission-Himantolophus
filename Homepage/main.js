const togglebutton=document.querySelector(".anything_togglemenubarbutton");
const menu=document.querySelector('.anything_menu');
const icons=document.querySelector('.anything_icons');

togglebutton.addEventListener('click',()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
