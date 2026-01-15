// Tips Carousel Functionality
let currentTipIndex = 0;

// Initialize tips carousel
function initTipsCarousel() {
    updateTipDisplay();

    document.getElementById('prevTip')?.addEventListener('click', () => {
        const tips = druidTips[window.currentLanguage];
        currentTipIndex = (currentTipIndex - 1 + tips.length) % tips.length;
        updateTipDisplay();
    });

    document.getElementById('nextTip')?.addEventListener('click', () => {
        const tips = druidTips[window.currentLanguage];
        currentTipIndex = (currentTipIndex + 1) % tips.length;
        updateTipDisplay();
    });

    // Auto-rotate tips every 15 seconds (optional)
    // setInterval(() => {
    //     const tips = druidTips[window.currentLanguage];
    //     currentTipIndex = (currentTipIndex + 1) % tips.length;
    //     updateTipDisplay();
    // }, 15000);
}

// Update tip display
function updateTipDisplay() {
    const tips = druidTips[window.currentLanguage];
    const tip = tips[currentTipIndex];
    const container = document.getElementById('tipContent');
    const counter = document.getElementById('tipCounter');

    if (!container || !tip) return;

    // Category color mapping
    const categoryColors = {
        "Leveling Tricks": "text-blue-400",
        "Combat": "text-red-400",
        "Gold Making": "text-yellow-400",
        "Professions": "text-green-400",
        "Survival": "text-purple-400"
    };

    // Get category in English for color mapping
    const categoryColor = categoryColors[tip.category] || "text-gray-400";

    container.innerHTML = `
        <div class="space-y-3">
            <div class="flex items-center space-x-2">
                <span class="text-2xl">${tip.icon}</span>
                <span class="text-sm ${categoryColor} font-semibold">${tip.category}</span>
            </div>
            <h3 class="text-xl font-bold text-white">${tip.title}</h3>
            <p class="text-gray-300 leading-relaxed">${tip.tip}</p>
        </div>
    `;

    if (counter) {
        counter.textContent = `${currentTipIndex + 1} / ${tips.length}`;
    }
}

// Re-render tips when language changes
function refreshTips() {
    currentTipIndex = 0; // Reset to first tip
    updateTipDisplay();
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initTipsCarousel();
});