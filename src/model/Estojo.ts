import { Produto } from "./Produto";

export class Mochila extends Produto{

// Atributo
   private _Tamanho: string;

// Método Construtor
    constructor(id: number, nome: string, tipo: number, preco: number, Tamanho: string) {
        super(id, nome, tipo, preco);
        this._Tamanho = Tamanho;
    }

// Métodos Get e Set

    public get Tamanho(): string {
        return this._Tamanho;
    }

    public set Tamanho(value: string) {
        this._Tamanho = value;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Tamanho: " + this._Tamanho);
    }
    
}