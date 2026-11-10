
let somaIdade = 0;
let maiorIdade = 0;
let menorIdade = 1000;

let pessimo = 0;
let otimoBom = 0;

let mulheres = 0;
let homens = 0;
let outros = 0;

for (let i = 1; i <= 45; i++) {

    let idade = parseInt(prompt("Digite a idade da pessoa " + i));
    let sexo = prompt("Digite o sexo: feminino, masculino ou outros");
    let opiniao = parseInt(prompt("Digite a opinião: 4-ótimo, 3-bom, 2-regular, 1-péssimo"));

    somaIdade = somaIdade + idade;

    if (idade > maiorIdade) {
        maiorIdade = idade;
    }

    if (idade < menorIdade) {
        menorIdade = idade;
    }

    if (opiniao == 1) {
        pessimo++;
    }

    if (opiniao == 4 || opiniao == 3) {
        otimoBom++;
    }

    if (sexo == "f") {
        mulheres++;
    } else if (sexo == "m") {
        homens++;
    } else {
        outros++;
    }
}

let media = somaIdade / 45;
let porcentagem = (otimoBom / 45) * 100;


document.getElementById("resultado").innerHTML =
    "<p>Média das idades: " + media.toFixed(2) + "</p>" +

    "<p>Pessoa mais velha: " + maiorIdade + "</p>" +

    "<p>Pessoa mais nova: " + menorIdade + "</p>" +

    "<p>Respostas péssimo: " + pessimo + "</p>" +

    "<p>Porcentagem de ótimo e bom: " + porcentagem.toFixed(2) + "%</p>" +

    "<p>Mulheres: " + mulheres + "</p>" +

    "<p>Homens: " + homens + "</p>" +

    "<p>Outros: " + outros + "</p>";
