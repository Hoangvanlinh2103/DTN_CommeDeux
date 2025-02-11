// Kéo và thả cho sản phẩm
const productContainer = document.querySelector('.product-container');

let isDraggingProduct = false;
let startXProduct, scrollLeftProduct;

productContainer.addEventListener('mousedown', (e) => {
    isDraggingProduct = true;
    productContainer.style.cursor = 'grabbing';
    startXProduct = e.pageX - productContainer.offsetLeft;
    scrollLeftProduct = productContainer.scrollLeft;
});

productContainer.addEventListener('mousemove', (e) => {
    if (!isDraggingProduct) return;
    e.preventDefault();
    const x = e.pageX - productContainer.offsetLeft;
    const walk = (x - startXProduct) * 1.5;
    productContainer.scrollLeft = scrollLeftProduct - walk;
});

productContainer.addEventListener('mouseup', () => {
    isDraggingProduct = false;
    productContainer.style.cursor = 'grab';
});

productContainer.addEventListener('mouseleave', () => {
    isDraggingProduct = false;
    productContainer.style.cursor = 'grab';
});

// Di chuyển bằng nút cho sản phẩm
document.addEventListener('DOMContentLoaded', function () {
    const prevButtonProduct = document.querySelector('.productsp-prev');
    const nextButtonProduct = document.querySelector('.productsp-next');
    const productContainer = document.querySelector('.product-special');

    nextButtonProduct.addEventListener('click', () => {
        productContainer.scrollBy({ left: 300, behavior: 'smooth' });
    });

    prevButtonProduct.addEventListener('click', () => {
        productContainer.scrollBy({ left: -300, behavior: 'smooth' });
    });
});

// Kéo và thả cho logo
const brandLogosContainer = document.querySelector('.brand-logos');

let isDraggingLogo = false;
let startXLogo, scrollLeftLogo;

brandLogosContainer.addEventListener('mousedown', (e) => {
    isDraggingLogo = true;
    startXLogo = e.pageX - brandLogosContainer.offsetLeft;
    scrollLeftLogo = brandLogosContainer.scrollLeft;
});

brandLogosContainer.addEventListener('mouseup', () => {
    isDraggingLogo = false;
});

brandLogosContainer.addEventListener('mouseleave', () => {
    isDraggingLogo = false;
});

brandLogosContainer.addEventListener('mousemove', (e) => {
    if (!isDraggingLogo) return;
    e.preventDefault();
    const x = e.pageX - brandLogosContainer.offsetLeft;
    const walk = (x - startXLogo) * 1.5;
    brandLogosContainer.scrollLeft = scrollLeftLogo - walk;
});

brandLogosContainer.addEventListener('touchstart', (e) => {
    isDraggingLogo = true;
    startXLogo = e.touches[0].pageX - brandLogosContainer.offsetLeft;
    scrollLeftLogo = brandLogosContainer.scrollLeft;
});

brandLogosContainer.addEventListener('touchend', () => {
    isDraggingLogo = false;
});

brandLogosContainer.addEventListener('touchmove', (e) => {
    if (!isDraggingLogo) return;
    const x = e.touches[0].pageX - brandLogosContainer.offsetLeft;
    const walk = (x - startXLogo) * 1.5;
    brandLogosContainer.scrollLeft = scrollLeftLogo - walk;
});



document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".nav-list");
    const overlay = document.querySelector(".overlay");

    // Mở menu
    menuToggle.addEventListener("click", function () {
        navList.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    // Đóng menu khi bấm vào overlay
    overlay.addEventListener("click", function () {
        navList.classList.remove("active");
        overlay.classList.remove("active");
    });
});


