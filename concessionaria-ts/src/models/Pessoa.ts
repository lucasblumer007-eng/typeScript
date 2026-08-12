export class Pessoa{
    // 1. Atributos tipados com modificadores clássicos
    private id: number;
    public nome: string;
    private cpf: string;
    public profissao: string;

    // 2. Construtor: O "Portão de Entrada" do objeto
    constructor(nome: string, cpf: string, profissao: string) {
        this.id = Math.floor(Math.random() * 10000); // Gera ID automático
        this.nome = nome;
        this.cpf = this.validarCpf(cpf); // Regra de negócio na criação
        this.profissao = profissao;
    }

    // 3. Método Privado: Só a própria classe pode usar
    private validarCpf(cpfDigitado: string): string {
        if (cpfDigitado.length < 11) {
            console.error("[ALERTA] CPF incompleto! Salvando como 'PENDENTE'.");
            return "PENDENTE";
        }
        return cpfDigitado;
    }

    // 4. Método Público: Acesso liberado para o mundo externo
    public exibirRelatorio(): void {
        console.log(`\n--- FICHA DO CLIENTE ---`);
        console.log(`ID: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Profissão: ${this.profissao}`);
        console.log(`------------------------\n`);
    }
}