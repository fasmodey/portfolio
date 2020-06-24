pageColor.addEventListener('click', () => {
    let link = document.querySelector('link[href="css/style1.css"]') || document.querySelector('link[href="css/style2.css"]');

    link.getAttribute('href') === 'css/style1.css' ? link.setAttribute('href', 'css/style2.css') : link.setAttribute('href', 'css/style1.css');
});