function parImpar(n1){

    if(n1 % 2 === 0){
        return  console.log(`${n1}: PAR`)
    }else{
        return  console.log(`${n1}: IMPAR`)
    }
    
}

parImpar(43421)

function fatorial(n1){
    let acc = 1

    for (let i = 1; i <= n1; i++) {
     acc *= i;
   }
    return acc
}

console.log(fatorial(5))

function numMax(n) {
    let atual = n[0];
    for (let i = 1; i < n.length; i++) {
      if (n[i] > atual) {
        atual = n[i];
      }
    }
    return atual;
  }

  function numMin(n) {
    let atual = n[0];
    for (let i = 1; i < n.length; i++) {
      if (n[i] < atual) {
        atual = n[i];
      }
    }
    return atual;
  }

let array = [5,11,55,555,66,60]
console.log(numMax(array))
console.log(numMin(array))

function inverse(s){
  let invertido = s.split('').reverse().join('');
    return invertido
}

console.log(inverse('invertido'))


function contadorVogais(str){
  let vogais = 'aeiouAEIOU'
  let acc = 0
  for(let i = 0; i < str.length; i++){
    if(vogais.includes(str[i])){
      acc++ 
    }
  }
return acc;
}

console.log(contadorVogais('jeeeeefferson'))

function Soma(n){
  let acc = 0;
  for(let i = 0; i < n.length; i++){
    acc += n[i]
  }
  return acc
}

let array1 = [1,3,4,5]
console.log(Soma(array1))


function palindromo(str){
  let palavraInvertida = str.split('').reverse().join('')
    if(palavraInvertida === str){
      console.log(`Palindromo ${palavraInvertida} : ${str}`)
    }else{
      console.log('Não é')
    }
}

palindromo('axa')


function numeroAleatorio(quantidade, nMax){
  const arr = []

  for(let i = 0; i < quantidade; i++){
    arr.push(Math.floor(Math.random() * (nMax + 1)));
  }
  return arr
}

console.log(numeroAleatorio(5,50))

function elementoMaisFrequente(arr){
  const acc = {}
  let elemento = arr[0]
  let contagemEl = 1

  for(const valor of arr){
    if(!acc[valor]){
      acc[valor] = 1
    }else {
      acc[valor]++ 
    }
    if(acc[valor] > contagemEl){
      contagemEl = acc[valor];
      elemento = valor;
    }
  }
  return elemento
}
let array4 = [1,1,1,2,3,4,5,9]
console.log(elementoMaisFrequente(array4))



function points(games) {
  var sum=0;
  for (var i=0; i<games.length; ++i)
  {
    if (games[i][0]>games[i][2])
      sum+=3;
    if (games[i][0]==games[i][2])
      sum+=1;
  }
  return sum;
}

let match = ['3:1', '2:2', '0:1'];
console.log(points(match))

//removendo vogais
function removeVogais(str){
  let novaPalavra = '';
  let vogais = 'aeiouAEIOU'

  for(let i = 0; i < str.length; i++){
    if(!vogais.includes(str[i])){
        novaPalavra += str[i]
    }
  }
  return novaPalavra
}

console.log(removeVogais('jefferson'))

//Crie uma função que retorne a soma dos dois números positivos mais baixos,
// dada uma matriz de no mínimo 4 inteiros positivos.
// Nenhum float ou inteiro não positivo será passado. javscript

function somaDosMenoresPositivos(...arr){
  let crescente = arr.sort(); // sort coloca os numeros em ordem crescente
    for(let i = 0; i < arr.length; i++){
      crescente = arr[0] + arr[1] 
    }
  return crescente;
}

console.log(somaDosMenoresPositivos(80,50,40,30,20))

function check(arr, x){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === x){
      return true
    }
  }
  return false
}

let teste = [1,2,3, 'teste']
console.log(check(teste, 4))


function somaCaracteres(str){
  let soma = 0;
  for(let i = 0; i < str.length; i++){
    soma = str.length;
  }
  return soma
}
console.log(somaCaracteres('jefferson'))

function somaPalavra(str){
  let palavras = str.split(' ') /*'' j-e-f-e-r-s-s-o-n = 9 ' ' jefferson = 1 */
  return palavras.length
}

console.log(somaPalavra('jefferson sousa lira'))


function trioNumeros(num){
  let crescente = num.sort((a,b) => a-b)
  let intermediario = num.indexOf(crescente[1])
  return intermediario
}

console.log(trioNumeros([6,4,5]))