/* ═══════════════════════════════════
   DATI PRODOTTI
════════════════════════════════════ */
const products = [
    { id:1,  nome:"Cappellino F1",           prezzo:19.99, image:"Logo.png",       prodimg:"cappellof1.png",          cat:"cappellino" },
    { id:2,  nome:"Cappellino Mercedes",     prezzo:24.99, image:"mercedes.png",   prodimg:"cappellomercedes.png",    cat:"cappellino" },
    { id:3,  nome:"Cappellino Ferrari",      prezzo:24.99, image:"ferrari.png",    prodimg:"cappelloferrari.png",     cat:"cappellino" },
    { id:4,  nome:"Cappellino McLaren",      prezzo:24.99, image:"mclaren.png",    prodimg:"cappellomclaren.png",     cat:"cappellino" },
    { id:5,  nome:"Cappellino Red Bull",     prezzo:24.99, image:"redbull.png",    prodimg:"cappelloredbull.png",     cat:"cappellino" },
    { id:6,  nome:"Cappellino Haas F1",      prezzo:24.99, image:"haas.png",       prodimg:"cappellohaas.png",        cat:"cappellino" },
    { id:7,  nome:"Cappellino Visa RB",      prezzo:24.99, image:"visarb.png",     prodimg:"cappellovisarb.png",      cat:"cappellino" },
    { id:8,  nome:"Cappellino Audi",         prezzo:24.99, image:"audi.png",       prodimg:"cappelloaudi.png",        cat:"cappellino" },
    { id:9,  nome:"Cappellino Alpine",       prezzo:24.99, image:"alpine.png",     prodimg:"cappelloalpine.png",      cat:"cappellino" },
    { id:10, nome:"Cappellino Williams",     prezzo:24.99, image:"williams.png",   prodimg:"cappellowilliams.png",    cat:"cappellino" },
    { id:11, nome:"Cappellino Cadillac",     prezzo:24.99, image:"cadillac.png",   prodimg:"cappellocadillac.png",    cat:"cappellino" },
    { id:12, nome:"Cappellino Aston Martin", prezzo:24.99, image:"astonmartin.png",prodimg:"cappelloastonmartin.png", cat:"cappellino" },

    { id:13, nome:"Giacca F1",              prezzo:59.99, image:"Logo.png",       prodimg:"giaccaf1.png",            cat:"giacca" },
    { id:14, nome:"Giacca Mercedes",        prezzo:69.99, image:"mercedes.png",   prodimg:"giaccamercedes.png",      cat:"giacca" },
    { id:15, nome:"Giacca Ferrari",         prezzo:69.99, image:"ferrari.png",    prodimg:"giaccaferrari.png",       cat:"giacca" },
    { id:16, nome:"Giacca McLaren",         prezzo:69.99, image:"mclaren.png",    prodimg:"giaccamclaren.png",       cat:"giacca" },
    { id:17, nome:"Giacca Red Bull",        prezzo:69.99, image:"redbull.png",    prodimg:"giaccaredbull.png",       cat:"giacca" },
    { id:18, nome:"Giacca Haas F1",         prezzo:69.99, image:"haas.png",       prodimg:"giaccahaas.png",          cat:"giacca" },
    { id:19, nome:"Giacca Visa RB",         prezzo:69.99, image:"visarb.png",     prodimg:"giaccavisarb.png",        cat:"giacca" },
    { id:20, nome:"Giacca Audi",            prezzo:69.99, image:"audi.png",       prodimg:"giaccaaudi.png",          cat:"giacca" },
    { id:21, nome:"Giacca Alpine",          prezzo:69.99, image:"alpine.png",     prodimg:"giaccaalpine.png",        cat:"giacca" },
    { id:22, nome:"Giacca Williams",        prezzo:69.99, image:"williams.png",   prodimg:"giaccawilliams.png",      cat:"giacca" },
    { id:23, nome:"Giacca Cadillac",        prezzo:69.99, image:"cadillac.png",   prodimg:"giaccacadillac.png",      cat:"giacca" },
    { id:24, nome:"Giacca Aston Martin",    prezzo:69.99, image:"astonmartin.png",prodimg:"giaccaastonmartin.png",   cat:"giacca" },

    { id:25, nome:"Poster Calendario F1 2026",             prezzo:59.99, image:"Logo.png",    prodimg:"postercalendariof1.png",  cat:"poster" },
    { id:26, nome:"Poster RedBull 2026",                   prezzo:72.99, image:"redbull.png", prodimg:"posterredbull2026.png",   cat:"poster" },
    { id:27, nome:"Poster Ferrari SF-26",                  prezzo:72.99, image:"ferrari.png", prodimg:"posterferrari.png",       cat:"poster" },
    { id:28, nome:"Poster Gran Premio Suzuka Red Bull",    prezzo:72.99, image:"redbull.png", prodimg:"posterredbullsuzuka.png", cat:"poster" },
    { id:29, nome:"Poster Audi",                           prezzo:72.99, image:"audi.png",    prodimg:"posteraudi.png",          cat:"poster" },
    { id:30, nome:"Manifesto GP Formula 1 Las Vegas 2025", prezzo:72.99, image:"Logo.png",    prodimg:"posterlasvegas2025.png",  cat:"poster" },
];

