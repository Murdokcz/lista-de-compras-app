const itemsByCategory = {
    'pereciveis': ['Carne bovina', 'Carne suína', 'Frango', 'Peixe', 'Ovos', 'Leite', 'Queijo', 'Iogurte'],
    'frutas': ['Maçã', 'Banana', 'Laranja', 'Mamão', 'Abacaxi', 'Uva', 'Melancia', 'Morango', 'Pera', 'Kiwi'],
    'verduras': ['Alface', 'Couve', 'Espinafre', 'Brócolis', 'Repolho', 'Cenoura', 'Beterraba', 'Rúcula', 'Acelga', 'Cebolinha', 'Salsinha', 'Pimentão', 'Pepino', 'Abobrinha', 'Quiabo'],
    'nao-pereciveis': ['Arroz', 'Feijão', 'Macarrão', 'Lentilha', 'Farinha de trigo', 'Açúcar', 'Sal', 'Óleo', 'Molho de tomate', 'Café'],
    'conservas': ['Milho verde enlatado', 'Ervilha enlatada', 'Palmito', 'Azeitona verde', 'Azeitona preta', 'Atum enlatado', 'Sardinha enlatada', 'Molho de tomate enlatado', 'Pepino em conserva', 'Palmito em conserva'],
    'bebidas': ['Água mineral', 'Refrigerante', 'Suco', 'Chá', 'Cerveja', 'Vinho tinto', 'Vinho branco', 'Vodka', 'Whisky', 'Rum', 'Cachaça', 'Champagne', 'Saquê', 'Licor'],
    'higiene-produto-limpeza': ['Sabonete', 'Shampoo', 'Condicionador', 'Pasta de dente', 'Papel higiênico', 'Detergente', 'Desinfetante', 'Esponja de limpeza', 'Sabao em pó', 'amaciante', 'Sabão liquido', 'escova de dente', 'naftalina'],
    'snacks': ['Biscoitos salgados', 'Biscoitos doces', 'Batata chips', 'Amendoim', 'Pipoca de micro-ondas', 'Mix de castanhas', 'Torradas', 'Snacks de milho', 'Barrinhas de cereal', 'Chocolate'],
    'descartaveis': ['Pratos descartáveis de plástico', 'Copos descartáveis de plástico', 'Talheres descartáveis', 'Guardanapos de papel', 'Canudos descartáveis', 'Sacos para lixo', 'Sacos para freezer', 'Filme plástico transparente', 'Papel alumínio', 'Toalhas de mesa descartáveis'],
    'temperos': ['Sal refinado', 'Sal grosso', 'Pimenta-do-reino moída', 'Pimenta vermelha', 'Orégano', 'Manjericão seco', 'Louro', 'Cominho', 'Canela em pó', 'Açafrão'],
    'pets': ['Ração para cães', 'Ração para gatos', 'Areia sanitária para gatos', 'Petiscos para cães', 'Petiscos para gatos', 'Shampoos para pets', 'Vermífugos para cães e gatos', 'Brinquedos para pets', 'Coleiras para cães', 'Tapetes higiênicos para cães']
};

let selectedItem = null;
let shoppingList = [];

document.addEventListener('DOMContentLoaded', () => {
    const categorySelect = document.getElementById('category-select');
    const itemSearch = document.getElementById('item-search');

    categorySelect.addEventListener('change', () => {
        selectedItem = null;
        updateItemsList();
    });
    itemSearch.addEventListener('input', updateItemsList);

    const savedList = localStorage.getItem('shoppingList');
    if (savedList) {
        shoppingList = JSON.parse(savedList);
        updateShoppingList();
    }

    updateItemsList();

    document.getElementById('criar-btn').classList.remove('opacity-75');
    document.getElementById('lista-btn').classList.add('opacity-75');
});

function switchTab(tabName) {
    document.getElementById('criar-btn').classList.toggle('opacity-75', tabName !== 'criar');
    document.getElementById('lista-btn').classList.toggle('opacity-75', tabName !== 'lista');

    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });

    const selectedTab = document.getElementById(`${tabName}-tab`);
    selectedTab.style.display = 'block';

    if (tabName === 'criar') {
        selectedItem = null;
        updateItemsList();
    }
}

