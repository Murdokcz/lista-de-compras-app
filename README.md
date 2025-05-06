# Lista de Compras

## Visão Geral do Projeto
**Lista de Compras** é uma aplicação web projetada para ajudar os usuários a criar, gerenciar e acompanhar suas listas de compras de forma eficiente. Os usuários podem categorizar itens, buscar produtos específicos e salvar suas seleções no armazenamento local, permitindo fácil acesso e modificação.

## Instalação
Para executar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd lista-de-compras
   ```

2. **Abra o arquivo `index.html` em um navegador web.**
   Não há dependências adicionais ou configurações necessárias, pois o projeto utiliza links CDN para estilos e scripts.

## Uso
- **Alternar abas:** Use os botões "Criar Lista" e "Sua Lista" para navegar entre a criação da lista de compras e a visualização da lista atual.
- **Selecionar categoria:** Escolha uma categoria no menu suspenso para visualizar os itens associados a essa categoria.
- **Buscar item:** Utilize a barra de busca para filtrar os itens dinamicamente enquanto digita.
- **Gerenciar itens:** Selecione os itens que deseja adicionar à sua lista de compras. Após a seleção, clique no botão "Salvar Item" para adicionar o item selecionado.
- **Visualizar lista de compras:** Sua lista de compras exibirá os itens salvos, com opções para excluir itens individualmente ou limpar toda a lista.

## Funcionalidades
- Filtragem dinâmica de itens com base na categoria selecionada e no termo de busca.
- Capacidade de adicionar e gerenciar itens na lista de compras.
- Cálculo em tempo real do valor total.
- Armazenamento persistente usando Local Storage para manter os dados da lista entre sessões.
- Interface amigável utilizando Tailwind CSS para estilização.

## Dependências
Este projeto utiliza as seguintes bibliotecas externas:
- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)

Não há pacotes adicionais definidos em `package.json`, pois este projeto é uma aplicação simples em HTML/CSS/JavaScript.

## Estrutura do Projeto
```
/
├── index.html        # Arquivo HTML principal contendo a estrutura da aplicação
├── styles.css        # Estilos CSS personalizados para a aplicação
└── scripts.js        # Arquivo JavaScript para interatividade e funcionalidades
```

- **`index.html`**: Interface principal da aplicação de lista de compras.
- **`styles.css`**: Contém estilos personalizados que sobrescrevem o Tailwind CSS padrão quando necessário.
- **`scripts.js`**: Gerencia toda a lógica da aplicação, incluindo interações do usuário e gerenciamento de itens.
