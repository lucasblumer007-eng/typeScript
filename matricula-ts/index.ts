import readline from 'readline-sync';
import { Aluno } from './src/models/Aluno';

console.log("=== SISTEMA DE NOTAS (TYPESCRIPT) ===\n");

const nomeInput: string = readline.question("Nome do aluno: ");
const matriculaInput: string = readline.question("Matricula do aluno: ");
const notafinalDigitadoInput: number = Number(readline.question("nota do aluno: "));

// Instanciação segura: O TS exige a passagem dos 3 parâmetros!
const obj = new Aluno(nomeInput, matriculaInput, notafinalDigitadoInput);

obj.exibirRelatorio();