function updateItemsList() {
    const category = document.getElementById('category-select').value;
    const searchTerm = document.getElementById('item-search').value.toLowerCase();
    const container = document.getElementById('items-container');

    container.innerHTML = '';

    if (!category) {
        container.innerHTML = '<div class="text-gray-500 text-center py-4">Selecione uma categoria para ver os itens</div>';
        return;
    }

    const categoryItems = itemsByCategory[category];
    if (!categoryItems) {
        console.error('Category not found:', category);
        container.innerHTML = '<div class="text-red-500 text-center py-4">Erro: Categoria não encontrada</div>';
        return;
    }

    const filteredItems = categoryItems.filter(item =>
        item.toLowerCase().includes(searchTerm)
    );

    if (filteredItems.length === 0) {
        container.innerHTML = '<div class="text-gray-500 text-center py-4">Nenhum item encontrado</div>';
        return;
    }

    filteredItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'p-4 bg-white border rounded-lg cursor-pointer hover:bg-gray-50 transition-all transform hover:scale-[1.02] flex items-center justify-between';

        const leftSection = document.createElement('div');
        leftSection.className = 'flex items-center space-x-3';

        const icon = document.createElement('i');
        icon.className = 'fas fa-shopping-basket text-blue-500';
        leftSection.appendChild(icon);

        const itemText = document.createElement('span');
        itemText.textContent = item;
        leftSection.appendChild(itemText);

        itemDiv.appendChild(leftSection);

        if (selectedItem === item) {
            itemDiv.classList.add('bg-blue-50', 'border-blue-500');
            const checkIcon = document.createElement('i');
            checkIcon.className = 'fas fa-check text-blue-500';
            itemDiv.appendChild(checkIcon);
        }

        itemDiv.onclick = () => selectItem(item);
        container.appendChild(itemDiv);
    });

    document.getElementById('save-btn').disabled = !selectedItem;
}

function selectItem(item) {
    if (selectedItem === item) {
        selectedItem = null;
    } else {
        selectedItem = item;
    }
    updateItemsList();
}

function saveSelectedItem() {
    if (!selectedItem) return;

    shoppingList.push({
        item: selectedItem,
        price: '0.00',
        quantity: 1
    });

    selectedItem = null;
    document.getElementById('save-btn').disabled = true;
    document.getElementById('category-select').value = '';
    document.getElementById('item-search').value = '';
    document.getElementById('items-container').innerHTML = '';

    updateShoppingList();
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

function updateShoppingList() {
    const container = document.getElementById('shopping-list');
    container.innerHTML = '';

    shoppingList.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow';
        itemDiv.innerHTML = `
            <div class="flex items-center space-x-4 flex-1">
                <i class="fas fa-shopping-basket text-blue-500"></i>
                <span>${item.item}</span>
            </div>
            <div class="flex items-center space-x-4">
                <input type="number" min="1" value="${item.quantity}" 
                    class="w-16 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onchange="updateQuantity(${index}, this.value)" title="Quantidade" />
                <div class="flex items-center bg-gray-50 rounded-lg px-3 py-2">
                    <span class="mr-2 text-gray-600">R$</span>
                    <input type="number" step="0.01" min="0" value="${item.price}" 
                        class="w-24 bg-transparent focus:outline-none"
                        onchange="updatePrice(${index}, this.value)" title="Valor" />
                </div>
                <button onclick="deleteItem(${index})" 
                    class="text-red-500 hover:text-red-700 transition-colors p-2 rounded-full hover:bg-red-50" title="Excluir item">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        container.appendChild(itemDiv);
    });

    updateTotal();
}

function updateQuantity(index, quantity) {
    shoppingList[index].quantity = parseInt(quantity) || 1;
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    updateTotal();
}

function updatePrice(index, price) {
    shoppingList[index].price = parseFloat(price).toFixed(2);
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    updateTotal();
}

function deleteItem(index) {
    shoppingList.splice(index, 1);
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    updateShoppingList();
}

function deleteAllItems() {
    if (confirm('Tem certeza que deseja excluir todos os itens?')) {
        shoppingList = [];
        localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
        updateShoppingList();
    }
}

function updateTotal() {
    const total = shoppingList.reduce((sum, item) => sum + (parseFloat(item.price || 0) * (item.quantity || 1)), 0);
    document.getElementById('total-value').textContent = total.toFixed(2);
}
