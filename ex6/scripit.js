const topicos = document.querySelectorAll('.topico');
const mensagemTopico = document.querySelector('#mensagemTopico');
const botaoAvancar = document.querySelector('#avancarTopico');

let indiceAtual = 0;

botaoAvancar.addEventListener('click', () => {
    topicos[indiceAtual].classList.remove('ativo');
    indiceAtual = (indiceAtual + 1) % topicos.length;
    topicos[indiceAtual].classList.add('ativo');

    const tituloAtual = topicos[indiceAtual].querySelector('h3').textContent;
    mensagemTopico.textContent = Tópico em destaque: ${tituloAtual}.;
});