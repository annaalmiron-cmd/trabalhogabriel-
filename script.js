const formulario = document.querySelector('#cadastroCliente');
const statusCadastro = document.querySelector('#statusCadastro');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const dados = new FormData(formulario);
    const nome = dados.get('nome');
    const servico = formulario.elements.servico.options[formulario.elements.servico.selectedIndex].text;
    const retorno = dados.get('retorno');

    statusCadastro.textContent = `Cadastro de ${nome} recebido. Interesse: ${servico}. Retorno preferido: ${retorno}.`;
    statusCadastro.hidden = false;
    statusCadastro.focus();
});

formulario.addEventListener('reset', () => {
    statusCadastro.hidden = true;
    statusCadastro.textContent = '';
});