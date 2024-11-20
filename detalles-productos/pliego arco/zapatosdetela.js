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
searchIcon.addEventListener('click', function() {
    searchBar.classList.toggle('active');
});