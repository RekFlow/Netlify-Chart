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
    'Multimodal abilities': {
        Gemini: { rating: 'Excellent', description: 'Robust image, video, and audio processing' },
        Claude: { rating: 'Very Good', description: 'Strong image analysis, limited video capabilities' },
        ChatGPT: { rating: 'Good', description: 'Image analysis available, other modalities limited' },
        LLAMA: { rating: 'Limited', description: 'Primarily focused on text, limited multimodal features' }
    },
    'Reasoning and problem-solving': {
        Gemini: { rating: 'Excellent', description: 'Advanced logical reasoning and problem-solving skills' },
        Claude: { rating: 'Excellent', description: 'Strong analytical capabilities and structured thinking' },
        ChatGPT: { rating: 'Very Good', description: 'Capable of handling complex problems with guidance' },
        LLAMA: { rating: 'Good', description: 'Solid reasoning abilities, may require more prompting' }
    },
    'Specialized knowledge domains': {
        Gemini: { rating: 'Very Good', description: 'Broad knowledge base across various domains' },
        Claude: { rating: 'Excellent', description: 'Extensive specialized knowledge, particularly in scientific and technical areas' },
        ChatGPT: { rating: 'Very Good', description: 'Wide-ranging knowledge, occasional inconsistencies' },
        LLAMA: { rating: 'Good', description: 'Decent specialized knowledge, may require fine-tuning' }
    },
    'Ethical considerations and safety': {
        Gemini: { rating: 'Very Good', description: 'Strong ethical guidelines and safety measures' },
        Claude: { rating: 'Excellent', description: 'Robust ethical training and proactive safety considerations' },
        ChatGPT: { rating: 'Very Good', description: 'Well-developed safety features and content filtering' },
        LLAMA: { rating: 'Good', description: 'Basic safety features, relies more on implementation' }
    },
    'Ease of integration': {
        Gemini: { rating: 'Very Good', description: 'Well-documented APIs and integration tools' },
        Claude: { rating: 'Very Good', description: 'User-friendly APIs and comprehensive documentation' },
        ChatGPT: { rating: 'Excellent', description: 'Extensive ecosystem and developer-friendly tools' },
        LLAMA: { rating: 'Good', description: 'Open-source nature allows flexibility, requires more setup' }
    },
    'Scalability and performance': {
        Gemini: { rating: 'Excellent', description: 'Highly scalable with optimized performance' },
        Claude: { rating: 'Very Good', description: 'Efficient processing and good scalability' },
        ChatGPT: { rating: 'Excellent', description: 'Robust infrastructure for high-volume requests' },
        LLAMA: { rating: 'Good', description: 'Scalable, but may require more resources for large deployments' }
    }
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