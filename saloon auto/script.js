// LISTA PRODOTTI
const products = [
    { id: 1, nome: "Cappellino F1", prezzo: 19.99 ,image:"Logo.png" ,prodimg:"cappellof1.png"},
    { id: 2, nome: "Cappellino Mercedes", prezzo: 24.99 ,image:"mercedes.png" ,prodimg:"cappellomercedes.png"},
    { id: 3, nome: "Cappellino Ferrari", prezzo: 24.99 ,image:"ferrari.png" ,prodimg:"cappelloferrari.png"},
    { id: 4, nome: "Cappellino McLaren", prezzo: 24.99 ,image:"mclaren.png" ,prodimg:"cappellomclaren.png"},
    { id: 5, nome: "Cappellino Red Bull", prezzo: 24.99 ,image:"redbull.png" ,prodimg:"cappelloredbull.png"},
    { id: 6, nome: "Cappellino Haas F1", prezzo: 24.99 ,image:"haas.png" ,prodimg:"cappellohaas.png"},
    { id: 7, nome: "Cappellino Visa RB", prezzo: 24.99 ,image:"visarb.png" ,prodimg:"cappellovisarb.png"},
    { id: 8, nome: "Cappellino Audi", prezzo: 24.99 ,image:"audi.png" ,prodimg:"cappelloaudi.png"},
    { id: 9, nome: "Cappellino Alpine", prezzo: 24.99 ,image:"alpine.png" ,prodimg:"cappelloalpine.png"},
    { id: 10, nome: "Cappellino Williams", prezzo: 24.99 ,image:"williams.png" ,prodimg:"cappellowilliams.png"},
    { id: 11, nome: "Cappellino Cadillac", prezzo: 24.99 ,image:"cadillac.png" ,prodimg:"cappellocadillac.png"},
    { id: 12, nome: "Cappellino Aston Martin", prezzo: 24.99 ,image:"astonmartin.png" ,prodimg:"cappelloastonmartin.png"},
    
    { id: 13, nome: "Giacca F1", prezzo: 59.99 ,image:"Logo.png" ,prodimg:"giaccaf1.png"},
    { id: 14, nome: "Giacca Mercedes", prezzo: 69.99 ,image:"mercedes.png" ,prodimg:"giaccamercedes.png"},
    { id: 15, nome: "Giacca Ferrari", prezzo: 69.99 ,image:"ferrari.png" ,prodimg:"giaccaferrari.png"},
    { id: 16, nome: "Giacca McLaren", prezzo: 69.99 ,image:"mclaren.png" ,prodimg:"giaccamclaren.png"},
    { id: 17, nome: "Giacca Red Bull", prezzo: 69.99 ,image:"redbull.png" ,prodimg:"giaccaredbull.png"},
    { id: 18, nome: "Giacca Haas F1", prezzo: 69.99 ,image:"haas.png" ,prodimg:"giaccahaas.png"},
    { id: 19, nome: "Giacca Visa RB", prezzo: 69.99 ,image:"visarb.png" ,prodimg:"giaccavisarb.png"},
    { id: 20, nome: "Giacca Audi", prezzo: 69.99 ,image:"audi.png" ,prodimg:"giaccaaudi.png"},
    { id: 21, nome: "Giacca Alpine", prezzo: 69.99 ,image:"alpine.png" ,prodimg:"giaccaalpine.png"},
    { id: 22, nome: "Giacca Williams", prezzo: 69.99 ,image:"williams.png" ,prodimg:"giaccawilliams.png"},
    { id: 23, nome: "Giacca Cadillac", prezzo: 69.99 ,image:"cadillac.png" ,prodimg:"giaccacadillac.png"},
    { id: 24, nome: "Giacca Aston Martin", prezzo: 69.99 ,image:"astonmartin.png" ,prodimg:"giaccaastonmartin.png"},

    { id: 25, nome: "Poster Calendario F1 2026", prezzo: 59.99 ,image:"Logo.png" ,prodimg:"postercalendariof1.png"},
    { id: 26, nome: "Poster RedBull 2026", prezzo: 72.99 ,image:"redbull.png" ,prodimg:"posterredbull2026.png"},
    { id: 27, nome: "Poster Ferrari SP-26", prezzo: 72.99 ,image:"ferrari.png" ,prodimg:"posterferrari.png"},
    { id: 28, nome: "Poster Gran Premio Suzuka Red Bull", prezzo: 72.99 ,image:"redbull.png" ,prodimg:"posterredbullsuzuka.png"},
    { id: 29, nome: "Poster Audi", prezzo: 72.99 ,image:"audi.png" ,prodimg:"posteraudi.png"},
    { id: 30, nome: "Manifesto del Gran Premio di Formula 1 di Las Vegas 2025", prezzo: 72.99 ,image:"Logo.png" ,prodimg:"posterlasvegas2025.png"},
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// SALVA CARRELLO
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// AGGIORNA CONTATORE
function updateCartCount() {
    const countElement = document.getElementById("cartCount");
    if (countElement) {
        countElement.innerText = cart.length;
    }
}

// MOSTRA PRODOTTI (solo se esiste productList)
function renderProducts() {
    const productList = document.getElementById("productList");
    if (!productList) return;

    productList.innerHTML = "";

    products.forEach(prod => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <div>
                <img src="image/${prod.prodimg}" style="width:100%">
            </div>
            <div>
                <img src="image/${prod.image}" style="width:25px">
                <strong>${prod.nome}</strong><br>
                €${prod.prezzo}<br><br>
                <button onclick="addToCart(${prod.id})">
                    Aggiungi al carrello
                </button>
            </div>
        `;
        productList.appendChild(div);
    });
}

// AGGIUNGI AL CARRELLO
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    saveCart();
    updateCartCount();
    alert("Prodotto aggiunto al carrello!");
}

// MOSTRA CARRELLO (solo se esiste cartItems)
function renderCart() {
    const cartItems = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");

    if (!cartItems) return;

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.prezzo;

        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <img src="image/${item.image}" style="width:25px">
            <strong>${item.nome}</strong><br>
            €${item.prezzo}<br><br>
            <button class="remove" onclick="removeFromCart(${index})">
                Rimuovi
            </button>
        `;
        cartItems.appendChild(div);
    });

    if (totalPrice) {
        totalPrice.innerText = "Totale: €" + total;
    }
}

// RIMUOVI DAL CARRELLO
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
    updateCartCount();
}

// ACQUISTA DAL CARRELLO
function buyProducts(){
    let total = 0;

    cart.forEach(item => {
        total += item.prezzo;
    });

    alert("Prodotti acquistati! Totale: €" + total.toFixed(2));

    cart = [];                  //Svuota carrello
    saveCart();
    renderCart();
    updateCartCount();
}

// NAVIGAZIONE TRA PAGINE
function goToCart() {
    window.location.href = "cart.html";
}

function goToProducts() {
    window.location.href = "merchandise.html";
}

// INIT
renderProducts();
renderCart();
updateCartCount();