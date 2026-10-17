nome = prompt("Nome do aluno:");
nota1 = parseFloat(prompt("Nota 1:"));
nota2 = parseFloat(prompt("Nota 2:"));
nota3 = parseFloat(prompt("Nota 3:"));
nota4 = parseFloat(prompt("Nota 4:"));
media = (nota1 + nota2 + nota3 + nota4) / 4;
alert("Aluno: " + nome + "\nMédia: " + media.toFixed(2));
confirm("Deseja continuar?");