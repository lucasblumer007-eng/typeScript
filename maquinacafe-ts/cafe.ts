export class cafe {
public modelo: string;
private nivelAguaMl: number;
private nivelCafeGramas: number;
constructor(modelo: string) {
this.modelo = modelo;
this.nivelAguaMl = 0;
this.nivelCafeGramas = 0;
}
public abastecer(agua: number, cafe: number): void {
this.nivelAguaMl += agua;
this.nivelCafeGramas += cafe;
console.log(`[MÁQUINA] +${agua}ml de água e +${cafe}g de café.`);
}
public tirarCafe(): void {
console.log("A processar pedido de café...");
if (this.nivelAguaMl >= 200 && this.nivelCafeGramas >= 30) {
this.nivelAguaMl -= 200;
this.nivelCafeGramas -= 30;
console.log(" Café pronto! Retire a sua chávena.");
} else {
console.error(`[ERRO] Ingredientes insuficientes! Água: $
{this.nivelAguaMl}ml | Café: ${this.nivelCafeGramas}g`);
}
}
public get status(): string {
return `Estado (${this.modelo}): Água -> ${this.nivelAguaMl}ml | Café ->
${this.nivelCafeGramas}g`;
}
}
