# Projeto Front End Angular
Este projeto front-end foi desenvolvido utilizando Angular, com o objetivo de consumir uma API criada com ASP.NET. O Angular Material foi utilizado para estilizar a interface do usuário. O projeto consiste em duas telas principais: uma para exibir os departamentos e outra para exibir os funcionários associados a cada departamento.
## Funcionalidades Principais
Ambas as telas, de departamentos e funcionários possuem as mesmas características e funcionalidades, com diferença de que, na tela de Funcionários, exibe o Nome, RG e Foto.
1.  **Listagem de Departamentos:**  
- Exibe uma tabela com os departamentos disponíveis. Nesta tabela, são exibidos os dados de: nome, sigla e situação do departamento (se está ativo ou inativo).
2.  **Cadastro de Departamento:**
- Um componente que permite ao usuário cadastrar um novo departamento colocando seu nome e sigla.
3.  **Edição de Departamento:**
- Um componente que permite ao usuário editar os dados de um departamento.
4.  **Desativar e Reativar Departamento:**
- Dentro da própria tabela, existem dois botões, um que desativa e outro que reativa o departamento. Importante mencionar que, apenas os departamentos desativados possuem a opção de reativar e apenas os ativos possuem a opção de desativar. Na coluna de "situação", os ativos são representados como tal por uma bola verde e os inativos por uma vermelha.
5. **Deletar Departamento:**
- Nessa opção, um novo componente que permite ao usuário rever os dados do departamento e realizar, se assim quisto, a exclusão total do departamento e seus registros.

## Tecnologias Utilizadas
- Angular
- Angular Material

