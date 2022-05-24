//exeplos de arrays com varis dimensões/matrizes

const idades = [30, 35, 28];
 const nomes = ["Ana", "Juliana", "Leonardo"];
 const faculdade = [false, true, true];

const funcionarios = [nomes,idades,faculdade];

if (funcionarios[2][0] == true){
    console.log('A funcionaria ${funcionarios[0][0]} tem a idade de ${funcionarios[1][0]} anos e faz faculdade')
} else {

    console.log('A funcionaria ${funcionarios[0][0]} tem a idade de ${funcionarios[1][0]} anos e não faz faculdade')
}