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
    });
});
