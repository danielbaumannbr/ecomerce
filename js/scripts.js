
const translations = {
    fr: {
        nav: {
            home: 'Accueil',
            products: 'Produits',
            about: 'À propos',
            contact: 'Contact',
            cart: 'Panier'
        },
        hero: {
            title: 'Style minimaliste pour votre quotidien',
            subtitle: 'Découvrez des produits soigneusement sélectionnés avec un design épuré et fonctionnel.',
            button: 'Voir les produits'
        },
        sections: {
            products: 'Nos produits',
            about: 'À propos',
            contact: 'Contact'
        },
        cart: {
            title: 'Votre panier',
            total: 'Total :',
            empty: 'Votre panier est vide',
            checkout: 'Finaliser l\'achat',
            remove: 'Retirer',
            added: 'ajouté au panier !'
        },
        footer: {
            copyright: '© 2025 MinimalStore. Tous droits réservés.',
            privacy: 'Politique de confidentialité',
            terms: 'Conditions d\'utilisation',
            contact: 'Contact'
        },
        about: {
            text: 'Nous créons des espaces plus clairs et plus fonctionnels grâce à des pièces sélectionnées avec soin, alliant simplicité, qualité et confort.'
        },
        contact: {
            text: 'Adresse : BR-470, km 470 - nº 2555 - Navegantes, Rio do Sul - SC, 89162-528. Téléphone : (47) 98412-6117. Horaires : 07:15 - 22:00.'
        },
        product: {
            add: 'Ajouter au panier'
        }
    },
    en: {
        nav: {
            home: 'Home',
            products: 'Products',
            about: 'About',
            contact: 'Contact',
            cart: 'Cart'
        },
        hero: {
            title: 'Minimalist style for your everyday life',
            subtitle: 'Discover carefully selected products with clean, functional design.',
            button: 'View products'
        },
        sections: {
            products: 'Our products',
            about: 'About us',
            contact: 'Contact'
        },
        cart: {
            title: 'Your cart',
            total: 'Total:',
            empty: 'Your cart is empty',
            checkout: 'Checkout',
            remove: 'Remove',
            added: 'added to cart!'
        },
        footer: {
            copyright: '© 2025 MinimalStore. All rights reserved.',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service',
            contact: 'Contact'
        },
        about: {
            text: 'We create clearer, more functional spaces with carefully selected pieces that balance simplicity, quality, and comfort.'
        },
        contact: {
            text: 'Address: BR-470, km 470 - nº 2555 - Navegantes, Rio do Sul - SC, 89162-528. Phone: (47) 98412-6117. Opening hours: 07:15 - 22:00.'
        },
        product: {
            add: 'Add to cart'
        }
    },
    pt: {
        nav: {
            home: 'Início',
            products: 'Produtos',
            about: 'Sobre',
            contact: 'Contato',
            cart: 'Carrinho'
        },
        hero: {
            title: 'Estilo Minimalista para o seu Dia a Dia',
            subtitle: 'Descubra produtos cuidadosamente selecionados com design limpo e funcional.',
            button: 'Ver Produtos'
        },
        sections: {
            products: 'Nossos Produtos',
            about: 'Sobre nós',
            contact: 'Contato'
        },
        cart: {
            title: 'Seu Carrinho',
            total: 'Total:',
            empty: 'Seu carrinho está vazio',
            checkout: 'Finalizar Compra',
            remove: 'Remover',
            added: 'adicionado ao carrinho!'
        },
        footer: {
            copyright: '© 2025 MinimalStore. Todos os direitos reservados.',
            privacy: 'Política de Privacidade',
            terms: 'Termos de Serviço',
            contact: 'Contato'
        },
        about: {
            text: 'Criamos espaços mais claros e funcionais com peças cuidadosamente selecionadas, unindo simplicidade, qualidade e conforto.'
        },
        contact: {
            text: 'Endereço: BR-470, km 470 - nº 2555 - Navegantes, Rio do Sul - SC, 89162-528. Telefone: (47) 98412-6117. Horário de funcionamento: 07:15 - 22:00.'
        },
        product: {
            add: 'Adicionar ao Carrinho'
        }
    }
};

