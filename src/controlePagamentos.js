  /* 
  Crie uma classe que possua dois métodos: um para realizar pagamento e outro para consultar o 
  último pagamento. Pagamentos serão armazenados como objetos Javascript dentro de uma lista de 
  pagamentos. Cada pagamento terá as propriedades: Código de Barras, Empresa e Valor. Quando um 
  pagamento for realizado e o valor for maior que 100.00, o pagamento também terá a propriedade 
  categoria como 'cara', caso contrário, a propriedade categoria ficará como 'padrão'. O método 
  de consultar trará apenas o último pagamento.
  */
  
  export default class ServicoDePagamento{
    #pagamentos

    constructor(){
        this.#pagamentos = []
    }

    pagar(codigoBarras,empresa,valor){
        let pagamento 
        if(valor > 100.00){
            this.#pagamentos.push({
                codigoBarras: codigoBarras,
                empresa: empresa,
                valor: valor,
                categoria : "cara"
            })
        }else{
            this.#pagamentos.push({
                codigoBarras: codigoBarras,
                empresa: empresa,
                valor: valor,
            })
        }
    }

    consultarUltimoPagamento(){
        return this.#pagamentos.at(-1)
    }

  }
  
