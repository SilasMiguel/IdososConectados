function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    var sectionPosition = section.offsetTop; // Obtém o topo do eixo Y
    var mainPadding = 100; // Tamanho do padding do main

    // Rola a página até a posição da seção menos o padding do main
    window.scrollTo({
        top: sectionPosition - mainPadding,
        behavior: 'smooth' // Rola suavemente para a posição especificada
    });
}

function drop() {
    var dropdownMenu = document.querySelector('.dropdown-menu');
    if (dropdownMenu.style.display === 'none') {
        dropdownMenu.style.display = 'flex';
    } else {
        dropdownMenu.style.display = 'none';
    }
}