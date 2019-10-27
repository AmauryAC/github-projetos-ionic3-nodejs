var pessoa = {};

pessoa.nome = "Aluno";
pessoa.sobrenome = "Udemy";

function imprimirPessoa() {
    return `${pessoa.nome} - ${pessoa.sobrenome}.`;
}

console.log(imprimirPessoa());