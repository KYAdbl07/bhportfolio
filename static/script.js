const mainHeading = document.querySelector('#main-content h1');
const contentContainer = document.querySelector('#content-container');
const navElements = document.querySelectorAll('#nav-elements a');


function updateH1Text(event) { //For Changing the Heading in the Main content area
    mainHeading.textContent = this.textContent;
}

function makeActive(event) { //For creating the background-color behind nav elements
    navElements.forEach(link => {
        link.classList.remove('active');
    });

    this.classList.add('active');
    const color = this.dataset.color
    console.log(color)
    contentContainer.style.borderColor = color;
    mainHeading.style.color = color;
    
    event.stopPropagation();
}

navElements.forEach(link => { //updateH1Text(event): For Changing the Heading in the Main content area
    link.addEventListener('click', updateH1Text);
});

navElements.forEach(link => { //makeActive(event): For creating the background-color behind nav elements
    link.addEventListener('click', makeActive)
});

document.body.addEventListener('click', function() {
    navElements.forEach(link => {
        link.classList.remove('active');
        contentContainer.style.borderColor = '';
        mainHeading.style.color = '';
        mainHeading.innerHTML = 'TIM HAY';
    });
});