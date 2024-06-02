
         // Gráfico de barras 1
         var ctxBar1 = document.getElementById('barChart1').getContext('2d');
         var barChart1 = new Chart(ctxBar1, {
             type: 'bar',
             data: {
                 labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
                 datasets: [{
                     label: 'Atenciones por mes',
                     data: [120, 150, 100, 180, 200],
                     backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                     borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
                     borderWidth: 1
                 }]
             },
             options: {
                 scales: {
                     yAxes: [{
                         ticks: {
                             beginAtZero: true
                         }
                     }]
                 }
             }
         });
 
         // Gráfico de barras 2
         var ctxBar2 = document.getElementById('barChart2').getContext('2d');
         var barChart2 = new Chart(ctxBar2, {
             type: 'bar',
             data: {
                 labels: ['Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre'],
                 datasets: [{
                     label: 'Atenciones por mes',
                     data: [150, 180, 120, 200, 160],
                     backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                     borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
                     borderWidth: 1
                 }]
             },
             options: {
                 scales: {
                     yAxes: [{
                         ticks: {
                             beginAtZero: true
                         }
                     }]
                 }
             }
         });
 
         // Gráfico de líneas 1
         var ctxLine1 = document.getElementById('lineChart1').getContext('2d');
         var lineChart1 = new Chart(ctxLine1, {
             type: 'line',
             data: {
                 labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
                 datasets: [{
                     label: 'Atenciones por mes',
                     data: [120, 150, 100, 180, 200],
                     borderColor: 'rgba(255, 99, 132, 0.6)',
                     fill: false
                 }]
             },
             options: {
                 responsive: true,
                 maintainAspectRatio: false
             }
         });
 
         // Gráfico de líneas 2
         var ctxLine2 = document.getElementById('lineChart2').getContext('2d');
         var lineChart2 = new Chart(ctxLine2, {
             type: 'line',
             data: {
                 labels: ['Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre'],
                 datasets: [{
                     label: 'Atenciones por mes',
                     data: [150, 180, 120, 200, 160],
                     borderColor: 'rgba(54, 162, 235, 0.6)',
                     fill: false
                 }]
             },
             options: {
                 responsive: true,
                 maintainAspectRatio: false
             }
         });
    