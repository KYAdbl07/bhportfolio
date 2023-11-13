const mainHeading = document.querySelector('#main-content h1');
const navLinks = document.querySelectorAll('#sidebar a');

function updateH1Text(event) {
    mainHeading.textContent = this.textContent;
}

navLinks.forEach(link => {
    link.addEventListener('click', updateH1Text);
});