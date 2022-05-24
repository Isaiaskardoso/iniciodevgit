const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara',
'marjorie', 'Guilherme', 'Alice', 'Fabiana', 'Andre',
'Carlos', 'Paulo', 'Bia', 'Vivian', 'isabela', 'Vinícios',
'Renan', 'Renata', 'Daisy', 'Camila']

console.log("tamanho da array:", nomes.length/2)
                          //0, 10 para no 9
const sala1 = nomes.slice(0, nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log(`alunos da sala 1: ${sala1}`)
console.log(`alunos da sala 2: ${sala2}`)