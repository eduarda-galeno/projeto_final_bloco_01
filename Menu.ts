import readlinesync = require('readline-sync')

export function main(){
    let opcao: number



while (true) {
    console.log('-----------------------------------------------------')
    console.log('                                                     ')
    console.log('                 PAPELARIA ARCO-ÍRIS                 ')
    console.log('                                                     ')
    console.log('-----------------------------------------------------')
    console.log('                                                     ')
    console.log('            1 - Criar Produto                        ')
    console.log('            2 - Listar todos os Produtos             ')
    console.log('            3 - Buscar Produto por Id                ')
    console.log('            4 - Atualizar Dados do Produto           ')
    console.log('            5 - Apagar Produto                       ')
    console.log('            6 - Sair                                 ')
    console.log('                                                     ')
    console.log('-----------------------------------------------------')

    console.log('Entre com a opção desejada: ')
	opcao = readlinesync.questionInt('')

    if (opcao === 6) {
        console.log('\nPapelaria Arco-Íris - Preço justo que cabe no seu bolso!')
        sobre()
        process.exit(0)
    }

    switch (opcao) {
        case 1:
            console.log("\n\nCriar Produto\n\n")

            break
        case 2:
            console.log("\n\nListar todos os Produtos\n\n")

            break
        case 3:
            console.log("\n\nConsultar dados do Produto - por Id\n\n")

            break
        case 4:
            console.log("\n\nAtualizar os dados do Produto\n\n")

            break
        case 5:
            console.log("\n\nApagar um Produto\n\n")


            break
        default:
            console.log("\nOpção Inválida\n")
            keyPress();
            break
    }


    }
}

function sobre(): void {
	console.log('\n------------------------------------------------------')
	console.log('Projeto Desenvolvido por: Eduarda')
	console.log('https://github.com/eduarda-galeno/projeto_final_bloco_01')
    console.log('Linkedin: https://www.linkedin.com/in/eduardagaleno/')
	console.log('--------------------------------------------------------')
}

function keyPress(): void {
	console.log('\nPressione enter para continuar...')
	readlinesync.prompt()
}

main()