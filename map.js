//Transformar uma matriz de objetos com base em uma função personalizada:
const produtos = [
    { nome: 'mouse', preco: 10 },
    { nome: 'teclado', preco: 20 },
    { nome: 'monitor', preco: 200 },
    { nome: 'fone de ouvido', preco: 30 }
  ];

function produtosComDesc(obj){
    let produtosComDesconto = obj.map(produto => {
       return{
        nome: produto.nome,
        precoComDesconto: produto.preco * 0.9
       } 
    })
    return produtosComDesconto
}

console.log(produtosComDesc(produtos))

// Transformar uma matriz de números em uma nova matriz de números com valores aumentados em 2:

function somando3(arr){
   return arr.map(num => num + 2) 
}
console.log(somando3([1,2,3,4,5]))


// filtrando pessoas

const pessoas = [
    { nome: 'João', idade: 30 },
    { nome: 'Maria', idade: 25 },
    { nome: 'Pedro', idade: 40 },
    { nome: 'Ana', idade: 35 }
  ];

function filterPessoa(obj){
    return obj.map(pessoa => pessoa.nome)
}

console.log(filterPessoa(pessoas))


//Transformar uma matriz de valores booleanos em uma nova matriz com valores invertidos:

function valoresInvertidos(str){
    let inversao = str.map((str) => {
      return  str = !str
    })
    return inversao
}

console.log(valoresInvertidos([false, true]))

function dobro(arr){
  let calc = arr.map(numeros => numeros * 2) // o metodo map nao pode ser aplicado diretamente há um numero
  return calc
}



console.log(dobro([4,4,5,7]))