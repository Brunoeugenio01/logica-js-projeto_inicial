alert('Bem vindo ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 30 + 1);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 30');
    // se o chute for igual ao número secreto
    if ( numeroSecreto ==  chute) {
        break;
    } else {
        if ( chute > numeroSecreto) {
            alert('O número secreto é menor que ' + chute);
        } else {
            alert('O numero secreto é maior que ' + chute);
        }
        // tentativas = tentativas + 1
        tentativas++;
    }

}
let palavraTentativa = tentativas > 1 ? ' tentativas' : ' tentativa' ;
alert('Parabéns, você acertou! ' + numeroSecreto + ' com ' + tentativas + palavraTentativa + '.');

// if (tentativas > 1) {
//     alert('Parabéns, você acertou! ' + numeroSecreto + ' com ' + tentativas + ' tentativas');
// } else {
//     alert('Parabéns, você acertou! ' + numeroSecreto + ' com ' + tentativas + ' tentativa');
// }