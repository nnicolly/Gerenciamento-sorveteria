# Sorvetes App – Sistema de Gerenciamento de Sorvetes

Projeto feito para a disciplina de Programação Visual e Autoria Web; Consiste em uma aplicação web para gerenciamento de sorvetes de uma sorveteria.  
Permite cadastrar, listar, filtrar, editar e excluir sabores, com uma interface simples de painel administrativo.

O projeto é dividido em:

- **Frontend:** Angular, usando Angular Material para a interface.
- **Backend:** `json-server`, simulando uma API REST a partir de um arquivo `db.json`.

---

## Tecnologias utilizadas

**Frontend**

- Angular 20
- Angular Material
- TypeScript
- HTML/CSS

**Backend**

- Node.js
- json-server

---

## Funcionalidades

- Listagem de sorvetes com:
  - Nome
  - Categoria
  - Preço
- Filtro por nome, categoria ou descrição.
- Paginação e ordenação (sort) na tabela.
- Cadastro de novos sorvetes.
- Edição de sorvetes existentes.
- Exclusão com confirmação.
- Feedback visual com snackbar para sucesso ou erro nas operações.
- Layout em formato de dashboard:
  - Menu lateral com navegação.
  - Topbar com título e usuário.
  - Card central com tabela de sorvetes.