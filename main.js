let list = document.querySelectorAll('.pagina');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let count = list.length;
let active = 0;

// Atualiza o slide ativo
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
