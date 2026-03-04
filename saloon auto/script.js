function updateCart() { 
    const cartItems = document.getElementById('cart-items'); 
    const cartTotal = document.getElementById('cart-total'); 
    cartItems.innerHTML = ''; 
    let total = 0; 
    cart.forEach(product => { 
        const li = document.createElement('li'); 
        li.classList.add("cart-item"); 
        li.textContent = `${product.name} - $${product.price} x ${product.quantity}`; 
        const removeButton = document.createElement('button'); 
        removeButton.textContent = 'Remove'; 
        removeButton.onclick = () => removeFromCart(product.name); 
        li.appendChild(removeButton); 
        cartItems.appendChild(li); 
        total += product.price * product.quantity; 
    }); cartTotal.textContent = total; 
}