const img = document.querySelectorAll('.gallery-footer__item');
document.querySelector('.gallery-footer__items').addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        const src = event.target.dataset.fullImage;
        img.forEach(item => {
            item.classList.remove('gallery-footer__active');
        });
        event.target.classList.add('gallery-footer__active');
        document.querySelector('.gallery-preview__image').setAttribute('src', `image/${src}.${'jpg' || 'png'}`);
    }
});

//Close/open modal
const modal = document.getElementById("registrationForm");
const closeButton = document.querySelector('.form-call__close');

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('form-caller__link')) {
        event.preventDefault();
        blockNavigation.hidden = true;
        modal.style.visibility = 'visible';
        modal.style.opacity = 1;
    }
});

closeButton.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
    modal.style.opacity = 0;
});

document.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
        modal.style.visibility = 'hidden';
        modal.style.opacity = 0;
        document.onkeydown = null;
        blockNavigation.hidden = false;
    }
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.visibility = 'hidden';
        modal.style.opacity = 0;
        blockNavigation.hidden = false;
    }
});

function elementInViewport(el) {
    let bounds = el.getBoundingClientRect();
    return (
        (bounds.top + bounds.height > 0) && (window.innerHeight - bounds.top > 0));
}

document.addEventListener("scroll", (e) => {

    if (elementInViewport(headerSection)) {
        blockNavigation.hidden = true;
    } else {
        blockNavigation.hidden = false;
    }
});


jQuery(window).scroll(function () {
    var $sections = $('section');
    $sections.each(function (i, el) {
        var top = $(el).offset().top - 100;
        var bottom = top + $(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');

        if (scroll >= 2700) {
            $('a.active').removeClass('active');
            $('a[href="#' + id + '"]').addClass('active');
            $('a[href="contacts-section"]').addClass('active');
        }

        if (scroll > top && scroll < bottom) {
            $('a.active').removeClass('active');
            $('a[href="#' + id + '"]').addClass('active');

        }
    })
});


const anchorScrollUp = () => {
    const anchors = document.querySelector('.navigation-arrow__up');
    anchors.addEventListener('click', function (e) {
        e.preventDefault();
        
        const blockID = anchors.getAttribute('href').substr(1);
        
        document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        });
    });
}

const anchorScrollDown = () => {
    const anchors = document.querySelector('.navigation-arrow__down');
    anchors.addEventListener('click', function (e) {
        e.preventDefault();
        
        const blockID = anchors.getAttribute('href').substr(1);
        
        document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        });
    });
}

anchorScrollUp();
anchorScrollDown();

const galleryNavigation = document.querySelector('.gallery-footer__slider');

let count = 1;

galleryNavigation.addEventListener('click', (event) => {
    event.preventDefault();
    const images = document.querySelectorAll('.gallery-footer__item');
    if (event.target.classList.contains('fa-long-arrow-alt-right')) {

        if (count < images.length) {
            if (!count) {
                count = 1;
            }
            images[count - 1].classList.remove('gallery-footer__active');
            images[count ].classList.add('gallery-footer__active');
            document.querySelector('.gallery-preview__image').setAttribute('src', `image/${images[count].dataset.fullImage}.${'jpg' || 'png'}`);
            count++;
        } else {
            count = 0;
            images[images.length - 1].classList.remove('gallery-footer__active');
            images[count].classList.add('gallery-footer__active');
            document.querySelector('.gallery-preview__image').setAttribute('src', `image/${images[count].dataset.fullImage}.${'jpg' || 'png'}`);
        }
    }
    if (event.target.classList.contains('fa-long-arrow-alt-left')) {

        if (count < images.length && count > 0) {
            images[count].classList.remove('gallery-footer__active');
            images[count - 1].classList.add('gallery-footer__active');
            document.querySelector('.gallery-preview__image').setAttribute('src', `image/${images[count - 1].dataset.fullImage}.${'jpg' || 'png'}`);
            count--;
        } else {
            images[count].classList.remove('gallery-footer__active');
            images[images.length - 1].classList.add('gallery-footer__active');
            document.querySelector('.gallery-preview__image').setAttribute('src', `image/${images[count].dataset.fullImage}.${'jpg' || 'png'}`);
            if (!count) {
                count = 4;
            }
        }
    }
});