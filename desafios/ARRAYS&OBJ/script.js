function arrayDuplicado(arr){
    let uniqueArray = arr.filter((item, index) => {
        return arr.indexOf(item) === index;
        console.log(arr)
      });
      return uniqueArray
}

let array = [1,1,2,3,4,4,5]
console.log(arrayDuplicado(array))

//Metodo alternativo utilizando o metodo SET que armazena valores únicos 

function removerDuplicatas(arr){
    return Array.from(new Set(arr)); 
}
let array1 = [1,1,2,3,4,4,5]
console.log(arrayDuplicado(array1))
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////

function doisArrays(arr1, arr2){
    return arr1.concat(arr2)
   
}

let array2 = [1,2,3]
let array3 = [4,5,6]
console.log(doisArrays(array2, array3))
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////

function intersecao(arr1, arr2){
    let newArray = []

    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                newArray.push(arr1[i])
            }
        }
    }
    return newArray
}

console.log(intersecao([1,2,3,4],[1,6,8,4]))

//metodo alternativo

function intersecao2(arr1, arr2){
    return arr1.filter((elemento) => arr2.includes(elemento))
}

/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////

function mediaArray(arr){
    let soma = 0
    let media = 0
    for(let i = 0; i < arr.length; i++){
        soma += arr[i];
        media = soma/arr.length
    }
    return media
}
console.log(mediaArray([10,5,10,20]))

// Outro método
function mediaArray2(arr){
    let soma = arr.reduce((acc, atual) => acc + atual ,0)
    let media = soma/arr.length;
    return media
}
console.log(mediaArray2([10,5,10,20]))

/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
//       OBJETOS / //

const numerosObj = {
    a: 10,
    b: 15,
    c: 20
}

function somaValoresObj(obj){
    let soma = 0;

    for(const chave in obj){
       if(obj.hasOwnProperty(chave) && typeof obj[chave] === 'number'){
        soma += obj[chave]
       } 
    }
    return soma
}

console.log(somaValoresObj(numerosObj))



const pessoa = {
    nome: 'joao',
    idade: 30,
    profissao: 'programador',
    hobbies: ['futebol', 'programar', 'viajem'],
}

function filterProp(obj, prop){
    let newObj = {}
        for(let i of prop){
            if(obj.hasOwnProperty(i)){
                newObj[i] = obj[i]
            }
        }
        return newObj
}



const propriedadePermitida = ['nome', 'profissao']
console.log(filterProp(pessoa, propriedadePermitida));

// 

function unindoObj(obj1,obj2){
    return {...obj1, ...obj2}
}

console.log(unindoObj({a:1,b:2,c:3},{nome:'jefferson', empregado: true}))


