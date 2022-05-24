const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const mediasDosAlunos = [10, 7, 9, 6];

let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

const exibiNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
        return listaDeNotasEAlunos[0][indice] + ",sua media é" + listaDeNotasEAlunos[1][indice]
    } else {
        return "Aluno não esá cadastrado"
    }
}

console.log(exibiNomeNota("antonio"))



// console.log(`${listaDeNotasEAlunos[0][0]}, sua media é
//  ${listaDeNotasEAlunos[1][0]}`);