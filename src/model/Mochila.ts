import { Produto } from "./Produto";

export class Mochila extends Produto{

// Atributo
   private _tamanho: string;

// Método Construtor
    constructor(id: number, nome: string, categoria: number, preco: number, tamanho: string) {
        super(id, nome, categoria, preco);
        this._tamanho = tamanho;
    }

// Métodos Get e Set

    public get tamanho(): string {
        return this._tamanho;
    }

    public set tamanho(value: string) {
        this._tamanho = value;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("tamanho: " + this._tamanho);
    }
    
}