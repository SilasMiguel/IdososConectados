let botaoMenu = document.getElementById('botao-menu');
let menuLateral = document.getElementById('menu-lateral');
let escurecedor = document.getElementById('escurecedor');
let botoesCloseArticle = document.querySelectorAll('.botao-close-article');


botaoMenu.addEventListener('click', ()=>{
    menuLateral.classList.add('abrir-menu');
})

menuLateral.addEventListener('click', ()=>{
    menuLateral.classList.remove('abrir-menu');
})

escurecedor.addEventListener('click', ()=>{
    menuLateral.classList.remove('abrir-menu');
})

function toggleExpanded(element) {
    var articles = document.querySelectorAll('.article-content');
    articles.forEach(function(article) {
        article.classList.remove('expanded');
    });
    element.closest('.article-content').classList.add('expanded');
    
    var sectionContent = document.querySelector('.section-content');
    sectionContent.style.setProperty('grid-template-rows', 'repeat(3, 1fr)');

}

botoesCloseArticle.forEach(function(botaoClose) {
    botaoClose.addEventListener('click', function() {
        this.closest('.article-content').classList.remove('expanded');
    });
});





