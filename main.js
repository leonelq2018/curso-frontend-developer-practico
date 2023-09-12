const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurguer = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu")
const shoppinCart = document.querySelector(".navbar-shopping-cart")
const productos = document.querySelector(".product-detail")

menuEmail.addEventListener("click", toggleDesktopMenu);
menuBurguer.addEventListener("click", toggleMobileMenu);
shoppinCart.addEventListener("click", toggleProductosAside);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isProductosClosed = productos.classList.contains("inactive");

    if (!isProductosClosed) {
        productos.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleProductosAside() {
    
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }

    productos.classList.toggle("inactive")

   
}

