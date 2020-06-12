const frame = document.querySelector('.projects-frame');
const showFrame = document.querySelector('.show-frame');
const hideFrame = document.querySelector('.hide-frame');
const form = document.querySelector('form');
const projects = {
    'scss': 'example/scss-preprocessor/index.html',
    'life-blog': 'example/life-blog/index.html',
    'bootstrap': 'example/bootstrap-layout/index.html',
    'travel-blog': 'example/travel-blog/index.html'
}

let showProject;

form.addEventListener('click', event => {
    if (event.target.getAttribute('name') === 'preview') {
        showProject = event.target.value;
    }
});

showFrame.addEventListener('click', () => {

    if (showProject) {
        if (frame.classList.contains('hidden')) {
            frame.classList.remove('hidden');
            frame.classList.add('active');
        }
        frame.src = projects[showProject];
    }
});

hideFrame.addEventListener('click', () => {
    if (frame.classList.contains('active')) {
        frame.classList.remove('active');
        frame.classList.add('hidden');
    }
});