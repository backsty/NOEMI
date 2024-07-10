document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');

    burgerMenu.addEventListener('click', function () {
        mobileMenu.style.display = 'flex';
        console.log('ababababba')
    });

    mobileMenuClose.addEventListener('click', function () {
        mobileMenu.style.display = 'none';
    });

    // Close menu when clicking outside of it
    mobileMenu.addEventListener('click', function (event) {
        if (event.target === mobileMenu) {
            mobileMenu.style.display = 'none';
        }
    });

    document.getElementsByClassName('mobile__menu-item')
    Array.prototype.forEach.call(
        document.getElementsByClassName('mobile__menu-item'),
        (elem) => {
            elem.addEventListener('click', function () {
                mobileMenu.style.display = 'none';
            });
        }
    )
});