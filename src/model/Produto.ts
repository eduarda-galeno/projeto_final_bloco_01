export abstract class Produto{

    // Atributos
    private _id: number;
    private _nome: string;
    private _categoria: number;
    private _preco: number;

    // Método Construtor
	constructor(id: number, nome: string, categoria: number, preco: number) {
		this._id = id;
		this._nome = nome;
		this._categoria = categoria;
		this._preco = preco;
	}

    //Métodos Get e Set

	public get id(): number {
		return this._id;
	}

	public get nome(): string {
		return this._nome;
	}

	public get categoria(): number {
		return this._categoria;
	}

	public get preco(): number {
		return this._preco;
	}

	public set id(value: number) {
		this._id = value;
	}

	public set nome(value: string) {
		this._nome = value;
	}

	public set categoria(value: number) {
		this._categoria = value;
	}

	public set preco(value: number) {
		this._preco = value;
	}

    public visualizar(): void {

        let categoria: string = "";

        switch (this._categoria) {
            case 1:
                categoria = "Caderno";
                break;
            case 2:
                categoria = "Estojo";
                break;
        }

        console.log("\n\n-----------------------------------------------------");
        console.log("Dados do Produto:");
        console.log("---------------------------------------------------------");
        console.log("Id: " + this._id);
        console.log("Nome: " + this._nome);
        console.log("Categoria: " + this._categoria);
        console.log("Preço: R$ " + this._preco.toFixed(2));

    }
    
}