const specialproducts = [
    {
        id:31, nome:"Gold Lounge",    prezzo:1200, image:"Logo.png", prodimg:"lounge-gold.jpg",
        tag:"Gold",     type:"lounge",
        features:["Accesso lounge premium","Open bar durante le prove","Buffet gourmet","Vista tribuna coperta"]
    },
    {
        id:32, nome:"Elite Lounge",   prezzo:2500, image:"Logo.png", prodimg:"lounge-elite.jpg",
        tag:"Elite",    type:"lounge",
        features:["Suite privata con terrazza","Chef personale al tavolo","Champagne & vini selezionati","Meet & Greet con team"]
    },
    {
        id:33, nome:"Royal Lounge",   prezzo:4000, image:"Logo.png", prodimg:"lounge-royal.jpg",
        tag:"Royal",    type:"lounge",
        features:["Suite panoramica esclusiva","Servizio maggiordomo dedicato","Accesso paddock & garage","Transfer privato in elicottero"]
    },
    {
        id:34, nome:"Vista Pit Lane", prezzo:600,  image:"Logo.png", prodimg:"pitlane.jpg",
        tag:"Pit Lane", type:"pitlane",
        features:["Vista diretta dalla pit lane","Accesso area tecnica","Badge ufficiale ricordo","Guida al circuito inclusa"]
    },
];

/* ═══════════════════════════════════
   CARRELLO
════════════════════════════════════ */
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount() {
    const el = document.getElementById("cartCount");
    if (el) el.innerText = cart.length;
}

/* ═══════════════════════════════════
   RENDER LOUNGE / PITLANE
════════════════════════════════════ */
function renderSpecialProducts() {
    const loungeEl   = document.getElementById("loungeCards");
    const pitlaneEl  = document.getElementById("pitlaneCards");
    if (!loungeEl && !pitlaneEl) return;

    specialproducts.forEach(sp => {
        const card = document.createElement("div");
        card.className = "pcard";
        card.innerHTML = `
            <img class="pcard-img" src="image/${sp.prodimg}" alt="${sp.nome}" onerror="this.style.display='none'">
            <span class="pcard-tag">${sp.tag}</span>
            <h3>${sp.nome}</h3>
            <ul class="pcard-features">
                ${sp.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
            <div class="pcard-bottom">
                <div class="pcard-price">€ ${sp.prezzo.toLocaleString('it')}
                    <small>per persona</small>
                </div>
                <button class="buy-btn" onclick="addToCart(${sp.id})">Acquista</button>
            </div>
        `;
        if (sp.type === "lounge" && loungeEl)   loungeEl.appendChild(card);
        if (sp.type === "pitlane" && pitlaneEl) pitlaneEl.appendChild(card);
    });
}

