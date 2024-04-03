// Função para formatar o valor do faturamento total
function formatarFaturamentoTotal() {
  var faturamentoTotalInput = document.getElementById("faturamento-total");
  var valor = faturamentoTotalInput.value.trim().replace(/R\$/, ''); // Remover o símbolo de "R$"

  // Remover apenas pontos
  valor = valor.replace(/\./g, '');

  // Verificar se o valor está vazio ou não é um número
  if (valor === '' || isNaN(parseFloat(valor))) {
    valor = '0';
  }

  // Adicionar vírgula a cada 3 dígitos após o ponto decimal
  valor = valor.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

  // Atualizar o valor no campo, removendo espaços extras no início
  faturamentoTotalInput.value = "R$ " + valor;

  // Chamar a função para calcular o ressarcimento
  calcularRessarcimento();
}

// Chama a função formatarFaturamentoTotal() quando o usuário digita algo no campo (evento input)
document.getElementById("faturamento-total").addEventListener("input", formatarFaturamentoTotal);







// Função para calcular o ressarcimento
function calcularRessarcimento() {
  var faturamentoTotalInput = document.getElementById("faturamento-total");
  var faturamentoTotalValue = faturamentoTotalInput.value.trim().replace(/R\$/, '').replace(/\./g, '').trim();

  // Converter para número
  var faturamentoTotal = parseFloat(faturamentoTotalValue);

  if (isNaN(faturamentoTotal)) {
    alert("Por favor, insira um valor válido para o Faturamento Total.");
    return;
  }

  var meses = parseInt(document.getElementById("meses").value);

  var baseCalculo = faturamentoTotal * 0.012;

  // Formatar a base de cálculo com vírgula a cada 3 dígitos
  var baseCalculoFormatado = baseCalculo.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Atualizar o elemento HTML com o valor da base de cálculo formatado
  document.getElementById("base-calculo").innerText = "Base de Cálculo: R$ " + baseCalculoFormatado;
  
  var saldoMedio = (baseCalculo * meses) - 0.20; // Subtrai 20%

  // Formatar o resultado sem arredondamento
  var saldoMedioFormatado = saldoMedio.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  document.getElementById("resultado").innerText = "O saldo médio é: R$ " + saldoMedioFormatado;
}
