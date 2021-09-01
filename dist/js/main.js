let itemOverlay = Array.from(document.querySelectorAll('.item'));

const clickEffect = (e) => {
    if(mediaDevice.matches) {
        e.preventDefault();
        clicked = document.querySelector('.item.clicked');
        const unclicked = document.querySelectorAll('.item');
        if(unclicked){
            e.currentTarget.classList.add('clicked');
            clicked.classList.remove('clicked');
        }
    }
}

itemOverlay.forEach(node => {
    node.addEventListener('click', clickEffect);
});

const mediaDevice = window.matchMedia('(max-width: 799px)');