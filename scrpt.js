const ctx = document.getElementById('chart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'],
    datasets: [{
      label: 'Citas por día',
      data: [5, 8, 6, 9, 7],
      backgroundColor: '#2E86C1'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  }
});