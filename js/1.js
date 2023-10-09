function desafio1() {
    var vezes, i, qtd, max;

    max = 0;
    i = 1;

    var vezes = prompt("Digite a quantidade de músicas: ");

    while (i <= vezes) {
        qtd = prompt("Vezes que ela foi tocada: ");
        i++;
        if (qtd > max) {
            max = qtd;
        } else if (vezes > 100) {
            prompt("Quantidade inválida de músicas!");
        } else {
            
        }
    }
    alert(`O música mais tocada teve:  ${max} reproduções`);
}