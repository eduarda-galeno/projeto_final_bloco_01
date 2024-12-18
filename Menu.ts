import readlinesync = require("readline-sync")
import { colors } from "./src/util/Colors"
import { ProdutoController } from "./src/controller/ProdutoController"
import { Caneta } from "./src/model/Caneta"
import { Mochila } from "./src/model/Mochila"

export function main(){
    let opcao, id, categoria, preco: number
    let nome, cor, tamanho: string
    let categoriaProduto = ['Caneta', 'Mochila']

    const produtoController = new ProdutoController()



    while (true) {
        console.log(colors.fg.magenta, "-----------------------------------------------------")
        console.log("                                                     ")
        console.log("                 PAPELARIA ARCO-ÍRIS                 ")
        console.log("                                                     ")
        console.log("-----------------------------------------------------")
        console.log("                                                     ")
        console.log("          1 - Criar Produto                          ")
        console.log("          2 - Listar todos os Produtos               ")
        console.log("          3 - Buscar Produto por Id                  ")
        console.log("          4 - Atualizar Dados do Produto             ")
        console.log("          5 - Apagar Produto                         ")
        console.log("          6 - Sair                                   ")
        console.log("                                                     ")
        console.log("-----------------------------------------------------")

        console.log("\nEntre com a opção desejada:\n", colors.reset)
        opcao = readlinesync.questionInt("")

    if (opcao === 6) {
        console.log(colors.fg.crimson, "\nPapelaria Arco-Íris - Preço justo que cabe no seu bolso!", colors.reset)
        sobre()
        process.exit(0)
    }

        switch (opcao) {
        case 1:
            console.log(colors.fg.cyan, "\n\nCriar Produto\n\n", colors.reset)

            nome = readlinesync.question(`${colors.fg.cyan}\nDigite o Nome do Produto: \n${colors.reset}`)

				categoria = readlinesync.keyInSelect(categoriaProduto, "", {cancel: false}) + 1

				preco = readlinesync.questionFloat(`${colors.fg.cyan}\nDigite o preco:  \n${colors.reset}`)

                switch (categoria) {
                    case 1:
                        cor = readlinesync.question(`${colors.fg.cyan}\nDigite a cor da caneta:  \n${colors.reset}`)
                            produtoController.cadastrar(new Caneta(produtoController.gerarId(), nome, categoria, preco, cor))
                        break
                    case 2: 
                        tamanho = readlinesync.question(`${colors.fg.cyan}\nDigite o tamanho da mochila (Pequena ou Grande)  \n${colors.reset}`)
                            produtoController.cadastrar(new Mochila(produtoController.gerarId(), nome, categoria, preco, tamanho))
                        break
                }

                keyPress()
                break

        case 2: 
                console.log(colors.fg.cyan, "\nListar todos os produtos\n", colors.reset)
                produtoController.listarTodas()

                keyPress()
                break
        case 3:
                console.log(colors.fg.cyan, "\nConsultar dados do Produto por Id\n", colors.reset)
                id = readlinesync.questionInt(`${colors.fg.cyan}\nDigite o Id: \n${colors.reset}`)
                produtoController.procurarPorId(id)

                keyPress()
                break
        case 4: 
                console.log(colors.fg.cyan,"\nAtualizar os dados do Produto\n", colors.reset)
                id = readlinesync.questionInt(`${colors.fg.cyan}\nDigite o Id do Produto: \n${colors.reset}`)
                let produto = produtoController.buscarNoArray(id)
                if (produto !== null) {
					nome = readlinesync.question(`${colors.fg.cyan}\nDigite o Nome do Produto: \n${colors.reset}`)

					categoria = produto.categoria

					preco = readlinesync.questionFloat(`${colors.fg.cyan}\nDigite o preco:  \n${colors.reset}`)

                    switch (categoria){
                        case 1: 
                            cor = readlinesync.question(`${colors.fg.cyan}\nDigite a cor da caneta:  \n${colors.reset}`)
                            produtoController.atualizar(new Caneta(id, nome, categoria, preco, cor))

                            break
                        case 2: 
                            tamanho = readlinesync.question(`${colors.fg.cyan}\nDigite o tamanho da mochila (Pequena ou Grande)  \n${colors.reset}`)
                            produtoController.atualizar(new Mochila(id, nome, categoria, preco, tamanho))
                            break
                    }
                }else console.log(colors.fg.red, "\nProduto não Encontrado!\n", colors.reset)

                keyPress()
                break
        
        case 5: 
                console.log(colors.fg.red, "\nApagar um Produto\n", colors.reset)
                id = readlinesync.questionInt(`${colors.fg.cyan}\nDigite o Id: \n${colors.reset}`)
				produtoController.deletar(id)

                keyPress()
                break
            default:
                console.log(colors.fg.red, "\nOpção Inválida\n", colors.reset)

                keyPress()
                break


        }


    }
}

function sobre(): void {
	console.log(colors.fg.cyan, "\n------------------------------------------------------")
	console.log("Projeto Desenvolvido por: Eduarda")
	console.log("https://github.com/eduarda-galeno/projeto_final_bloco_01")
    console.log("Linkedin: https://www.linkedin.com/in/eduardagaleno/")
	console.log("--------------------------------------------------------", colors.reset )
}

function keyPress(): void {
	console.log(colors.fg.blue, "\nPressione enter para continuar...", colors.reset)
	readlinesync.prompt()
}

main()