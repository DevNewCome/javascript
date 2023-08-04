

function highAndLow(numbers){
  let novalista = []
  let maior = Math.max(...numbers)
  let menor = Math.min(...numbers)
    novalista.push(maior,menor)
    let newList = novalista.map(numero => numero.toString()).join(' ')
  return newList
}
console.log(highAndLow([1,2,3,4,5]))
console.log(highAndLow(['1 2 3 4 5']))
////////////////////////////

function sum(numbers) { 
    if(numbers.length === 0){
      return 0;
    }
  let soma =  numbers.reduce((acc, atual) => {
      return acc + atual
    },0)
    return soma
};
console.log(sum([1,2,-3,-4.5,5]))

////////////////////////////
function friend(friends){
    let filtroLetras = friends.filter((name) => {
      return name.length === 4;
    })
    return filtroLetras;
}

function friend1(friends){
  let arr = [];
  for(let i = 0; i < friends.length; i++){
    if(friends[i].length === 4){
      arr.push(friends[i])
    }
  }
  return arr;
}
console.log(friend1(['joao', 'jefferson', 'driele', 'mark']))
////////////////////////////

function hoopCount (n) {
   for(let i = 0; i < n; i++){
    if(n >= 10){
      return `Great, now move on to tricks`
    }
   }
    return `Keep at it until you get it`
}

console.log(hoopCount(12))


function isIsogram(str){
  let i, j;
  str = str.toLowerCase();
  for(i = 0; i < str.length; ++i)
    for(j = i + 1; j < str.length; ++j)
      if(str[i] === str[j])
        return false;
  return true;
}

console.log(isIsogram('strefxe')) 


function accum(s) {
  
}




//ue recebe um parâmetro de string contendo um nome e sobrenome e retorna apenas a primeira letra em maiúsculo:

function primeiraLetraMaiuscula(str){
  const nomeSeparado = str.split(' ');
  const nome = nomeSeparado[0];
  const sobrenome = nomeSeparado[1];

  const primeiraLetraNome = nome.charAt(0).toUpperCase();
  const primeiraLetraSobrenome = sobrenome.charAt(0).toUpperCase();

  return primeiraLetraNome + primeiraLetraSobrenome;
}

console.log(primeiraLetraMaiuscula('jefferson lira'))

function spl(str){
  let texto = str.split(' ').join('- ')
  let nome = texto[0];
  let sobrenome = texto[1]
    return nome + sobrenome;
}

console.log(spl('jefferson lira'))




function fakeBin(x){
  let resp = '';

  for(let i = 0; i < x.length; i++){
    if(x[i] < '5'){
      resp += '0' 
    }else{
      resp += '1';
    }
  }
  return resp
}
console.log(fakeBin('56871259842016'))



const reverseSeq = n => {
  let arr = [];
    for (let i=n; i>0; i--) {
      arr.push(i);
      } return arr;
  };
console.log(reverseSeq(5))



function getDivisorsCnt(n){
  let nDivisores = 0;
  let arrDivisores = [];

  for(let i = 1; i <= n; i++){
    if(n % i === 0){
      nDivisores++
      arrDivisores.push(i)
    }
  }
  return arrDivisores + " Divisores:" + nDivisores
}

console.log(getDivisorsCnt(30))


function descendingOrder(n){
  let digitos = n.toString().split(' ');
  digitos.sort(function(a, b) {
    return b - a;
    })
    return parseInt(digitos);
}

console.log(descendingOrder([12345]))

function removeChar(str){
  let splitando = str.split(''); // transforma cada letra em um array
  splitando.pop();               //remove a primeira letra
  splitando.shift()               // remove a ultima letra
    return splitando.join('')     //junta as letras sem a virgula
};

console.log(removeChar('jefferson'))


const rps = (p1, p2) => {
  if(p1 === 'scissors' && p2 === 'paper'){
    return 'Player 1 won!'
  }else if(p1 === 'rock' && p2 === 'scissors'){
    return 'Player 1 won!'
  }else if(p1 === 'paper' && p2 === 'rock'){
    return 'Player 1 won!'
  }else if(p2 === 'scissors' && p1 === 'paper'){
    return 'Player 2 won!'
  }
  else if(p2 === 'paper' && p1 === 'rock'){
    return 'Player 2 won!'
  }
  else if(p2 === 'rock' && p1 === 'scissors'){
    return 'Player 2 won!'
  }else if( p2 === p1){
    return 'Draw!'
  }
};

console.log(rps('rock', 'rock'))



function noSpace(x){
  let novaPalavra = x.split(' ').join('-');
  return novaPalavra
}

console.log(noSpace('dwa dwa 332  dwa'))

function expo(n){
  let arr = []
  let somaExp = 0
  for(let i = 0; i <= n; i++){
      somaExp = Math.pow(2, i)
      arr.push(somaExp)
  }
  return arr
}

