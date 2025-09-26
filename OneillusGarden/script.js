    //    ONEILLUSCODING tout droit reservé
        const cart = [];

        function addToCart(itemName, itemPrice) {
            const existingItem = cart.find(item => item.name === itemName);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name: itemName, price: itemPrice, quantity: 1 });
            }
            updateCartUI();
        }

        function updateCartUI() {
            const cartItemsContainer = document.querySelector('.cart-items');
            const cartTotalContainer = document.querySelector('.cart-total');
            const cartCount = document.getElementById('cart-count');

            cartItemsContainer.innerHTML = '';
            let total = 0;

            cart.forEach(item => {
                total += item.price * item.quantity;
                const cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)} F</span>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    cartTotalContainer.textContent = `Total : ${total.toFixed(2)} F`;
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function toggleCartModal() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = cartModal.style.display === 'flex' ? 'none' : 'flex';
}

function checkout() {
    const name = document.getElementById('customer-name').value;
    const address = document.getElementById('customer-address').value;

    if (!name || !address) {
        alert('Veuillez remplir tous les champs avant de commander.');
        return;
    }

    const receiptModal = document.getElementById('receipt-modal');
    const receiptItemsContainer = document.querySelector('.receipt-items');
    const receiptTotalContainer = document.querySelector('.receipt-total');

    receiptItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;

        const receiptItem = document.createElement('li');
        receiptItem.classList.add('receipt-item');
        receiptItem.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <span>${(item.price * item.quantity).toFixed(2)} F</span>
        `;
        receiptItemsContainer.appendChild(receiptItem);
    });
    //    ONEILLUSCODING tout droit reservé

    receiptTotalContainer.textContent = `Total : ${total.toFixed(2)} F`;

    document.getElementById('cart-modal').style.display = 'none';
    receiptModal.style.display = 'flex';

    cart.length = 0;
    updateCartUI();
}

function closeReceipt() {
    const receiptModal = document.getElementById('receipt-modal');
    receiptModal.style.display = 'none';
}
    //    ONEILLUSCODING tout droit reservé
