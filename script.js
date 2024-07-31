// Function to toggle visibility of additional details
function toggleDetails() {
    var details = document.getElementById('details');
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

// Populating the comparison table
const table = document.getElementById('comparisonTable');
aspects.forEach(aspect => {
    const row = table.insertRow();
    const aspectCell = row.insertCell();
    aspectCell.innerHTML = `${aspect.icon} ${aspect.name}`;
    ['Gemini', 'Claude', 'ChatGPT', 'LLAMA'].forEach(model => {
        const cell = row.insertCell();
        const { rating, description } = data[aspect.name][model];
        cell.innerHTML = `<strong>${rating}</strong><br>${description}`;
        cell.className = rating.toLowerCase().replace(' ', '-');
        cell.title = description; // Tooltip
    });
});

// Example chart implementation (you need Chart.js library)
const ctx = document.getElementById('performanceChart').getContext('2d');
const performanceChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Gemini', 'Claude', 'ChatGPT', 'LLAMA'],
        datasets: [{
            label: 'Overall Performance',
            data: [5, 4, 3, 2], // Replace with actual data
            backgroundColor: ['#1a7f37', '#2ea043', '#d29922', '#e36209'],
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
