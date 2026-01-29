// Simplified renderer - NO special cases!
function updateProfessions() {
    const container = document.getElementById('professionsContent');
    const classData = getClassData();
    const lang = window.currentLanguage || 'de';

    if (!classData || !classData.professions) {
        container.innerHTML = '<p>No data</p>';
        return;
    }

    let html = '<div class="space-y-3">';
    html += classData.professions.map(prof => {
        const name = lang === 'de' ? prof.name : prof.nameEn;
        const reason = lang === 'de' ? prof.reason : prof.reasonEn;
        return `
            <div class="bg-druid-primary/10 border border-druid-primary/30 rounded-lg p-4">
                <h4 class="font-bold text-druid-primary">${name}</h4>
                <p class="text-sm text-gray-300">${reason}</p>
            </div>
        `;
    }).join('');
    html += '</div>';

    if (classData.professionsAvoid) {
        const avoid = lang === 'de' ? classData.professionsAvoid : classData.professionsAvoidEn;
        html += `<div class="mt-4"><h4 class="text-red-400">Avoid:</h4><ul>`;
        html += avoid.map(p => `<li>❌ ${p}</li>`).join('');
        html += '</ul></div>';
    }

    container.innerHTML = html;
}
