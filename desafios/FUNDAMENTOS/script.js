function conversor(far, cel){
    fahrenheit = (cel * 9/5) + 32;
    celsius = (far -32) * 5/9

        return `'fahrenheit para celsius ${celsius} \n Celsius para fahrenheit: ${fahrenheit}`
}

console.log(conversor(86, 30))

function imc(peso, altura){
    imc = peso / (altura*altura)

        if(imc < 18.5){
            console.log('abaixo do peso')
        }else if(imc < 25){
            console.log('normal')
        }else if(imc < 30){
            console.log('excesso de peso')
        }else{
            console.log(obeso)
        }
        return imc
}

console.log(imc(68,1.70));

function criarMsg(nome, idade, pais){
    return `meu nome é ${nome} tenho ${idade} anos e moro no ${pais}`
}

console.log(criarMsg('jefferson', '24', 'brasil'))

function divisivel(n1,n2){
    
    if (n1  %  n2 === 0){
       return  true
    }else{
        return false
    }

}

console.log(divisivel(10,2))


function calc( n1, n2, operador){
    switch(operador){
        case '+':
            return n1 + n2
            break;
            case '-':
            return n1 - n2
            break;
            case '/':
            return n1 / n2
            break;
            case '*':
            return n1 * n2
            break;
            default: console.log('error')
    }
}

console.log(calc(10,5,'*'))

function tarifas(idade, tipoPasse){
    let tarifa = 2.50
    let desconto = 0;
    if(idade < 6){
        return   tarifa = 0;
    }else if(tipoPasse === 'estudante'){
        let desconto = tarifa * 0.5;
        return  tarifa -= desconto;
    }else if (tipoPasse === 'idoso' && idade > 60){
        let desconto = tarifa * 0.3
        return  tarifa -= desconto
    }
    return tarifa;
}

console.log(tarifas(65,'idoso'))
    

function somaN(n){
   let acc = 0;

   for (let i = 1; i <= n; i++) {
    acc += i;
  }
   return acc
}

console.log(somaN(5))

function tabuada(numero){

    for(let i = 0; i <= 10; i++){
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
tabuada(6)

function numeroPrimo(num){
    for( let i = 2; i < num; i++){
        if(num % i === 0){ // verifica quantos divisores o numero tem
            return false
        }else{
            return true
        }
    }
}

console.log(numeroPrimo(2))

function estrelas(n) {
    for (let i = 2; i <= n; i += 2) {
      console.log('*'.repeat(i));
    }
  }

estrelas(15)

function fibo(n){
    let a = 0;
    let b = 1;
    let c;
    let fibonacci = [0, 1];
        
    for(let i = 1; i<=n; i++){
        c = a + b; //  1
        fibonacci.push(c);
        a = b;      //   5
        b = c;     //    8
    }
    return fibonacci
}

console.log(fibo(10))


function basicOp(operation, value1, value2)
{ 
    let resultado = 0;

      switch (operation){
          case '+':
            resultado = value1 + value2;
            break;
           case '-':
            resultado = value1 - value2;
            break;
           case '*':
            resultado = value1 * value2;
            break;
           case '/':
            resultado = value1 / value2;
            break;
          default: 
              return 0
      }
      return resultado;
}

console.log(basicOp('/', 6,2))


function faixaEtaria(idade){

    if(idade <= 12){
        console.log('Criança')
    }else if(idade > 12 && idade <= 17){
        console.log('adolescente')
    }else if(idade >= 18 && idade <= 59){
        console.log('adulto')
    }else{
        console.log('idoso')
    }
}

faixaEtaria(13)


function comparacao(n1,n2){
    if(n1 > n2){
        console.log(`${n1} maior que ${n2}`)
    }else if (n1 === n2){
        console.log('mesmo valor')
    }else if (n1 < n2){
        console.log(`${n1} menor que ${n2}`)
    }
}

comparacao(4,5)

