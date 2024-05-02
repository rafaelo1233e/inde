window.alert("Ola tudo bem?")

function calcular() {
    var receitasFixas = parseFloat(document.getElementById('receitas-fixas').value) || 0;
    var receitasVariaveis = parseFloat(document.getElementById('receitas-variaveis').value) || 0;
    var despesasFixas = parseFloat(document.getElementById('despesas-fixas').value) || 0;
    var despesasVariaveis = parseFloat(document.getElementById('despesas-variaveis').value) || 0;

    var totalReceitas = receitasFixas + receitasVariaveis;
    var totalDespesas = despesasFixas + despesasVariaveis;
    var saldo = totalReceitas - totalDespesas;

    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';
    resultadoDiv.innerHTML += 'Total de Receitas: R$' + totalReceitas.toFixed(2) + '<br>';
    resultadoDiv.innerHTML += 'Total de Despesas: R$' + totalDespesas.toFixed(2) + '<br>';
    resultadoDiv.innerHTML += 'Saldo: R$' + saldo.toFixed(2);
}
