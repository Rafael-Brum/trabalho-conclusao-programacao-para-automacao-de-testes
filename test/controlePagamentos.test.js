import { describe } from 'node:test'
import ServicoDePagamento from '../src/controlePagamentos.js'
import assert from 'node:assert'

describe('Classe de Serviço de Pagamentos', () => {
    it('Testar o fluxo completo de Pagar e Consultar pagamentos com apenas 1 pagamento', () =>{
        //Arrange
        const servicoDePagamento = new ServicoDePagamento();
        const codigoBarras = '0987-7656-3475';
        const empresa = 'Samar';
        const valor = 56.87;

        // Act
        servicoDePagamento.pagar(codigoBarras, empresa, valor);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento()
        console.log(ultimoPagamento);

        // Assert
        assert.equal(ultimoPagamento.codigoBarras, codigoBarras)
        assert.equal(ultimoPagamento.empresa, empresa)
        assert.equal(ultimoPagamento.valor, valor)
 
    })

    it('Testar o fluxo completo de Pagar e Consultar pagamentos com valor maior que 100 e verificando o atributo categoria com o valor cara', () =>{
        //Arrange
        const servicoDePagamento = new ServicoDePagamento();
        const codigoBarras = '0987-7656-3475';
        const empresa = 'Samar';
        const valor = 156.87;
        const categoriaEsperada = 'cara';

        // Act
        servicoDePagamento.pagar(codigoBarras, empresa, valor);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento()
        console.log(ultimoPagamento);

        // Assert
        assert.equal(ultimoPagamento.codigoBarras, codigoBarras)
        assert.equal(ultimoPagamento.empresa, empresa)
        assert.equal(ultimoPagamento.valor, valor)
        assert.equal(ultimoPagamento.categoria, categoriaEsperada)
 
    })

    describe('Testes da função de pagar', () => {
        it('Testar valor limite, quando valor for 100.01 deve ter a categoria com valor cara', ()=>{
            //Arrange
            const servicoDePagamento = new ServicoDePagamento();
            const codigoBarras = '0987-7656-3475';
            const empresa = 'Samar';
            const valor = 100.01;
            const categoriaEsperada = 'cara';

            // Act
            servicoDePagamento.pagar(codigoBarras, empresa, valor);
            const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento()
            console.log(ultimoPagamento);

            // Assert
            assert.equal(ultimoPagamento.codigoBarras, codigoBarras)
            assert.equal(ultimoPagamento.empresa, empresa)
            assert.equal(ultimoPagamento.valor, valor)
            assert.equal(ultimoPagamento.categoria, categoriaEsperada)
        })

        it('Testar valor limite, quando valor for 100.00 não deve ter categoria', ()=>{
            //Arrange
            const servicoDePagamento = new ServicoDePagamento();
            const codigoBarras = '0987-7656-3475';
            const empresa = 'Samar';
            const valor = 100.00;

            // Act
            servicoDePagamento.pagar(codigoBarras, empresa, valor);
            const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento()
            console.log(ultimoPagamento);

            // Assert
            assert.equal(ultimoPagamento.codigoBarras, codigoBarras)
            assert.equal(ultimoPagamento.empresa, empresa)
            assert.equal(ultimoPagamento.valor, valor)
            assert.equal(ultimoPagamento.categoria, undefined, 'A propriedade categoria não deveria existir nesse objeto')
        })

        it('Após multiplos pagamentos, retornar o último pagamento', ()=>{
            //Arrange
            const servicoDePagamento = new ServicoDePagamento();
            const pagamentos = [{codigoBarras : '0987-7656-3475', empresa : 'Samar', valor : 100.00},
                                {codigoBarras : '9987-7656-3475', empresa : 'JL', valor : 101.00}
            ]
            const categoriaEsperada = 'cara'
            // Act
            servicoDePagamento.pagar(pagamentos[0].codigoBarras, pagamentos[0].empresa, pagamentos[0].valor);
            servicoDePagamento.pagar(pagamentos[1].codigoBarras, pagamentos[1].empresa, pagamentos[1].valor);
            const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento()
            console.log(ultimoPagamento);

            // Assert
            assert.equal(ultimoPagamento.codigoBarras, pagamentos[1].codigoBarras)
            assert.equal(ultimoPagamento.empresa, pagamentos[1].empresa)
            assert.equal(ultimoPagamento.valor, pagamentos[1].valor)
            assert.equal(ultimoPagamento.categoria, categoriaEsperada)
        })
    })
    
    describe('Testes da função de consultarUltimoPagamento', () => {
        it('Sem nenhum pagamento, ao consultar não deve retornar pagamentos', ()=>{
            //Arrange
            const servicoDePagamento = new ServicoDePagamento();

            // Act
            const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento()
            console.log(ultimoPagamento);

            // Assert
            assert.equal(ultimoPagamento, undefined, 'Deveria ser undefined para lista vazia')
        })
    })
})