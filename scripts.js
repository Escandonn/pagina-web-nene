function typeEffect(element, text, delay, callback) {
    let index = 0;
    element.style.visibility = 'visible';
    const interval = setInterval(() => {
        element.textContent += text[index];
        index++;
        if (index === text.length) {
            clearInterval(interval);
            if (callback) callback();
        }
    }, delay);
}

document.addEventListener('DOMContentLoaded', function () {
    const parrafo1 = document.getElementById('parrafo-1');
    const parrafo2 = document.getElementById('parrafo-2');
    const parrafo3 = document.getElementById('parrafo-3');

    typeEffect(parrafo1, 'NO ES HACER DINERO', 100, () => {
        typeEffect(parrafo2, 'ES MULTIPLICARLO', 100, () => {
            typeEffect(parrafo3, 'POR QUE EL DINERO SE HIZO PA GASTARLO', 100);
        });
    });
});