/* ═══════════════════════════════════
   RENDER PRODOTTI
════════════════════════════════════ */
let currentCat = 'all';

function renderProducts() {
    const grid = document.getElementById("productList");
    if (!grid) return;
    grid.innerHTML = "";

    const filtered = currentCat === 'all'
        ? products
        : products.filter(p => p.cat === currentCat);

    filtered.forEach(prod => {
        const card = document.createElement("div");
        card.className = "prod-card";
        card.innerHTML = `
            <div class="prod-img-wrap">
                <img src="image/${prod.prodimg}" alt="${prod.nome}">
                <img class="prod-badge-team" src="image/${prod.image}" alt="">
            </div>
            <div class="prod-body">
                <div class="prod-name">${prod.nome}</div>
                <div class="prod-price">€${prod.prezzo.toFixed(2)}</div>
            </div>
            <button class="prod-add" onclick="addToCart(${prod.id})">+</button>
        `;
        grid.appendChild(card);
    });
}

function filterCat(cat, btn) {
    currentCat = cat;
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    renderProducts();
}

/* ═══════════════════════════════════
   ADD / REMOVE
════════════════════════════════════ */
function addToCart(id) {
    const product = id <= 30
        ? products.find(p => p.id === id)
        : specialproducts.find(p => p.id === id);
    if (!product) { alert("Errore: prodotto non trovato"); return; }

    cart.push(product);
    saveCart();
    updateCartCount();
    renderCart();
    showNotif(`✓ ${product.nome} aggiunto al carrello`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
    updateCartCount();
}

/* ═══════════════════════════════════
   RENDER CARRELLO
════════════════════════════════════ */
function renderCart() {
    const list  = document.getElementById("cartItems");
    const total = document.getElementById("totalPrice");
    if (!list) return;

    list.innerHTML = "";

    if (cart.length === 0) {
        list.innerHTML = '<div class="cart-empty">Il carrello è vuoto</div>';
        if (total) total.textContent = "€ 0";
        return;
    }

    let sum = 0;
    cart.forEach((item, i) => {
        sum += item.prezzo;
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <img class="cart-item-thumb" src="image/${item.image}" alt="">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.nome}</div>
                <div class="cart-item-price">€${item.prezzo.toFixed(2)}</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${i})">✕</button>
        `;
        list.appendChild(div);
    });

    if (total) total.textContent = "€ " + sum.toFixed(2);
}

/* ═══════════════════════════════════
   ACQUISTO
════════════════════════════════════ */
function buyProducts() {
    if (cart.length === 0) { showNotif("⚠️ Carrello vuoto"); return; }
    const sum = cart.reduce((s, i) => s + i.prezzo, 0);
    alert(`✅ Prodotti acquistati!\nTotale: €${sum.toFixed(2)}`);
    cart = [];
    saveCart();
    renderCart();
    updateCartCount();
}

/* ═══════════════════════════════════
   NAVIGAZIONE
════════════════════════════════════ */
function goToCart()     { window.location.href = "cart.html"; }
function goToProducts() { window.location.href = "merchandise.html"; }
function openCart()     { document.getElementById("cartOverlay").classList.add("open"); }
function closeCart()    { document.getElementById("cartOverlay").classList.remove("open"); }

/* ═══════════════════════════════════
   NOTIFICA TOAST
════════════════════════════════════ */
function showNotif(msg) {
    const el = document.getElementById("notif");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    setTimeout(() => el.classList.remove("show"), 2400);
}

/* ═══════════════════════════════════
   INIT
════════════════════════════════════ */
renderSpecialProducts();
renderProducts();
renderCart();
updateCartCount();