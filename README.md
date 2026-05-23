
# trabalho-conclusao-programacao-para-automacao-de-testes

## Descrição do Projeto
Este projeto é o Trabalho de Conclusão da disciplina de Programação para Automação de Testes. O objetivo é implementar uma solução prática em JavaScript para simular um serviço de controle de pagamentos, além de aplicar testes automatizados para garantir a qualidade do código.

## Problema Resolvido
O projeto resolve o problema de registrar e consultar pagamentos realizados para diferentes empresas. Cada pagamento possui as seguintes propriedades:
- **Código de Barras**
- **Empresa**
- **Valor**
- **Categoria** (opcional: 'cara' se o valor for maior que 100.00)

O serviço permite:
- Realizar um pagamento, categorizando-o automaticamente se o valor for alto.
- Consultar o último pagamento realizado.

## Tecnologias Utilizadas
- **JavaScript (ES6+)**: Linguagem principal do projeto.
- **Node.js**: Ambiente de execução dos testes.
- **Mocha**: Framework de testes utilizado para escrever e executar os testes automatizados.
- **Mochawesome**: Gerador de relatórios em HTML para os testes executados com o Mocha.

## Estrutura do Projeto
- `src/controlePagamentos.js`: Implementação da classe `ServicoDePagamento` responsável pela lógica de pagamentos.
- `test/controlePagamentos.test.js`: Testes automatizados para validar o comportamento da classe de serviço.
- `mochawesome-report/`: Relatórios gerados automaticamente após a execução dos testes.

## Testes Realizados
Os testes cobrem os seguintes cenários:
- Realizar e consultar um pagamento simples.
- Realizar pagamento com valor acima de 100.00 e verificar a categoria 'cara'.
- Testar valores limite para a categoria.
- Garantir que pagamentos com valor igual a 100.00 não tenham categoria.
- Consultar o último pagamento após múltiplos pagamentos.
- Consultar quando não há pagamentos registrados (deve retornar `undefined`).

## Como Executar os Testes
1. Instale as dependências:
	```bash
	npm install
	```
2. Execute os testes:
	```bash
	npm test
	```
3. O relatório será gerado na pasta `mochawesome-report/`.

---
Desenvolvido para fins acadêmicos.
