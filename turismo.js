function menushow(){
    let menu = document.querySelector('.menubot');
    if(menu.classList.contains('open')){
        menu.classList.remove('open');
        menu.setAttribute("class",menubot);
    }else{
        menu.classList.add('open');
        menu.setAttribute("class",menubot);
    }
}
function scrollTo(elemnt){
    document.querySelector(elemnt).scrollIntoView({behavior: "smooth"})
}

document.querySelector('.ima').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo('#nav');
})

document.querySelector('#botao').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo('#inicio');
})
document.querySelector('#turismo').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo('#inicio');
})

document.querySelector('#astroo').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo('#atracoes');
})

document.querySelector('#hoto').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo('#cliente');
})

document.querySelector('#gastroo').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo('#gast');
})
document.querySelector('#turism').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo('#inicio');
})

document.querySelector('#astro').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo('#atracoes');
})

document.querySelector('#hot').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo('#cliente');
})

document.querySelector('#gastro').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo('#gast');
})

const btn = document.getElementById('btnmobile');
function tooglemenu(){
    const nav = document.getElementById('nav');
    nav.classList.toogle('active');
}
btn.addEventListener('click', tooglemenu);