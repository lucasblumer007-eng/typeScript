export class Aluno {
    // 1. Atributos tipados com modificadores clássicos
    private matricula: string;
    public nome: string;
    private notaFinal: number;
    private id: number;

    // 2. Construtor: O "Portão de Entrada" do objeto
    constructor(nome: string, matricula: string, notaFinal: number) {
        this.id = Math.floor(Math.random() * 1000); // Exemplo de id
        this.nome = nome;
        this.matricula = matricula;
        this.notaFinal = this.calcularNotaFinal(notaFinal);
    }

    // 3. Método Privado: Só a própria classe pode usar
    private calcularNotaFinal(notaFinalDigitado: number): number {
        if (notaFinalDigitado < 0 || notaFinalDigitado > 20) {
            console.error("[ALERTA] nota nao pode ser menor que 0 ou maior que 20 'ERRO'.");
            return 0;
        }
        return notaFinalDigitado;

    }

    // 4. Método Público: Acesso liberado para o mundo externo
    public exibirRelatorio(): void {
        if (this.notaFinal < 0 || this.notaFinal > 20) {
            console.log("Fim do Programa");
        } else {
            console.log(`\n--- BOLETIM DO ALUNO ---`);
            console.log(`matricula: ${this.matricula}`);
            console.log(`Nome: ${this.nome}`);
            console.log(`notaFinal: ${this.notaFinal}`);
            console.log(`id: ${this.id}`);
            console.log(`------------------------\n`);
        }

    }
}