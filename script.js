
document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Produit ajouté au panier !');
    });
});
// Panier d'achats
let cart = [];
const cartItemsContainer = document.getElementById('cart-items');
const totalContainer = document.getElementById('total');
const checkoutButton = document.getElementById('checkout-button');

// Fonction pour mettre à jour l'affichage du panier
function updateCartDisplay() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Votre panier est vide.</p>';
        totalContainer.textContent = '';
        checkoutButton.style.display = 'none';
    } else {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.textContent = `${item.name} - ${item.price}FCFA`;
            cartItemsContainer.appendChild(itemElement);
            total += item.price;
        });
        totalContainer.textContent = `Total : ${total.toFixed(0)}FCFA`;
        checkoutButton.style.display = 'block';
    }
}

// Ajouter un produit au panier
document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', (event) => {
        const productElement = event.target.parentElement;
        const name = productElement.querySelector('h3').textContent;
        const price = parseFloat(productElement.querySelector('p').textContent.replace('FCFA', ''));
        cart.push({ name, price });
        alert(`${name} a été ajouté au panier !`);
        updateCartDisplay();
    });
});

// Afficher le panier
document.getElementById('view-cart').addEventListener('click', () => {
    const cartSection = document.getElementById('cart');
    cartSection.style.display = cartSection.style.display === 'none' ? 'block' : 'none';
});
function updateCartDisplay() {
    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Votre panier est vide.</p>';
        totalContainer.textContent = '';
        checkoutButton.style.display = 'none';
    } else {
        let total = 0;
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.textContent = `${item.name} - ${item.price}FCFA`;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Retirer';
            removeButton.style.marginLeft = '10px';
            removeButton.addEventListener('click', () => {
                cart.splice(index, 1);
                updateCartDisplay();
            });
            itemElement.appendChild(removeButton);
            cartItemsContainer.appendChild(itemElement);
            total += item.price;
        });
        totalContainer.textContent = `Total : ${total.toFixed(0)}FCFA`;
        checkoutButton.style.display = 'block';
        checkoutButton.addEventListener('click', () => {
            window.location.href = 'confirmation.html';
        });
        
    }
}
