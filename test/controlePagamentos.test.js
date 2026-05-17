import { describe } from 'node:test'
import ServicoDePagamento from '../src/controlePagamentos.js'
import assert from 'node:assert'

describe('Classe de Serviço de Pagamentos', () => {
    it('Testar o fluxo completo de Pagar e Consultar pagamentos', () =>{
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
})