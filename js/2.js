function desafio2(){
    var iContador, qtdAlunos, nomeAluno, notaAluno, maxNota, maxNome;

    iContador = 1;
    maxNota = 0;

    qtdAlunos = prompt("Insira a quantidade de alunos: ")

    while(iContador <= qtdAlunos) {
        iContador++;
        nomeAluno = prompt("Digite o nome do aluno(a): ")
        notaAluno = prompt("Digite a nota do aluno(a): ")
        if (notaAluno > maxNota && nomeAluno != maxNome && qtdAlunos <= 20 && qtdAlunos >= 1) {
            maxNota = notaAluno;
            maxNome = nomeAluno;
        } else if (qtdAlunos > 20 || qtdAlunos < 1) {
            alert("Quantidade de alunos inválida! Insira uma quantia <= 20")
        } else {
            
        }
    }
    alert(`O nome do aluno com a melhor nota é: ${maxNome} e sua respectiva nota é: ${maxNota}`);
}