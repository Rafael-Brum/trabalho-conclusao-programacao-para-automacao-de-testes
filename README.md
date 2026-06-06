
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

## Pipeline CI/CD (GitHub Actions)
Este projeto implementa uma **Pipeline de Integração Contínua** que automatiza a execução de testes a cada mudança no código.

### 3 Formas de Execução
1. **PUSH (Automático)**: A pipeline dispara automaticamente ao fazer `git push` para a branch `master`.
2. **MANUAL (workflow_dispatch)**: Acesse GitHub → Actions → "CI - Testes Unitários" → "Run workflow" para executar sob demanda.
3. **SCHEDULE (Agendado)**: A pipeline executa automaticamente todos os dias às 08:00 UTC.

### Relatório de Testes
- O relatório visual (HTML) é gerado automaticamente pelo **Mochawesome** após cada execução.
- Acesse o relatório em: GitHub → Actions → (execução desejada) → Artifacts → `mochawesome-report`
- O arquivo `mochawesome.html` contém gráficos, tabelas e detalhes de cada teste executado.

### Armazenamento de Artefatos
- Os relatórios são armazenados como **artifacts** no GitHub por **30 dias**.
- Você pode baixar e analisar o histórico de testes a qualquer momento.
- Consulte [PIPELINE_CI_CD.md](PIPELINE_CI_CD.md) para documentação completa sobre CI/CD.

---
Desenvolvido para fins acadêmicos.
