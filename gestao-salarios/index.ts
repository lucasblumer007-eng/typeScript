import { Funcionario } from './Funcionario';
console.log("=== EXERCÍCIO 1: RH PROFCAFE ===");
const novoColaborador = new Funcionario("João Silva", 101, 700);
console.log(`Salário atual do ${novoColaborador.nome}: ${novoColaborador.salario}
€`);
// novoColaborador.salarioBase = 5000; // ERRO: O TypeScript bloqueia!
novoColaborador.aplicarAumento(10);



