// Deixa textos e linhas de grade claros, para aparecerem no fundo preto
Chart.defaults.color = '#ffffff';
Chart.defaults.borderColor = '#333333';

const corTemp = '#e4572e';
const corUmid = '#2a7f9e';

// Gráfico de linhas
new Chart(document.getElementById('graficoLinhas'), {
  type: 'line',
  data: {
    labels: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
    datasets: [
      { label: 'Temperatura (°C)', data: [30, 29, 28, 25, 22, 23], borderColor: corTemp, backgroundColor: corTemp, tension: 0.3 },
      { label: 'Umidade (%)', data: [80, 82, 80, 85, 80, 83], borderColor: corUmid, backgroundColor: corUmid, tension: 0.3 }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: { y: { beginAtZero: true } }
  }
});

// Gráfico de barras
new Chart(document.getElementById('graficoBarras'), {
  type: 'bar',
  data: {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [
      { label: 'Temperatura Média (°C)', data: [22, 24, 27, 23, 20, 18], backgroundColor: corTemp },
      { label: 'Umidade Média (%)', data: [90, 89, 93, 87, 88, 82], backgroundColor: corUmid }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: { y: { beginAtZero: true } }
  }
});
