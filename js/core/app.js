// ========================================
// GLOBAL STATE
// ========================================
window.currentLevel = 1;
let isBiSMode = false;

// Update all content based on current level
function updateAllContent() {
    if (isBiSMode) {
        updateBiSView();
    } else {
        updateTalents();
        updateRotation();
        updatePowerSpikes();
        updateClassQuests();
        updateLevelingGear();
        updateDungeons();
        updateProfessions();
        updateZones();
        updateLevelingStrategy();
        updateLevelSummary();
    }
}

// Helper functions for class data access
function getClassData() {
    // Use window.currentClass to determine which data to return
    if (window.currentClass === 'frost-mage' && typeof frostMageData !== 'undefined') {
        return frostMageData;
    }
    if (typeof feralDruidData !== 'undefined') {
        return feralDruidData;
    }
    console.error('No class data available!');
    return null;
}

function getClassLevelingGear() {
    if (window.currentClass === 'frost-mage' && typeof frostMageGear !== 'undefined') {
        return frostMageGear;
    }
    if (typeof feralDruidGear !== 'undefined') {
        return feralDruidGear;
    }
    return { weapons: [], gearSets: [], essentialItems: [] };
}

function getClassBiSData() {
    if (window.currentClass === 'frost-mage' && typeof frostMageBiS !== 'undefined') {
        return frostMageBiS;
    }

    // 🆕 FERAL DRUID: Handle DPS + Healer structure
    if (typeof feralDruidBiS !== 'undefined') {
        const selectedSpec = window.selectedDruidSpec || 'dps';

        if (selectedSpec === 'healer' && feralDruidBiS.healer) {
            return feralDruidBiS.healer;
        }

        return feralDruidBiS.dps;
    }

    return { preRaid: { items: [] } };
}

// ========================================
// TALENTS
// ========================================
function updateTalents() {
    const container = document.getElementById('talentsContent');
    if (!container) return;

    const classData = getClassData();

    // ✅ SAFE CHECK
    if (!classData || !classData.talents || !Array.isArray(classData.talents)) {
        container.innerHTML = '<p class="text-gray-400">Keine Talentdaten verfügbar</p>';
        return;
    }

    const currentTalents = classData.talents.filter(t =>
        currentLevel >= t.levelRange[0] && currentLevel <= t.levelRange[1]
    );

    const nextTalent = classData.talents.find(t =>
        currentLevel < t.levelRange[0]
    );

    let html = '';

    if (currentLevel < 10) {
        html = `
            <div class="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
                <p class="text-yellow-400">🔒 ${t('talents.unlockAt')}</p>
                <p class="text-sm text-gray-400 mt-2">${window.currentLanguage === 'de' ? 'Levle weiter! Nutze Starter-Rotation bis Level 10.' : 'Keep leveling! Use starter rotation until level 10.'}</p>
            </div>
        `;
    } else {
        // Current talent
        if (currentTalents.length > 0) {
            const talent = currentTalents[0];
            const lang = window.currentLanguage || 'de';
            const translatedPoints = lang === 'de' ? (talent.pointsDe || talent.points) : (talent.pointsEn || talent.points);
            const translatedReason = lang === 'de' ? (talent.reasonDe || talent.reason) : (talent.reasonEn || talent.reason);
            const translatedTree = lang === 'de' ? (talent.treeDe || talent.tree) : (talent.treeEn || talent.tree);

            html += `
                <div class="bg-druid-primary/10 border border-druid-primary/30 rounded-lg p-4">
                    <div class="flex items-start justify-between mb-2">
                        <h3 class="text-lg font-bold text-druid-primary">${t('talents.current')}: ${translatedPoints}</h3>
                        <span class="text-xs bg-druid-primary/20 px-2 py-1 rounded">${translatedTree}</span>
                    </div>
                    <p class="text-gray-300 mb-2">${translatedReason}</p>
                    ${(translatedPoints.includes('Mangle') || translatedPoints.includes('Zerfleischen') || translatedPoints.includes('Ice Barrier') || translatedPoints.includes('Kälteschild') || translatedPoints.includes('Ice Block') || translatedPoints.includes('Eisblock')) ? '<p class="text-red-400 font-bold mt-2">🔥🔥🔥 GAME CHANGER!</p>' : ''}
                </div>
            `;
        }

        // Next talent
        if (nextTalent) {
            const lang = window.currentLanguage || 'de';
            const translatedPoints = lang === 'de' ? (nextTalent.pointsDe || nextTalent.points) : (nextTalent.pointsEn || nextTalent.points);
            const translatedReason = lang === 'de' ? (nextTalent.reasonDe || nextTalent.reason) : (nextTalent.reasonEn || nextTalent.reason);
            const translatedTree = lang === 'de' ? (nextTalent.treeDe || nextTalent.tree) : (nextTalent.treeEn || nextTalent.tree);

            html += `
                <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mt-4">
                    <div class="flex items-start justify-between mb-2">
                        <h3 class="text-lg font-semibold text-gray-300">${t('talents.next')} (${t('common.level')} ${nextTalent.levelRange[0]}): ${translatedPoints}</h3>
                        <span class="text-xs bg-gray-700 px-2 py-1 rounded">${translatedTree}</span>
                    </div>
                    <p class="text-gray-400 text-sm">${translatedReason}</p>
                </div>
            `;
        }
    }

    container.innerHTML = html;
}

