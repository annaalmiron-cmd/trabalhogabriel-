const botaoTema = document.querySelector('#alternarTema');
const statusTema = document.querySelector('#statusTema');

botaoTema.addEventListener('click', () => {
    const temaClaroAtivo = document.body.classList.toggle('tema-claro');

    botaoTema.setAttribute('aria-pressed', String(temaClaroAtivo));
    botaoTema.textContent = temaClaroAtivo ? 'Ativar tema escuro' : 'Ativar tema claro';
    statusTema.textContent = temaClaroAtivo ? 'Tema claro ativo.' : 'Tema escuro ativo.';
});