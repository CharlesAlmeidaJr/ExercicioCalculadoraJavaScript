function calculadora(){

    const operacao = Number(prompt('Escolha a operação:\n1 - soma\n2 - subtração\n3 - multiplicação\n4 - divisão real\n5 - divisão inteira\n6 - potenciação'))

    if(!operacao || operacao >= 7){
        alert('Erro - operação inválida')
        calculadora()
    } else {

        let n1 = Number(prompt('Insira o primeiro valor:'))
        let n2 = Number(prompt('Insira o primeiro valor:'))
        let resultado;

        if(!n1 || !n2){
            alert('Erro - valor inválido')
            calculadora()
        } else {

            function soma(){
                resultado = n1 + n2
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao()
            }

            function subtracao(){
                resultado = n1 - n2
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao()
            }

            function multiplicacao(){
                resultado = n1 * n2
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao()
            }

            function divisaoReal(){
                resultado = n1 / n2
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao()
            }

            function divisaoInteira(){
                resultado = n1 % n2
                alert(`${n1} % ${n2} = ${resultado}`)
                novaOperacao()
            }

            function potenciacao(){
                resultado = n1 ** n2
                alert(`${n1} elevado à ${n2} potência é igual a ${resultado}`)
                novaOperacao()
            }

            function novaOperacao(){
                let opcao = Number(prompt('Deseja fazer outra operação?\n1 - Sim\n2 - Não'))

                switch(opcao){
                    case 1:
                        calculadora()
                    break
                    case 2:
                        alert('Até mais!')
                    break
                    default:
                        alert('Opção inválida!')
                        novaOperacao()
                }
            }

            switch(operacao){
                case 1:
                    soma()
                break;
                case 2:
                    subtracao()
                break;
                case 3:
                    multiplicacao()
                break;
                case 4:
                    divisaoReal()
                break;
                case 5:
                    divisaoInteira()
                break;
                case 6:
                    potenciacao()
                break;
            }
        }

            
    }

    

}

calculadora()