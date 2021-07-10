console.log('test')

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navlinks = document.querySelectorAll('.navlinks li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //burger animate:
        burger.classList.toggle('toggle');
    });

    navlinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 6 + 1.7}s`;
        console.log(index / 6 + 1.7);
    });
};

navSlide();
