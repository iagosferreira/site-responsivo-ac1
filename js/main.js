var menuIcon = document.querySelector('.menu-icon');
var aClick = document.querySelector('.aclick, .aclick, .aclick, .aclick')
var ul = document.querySelector('.ul');

menuIcon.addEventListener('click', ()=>{
    if (ul.classList.contains('ativo')){
        ul.classList.remove('ativo');
        document.querySelector('.menu-icon img').src = 'img/menu.png'
    }else{
        ul.classList.add('ativo');
        document.querySelector('.menu-icon img').src = 'img/close.png'
    }
});

aClick.addEventListener('aclick', ()=>{
    if(ul.classList.contains('ativo')){
        ul.classList.remove('ativo');
    }
})