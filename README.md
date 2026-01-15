# Unicarrs

## Descrição do Projeto
O Unicarrs é um sistema de gerenciamento de estoque desenvolvido em Java com Spring Boot.
O objetivo do sistema é permitir o controle de produtos, quantidades e status, auxiliando
na organização e no acompanhamento do estoque de forma simples e eficiente.

## Escopo Inicial
O escopo inicial do projeto contemplava apenas o CRUD básico de itens de estoque, permitindo
criar, listar, atualizar e remover produtos.

## Metodologia Ágil Utilizada
Foi adotada a metodologia Kanban, utilizando o GitHub Projects para organizar as tarefas
nas colunas "A Fazer", "Em Progresso" e "Concluído", permitindo melhor visualização do
andamento do projeto.

## Controle de Qualidade
O projeto utiliza GitHub Actions como ferramenta de Integração Contínua (CI). A cada commit
realizado no repositório, o pipeline executa automaticamente os testes unitários com Maven
e JUnit, garantindo maior confiabilidade e qualidade do código.

## Mudança de Escopo
Durante o desenvolvimento, foi identificada a necessidade de adicionar um campo de status
(ATIVO/INATIVO) aos itens de estoque, permitindo um controle mais eficiente sobre produtos
ativos no sistema. Essa mudança foi registrada no Kanban e implementada de forma incremental,
seguindo os princípios das metodologias ágeis.

## Como Executar o Projeto
1. Clonar o repositório
2. Abrir o projeto no IntelliJ IDEA
3. Executar o comando `mvn test` ou utilizar o Maven do IntelliJ
4. Executar a aplicação pela classe principal do Spring Boot
