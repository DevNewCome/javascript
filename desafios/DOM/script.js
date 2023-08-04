let titulo = document.querySelector('#titulo');
titulo.innerText = "olá"
let paragrafos = document.querySelectorAll('.paragrafo')

for(let i = 0; i < paragrafos.length; i++){
    paragrafos[i].style.color = 'red'
}

function alternarClass(){
    const quadrado = document.querySelector('.quadrado')
    quadrado.classList.toggle('ativo');
}

function criandoLi(){
    ul = document.querySelector('.list');
    li = document.createElement('li');
    li.innerText = 'Novo item'
    ul.appendChild(li)
}

function removerEl(e){
    const itemClicado = e.target;
    itemClicado.remove()
}

const items = document.querySelectorAll('.item')

for(let i of items){
    i.addEventListener('click', removerEl)
}

function filter(){
    const filtro = document.querySelector('#filtro').value.toUpperCase();
    const lista = document.querySelector('#lista')
    const itens = lista.getElementsByTagName('li')

    for(let i = 0; i < itens.length; i++){
        const item = itens[i]
        const texto = item.innerText;
        item.style.display = texto.toUpperCase().includes(filtro) ? "" : "none"
    }
}

const inputFiltro = document.querySelector("#filtro")
inputFiltro.addEventListener("keyup", filter);

function abrirModal(){
    document.querySelector("#myModal").style.display = 'block'
}

function closeModal(){
    document.querySelector("#myModal").style.display = 'none'
}

const abrirBtn = document.querySelector('#abrir')
const fecharBtn = document.querySelector('.close')

abrirBtn.addEventListener('click', abrirModal)
fecharBtn.addEventListener('click', closeModal)


function toggleAccordion(e){
    const header = e.target
    const content = header.nextElementSibling //proximo conteudo do header

    if(content.style.display === 'none'){
        closeAllAcordion();
        content.style.display = 'block'
    }else{
        content.style.display = 'none'
    }
}

function closeAllAcordion(){
    const contents = document.querySelectorAll('.accordion-content');

    contents.forEach((content) => (content.style.display= 'none'))
}

const headers = document.querySelectorAll('.accordion-header')
headers.forEach((header) => header.addEventListener('click', toggleAccordion))