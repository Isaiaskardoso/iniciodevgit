const nomes = ["Ana", "Marcos", "Maria", "Mauri"];
const notas = [7, 4.5, 8, 7.5];

const reprevados = nomes.filter ((_, indice) => notas
[indice] < 5);

console.log(`reprovados: ${reprevados}`);

