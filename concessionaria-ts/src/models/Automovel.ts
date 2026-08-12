export class Automovel{
    public id: number;
    public modelo: string;
    public marca: string;

    // Atributo privado com '_' na frente para não conflitar com get/set
    private _preco: number;

    constructor(modelo: string, marca: string, precoInicial: number) {
        this.id = Math.floor(Math.random() * 1000);
        this.modelo = modelo;
        this.marca = marca;
        this._preco = 0;

        // Aplica a validação logo no nascimento do objeto
        this.validarEDefinirPreco(precoInicial);
    }

    // GETTER: Permite que arquivos externos LEIAM o valor privado
    public get preco(): number {
        return this._preco;
    }

    // SETTER: Protege a ALTERAÇÃO do valor passando por uma regra
    public set preco(novoPreco: number) {
        this.validarEDefinirPreco(novoPreco);
    }

    // Regra de negócio encapsulada
    private validarEDefinirPreco(valor: number): void {
        if (valor <= 0) {
            console.error(`[ERRO DE NEGÓCIO] Tentativa de definir preço inválido (R$ ${valor}). Preço mantido.`);
            if (this._preco === 0) this._preco = 0.01; // Evita falha na criação inicial
            return;
        }
        this._preco = valor;
        console.log(`[SISTEMA] Preço atualizado com sucesso para R$ ${valor.toFixed(2)}.`);
    }

    public exibirFichaTecnica(): void {
        console.log(`\n--- FICHA TÉCNICA: VEÍCULO ---`);
        console.log(`ID: ${this.id}`);
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Preço: R$ ${this._preco.toFixed(2)}`);
        console.log(`------------------------------\n`);
    }
}