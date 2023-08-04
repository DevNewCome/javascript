// uma matriz de objetos com base em uma função personalizada:

const pessoas = [
    {nome: 'João', idade: 30},
    {nome: 'Maria', idade: 25},
    {nome: 'Pedro', idade: 40},
    {nome: 'Ana', idade: 35}
]

function FiltrarObjetos(obj){
    let pessoasIdade = obj.filter((pessoa)=>{
        return pessoa.idade > 30
    })
    return pessoasIdade;
}
console.log(FiltrarObjetos(pessoas))

//Filtrar uma matriz de números inteiros para obter apenas os números pares:

function filtrarPar(obj){
    let arrPar = []
    let filtrarPar = obj.filter((numeros)=>{
        return numeros % 2 === 0 
    })
    arrPar.push(filtrarPar)
    return arrPar
}

console.log(filtrarPar([1,2,3,4,5,6]))

//Filtrar uma matriz de strings para obter apenas as strings que contêm uma determinada letra:

function filtrarPalavraPelaLetra(arr){
    let filtro = arr.filter((palavra) => {
        return palavra.includes('a')
    })
    return filtro
}

console.log(filtrarPalavraPelaLetra(['jefferson', 'lucas', 'driele', 'matheus']))


//function filter preço

const produtos = [
    { nome: 'mouse', preco: 10 },
    { nome: 'teclado', preco: 20 },
    { nome: 'monitor', preco: 200 },
    { nome: 'fone de ouvido', preco: 30 }
  ];

function filterPreco(obj){
    let filterPrice = obj.filter((produtos) => {
        return produtos.preco < 50;
    })
    return filterPrice
}

console.log(filterPreco(produtos))