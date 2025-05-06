
Built by https://www.blackbox.ai

---

# Lista de Compras

## Project Overview
**Lista de Compras** is a web application designed to help users create, manage, and track their shopping lists efficiently. Users can categorize items, search for specific products, and save their selections to local storage, allowing for easy access and modification.

## Installation
To run the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd lista-de-compras
   ```

2. **Open the `index.html` file in a web browser.**
   There are no additional dependencies or setup required since the project uses CDN links for styles and scripts.

## Usage
- **Switch Tabs:** Use the "Criar Lista" and "Sua Lista" buttons to navigate between the creation of a shopping list and viewing the current shopping list.
- **Select Category:** Choose a category from the dropdown menu to view items associated with that category.
- **Search Item:** Use the search bar to filter items dynamically as you type.
- **Manage Items:** Select items to be added to your shopping list. After selection, click the "Salvar Item" button to add the selected item.
- **View Shopping List:** Your shopping list will display items you have saved along with the option to delete individual items or clear the entire list.

## Features
- Dynamic item filtering based on selected category and search term.
- Ability to add and manage shopping list items.
- Real-time total price calculation.
- Persistent storage using Local Storage to retain shopping list data across sessions.
- User-friendly interface utilizing Tailwind CSS for styling.

## Dependencies
This project relies on the following external libraries:
- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)

No additional packages are defined in `package.json` as this project is a simple HTML/CSS/JavaScript application.

## Project Structure
```
/
├── index.html        # Main HTML file containing the structure of the application
├── styles.css        # Custom CSS styles for the application
└── scripts.js        # JavaScript file for interactivity and functionality
```

- **`index.html`**: The main interface of the shopping list application.
- **`styles.css`**: Contains custom styles overriding default Tailwind CSS where necessary.
- **`scripts.js`**: Handles all the application logic, including user interactions and item management.

Feel free to explore, modify, and enhance the application as needed!