// ========================================
// ROTATION
// ========================================
function updateRotation() {
    const container = document.getElementById('rotationContent');
    if (!container) return;

    const classData = getClassData();

    // ✅ SAFE CHECK
    if (!classData || !classData.rotation) {
        container.innerHTML = '<p class="text-gray-400">Keine Rotationsdaten verfügbar</p>';
        return;
    }

    let rotationData = null;

    // Find the appropriate rotation
    if (currentLevel >= 70) rotationData = classData.rotation[70];
    else if (currentLevel >= 60) rotationData = classData.rotation[60];
    else if (currentLevel >= 50) rotationData = classData.rotation[50];
    else if (currentLevel >= 40) rotationData = classData.rotation[40];
    else if (currentLevel >= 30) rotationData = classData.rotation[30];
    else if (currentLevel >= 20) rotationData = classData.rotation[20];
    else if (currentLevel >= 10) rotationData = classData.rotation[10];
    else rotationData = classData.rotation[1];

    if (!rotationData) {
        container.innerHTML = '<p class="text-gray-400">Keine Rotation für dieses Level</p>';
        return;
    }

    const lang = window.currentLanguage || 'de';
    let html = '';

    // Opener
    if (rotationData.opener) {
        const openerList = lang === 'de' ? rotationData.opener : (rotationData.openerEn || rotationData.opener);
        html += `
            <div class="mb-4">
                <h4 class="text-sm font-semibold text-druid-primary mb-2">${t('rotation.opener')}:</h4>
                <div class="flex flex-wrap gap-2">
                    ${openerList.map((ability, i) => `
                        <span class="bg-druid-primary/20 px-3 py-1 rounded text-sm">
                            ${i + 1}. ${ability}
                        </span>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Main Rotation
    if (rotationData.rotation) {
        const rotationList = lang === 'de' ? rotationData.rotation : (rotationData.rotationEn || rotationData.rotation);
        html += `
            <div class="mb-4">
                <h4 class="text-sm font-semibold text-druid-primary mb-2">${t('rotation.rotation')}:</h4>
                <div class="space-y-2">
                    ${rotationList.map((ability, i) => `
                        <div class="flex items-center space-x-2">
                            <span class="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-xs">${i + 1}</span>
                            <span class="text-gray-300">${ability}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Buffs
    if (rotationData.buffs) {
        const buffsList = lang === 'de' ? rotationData.buffs : (rotationData.buffsEn || rotationData.buffs);
        html += `
            <div class="mb-4">
                <h4 class="text-sm font-semibold text-druid-primary mb-2">${t('rotation.keepActive')}:</h4>
                <div class="space-y-1">
                    ${buffsList.map(buff => `
                        <div class="flex items-center space-x-2">
                            <span class="text-green-400">✓</span>
                            <span class="text-gray-300 text-sm">${buff}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Cooldowns
    if (rotationData.cooldowns) {
        html += `
            <div class="mb-4">
                <h4 class="text-sm font-semibold text-red-400 mb-2">${t('rotation.cooldowns')}:</h4>
                <div class="space-y-1">
                    ${rotationData.cooldowns.map(cd => `
                        <div class="flex items-center space-x-2">
                            <span class="text-red-400">⏰</span>
                            <span class="text-gray-300 text-sm">${td(cd)}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Notes
    if (rotationData.notes) {
        const notesText = lang === 'de' ? rotationData.notes : (rotationData.notesEn || rotationData.notes);
        html += `
            <div class="bg-blue-900/20 border border-blue-700/50 rounded-lg p-3 mt-4">
                <p class="text-sm text-blue-300">💡 ${notesText}</p>
            </div>
        `;
    }

    container.innerHTML = html;
}

// ========================================
// POWER SPIKES
// ========================================
function updatePowerSpikes() {
    const container = document.getElementById('powerSpikesContent');
    if (!container) return;

    const classData = getClassData();

    // ✅ SAFE CHECK
    if (!classData || !classData.powerSpikes || !Array.isArray(classData.powerSpikes)) {
        container.innerHTML = '<p class="text-gray-400">Keine Power Spike Daten verfügbar</p>';
        return;
    }

    const lang = window.currentLanguage || 'de';

    const upcomingSpikes = classData.powerSpikes.filter(spike =>
        spike.level >= currentLevel && spike.level <= currentLevel + 10
    );

    const pastSpikes = classData.powerSpikes.filter(spike =>
        spike.level < currentLevel && spike.level >= currentLevel - 5
    );

    let html = '';

    // Upcoming power spikes
    if (upcomingSpikes.length > 0) {
        html += `
            <div class="mb-6">
                <h3 class="text-lg font-bold text-yellow-400 mb-3">${t('powerSpikes.upcoming')}:</h3>
                <div class="space-y-2">
                    ${upcomingSpikes.map(spike => {
            const reason = lang === 'de' ? spike.reason : (spike.reasonEn || spike.reason);
            return `
                            <div class="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-3">
                                <div class="flex items-start">
                                    <span class="text-2xl mr-3">${spike.level === currentLevel ? '🔥' : '⚡'}</span>
                                    <div>
                                        <p class="font-bold text-yellow-300">${t('common.level')} ${spike.level}</p>
                                        <p class="text-sm text-gray-300">${reason}</p>
                                    </div>
                                </div>
                            </div>
                        `;
        }).join('')}
                </div>
            </div>
        `;
    }

    // Recent power spikes
    if (pastSpikes.length > 0) {
        html += `
            <div>
                <h3 class="text-lg font-bold text-gray-400 mb-3">${t('powerSpikes.recent')}:</h3>
                <div class="space-y-2">
                    ${pastSpikes.map(spike => {
            const reason = lang === 'de' ? spike.reason : (spike.reasonEn || spike.reason);
            return `
                            <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-3">
                                <div class="flex items-start">
                                    <span class="text-xl mr-3 opacity-50">✓</span>
                                    <div>
                                        <p class="font-semibold text-gray-400">${t('common.level')} ${spike.level}</p>
                                        <p class="text-sm text-gray-400">${reason}</p>
                                    </div>
                                </div>
                            </div>
                        `;
        }).join('')}
                </div>
            </div>
        `;
    }

    container.innerHTML = html;
}

// ========================================
// CLASS QUESTS
// ========================================
function updateClassQuests() {
    const container = document.getElementById('classQuestsContent');
    if (!container) return;

    const classData = getClassData();

    // ✅ SAFE CHECK
    if (!classData || !classData.classQuests || !classData.classQuests.available || !Array.isArray(classData.classQuests.available)) {
        container.innerHTML = '<p class="text-gray-400">Keine Klassenquests verfügbar</p>';
        return;
    }

    const exactLevelQuest = classData.classQuests.available.find(q => q.level === currentLevel);
    const availableQuests = classData.classQuests.available.filter(q => q.level < currentLevel);
    const upcomingQuests = classData.classQuests.available.filter(q => q.level > currentLevel && q.level <= currentLevel + 10);

    let html = '';

    // EXACT LEVEL QUEST - EXPANDED
    if (exactLevelQuest) {
        html += `
            <div class="mb-6">
                <h3 class="text-lg font-bold text-green-400 mb-3">🔔 Available Now:</h3>
                <div class="space-y-3">
                    <div class="bg-green-900/20 border-2 border-green-500 rounded-lg p-4 shadow-lg">
                        <div class="flex items-start justify-between mb-2">
                            <h4 class="font-bold text-green-300">${td(exactLevelQuest.name)} (Level ${exactLevelQuest.level})</h4>
                            <span class="text-xs px-2 py-1 rounded ${
            exactLevelQuest.priority === 'critical' ? 'bg-red-700' :
                exactLevelQuest.priority === 'high' ? 'bg-orange-700' : 'bg-gray-700'
        }">${t('classQuests.priority.' + exactLevelQuest.priority)}</span>
                        </div>
                        <div class="text-sm text-gray-300 space-y-1">
                            <p>⏱️ ${t('classQuests.duration')}: ${td(exactLevelQuest.duration)}</p>
                            <p>📍 ${t('classQuests.location')}: ${td(exactLevelQuest.location)}</p>
                            ${exactLevelQuest.cost ? `<p>💰 ${t('classQuests.cost')}: ${td(exactLevelQuest.cost)}</p>` : ''}
                            <p>🎁 ${t('classQuests.reward')}: ${td(exactLevelQuest.reward)}</p>
                        </div>
                        ${exactLevelQuest.priority === 'critical' ? `
                            <div class="mt-3 p-2 bg-red-900/30 rounded text-sm text-red-300">
                                ⚠️ ${td(exactLevelQuest.notes)}
                            </div>
                        ` : `
                            <p class="mt-2 text-sm text-gray-400">${td(exactLevelQuest.notes)}</p>
                        `}
                    </div>
                </div>
            </div>
        `;
    }

    // PAST QUESTS - COLLAPSED
    if (availableQuests.length > 0) {
        html += `
            <div class="mb-6">
                <h3 class="text-lg font-bold text-gray-400 mb-3">✓ Completed/Past:</h3>
                <div class="space-y-2">
                    ${availableQuests.map(quest => `
                        <div class="bg-gray-800/30 border border-gray-700/50 rounded-lg p-3 opacity-60">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center space-x-2">
                                    <span class="text-green-500">✓</span>
                                    <h4 class="font-semibold text-gray-400">${td(quest.name)} (Level ${quest.level})</h4>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // UPCOMING QUESTS - COLLAPSED
    if (upcomingQuests.length > 0) {
        html += `
            <div>
                <h3 class="text-lg font-bold text-gray-400 mb-3">⏳ Upcoming:</h3>
                <div class="space-y-2">
                    ${upcomingQuests.map(quest => `
                        <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-3">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center space-x-2">
                                    <span class="text-yellow-500">⏰</span>
                                    <h4 class="font-semibold text-gray-300">${td(quest.name)} (Level ${quest.level})</h4>
                                </div>
                                <span class="text-xs px-2 py-1 rounded bg-gray-700">${td(quest.duration)}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    if (!exactLevelQuest && availableQuests.length === 0 && upcomingQuests.length === 0) {
        html = `
            <div class="text-center py-8 text-gray-400">
                <p class="text-lg">✓ ${t('classQuests.allComplete')}</p>
                <p class="text-sm mt-2">${t('classQuests.noMore')}</p>
            </div>
        `;
    }

    container.innerHTML = html;
}

// ========================================
// LEVELING GEAR
// ========================================
function updateLevelingGear() {
    const container = document.getElementById('gearContent');
    if (!container) return;

    const gearData = getClassLevelingGear();

    // ✅ SAFE CHECK
    if (!gearData) {
        container.innerHTML = '<p class="text-gray-400">Keine Gear-Daten verfügbar</p>';
        return;
    }

    // Find current weapon for this level
    const currentWeapon = gearData.weapons && Array.isArray(gearData.weapons) ?
        gearData.weapons.filter(w => w.level <= currentLevel).sort((a, b) => b.level - a.level)[0] : null;

    // Find next weapon upgrade
    const nextWeapon = gearData.weapons && Array.isArray(gearData.weapons) ?
        gearData.weapons.find(w => w.level > currentLevel) : null;

    // Find current gear set
    const currentGearSet = gearData.gearSets && Array.isArray(gearData.gearSets) ?
        gearData.gearSets.find(set =>
            currentLevel >= set.levelRange[0] && currentLevel <= set.levelRange[1]
        ) : null;

    const lang = window.currentLanguage || 'de';
    let html = '<div class="space-y-4">';

    // Current Weapon
    if (currentWeapon) {
        const weaponName = lang === 'de' ? currentWeapon.name : currentWeapon.nameEn;
        const weaponSource = lang === 'de' ? (currentWeapon.sourceDe || currentWeapon.source) : currentWeapon.source;

        html += `
            <div class="bg-druid-primary/10 border border-druid-primary/30 rounded-lg p-4">
                <h3 class="text-lg font-bold text-druid-primary mb-2">
                    🗡️ ${lang === 'de' ? 'Aktuelle Waffe' : 'Current Weapon'} (Level ${currentWeapon.level})
                </h3>
                <div class="space-y-1">
                    <p class="font-semibold text-green-400">${weaponName}</p>
                    <p class="text-sm text-gray-300">DPS: ${currentWeapon.dps}</p>
                    <p class="text-xs text-gray-400">${weaponSource}</p>
                </div>
            </div>
        `;
    }

    // Next Weapon Upgrade
    if (nextWeapon) {
        const weaponName = lang === 'de' ? nextWeapon.name : nextWeapon.nameEn;
        const weaponSource = lang === 'de' ? (nextWeapon.sourceDe || nextWeapon.source) : nextWeapon.source;

        html += `
            <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <h3 class="text-lg font-semibold text-gray-300 mb-2">
                    ⬆️ ${lang === 'de' ? 'Nächstes Waffen-Upgrade' : 'Next Weapon Upgrade'} (Level ${nextWeapon.level})
                </h3>
                <div class="space-y-1">
                    <p class="font-semibold text-yellow-400">${weaponName}</p>
                    <p class="text-sm text-gray-300">DPS: ${nextWeapon.dps}</p>
                    <p class="text-xs text-gray-400">${weaponSource}</p>
                </div>
            </div>
        `;
    }

    // Current Gear Set
    if (currentGearSet) {
        const setName = lang === 'de' ? (currentGearSet.nameDe || currentGearSet.name) : currentGearSet.name;

        html += `
            <div class="bg-purple-900/20 border border-purple-700/50 rounded-lg p-4">
                <h3 class="text-lg font-bold text-purple-400 mb-3">
                    👕 ${setName}
                </h3>
                <div class="space-y-2">
                    ${currentGearSet.items.map(item => {
            const slotName = lang === 'de' ? item.slot : item.slotEn;
            const itemName = lang === 'de' ? item.item : item.itemEn;
            return `
                            <div class="flex items-start space-x-2">
                                <span class="text-purple-300 font-semibold min-w-[100px]">${slotName}:</span>
                                <span class="text-gray-300">${itemName}</span>
                            </div>
                        `;
        }).join('')}
                </div>
            </div>
        `;
    }

    // Essential Items to Farm
    const relevantEssentials = gearData.essentialItems && Array.isArray(gearData.essentialItems) ?
        gearData.essentialItems.filter(item =>
            item.level >= currentLevel - 5 && item.level <= currentLevel + 15
        ) : [];

    if (relevantEssentials.length > 0) {
        html += `
            <div class="bg-orange-900/20 border border-orange-700/50 rounded-lg p-4">
                <h3 class="text-lg font-bold text-orange-400 mb-3">
                    ⭐ ${lang === 'de' ? 'Wichtige Items zum Farmen' : 'Essential Items to Farm'}
                </h3>
                <div class="space-y-3">
                    ${relevantEssentials.map(item => {
            const itemName = lang === 'de' ? item.name : item.nameEn;
            const itemSource = lang === 'de' ? (item.sourceDe || item.source) : item.source;
            const itemWhy = lang === 'de' ? item.why : item.whyEn;

            return `
                            <div class="border-l-4 border-orange-500 pl-3">
                                <p class="font-bold text-orange-300">${itemName} (Level ${item.level})</p>
                                <p class="text-sm text-gray-300 mt-1">${itemSource}</p>
                                <p class="text-xs text-gray-400 mt-1">${itemWhy}</p>
                            </div>
                        `;
        }).join('')}
                </div>
            </div>
        `;
    }

    html += '</div>';
    container.innerHTML = html;
}

// ========================================
// DUNGEONS
// ========================================
function updateDungeons() {
    const container = document.getElementById('dungeonsContent');
    if (!container) return;

    const classData = getClassData();
    const lang = window.currentLanguage || 'de';

    // ✅ SAFE CHECK
    if (!classData || !classData.dungeons || !Array.isArray(classData.dungeons)) {
        container.innerHTML = '<p class="text-gray-400">Keine Dungeon-Daten verfügbar</p>';
        return;
    }

    // Filter dungeons relevant for current level (within range or up to +5 levels)
    const relevantDungeons = classData.dungeons.filter(d =>
        currentLevel >= d.levelRange[0] - 3 && currentLevel <= d.levelRange[1] + 5
    );

    if (relevantDungeons.length === 0) {
        container.innerHTML = `<p class="text-gray-400 text-center py-4">${lang === 'de' ? 'Keine Dungeons für dein aktuelles Level verfügbar' : 'No dungeons available for your current level'}</p>`;
        return;
    }

    let html = '<div class="space-y-4">';

    relevantDungeons.forEach(dungeon => {
        const isInRange = currentLevel >= dungeon.levelRange[0] && currentLevel <= dungeon.levelRange[1];
        const dungeonName = lang === 'de' ? dungeon.name : dungeon.nameEn;
        const dungeonLocation = lang === 'de' ? dungeon.location : dungeon.locationEn;
        const dungeonFaction = lang === 'de' ? dungeon.faction : dungeon.factionEn;

        // SKIP DUNGEON?
        if (dungeon.skip) {
            const skipReason = lang === 'de' ? dungeon.skipReason : dungeon.skipReasonEn;
            html += `
                <div class="border-2 border-red-700/50 bg-red-900/10 rounded-lg p-4">
                    <div class="flex items-start justify-between mb-2">
                        <div>
                            <h4 class="font-bold text-lg text-red-400">${dungeonName}</h4>
                            <p class="text-sm text-gray-400">📍 ${dungeonLocation} | Level ${dungeon.levelRange[0]}-${dungeon.levelRange[1]} | ${dungeonFaction}</p>
                        </div>
                        <span class="text-xs px-3 py-1 rounded bg-red-700 text-white font-bold">❌ SKIP</span>
                    </div>
                    
                    <div class="mt-3 bg-red-900/20 border border-red-700/50 rounded p-3">
                        <p class="text-sm text-red-300">${skipReason}</p>
                    </div>
                </div>
            `;
        } else {
            // RECOMMENDED DUNGEON
            const reason = lang === 'de' ? dungeon.reason : dungeon.reasonEn;
            const runsRec = lang === 'de' ? dungeon.runsRecommended : dungeon.runsRecommendedEn;
            const lootList = lang === 'de' ? dungeon.loot : dungeon.lootEn;

            html += `
                <div class="border-2 ${isInRange ? 'border-druid-primary' : 'border-gray-700'} ${isInRange ? 'bg-druid-primary/10' : 'bg-gray-800/50'} rounded-lg p-4">
                    <div class="flex items-start justify-between mb-2">
                        <div>
                            <h4 class="font-bold text-lg ${isInRange ? 'text-druid-primary' : 'text-gray-300'}">${dungeonName}</h4>
                            <p class="text-sm text-gray-400">📍 ${dungeonLocation} | Level ${dungeon.levelRange[0]}-${dungeon.levelRange[1]} | ${dungeonFaction}</p>
                        </div>
                        ${isInRange ? `<span class="text-xs px-3 py-1 rounded bg-green-600 text-white font-bold">✓ ${lang === 'de' ? 'JETZT!' : 'NOW!'}</span>` : ''}
                    </div>
                    
                    <div class="mt-3 space-y-2">
                        ${reason ? `
                            <div class="bg-blue-900/20 border border-blue-700/50 rounded p-3">
                                <p class="text-sm text-blue-300">${reason}</p>
                            </div>
                        ` : ''}
                        
                        <div class="bg-black/30 rounded p-3 grid grid-cols-2 gap-2 text-xs">
                            <div>
                                <p class="text-yellow-400 font-semibold">📊 XP/Stunde:</p>
                                <p class="text-gray-300">${dungeon.xpPerHour}</p>
                            </div>
                            <div>
                                <p class="text-green-400 font-semibold">🔄 Empfohlen:</p>
                                <p class="text-gray-300">${runsRec}</p>
                            </div>
                        </div>
                        
                        ${lootList && lootList.length > 0 ? `
                            <div class="bg-black/30 rounded p-3">
                                <p class="text-xs font-semibold text-green-400 mb-1">🎁 ${lang === 'de' ? 'Wichtiger Loot:' : 'Important Loot:'}</p>
                                ${lootList.map(item => `<p class="text-xs text-gray-300">• ${item}</p>`).join('')}
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }
    });

    html += '</div>';
    container.innerHTML = html;
}

// ========================================
// PROFESSIONS
// ========================================
function updateProfessions() {
    const container = document.getElementById('professionsContent');
    if (!container) return;

    const classData = getClassData();
    const lang = window.currentLanguage || 'de';

    // ✅ SAFE CHECK
    if (!classData || !classData.professions || !Array.isArray(classData.professions)) {
        container.innerHTML = '<p class="text-gray-400">Keine Berufsdaten verfügbar</p>';
        return;
    }

    let html = `
        <div class="space-y-3">
            ${classData.professions.map(prof => {
        const name = lang === 'de' ? prof.name : prof.nameEn;
        const reason = lang === 'de' ? prof.reason : prof.reasonEn;
        return `
                    <div class="bg-druid-primary/10 border border-druid-primary/30 rounded-lg p-4">
                        <h4 class="font-bold text-druid-primary mb-2">${name}</h4>
                        <p class="text-sm text-gray-300">${reason}</p>
                        ${prof.priority === 1 ? '<span class="text-xs text-yellow-400">⭐ Top Pick</span>' : ''}
                    </div>
                `;
    }).join('')}
        </div>
    `;

    // Avoid
    if (classData.professionsAvoid && Array.isArray(classData.professionsAvoid) && classData.professionsAvoid.length > 0) {
        const avoidList = lang === 'de' ? classData.professionsAvoid : classData.professionsAvoidEn;
        html += `
            <div class="mt-4">
                <h3 class="text-lg font-bold text-red-400 mb-3">${lang === 'de' ? 'Zu vermeiden' : 'Avoid'}:</h3>
                <div class="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                    <ul class="space-y-1">
                        ${avoidList.map(prof => `
                            <li class="text-sm text-gray-300">❌ ${prof}</li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    container.innerHTML = html;
}

// ========================================
// ZONES
// ========================================
function updateZones() {
    const container = document.getElementById('zonesContent');
    if (!container) return;

    const classData = getClassData();

    // ✅ SAFE CHECK
    if (!classData || !classData.zones || !Array.isArray(classData.zones)) {
        container.innerHTML = '<p class="text-gray-400">Keine Zonendaten verfügbar</p>';
        return;
    }

    // Find current and next zone
    const currentZoneData = classData.zones.find(z =>
        z.level <= currentLevel && (classData.zones.find(nz => nz.level > z.level)?.level > currentLevel || !classData.zones.find(nz => nz.level > z.level))
    ) || classData.zones.find(z => z.level === currentLevel);

    const nextZone = classData.zones.find(z => z.level > currentLevel);

    const lang = window.currentLanguage || 'de';
    let html = '';

    if (currentZoneData) {
        const zoneName = lang === 'de' ? currentZoneData.zone : currentZoneData.zoneEn;
        html += `
            <div class="bg-druid-primary/10 border border-druid-primary/30 rounded-lg p-4 mb-4">
                <h3 class="text-lg font-bold text-druid-primary mb-2">${t('zones.current')}:</h3>
                <p class="text-xl text-gray-200">${zoneName}</p>
                <p class="text-sm text-gray-400 mt-1">${t('zones.levelRange')}: ${currentZoneData.level}+</p>
            </div>
        `;
    }

    if (nextZone) {
        const zoneName = lang === 'de' ? nextZone.zone : nextZone.zoneEn;
        html += `
            <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <h3 class="text-lg font-semibold text-gray-300 mb-2">${t('zones.next')} (Level ${nextZone.level}):</h3>
                <p class="text-lg text-gray-300">${zoneName}</p>
            </div>
        `;
    }

    container.innerHTML = html;
}

// ========================================
// LEVELING STRATEGY (🔥 UPDATED!)
// ========================================
function updateLevelingStrategy() {
    const container = document.getElementById('strategyContent');
    if (!container) return;

    const classData = getClassData();
    const lang = window.currentLanguage || 'de';

    // ✅ SAFE CHECK
    if (!classData || !classData.levelingStrategy) {
        container.innerHTML = `
            <div class="prose prose-invert max-w-none">
                <p class="text-gray-300">${t('strategy.level40to60')}</p>
            </div>
        `;
        return;
    }

    // Find the appropriate level bracket
    let strategyData = null;
    const brackets = Object.keys(classData.levelingStrategy).sort();

    for (const bracket of brackets) {
        const [min, max] = bracket.split('-').map(Number);
        if (currentLevel >= min && currentLevel <= max) {
            strategyData = classData.levelingStrategy[bracket];
            break;
        }
    }

    // If no exact match, find closest bracket
    if (!strategyData) {
        for (const bracket of brackets) {
            const [min] = bracket.split('-').map(Number);
            if (currentLevel < min) {
                strategyData = classData.levelingStrategy[bracket];
                break;
            }
        }
    }

    // Fallback to last bracket if still nothing
    if (!strategyData && brackets.length > 0) {
        strategyData = classData.levelingStrategy[brackets[brackets.length - 1]];
    }

    if (!strategyData) {
        container.innerHTML = `<p class="text-gray-400">Keine Strategie für dieses Level verfügbar</p>`;
        return;
    }

    // Build HTML
    const strategyText = lang === 'de' ? strategyData.strategy : (strategyData.strategyEn || strategyData.strategy);
    let html = `
        <div class="space-y-4">
            <div class="bg-druid-primary/10 border border-druid-primary/30 rounded-lg p-4">
                <h3 class="text-xl font-bold text-druid-primary mb-2">📋 ${lang === 'de' ? 'Aktuelle Strategie' : 'Current Strategy'}</h3>
                <p class="text-lg text-gray-200">${strategyText}</p>
            </div>
    `;

    // Tips
    if (strategyData.tips && Array.isArray(strategyData.tips) && strategyData.tips.length > 0) {
        const tipsList = lang === 'de' ? strategyData.tips : (strategyData.tipsEn || strategyData.tips);
        html += `
            <div class="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                <h4 class="text-lg font-bold text-blue-400 mb-3">💡 ${lang === 'de' ? 'Pro Tips' : 'Pro Tips'}</h4>
                <ul class="space-y-2">
                    ${tipsList.map(tip => `
                        <li class="flex items-start space-x-2">
                            <span class="text-blue-400 mt-1">▶</span>
                            <span class="text-gray-300">${tip}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }

    // Dungeons
    if (strategyData.dungeons && Array.isArray(strategyData.dungeons) && strategyData.dungeons.length > 0) {
        html += `
            <div class="bg-purple-900/20 border border-purple-700/50 rounded-lg p-4">
                <h4 class="text-lg font-bold text-purple-400 mb-3">🏰 ${lang === 'de' ? 'Dungeons für dieses Level' : 'Dungeons for this Level'}</h4>
                <div class="space-y-3">
                    ${strategyData.dungeons.map(dungeon => {
            const dungeonName = lang === 'de' ? (dungeon.nameDe || dungeon.name) : (dungeon.nameEn || dungeon.name);
            const dungeonReason = lang === 'de' ? (dungeon.reasonDe || dungeon.reason) : (dungeon.reasonEn || dungeon.reason);

            return `
                            <div class="border-l-4 ${dungeon.skip ? 'border-red-500 bg-red-900/10' : 'border-green-500 bg-green-900/10'} pl-3 py-2">
                                <div class="flex items-start justify-between">
                                    <div>
                                        <p class="font-bold ${dungeon.skip ? 'text-red-400' : 'text-green-400'}">
                                            ${dungeon.skip ? '❌' : '✅'} ${dungeonName}
                                        </p>
                                        ${dungeon.levels ? `<p class="text-xs text-gray-400">${dungeon.levels}</p>` : ''}
                                        <p class="text-sm text-gray-300 mt-1">${dungeonReason}</p>
                                    </div>
                                </div>
                            </div>
                        `;
        }).join('')}
                </div>
            </div>
        `;
    }

    // AoE Spots (for Frost Mage)
    if (strategyData.aoespots && Array.isArray(strategyData.aoespots) && strategyData.aoespots.length > 0) {
        html += `
            <div class="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
                <h4 class="text-lg font-bold text-yellow-400 mb-3">⚡ ${lang === 'de' ? 'AoE Grinding Spots' : 'AoE Grinding Spots'}</h4>
                <div class="space-y-3">
                    ${strategyData.aoespots.map(spot => {
            const locationName = lang === 'de' ? (spot.locationDe || spot.location) : spot.location;
            const notes = lang === 'de' ? (spot.notesDe || spot.notes) : (spot.notesEn || spot.notes);

            return `
                            <div class="bg-black/30 rounded-lg p-3">
                                <p class="font-bold text-yellow-300">${locationName}</p>
                                <div class="text-sm text-gray-400 mt-1 space-y-1">
                                    ${spot.coords ? `<p>📍 ${lang === 'de' ? 'Koordinaten' : 'Coords'}: ${spot.coords}</p>` : ''}
                                    ${spot.levels ? `<p>📊 Level: ${spot.levels}</p>` : ''}
                                    ${spot.mobs ? `<p>👾 Mobs: ${spot.mobs}</p>` : ''}
                                </div>
                                <p class="text-sm text-gray-300 mt-2">${notes}</p>
                            </div>
                        `;
        }).join('')}
                </div>
            </div>
        `;
    }

    // Gear Focus
    if (strategyData.gearFocus) {
        const gearFocusText = lang === 'de' ? (strategyData.gearFocusDe || strategyData.gearFocus) : (strategyData.gearFocusEn || strategyData.gearFocus);
        html += `
            <div class="bg-orange-900/20 border border-orange-700/50 rounded-lg p-3">
                <p class="text-sm">
                    <span class="text-orange-400 font-bold">🎯 ${lang === 'de' ? 'Gear Fokus' : 'Gear Focus'}:</span>
                    <span class="text-gray-300 ml-2">${gearFocusText}</span>
                </p>
            </div>
        `;
    }

    html += '</div>';
    container.innerHTML = html;
}

// ========================================
// LEVEL SUMMARY
// ========================================
function updateLevelSummary() {
    const container = document.getElementById('levelSummary');
    if (!container) return;

    const classData = getClassData();

    if (!classData) {
        container.innerHTML = '<h2 class="text-2xl font-bold text-druid-primary">Level ' + currentLevel + '</h2>';
        return;
    }

    const currentTalent = classData.talents && Array.isArray(classData.talents) ?
        classData.talents.find(t =>
            currentLevel >= t.levelRange[0] && currentLevel <= t.levelRange[1]
        ) : null;

    const currentSpike = classData.powerSpikes && Array.isArray(classData.powerSpikes) ?
        classData.powerSpikes.find(s => s.level === currentLevel) : null;

    const lang = window.currentLanguage || 'de';
    let html = `<h2 class="text-2xl font-bold text-druid-primary mb-3">${t('common.level')} ${currentLevel}</h2>`;

    if (currentSpike) {
        const reason = lang === 'de' ? currentSpike.reason : (currentSpike.reasonEn || currentSpike.reason);
        html += `
            <div class="bg-yellow-900/30 border-l-4 border-yellow-500 p-3 mb-3">
                <p class="text-yellow-300 font-bold">🔥 ${t('levelSummary.powerSpike')}: ${reason}</p>
            </div>
        `;
    }

    if (currentTalent) {
        const points = lang === 'de' ? (currentTalent.pointsDe || currentTalent.points) : (currentTalent.pointsEn || currentTalent.points);
        html += `<p class="text-gray-300">${t('levelSummary.focus')}: ${points}</p>`;
    }

    container.innerHTML = html;
}

// ========================================
// BIS VIEW
// ========================================
function updateBiSView() {
    const container = document.getElementById('bisContent');
    if (!container) return;

    const bisData = getClassBiSData();

    // ✅ SAFE CHECK
    if (!bisData) {
        container.innerHTML = '<p class="text-gray-400">Keine BiS-Daten verfügbar</p>';
        return;
    }

    let html = '';

    if (window.currentClass === 'feral-druid') {
        const selectedSpec = window.selectedDruidSpec || 'dps';
        html += `
            <div class="mb-6 flex items-center justify-center gap-3">
                <button id="druidSpecDPS" 
                        onclick="toggleDruidSpec('dps')" 
                        class="px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:scale-105"
                        style="background-color: ${selectedSpec === 'dps' ? 'var(--class-color)' : 'rgba(255, 125, 10, 0.2)'}; 
                               color: ${selectedSpec === 'dps' ? 'white' : 'var(--class-color)'};">
                    🐱 Feral DPS (Cat Form)
                </button>
                <button id="druidSpecHealer" 
                        onclick="toggleDruidSpec('healer')" 
                        class="px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:scale-105"
                        style="background-color: ${selectedSpec === 'healer' ? 'var(--class-color)' : 'rgba(255, 125, 10, 0.2)'}; 
                               color: ${selectedSpec === 'healer' ? 'white' : 'var(--class-color)'};">
                    🌿 Restoration (Healer)
                </button>
            </div>
        `;
    }

    // Check structure
    if (bisData.preRaid && bisData.preRaid.items && Array.isArray(bisData.preRaid.items)) {
        html += `
            <div class="mb-8">
                <h3 class="text-2xl font-bold text-purple-400 mb-4">${td(bisData.preRaid.name)}</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${bisData.preRaid.items.map(item => `
    <div class="bg-gray-800/50 border border-purple-700/50 rounded-lg p-4 hover:border-purple-500 transition-all cursor-pointer" 
         onclick="toggleFarmingDetails('${item.slot}')">
        
        <!-- Item Header -->
        <div class="flex justify-between items-start mb-2">
            <div class="flex items-center gap-2">
                <span class="text-purple-300 font-semibold">${td(item.slot)}</span>
                ${item.priority === 'critical' ? '<span class="text-xs px-2 py-1 bg-red-600 rounded">🔥 MUST HAVE</span>' : ''}
            </div>
            <button class="text-gray-400 hover:text-white text-xs">
                📋 Details
            </button>
        </div>
        
        <!-- Item Name & Stats -->
        <p class="text-green-400 font-bold text-lg">${td(item.name)}</p>
        <p class="text-sm text-gray-400 mt-1">${td(item.source)}</p>
        <p class="text-xs text-gray-500 mt-2">${item.stats}</p>
        
        <!-- Farming Quick Info (always visible) -->
        <div class="mt-3 grid grid-cols-2 gap-2 text-xs">
            <div class="bg-black/30 rounded px-2 py-1">
                <span class="text-yellow-400">💰 Cost:</span>
                <span class="text-gray-300 ml-1">${item.cost || item.costEn}</span>
            </div>
            <div class="bg-black/30 rounded px-2 py-1">
                <span class="text-blue-400">⏱️ Time:</span>
                <span class="text-gray-300 ml-1">${item.farmTime || item.farmTimeEn}</span>
            </div>
        </div>
        
        <!-- Expandable Farming Details (click to show) -->
        <div id="farming-${item.slot}" class="hidden mt-3 border-t border-gray-700 pt-3">
            <div class="space-y-2 text-sm">
                <div>
                    <span class="text-purple-400 font-semibold">📍 How to Get:</span>
                    <p class="text-gray-300 mt-1">${item.howToGet || item.howToGetEn}</p>
                </div>
                
                ${item.dropChance ? `
                    <div>
                        <span class="text-green-400 font-semibold">🎲 Drop Chance:</span>
                        <span class="text-gray-300 ml-2">${item.dropChance}</span>
                    </div>
                ` : ''}
                
                <div class="bg-blue-900/20 border border-blue-700/50 rounded p-3 mt-2">
                    <p class="text-blue-300 text-xs">
                        <span class="font-bold">💡 Farming Guide:</span><br>
                        ${item.farmGuide || item.farmGuideDe}
                    </p>
                </div>
            </div>
        </div>
    </div>
`).join('')}
                </div>
                ${bisData.preRaid.totalStats ? `
                    <div class="mt-4 p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                        <p class="text-green-400 font-bold">📊 Total Stats: ${bisData.preRaid.totalStats}</p>
                    </div>
                ` : ''}
            </div>
        `;
    }

    if (bisData.raid && bisData.raid.items && Array.isArray(bisData.raid.items)) {
        html += `
            <div>
                <h3 class="text-2xl font-bold text-orange-400 mb-4">${td(bisData.raid.name)}</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${bisData.raid.items.map(item => `
                        <div class="bg-gray-800/50 border border-orange-700/50 rounded-lg p-4">
                            <div class="flex justify-between items-start mb-2">
                                <span class="text-orange-300 font-semibold">${td(item.slot)}</span>
                            </div>
                            <p class="text-green-400 font-bold">${td(item.name)}</p>
                            <p class="text-sm text-gray-400 mt-1">${td(item.source)}</p>
                            <p class="text-xs text-gray-500 mt-2">${item.stats}</p>
                        </div>
                    `).join('')}
                </div>
                ${bisData.raid.setBonus ? `
                    <div class="mt-4 p-4 bg-orange-900/20 border border-orange-700/50 rounded-lg">
                        <p class="text-orange-400 font-bold">🎁 ${bisData.raid.setBonus}</p>
                    </div>
                ` : ''}
            </div>
        `;
    }

    container.innerHTML = html || '<p class="text-gray-400">No BiS data available</p>';
}

// ========================================
// BIS MODE TOGGLE
// ========================================
function toggleBiSMode() {
    isBiSMode = !isBiSMode;

    const levelingView = document.getElementById('levelingView');
    const bisView = document.getElementById('bisView');
    const bisToggle = document.getElementById('bisToggle');

    if (isBiSMode) {
        levelingView.classList.add('hidden');
        bisView.classList.remove('hidden');
        bisToggle.classList.add('bg-druid-primary');
        bisToggle.classList.remove('bg-purple-600');
        currentLevel = 60;
        updateBiSView();
    } else {
        levelingView.classList.remove('hidden');
        bisView.classList.add('hidden');
        bisToggle.classList.remove('bg-druid-primary');
        bisToggle.classList.add('bg-purple-600');
        currentLevel = parseInt(document.getElementById('levelSlider').value);
        updateAllContent();
    }

    document.getElementById('currentLevelDisplay').textContent = currentLevel;
}

// Toggle Druid Spec
function toggleDruidSpec(spec) {
    window.selectedDruidSpec = spec;
    updateBiSView();
}

// Toggle Farming Details (für expandable items)
function toggleFarmingDetails(slotId) {
    const detailsDiv = document.getElementById('farming-' + slotId);
    if (detailsDiv) {
        detailsDiv.classList.toggle('hidden');
    }
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const levelSlider = document.getElementById('levelSlider');
    const levelDisplay = document.getElementById('currentLevelDisplay');
    const bisToggle = document.getElementById('bisToggle');

    if (levelSlider) {
        levelSlider.addEventListener('input', function() {
            if (isBiSMode) {
                isBiSMode = false;
                const levelingView = document.getElementById('levelingView');
                const bisView = document.getElementById('bisView');
                if (levelingView) levelingView.classList.remove('hidden');
                if (bisView) bisView.classList.add('hidden');
                if (bisToggle) {
                    bisToggle.classList.remove('bg-druid-primary');
                    bisToggle.classList.add('bg-purple-600');
                }
            }

            currentLevel = parseInt(this.value);
            if (levelDisplay) levelDisplay.textContent = currentLevel;
            updateAllContent();
        });
    }

    if (bisToggle) {
        bisToggle.addEventListener('click', toggleBiSMode);
    }

    // Initial update
    updateAllContent();
});