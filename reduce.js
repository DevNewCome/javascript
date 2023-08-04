//// Somando valores

function soma(n){
    let soma = n.reduce((acc, atual) => acc + atual ,0 )
        return soma
        
}
console.log(soma([1,2,3,4,5]))

//Concatenando strings em um array:

function concatNames(str){
    const concatenando = str.reduce((acc, atual) => {
        return acc + ', ' + atual;
    },'')
    return concatenando
}

console.log(concatNames(['jefferson', 'lira']))

//Contando a quantidade de ocorrências de um valor em um array:

function quantidadeDecorrencia(arr){
    const contagem = arr.reduce((acumulador, valorAtual) => {
        if (valorAtual in acumulador) {
          acumulador[valorAtual]++;
        } else {
          acumulador[valorAtual] = 1;
        }
        return acumulador;
      }, {});
}

console.log(quantidadeDecorrencia([1,1,2,3,3,4,5]))


function par(str){
   let par = str.reduce((acc, atual) => {
        if(atual % 2 === 0){
            acc.push(atual)
        }
        return acc
    },[])
    return par
}

console.log(par([1,2,3,4,5]))


const pessoas = [
    { nome: 'João', idade: 30 },
    { nome: 'Maria', idade: 25 },
    { nome: 'Pedro', idade: 40 }
  ];
  const ordenadoPorIdade = pessoas.reduce((acumulador, valorAtual) => {
    if (acumulador.idade < valorAtual.idade) {
      return acumulador;
    } else {
      return valorAtual;
    }
  });
  console.log(ordenadoPorIdade)


  const pessoas1 = [
    { nome: 'João', idade: 30, salario: 2000 },
    { nome: 'Maria', idade: 25, salario: 1500 },
    { nome: 'Pedro', idade: 40, salario: 3000 }
  ];
  const totalSalarios = pessoas1.reduce((acumulador, valorAtual) => acumulador + valorAtual.salario, 0);
  console.log(totalSalarios); // 6500