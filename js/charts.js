document.addEventListener("DOMContentLoaded", function() {
    // Example chart for Core Concepts page
    if (document.getElementById('costFunctionChart')) {
        const ctx = document.getElementById('costFunctionChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: Array.from({length: 10}, (_, i) => i + 1),
                datasets: [{
                    label: 'Cost Function',
                    data: [100, 80, 65, 50, 40, 30, 22, 15, 10, 5],
                    borderColor: '#00aaff',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
});
