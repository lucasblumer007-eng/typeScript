export class Funcionario {
    public nome: string;
    private idFuncionario: number;
    private salarioBase: number;
    constructor(nome: string, idFuncionario: number, salarioInicial: number) {
        this.nome = nome;
        this.idFuncionario = idFuncionario;

// Regra de negócio no construtor
if (salarioInicial < 820) {
console.log(`[ALERTA] Salário inicial inferior ao mínimo. Ajustado
para 820€.`);
this.salarioBase = 820;
} else {
this.salarioBase = salarioInicial;
}
}
public get salario(): number {
return this.salarioBase;
}
public aplicarAumento(percentagem: number): void {
    
if (percentagem > 0) {
    const aumento = this.salarioBase * (percentagem / 100);
    this.salarioBase += aumento;
    console.log(`[SUCESSO] Aumento aplicado. Novo salário: $
        {this.salarioBase}€.`);
} else {
console.error("[ERRO] A percentagem de aumento deve ser maior que zero!");
}
}
}