import readline from 'readline-sync';
import { Pessoa } from './src/models/Pessoa';
import { Automovel } from './src/models/Automovel';

console.log("=== SISTEMA DA CONCESSIONÁRIA (TYPESCRIPT) ===\n");

// --- 1. CADASTRO DO CLIENTE ---
console.log(">> Etapa 1: Dados do Cliente <<");
const nomeInput: string = readline.question("Nome do Cliente: ");
const cpfInput: string = readline.question("CPF do Cliente: ");
const profissaoInput: string = readline.question("Profissao: ");

// Instanciação segura: O TS exige a passagem dos 3 parâmetros!
const comprador = new Pessoa(nomeInput, cpfInput, profissaoInput);


// --- 2. CADASTRO DO CARRO ---
console.log("\n>> Etapa 2: Veiculo de Interesse <<");
const modeloInput: string = readline.question("Modelo do carro: ");
const marcaInput: string = readline.question("Marca do carro: ");
const precoInput: number = readline.questionFloat("Preco de venda (R$): ");

const veiculoDesejado = new Automovel(modeloInput, marcaInput, precoInput);


// --- 3. EXIBINDO OS RESULTADOS INICIAIS ---
console.log("\nProcessando o sistema...\n");
comprador.exibirRelatorio();
veiculoDesejado.exibirFichaTecnica();


// --- 4. TESTE DE ENCAPSULAMENTO NA PRÁTICA ---
console.log(">> Simulacao de Negociacao <<");
const tentativaDesconto: number = readline.questionFloat("O gerente tentou dar um desconto. Digite um valor negativo para testar o sistema: ");

// O Setter interceptará essa chamada e impedirá o preço negativo!
veiculoDesejado.preco = tentativaDesconto;

console.log("\nResumo Final da Venda:");
veiculoDesejado.exibirFichaTecnica();