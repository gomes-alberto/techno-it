// GÓDIGO DO ESTILO DAK NODE
const darkModeToggle = document.getElementById("btn-dark-mode");
const body = document.body;



// Criando evento declick para ativar o mod escuro e desativar
darkModeToggle.addEventListener ("click", () => {
    body.classList.toggle ("estilo-dark-mode");

    // criando contantes para alteral as imagens
    const SolImg = darkModeToggle.querySelector('.modo-claro-sol');
    const LuaImg = darkModeToggle.querySelector('.modo-escuro-lua');
    
    const subTitulo = document.querySelectorAll("sub-titulo");

    // criando uma condição para verificar se uma classe estiver ativa 
    if (body.classList.contains ("estilo-dark-mode")) {
        SolImg.style.display = 'inline';
        LuaImg.style.display = 'none';

        subTitulo.style.fontSize = '50px'
    } else {
        SolImg.style.display = 'none';
        LuaImg.style.display = 'inline';

        subTitulo.style.fontSize = '20px'
    }
});


// CÓDIGO DO MENU DINAMICO
let NavBar = document.querySelector('#header')

document.addEventListener("scroll", ()=>{
    let ScrollTop = window.scrollY

    if (ScrollTop > 0) {
        NavBar.classList.add('rolar')
    } else {
        NavBar.classList.remove('rolar')
    }
});


var let = let;