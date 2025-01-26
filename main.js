let list = document.querySelectorAll('.pagina');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let count = list.length;
let active = 0;

// Função para verificar a largura da tela
function isLargeScreen() {
    return window.matchMedia("(min-width: 1025px)").matches;  // Verifica se a largura da tela é maior que 1024px
}

// Função para remover a classe 'active' se a tela for pequena
function handleResize() {
    if (!isLargeScreen()) {
        // Em telas pequenas, remove a classe 'active' de todos os slides
        list.forEach(pagina => pagina.classList.remove('active'));
    }
}

// Inicializa a verificação de largura
handleResize();  // Verifica logo de início

// Atualiza o slide ativo apenas se a tela for maior que 1024px
if (isLargeScreen()) {
    next.onclick = () => {
        // Remove a classe 'active' do slide atual
        let activeOld = document.querySelector('.pagina.active');
        activeOld.classList.remove('active');
        
        // Atualiza o índice de ativo
        active = (active + 1) % count; // Usa o operador % para voltar ao primeiro slide quando chegar no final
        
        // Adiciona a classe 'active' ao próximo slide
        list[active].classList.add('active');
    }

    prev.onclick = () => {
        // Remove a classe 'active' do slide atual
        let activeOld = document.querySelector('.pagina.active');
        activeOld.classList.remove('active');
        
        // Atualiza o índice de ativo
        active = (active - 1 + count) % count; // Usa o operador % para voltar ao último slide quando chegar no início
        
        // Adiciona a classe 'active' ao slide anterior
        list[active].classList.add('active');
    }
}

// Adiciona o evento de resize para monitorar mudanças no tamanho da tela
window.addEventListener('resize', handleResize);
