<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    <style>
        body {
            margin: 0;
            font-family: Arial;
            background-color: #f4f6f9;
            padding: 20px;
        }

        h1 {
            text-align: center;
        }

        .container {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
        }

        .card {
            background: white;
            padding: 20px;
            border-radius: 12px;
            width: 500px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        canvas {
            width: 100% !important;
            height: 300px !important;
        }
    </style>
</head>

<body>

    <h1>Dashboard Temperatura e Umidade</h1>

    <div class="container">
        <div class="card">
            <h3>Gráfico por Horário</h3>
            <canvas id="linha"></canvas>
        </div>

        <div class="card">
            <h3>Média por Mês</h3>
            <canvas id="barra"></canvas>
        </div>
    </div>

</body>

</html>

<script>
    new Chart(document.getElementById('linha'), {
        type: 'line',
        data: {
            labels: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
            datasets: [
                {
                    label: 'Temperatura',
                    data: [30, 29, 28, 25, 22, 23],
                    borderColor: '#ff6384',
                    backgroundColor: '#ff6384',
                    tension: 0.3
                },
                {
                    label: 'Umidade',
                    data: [80, 82, 80, 85, 80, 83],
                    borderColor: '#36a2eb',
                    backgroundColor: '#36a2eb',
                    tension: 0.3
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' }
            },
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
    new Chart(document.getElementById('barra'), {
        type: 'bar',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
            datasets: [
                {
                    label: 'Temperatura Média',
                    data: [22, 24, 27, 23, 20, 18],
                    backgroundColor: '#ff6384'
                },
                {
                    label: 'Umidade Média',
                    data: [90, 89, 93, 87, 88, 82],
                    backgroundColor: '#36a2eb'
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
</script>
