document.addEventListener('DOMContentLoaded', function() {
    // Alerta de boas-vindas
    alert('Bem-vindo ao Retro Games! Explore nossos produtos e divirta-se.');

    const products = [
        { id: 1, name: 'GTA San Andreas', category: ['action', 'open world'], price: 'R$ 39,99', image: 'retrogames/css/img/p1.jpg' },
        { id: 2, name: 'Halo 3', category: ['fps', 'action','adventure'], price: 'R$ 27,58', image: 'retrogames/css/img/p2.jpg' },
        { id: 3, name: 'Final Fantasy X', category: ['rpg'], price: 'R$ 48,79', image: 'retrogames/css/img/p3.jpg' },
        { id: 4, name: 'Resident Evil 4', category: ['horror', 'action'], price: 'R$ 37,84', image: 'retrogames/css/img/p4.jpg' },
        { id: 5, name: 'Half life 3', category: ['puzzle'], price: 'R$ 45,80', image: 'retrogames/css/img/p5.jpg' },
        { id: 6, name: 'Super Smash Bros', category: ['action'], price: 'R$ 74,80', image: 'retrogames/css/img/p6.jpg' },
        { id: 7, name: 'Silent Hill 2', category: ['horror'], price: 'R$ 69,85', image: 'retrogames/css/img/p7.jpg' },
        { id: 8, name: 'Devil May Cry 3', category: ['horror', 'action'], price: 'R$ 48,90', image: 'retrogames/css/img/p8.jpg' },
        { id: 9, name: 'Pokemon Red', category: ['adventure','open world'], price: 'R$ 17,80', image: 'retrogames/css/img/p9.jpg' },
        { id: 10, name: 'Tony Hawks Pro Skater 2', category: ['sports','action'], price: 'R$ 16,40', image: 'retrogames/css/img/p10.jpg' },
        { id: 11, name: 'Metal Gear Solid 3', category: ['adventure','action'], price: 'R$ 57,80', image: 'retrogames/css/img/p11.jpg' },
        { id: 12, name: 'Tekken 5', category: ['action'], price: 'R$ 26,04', image: 'retrogames/css/img/p12.jpg' },
        { id: 13, name: 'Prince of Persia', category: ['adventure','action'], price: 'R$ 9,69', image: 'retrogames/css/img/p13.jpg' },
        { id: 14, name: 'Metal Gear Solid 2', category: ['adventure','action'], price: 'R$ 29,42', image: 'retrogames/css/img/p14.jpg' },
        { id: 15, name: 'Doom 3', category: ['action'], price: 'R$ 59,99', image: 'retrogames/css/img/p15.jpg' },
        { id: 16, name: 'Paper Mario', category: ['adventure'], price: 'R$ 42,87', image: 'retrogames/css/img/p16.jpg' }
    ];

    const productList = document.querySelector('.product-list');
    const categoryFilter = document.getElementById('category-filter');
    const searchInput = document.getElementById('search-input');

    function displayProducts(products) {
        productList.innerHTML = '';
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="info">
                    <h3>${product.name}</h3>
                    <p class="price">${product.price}</p>
                    <button class="add-to-cart" data-id="${product.id}">Adicionar ao Carrinho</button>
                </div>
            `;
            productList.appendChild(productItem);
        });
    }

    function filterProducts(categories, search) {
        let filteredProducts = products;

        if (categories.length > 0 && !categories.includes('all')) {
            filteredProducts = filteredProducts.filter(product =>
                product.category.some(cat => categories.includes(cat))
            );
        }

        if (search) {
            filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
        }

        displayProducts(filteredProducts);
    }

    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function handleAddToCart(event) {
        if (event.target.classList.contains('add-to-cart')) {
            const productId = event.target.getAttribute('data-id');
            alert(`Produto com ID ${productId} adicionado ao carrinho.`);
        }
    }

    function startIdleTimer() {
        let timeout;
        function resetTimer() {
            clearTimeout(timeout);
            timeout = setTimeout(() => alert('Você ficou inativo por 5 minutos!'), 5 * 60 * 1000);
        }

        document.addEventListener('mousemove', resetTimer);
        document.addEventListener('keypress', resetTimer);
        resetTimer();
    }

    // Inicializa os filtros
    const savedCategories = getCookie('selectedCategories');
    if (savedCategories) {
        const categoriesArray = savedCategories.split(',');
        Array.from(categoryFilter.options).forEach(option => {
            option.selected = categoriesArray.includes(option.value);
        });
        filterProducts(categoriesArray, searchInput.value);
    } else {
        displayProducts(products);
    }

    categoryFilter.addEventListener('change', function() {
        const selectedCategories = Array.from(this.selectedOptions).map(option => option.value);
        setCookie('selectedCategories', selectedCategories.join(','), 7);
        filterProducts(selectedCategories, searchInput.value);
    });

    searchInput.addEventListener('input', function() {
        filterProducts(Array.from(categoryFilter.selectedOptions).map(option => option.value), this.value);
    });

    productList.addEventListener('click', handleAddToCart);

    startIdleTimer();
});