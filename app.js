const prompt = require('prompt-sync')();

let primeiroNumero = 0;
let segundoNumero = 0;
let resposta = 0;

calcular();

function calcular() { 
    primeiroNumero = Number(prompt('Digite o primeiro número: '));

    const operacao = prompt('Digite a operação desejada (+, -, *, /, %): ');

    segundoNumero = Number(prompt('Digite o segundo número: '));

    switch (operacao) {
        case '+':
            resposta = primeiroNumero + segundoNumero;
            break;
        case '-':
            resposta = primeiroNumero - segundoNumero;
            break;
        case '*':
            resposta = primeiroNumero * segundoNumero;
            break;
        case '/':
            if (segundoNumero === 0) {
                console.log('Erro: divisão por zero não é permitida.');
                return;
            }
            resposta = primeiroNumero / segundoNumero;
            break;
        case '%':
            resposta = (primeiroNumero * segundoNumero) / 100;
            break;
        default:
            console.log('Operação inválida.');
            return; 

        }
    console.log(`O resultado de ${primeiroNumero} ${operacao} ${segundoNumero} é ${resposta}.`);
}