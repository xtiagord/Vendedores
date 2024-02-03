const atendentes = ['Atendente 1', 'Atendente 2', 'Atendente 3', 'Atendente 4', 'Atendente 5', 'Atendente 6', 'Atendente 7', 'Atendente 8', 'Atendente 9'];

let indiceAtual = 0;

function mostrarAtendenteAtual() {
    document.getElementById('nomeAtendente').textContent = atendentes[indiceAtual];
}
function proximoAtendente() {
    indiceAtual = (indiceAtual + 1) % atendentes.length;
    mostrarAtendenteAtual();
}
mostrarAtendenteAtual();