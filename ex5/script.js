const botaoDirecao = document.querySelector('#alternarDirecao');
const listaServicos = document.querySelector('#listaServicos');
const statusLayout = document.querySelector('#statusLayout');

botaoDirecao.addEventListener('click', () => {
    const modoColunaAtivo = listaServicos.classList.toggle('modo-coluna');

    botaoDirecao.setAttribute('aria-pressed', String(modoColunaAtivo));
    botaoDirecao.textContent = modoColunaAtivo
        ? 'Exibir cartões em linhas'
        : 'Exibir cartões em coluna';
    statusLayout.textContent = modoColunaAtivo
        ? 'Cartões organizados em uma única coluna.'
        : 'Cartões distribuídos em linhas flexíveis.';
});