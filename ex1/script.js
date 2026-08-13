const botaoTeste = document.querySelector('#testarProjeto');
const statusProjeto = document.querySelector('#statusProjeto');

botaoTeste.addEventListener('click', () => {
    statusProjeto.textContent = 'Projeto verificado: HTML, CSS e JavaScript estão conectados.';
    statusProjeto.classList.add('sucesso');
    botaoTeste.textContent = 'Ambiente verificado';
});