console.log(expo(8))


function getAge(inputString){
  return parseInt(inputString.charAt(0))
 }

function last(n) {
  let last = n.pop();
    if(n.length === 0){
      return -1
    }
  return last
};

const arr = [];

console.log(last(arr))

function betweenExtremes(numbers) {
  let maior = Math.max(...numbers);
  let menor = Math.min(...numbers);
    return maior - menor
}

console.log(betweenExtremes([1,3,5,6,8]))

function verify(str){
  str = str.toLowerCase();
  quantidadeO = 0
  quantidadeX = 0;
  for(let i = 0; i < str.length; i++){
      if(str[i] === 'x'){
        quantidadeX++
      }else if(str[i] === 'o'){
        quantidadeO++
      }else if (!str[i] === 'o' && !str[i] === 'x'){
        return true
      }
  }
  if(quantidadeO === quantidadeX){
    return true
  }
  return false
}

console.log(verify('xo'))

function comparaArrEremove(list, remover){
   let lista = list.filter(item => {
   return !remover.includes(item)
  })
  return lista
}

console.log(comparaArrEremove([1,2,3,4,5],[2]))


function stringToNumber(str){
  return parseInt(str)
}

console.log('12,5,6')

function minMax(arr){
  let numeros = []
  let max = Math.max(...arr)
  let min = Math.min(...arr)
  numeros.push(min,max)
   return numeros
 }

 console.log(minMax([2334454,5]))


 function ordenandoMenorMaiorString(str){
   return str.sort((a,b) => a.length - b.length)
 }

console.log((ordenandoMenorMaiorString(['jefferson', 'lira', 'cu', 'anderson Silva'])))


function palavraDeMaiorPontuacao(str){
  let palavras = str.split(' ');
  let maiorPontuacao = 0;
  let palavraComMaiorPontuacao = '';

  for(let palavra of palavras){
    let pontuacao = 0;
    for(let i = 0; i < palavra.length; i++){
      pontuacao+= palavra.charCodeAt(i) - 96 // obtem o valor de cada letra
    }
    if(pontuacao > maiorPontuacao){
      maiorPontuacao = pontuacao;
      palavraComMaiorPontuacao = palavra
    }
  }
  return palavraComMaiorPontuacao
}
/*
O primeiro loop é responsável por percorrer cada palavra na string de entrada,
O que é feito usando o método split para transformar a string em um array de palavras.
O segundo loop é responsável por percorrer cada letra em cada palavra e calcular a pontuação da palavra.
 Isso é feito usando um loop for que itera sobre cada letra em cada palavra.
*/
console.log(palavraDeMaiorPontuacao('jefferson alexandre fonsecaadadwawdfsa pires'))

function findOdd(arr) {
    //Dada uma matriz de números inteiros, encontre aquele que aparece um número ímpar de vezes.
  //[1,1,2]deve retornar 2, porque ocorre 1 vez (o que é ímpar).
  let result = 0;
  let num = 0;
  arr = arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      num++;
   
    } else {
      num++;
  
      if (num % 2 != 0) {
        result = arr[i];
        break;
      }
    }
  }
  return result;
}

console.log(findOdd([1,1,2,3,3,3,4,5]))


//contador palavras

function contadorPalavra(str){
  let palavra = str.split(' ');
  let quantidadePalavra = 0
  for(let i = 0; i < palavra.length; i++){
    quantidadePalavra++
  }
  return quantidadePalavra
}

console.log(contadorPalavra('jefferson lira sousa rocha'))

function numerosRepetidos(arr){
    let numerosRepetidos = []
    let quantidade = 0;

    for(let i = 0; i < arr.length; i++){
      for(let j = i + 1; j < arr.length; j++){
          if(arr[i] === arr[j]){
            quantidade++
            numerosRepetidos.push(arr[i])
          }
      }
    }
    return numerosRepetidos.join(", ") + " (repeated " + quantidade + " times)";
}

console.log(numerosRepetidos([5,1,2,3,4,5,6,5,4]))


function contarAte(num, contador){
  let resp = []
  for(let i = 1; i <= contador; i++){
    resp.push(num * i)
  }
  return resp
}

console.log(contarAte(3,5))

function semaforo(current){
  let atual = ''
  if(current === 'green'){
    atual = 'yellow'
  }else if(current === 'yellow'){
    atual = 'red'
  }else{
    atual = 'green'
  }
  return atual
}

console.log(semaforo('green'))

function invertendoEignorandoSimbolos(str){
  let noSymbols = str.replace(/[^\w]|[\d_]/g, '') // ignora espaços, pontos especiais e numeros. aceita apenas letras
  let InvertToArray = noSymbols.split('').reverse()
  let invertArrayToString = InvertToArray.join('')
    return invertArrayToString
}

console.log(invertendoEignorandoSimbolos('tqk_jctoqivtdkjlpxxayvdevcyxqm'))