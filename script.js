
const toggleButton = document.getElementById('toggle-btn');
const dropdownList = document.getElementById('dropdown-list');
toggleButton.addEventListener('click', function() {
    dropdownList.classList.toggle('show');
    toggleButton.classList.add('rotate');
    setTimeout(function() {
        toggleButton.classList.remove('rotate');
    }, 2000);
});

const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');
const products = document.querySelectorAll('.producto');

searchBar.addEventListener('input', function() {
    const searchText = searchBar.value.toLowerCase();

    products.forEach(product => {
        const productAltText = product.querySelector('img').alt.toLowerCase();
        
        if (productAltText.includes(searchText)) {
            product.classList.remove('product-hidden'); // Muestra el producto si coincide
        } else {
            product.classList.add('product-hidden'); // Oculta el producto si no coincide
        }
    });
});

searchIcon.addEventListener('click', function() {
    searchBar.classList.toggle('active');



});



const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const totalSlides = slide.length;
for (let i = 0; i < totalSlides; i++) {
    const cloneFirst = slide[i].cloneNode(true); 
    const cloneLast = slide[i].cloneNode(true);  
    slides.appendChild(cloneFirst); 
    slides.insertBefore(cloneLast, slides.firstChild); 
}
