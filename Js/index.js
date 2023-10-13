buttonMobile()

function buttonMobile(){
    const btn = document.querySelector('header button')
    const lista = document.querySelector('header ul')
    btn.addEventListener('click', abrirLista)

    function abrirLista(){
        btn.classList.toggle('btn-on')
        lista.classList.toggle('lista-on')
    }
}