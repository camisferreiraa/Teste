//Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

function contarLetraA(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        
        if (str[i] === 'a' || str[i] === 'A') {
            count++;
        }
    }

    if (count > 0) {
        return `A letra 'a' (maiúscula ou minúscula) aparece ${count} vezes na string.`;
    } else {
        return "A letra 'a' não foi encontrada na string.";
    }
}

// Exemplo de uso
const texto = "Eu amo codar";
console.log(contarLetraA(texto));
