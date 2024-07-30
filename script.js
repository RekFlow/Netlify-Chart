const aspects = [
    { name: 'Natural language processing', icon: '💬' },
    { name: 'Multimodal abilities', icon: '📷' },
    { name: 'Reasoning and problem-solving', icon: '🧠' },
    { name: 'Specialized knowledge domains', icon: '📚' },
    { name: 'Ethical considerations and safety', icon: '🛡️' },
    { name: 'Ease of integration', icon: '🔧' },
    { name: 'Scalability and performance', icon: '⚡' }
];

const data = {
    'Natural language processing': {
        Gemini: { rating: 'Excellent', description: 'Advanced NLP with multilingual support' },
        Claude: { rating: 'Excellent', description: 'Sophisticated language understanding and generation' },
        ChatGPT: { rating: 'Excellent', description: 'High-quality language processing across various tasks' },
        LLAMA: { rating: 'Very Good', description: 'Strong NLP capabilities, especially in open-source context' }
    },
    // Other aspects follow...
};

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

function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchBar");
    filter = input.value.toUpperCase();
    table = document.getElementById("comparisonTable");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
        tr[i].style.display = "none";
        td = tr[i].getElementsByTagName("td");
        for (var j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    break;
                }
            }
        }
    }
}