const products = [
    {
        id: 1,
        name: {
            fr: 'Chaise de bureau minimaliste',
            en: 'Minimalist office chair'
        },
        price: 599.99,
        image: 'image/Cadeira de Escritório Minimalista.avif'
    },
    {
        id: 2,
        name: {
            fr: 'Table basse moderne',
            en: 'Modern coffee table'
        },
        price: 349.99,
        image: 'image/Mesa de Centro Moderna.avif'
    },
    {
        id: 3,
        name: {
            fr: 'Lampe de bureau élégante',
            en: 'Elegant desk lamp'
        },
        price: 129.99,
        image: 'image/Luminária de Mesa Elegante.avif'
    },
    {
        id: 4,
        name: {
            fr: 'Vase décoratif en céramique',
            en: 'Ceramic decorative vase'
        },
        price: 79.99,
        image: 'image/Vaso Decorativo Cerâmica.avif'
    },
    {
        id: 5,
        name: {
            fr: 'Lot de stylos premium',
            en: 'Premium pen set'
        },
        price: 45.99,
        image: 'image/Conjunto de Canetas Premium.avif'
    },
    {
        id: 6,
        name: {
            fr: 'Cahier à couverture rigide',
            en: 'Hardcover notebook'
        },
        price: 29.99,
        image: 'image/Caderno de Notas Capa Dura.avif'
    },
    {
        id: 7,
        name: {
            fr: 'Canapé vintage vert mousse',
            en: 'Moss green vintage sofa'
        },
        price: 799.99,
        image: 'image/Mesa de Centro Moderna.avif'
    }
];

let cart = [];

const state = {
    lang: localStorage.getItem('lang') || 'pt'
};

const productsGrid = document.getElementById('products-grid');
const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCart = document.getElementById('close-cart');
const overlay = document.getElementById('overlay');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');
const cartCurrency = document.getElementById('cart-currency');

function getProductName(product) {
    return typeof product.name === 'string' ? product.name : product.name[state.lang];
}

function formatPrice(value) {
    const symbol = state.lang === 'en' ? '$' : '€';
    return `${symbol} ${value.toFixed(2)}`;
}

function applyTranslations() {
    document.documentElement.lang = state.lang;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const keys = element.dataset.i18n.split('.');
        let value = translations[state.lang];

        for (const key of keys) {
            value = value && value[key];
        }

        if (value) {
            element.textContent = value;
        }
    });

    cartCurrency.textContent = state.lang === 'en' ? '$' : '€';
}

function bindLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach((button) => {
        const isActive = button.dataset.lang === state.lang;
        button.classList.toggle('active', isActive);

        button.addEventListener('click', () => {
            state.lang = button.dataset.lang;
            localStorage.setItem('lang', state.lang);
            document.querySelectorAll('.lang-btn').forEach((btn) => {
                btn.classList.toggle('active', btn.dataset.lang === state.lang);
            });
            applyTranslations();
            renderProducts();
            updateCart();
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    bindLanguageButtons();
    applyTranslations();
    renderProducts();
    updateCart();
});

function renderProducts() {
    productsGrid.innerHTML = '';

    products.forEach((product) => {
        const productCard = document.createElement('div');
        const productName = getProductName(product);

        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${productName}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${productName}</h3>
                <p class="product-price">${formatPrice(product.price)}</p>
                <button class="add-to-cart" data-id="${product.id}">${translations[state.lang].product.add}</button>
            </div>
        `;

        productsGrid.appendChild(productCard);
    });

    document.querySelectorAll('.add-to-cart').forEach((button) => {
        button.addEventListener('click', (event) => {
            const productId = Number(event.target.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

function addToCart(productId) {
    const product = products.find((item) => item.id === productId);

    if (!product) return;

    const existingItem = cart.find((item) => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    showNotification(`${getProductName(product)} ${translations[state.lang].cart.added}`);
}

function removeFromCart(productId) {
    cart = cart.filter((item) => item.id !== productId);
    updateCart();
}

function updateCart() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = `<p>${translations[state.lang].cart.empty}</p>`;
        cartTotal.textContent = '0.00';
        return;
    }

    let total = 0;

    cart.forEach((item) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${getProductName(item)}" class="cart-item-image">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${getProductName(item)}</h4>
                <p class="cart-item-price">${formatPrice(item.price)} x ${item.quantity}</p>
                <button class="cart-item-remove" data-id="${item.id}">${translations[state.lang].cart.remove}</button>
            </div>
        `;

        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = total.toFixed(2);

    document.querySelectorAll('.cart-item-remove').forEach((button) => {
        button.addEventListener('click', (event) => {
            const productId = Number(event.target.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #2ecc71;
        color: white;
        padding: 12px 20px;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1001;
        transition: transform 0.3s, opacity 0.3s;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.transform = 'translateY(20px)';
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

cartIcon.addEventListener('click', () => {
    cartSidebar.classList.add('active');
    overlay.classList.add('active');
});

closeCart.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
});
