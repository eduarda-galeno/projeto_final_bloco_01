import { Produto } from "./Produto";

export class Caneta extends Produto{

// Atributo
   private _cor: string;

// Método Construtor
	constructor(id: number, nome: string, categoria: number, preco: number, cor: string) {
		super(id, nome, categoria, preco);
        this._cor = cor;
	}

// Métodos Get e Set

	public get cor(): string {
		return this._cor;
	}

	public set cor(value: string) {
		this._cor = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log("cor: " + this._cor);
    }
    
}