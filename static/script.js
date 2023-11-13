let doIt_btn = document.getElementById('doIt')
let hackThePlanet = document.querySelector('h1')

function doingIt() {
    hackThePlanet.style.backgroundColor = 'white'
    hackThePlanet.style.color = "black"
};

doIt_btn.addEventListener('click', doingIt);
