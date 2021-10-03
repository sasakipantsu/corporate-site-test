// ------  hamburger  ------ //

const target = document.getElementById("hamburger__navigation");
target.addEventListener('click', () => {
    target.classList.toggle('open');
    const nav = document.getElementById("navigation");
    nav.classList.toggle('in');
});


