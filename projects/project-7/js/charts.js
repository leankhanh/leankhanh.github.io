var traffic = document.getElementById('traffic-chart');
var daily = document.getElementById('daily-chart');
var mobile = document.getElementById('mobile-chart');

var chart = new Chart(traffic, {
  // The type of chart we want to create
  type: 'line',
  // The data for our dataset
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [{
            backgroundColor: 'rgba(116, 119, 191, 0.2)',
            borderColor: 'rgba(116, 119, 191, 1)',
            data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
            borderWidth: 1,
            pointBackgroundColor: 'white',
            pointRadius: '4',
            lineTension: 0,
        }],
    },
  options: {
    legend: {
            display: false
        },
    responsive: true,
    responsiveAnimationDuration: 0,
    maintainAspectRatio: false,
    scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
  }
});

chart += new Chart(daily, {
  // The type of chart we want to create
  type: 'bar',
  // The data for our dataset
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: [
              'rgba(53, 96, 165, 1)',
              'rgba(53, 96, 165, 1)',
              'rgba(53, 96, 165, 1)',
              'rgba(53, 96, 165, 1)',
              'rgba(53, 96, 165, 1)',
              'rgba(53, 96, 165, 1)',
              'rgba(53, 96, 165, 1)',
            ],
            borderColor: [
              'rgba(53, 96, 165, 1)',
              'rgba(53, 96, 165, 1)',
              'rgba(53, 96, 165, 1)',
              'rgba(53, 96, 165, 1)',
              'rgba(53, 96, 165, 1)',
              'rgba(53, 96, 165, 1)',
              'rgba(53, 96, 165, 1)',
            ],
            borderWidth: 1,
        }],
      },
  options: {
    legend: {
            display: false
        },
    responsive: true,
    responsiveAnimationDuration: 0,
    maintainAspectRatio: false,
    scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
  }
});

chart += new Chart(mobile, {
  // The type of chart we want to create
  type: 'doughnut',
  // The data for our dataset
  data: {
    labels: ["Phones", "Tablets", "Desktop"],
    datasets: [{
            data: [50, 20, 45],
            backgroundColor: [
              'rgba(53, 96, 165, 1)',
              'rgba(109, 188, 138, 1)',
              'rgba(124, 201, 192, 1)',
            ],
            borderColor: [
              'rgba(53, 96, 165, 1)',
              'rgba(109, 188, 138, 1)',
              'rgba(124, 201, 192, 1)',
            ],
            borderWidth: 1,
          }],
        },
  options: {
    responsive: true,
    responsiveAnimationDuration: 0,
    maintainAspectRatio: false,
    scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
  }
});
