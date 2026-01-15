// Main Application Logic
let currentLevel = 1;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeLevelSlider();
    updateAllContent();
});

// Level Slider
function initializeLevelSlider() {
    const slider = document.getElementById('levelSlider');
    const display = document.getElementById('currentLevelDisplay');

    slider.addEventListener('input', (e) => {
        currentLevel = parseInt(e.target.value);
        display.textContent = currentLevel;
        updateAllContent();
    });
}

// Update all content based on current level
function updateAllContent() {
    updateTalents();
    updateRotation();
    updatePowerSpikes();
    updateClassQuests();
    updateGear();
    updateProfessions();
    updateZones();
    updateLevelingStrategy();
}

// Update Talents Section
function updateTalents() {
    const container = document.getElementById('talentsContent');
    const currentTalents = feralDruidData.talents.filter(t =>
        currentLevel >= t.levelRange[0] && currentLevel <= t.levelRange[1]
    );

    const nextTalent = feralDruidData.talents.find(t =>
        currentLevel < t.levelRange[0]
    );

    let html = '';

    if (currentLevel < 10) {
        html = `
            <div class="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
                <p class="text-yellow-400">🔒 ${t('talents.unlockAt')}</p>
                <p class="text-sm text-gray-400 mt-2">${window.currentLanguage === 'de' ? 'Levle weiter! Nutze Mondfeuer + Zorn bis du Bärengestalt bekommst.' : 'Keep leveling! Use Moonfire + Wrath until you get Bear Form.'}</p>
            </div>
        `;
    } else {
        // Current talent
        if (currentTalents.length > 0) {
            const talent = currentTalents[0];
            const translatedPoints = td(talent.points);
            const translatedReason = td(talent.reason);
            const translatedTree = td(talent.tree);

            html += `
                <div class="bg-druid-primary/10 border border-druid-primary/30 rounded-lg p-4">
                    <div class="flex items-start justify-between mb-2">
                        <h3 class="text-lg font-bold text-druid-primary">${t('talents.current')}: ${translatedPoints}</h3>
                        <span class="text-xs bg-druid-primary/20 px-2 py-1 rounded">${translatedTree}</span>
                    </div>
                    <p class="text-gray-300 mb-2">${translatedReason}</p>
                    ${talent.points.toLowerCase().includes('mangle') || talent.points.toLowerCase().includes('zerfleischen') ? '<p class="text-red-400 font-bold mt-2">🔥🔥🔥 GAME CHANGER!</p>' : ''}
                </div>
            `;
        }

        // Next talent
        if (nextTalent) {
            const translatedPoints = td(nextTalent.points);
            const translatedReason = td(nextTalent.reason);
            const translatedTree = td(nextTalent.tree);

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

// Update Rotation Section
function updateRotation() {
    const container = document.getElementById('rotationContent');
    let rotationData = null;

    // Find the appropriate rotation
    if (currentLevel >= 70) rotationData = feralDruidData.rotation[70];
    else if (currentLevel >= 60) rotationData = feralDruidData.rotation[60];
    else if (currentLevel >= 50) rotationData = feralDruidData.rotation[50];
    else if (currentLevel >= 40) rotationData = feralDruidData.rotation[40];
    else if (currentLevel >= 30) rotationData = feralDruidData.rotation[30];
    else if (currentLevel >= 20) rotationData = feralDruidData.rotation[20];
    else if (currentLevel >= 10) rotationData = feralDruidData.rotation[10];
    else rotationData = feralDruidData.rotation[1];

    let html = '';

    // Opener
    if (rotationData.opener) {
        html += `
            <div class="mb-4">
                <h4 class="text-sm font-semibold text-druid-primary mb-2">${t('rotation.opener')}:</h4>
                <div class="flex flex-wrap gap-2">
                    ${rotationData.opener.map((ability, i) => `
                        <span class="bg-druid-primary/20 px-3 py-1 rounded text-sm">
                            ${i + 1}. ${td(ability)}
                        </span>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Main Rotation
    html += `
        <div class="mb-4">
            <h4 class="text-sm font-semibold text-druid-primary mb-2">${t('rotation.rotation')}:</h4>
            <div class="space-y-2">
                ${rotationData.rotation.map((ability, i) => `
                    <div class="flex items-center space-x-2">
                        <span class="bg-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-xs">${i + 1}</span>
                        <span class="text-gray-300">${td(ability)}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Buffs
    if (rotationData.buffs) {
        html += `
            <div class="mb-4">
                <h4 class="text-sm font-semibold text-druid-primary mb-2">${t('rotation.keepActive')}:</h4>
                <div class="space-y-1">
                    ${rotationData.buffs.map(buff => `
                        <div class="flex items-center space-x-2">
                            <span class="text-green-400">✓</span>
                            <span class="text-gray-300 text-sm">${td(buff)}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Powershifting
    if (rotationData.powershifting) {
        html += `
            <div class="bg-purple-900/20 border border-purple-700/50 rounded-lg p-3 mt-4">
                <h4 class="text-sm font-semibold text-purple-400 mb-2">${t('rotation.powershifting')}:</h4>
                <p class="text-sm text-gray-300">${td(rotationData.powershifting)}</p>
            </div>
        `;
    }

    // Notes
    if (rotationData.notes) {
        html += `
            <div class="bg-blue-900/20 border border-blue-700/50 rounded-lg p-3 mt-4">
                <p class="text-sm text-gray-300">${td(rotationData.notes)}</p>
            </div>
        `;
    }

    container.innerHTML = html;
}

// Update Power Spikes
function updatePowerSpikes() {
    const container = document.getElementById('powerSpikesContent');

    // Get upcoming spikes (next 3-5 levels)
    const upcomingSpikes = feralDruidData.powerSpikes.filter(spike =>
        spike.level > currentLevel && spike.level <= currentLevel + 10
    ).slice(0, 3);

    if (upcomingSpikes.length === 0) {
        container.innerHTML = `
            <div class="text-center py-8 text-gray-400">
                <p>🎉 No more major power spikes!</p>
                <p class="text-sm mt-2">You've reached the endgame. Focus on gear and professions!</p>
            </div>
        `;
        return;
    }

    let html = upcomingSpikes.map(spike => {
        const priorityColors = {
            critical: 'bg-red-900/30 border-red-700/50',
            high: 'bg-orange-900/30 border-orange-700/50',
            medium: 'bg-yellow-900/30 border-yellow-700/50'
        };

        const priorityIcons = {
            critical: '🔥🔥🔥',
            high: '🔥🔥',
            medium: '🔥'
        };

        return `
            <div class="${priorityColors[spike.priority]} border rounded-lg p-4">
                <div class="flex items-center justify-between mb-3">
                    <h3 class="text-lg font-bold text-druid-primary">Level ${spike.level} ${priorityIcons[spike.priority]}</h3>
                    <span class="text-xs px-2 py-1 rounded ${
            spike.priority === 'critical' ? 'bg-red-700' :
                spike.priority === 'high' ? 'bg-orange-700' : 'bg-yellow-700'
        }">${spike.priority.toUpperCase()}</span>
                </div>
                <div class="space-y-3">
                    ${spike.items.map(item => `
                        <div class="bg-black/30 rounded p-3">
                            <div class="font-semibold text-gray-200 mb-1">${td(item.name)}</div>
                            ${item.source ? `<div class="text-xs text-gray-400 mb-1">📍 ${td(item.source)}</div>` : ''}
                            <div class="text-sm text-gray-300 mb-2">${td(item.impact)}</div>
                            <div class="text-sm text-druid-primary font-medium">→ ${td(item.action)}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = html;
}

// Update Class Quests
function updateClassQuests() {
    const container = document.getElementById('classQuestsContent');

    const availableQuests = feralDruidData.classQuests.available.filter(q =>
        q.level <= currentLevel
    );

    const upcomingQuests = feralDruidData.classQuests.available.filter(q =>
        q.level > currentLevel && q.level <= currentLevel + 10
    );

    let html = '';

    // Available NOW
    if (availableQuests.length > 0) {
        html += `
            <div class="mb-6">
                <h3 class="text-lg font-bold text-green-400 mb-3">🔔 Available Now:</h3>
                <div class="space-y-3">
                    ${availableQuests.map(quest => `
                        <div class="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
                            <div class="flex items-start justify-between mb-2">
                                <h4 class="font-bold text-green-300">${td(quest.name)} (Level ${quest.level})</h4>
                                <span class="text-xs px-2 py-1 rounded ${
            quest.priority === 'critical' ? 'bg-red-700' :
                quest.priority === 'high' ? 'bg-orange-700' : 'bg-gray-700'
        }">${t('classQuests.priority.' + quest.priority)}</span>
                            </div>
                            <div class="text-sm text-gray-300 space-y-1">
                                <p>⏱️ ${t('classQuests.duration')}: ${td(quest.duration)}</p>
                                <p>📍 ${t('classQuests.location')}: ${td(quest.location)}</p>
                                ${quest.cost ? `<p>💰 ${t('classQuests.cost')}: ${td(quest.cost)}</p>` : ''}
                                <p>🎁 ${t('classQuests.reward')}: ${td(quest.reward)}</p>
                            </div>
                            ${quest.priority === 'critical' ? `
                                <div class="mt-3 p-2 bg-red-900/30 rounded text-sm text-red-300">
                                    ⚠️ ${td(quest.notes)}
                                </div>
                            ` : `
                                <p class="mt-2 text-sm text-gray-400">${td(quest.notes)}</p>
                            `}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Upcoming
    if (upcomingQuests.length > 0) {
        html += `
            <div>
                <h3 class="text-lg font-bold text-gray-400 mb-3">⏳ Upcoming:</h3>
                <div class="space-y-3">
                    ${upcomingQuests.map(quest => `
                        <div class="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                            <div class="flex items-start justify-between mb-2">
                                <h4 class="font-semibold text-gray-300">${td(quest.name)} (Level ${quest.level})</h4>
                                <span class="text-xs px-2 py-1 rounded bg-gray-700">${td(quest.duration)}</span>
                            </div>
                            <p class="text-sm text-gray-400">${td(quest.reward)}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    if (availableQuests.length === 0 && upcomingQuests.length === 0) {
        html = `
            <div class="text-center py-8 text-gray-400">
                <p>✅ ${t('classQuests.completed')}</p>
                <p class="text-sm mt-2">${td('You have all your forms and abilities.')}</p>
            </div>
        `;
    }

    container.innerHTML = html;
}

// Update Gear Section
function updateGear() {
    const container = document.getElementById('gearContent');

    const availableGear = feralDruidData.gear.filter(g =>
        g.level <= currentLevel && g.level >= currentLevel - 10
    );

    const upcomingGear = feralDruidData.gear.filter(g =>
        g.level > currentLevel && g.level <= currentLevel + 10
    ).slice(0, 2);

    let html = '';

    if (availableGear.length > 0) {
        html += `
            <div class="mb-6">
                <h3 class="text-lg font-bold text-green-400 mb-3">Current Level Gear:</h3>
                ${availableGear.map(gear => `
                    <div class="space-y-2 mb-4">
                        ${gear.items.map(item => `
                            <div class="bg-gray-800 rounded-lg p-3 border ${
            item.priority === 'critical' ? 'border-druid-primary' : 'border-gray-700'
        }">
                                <div class="flex items-start justify-between mb-2">
                                    <div>
                                        <span class="text-xs text-gray-400">${item.slot}</span>
                                        <h4 class="font-bold text-druid-primary">${item.name}</h4>
                                    </div>
                                    ${item.priority === 'critical' ? '<span class="text-red-400">🔥</span>' : ''}
                                </div>
                                <p class="text-xs text-gray-400 mb-1">📍 ${item.source}</p>
                                <p class="text-sm text-gray-300">${item.notes}</p>
                            </div>
                        `).join('')}
                    </div>
                `).join('')}
            </div>
        `;
    }

    if (upcomingGear.length > 0) {
        html += `
            <div>
                <h3 class="text-lg font-bold text-gray-400 mb-3">Upcoming Gear:</h3>
                ${upcomingGear.map(gear => `
                    <div class="space-y-2 mb-4">
                        <p class="text-sm text-druid-primary font-semibold">Level ${gear.level}:</p>
                        ${gear.items.map(item => `
                            <div class="bg-gray-800/50 rounded p-2 text-sm">
                                <span class="text-gray-400">${item.slot}:</span> 
                                <span class="text-gray-300">${item.name}</span>
                            </div>
                        `).join('')}
                    </div>
                `).join('')}
            </div>
        `;
    }

    if (availableGear.length === 0 && upcomingGear.length === 0) {
        html = `
            <div class="text-center py-8 text-gray-400">
                <p>${t('gear.keepQuesting')}</p>
                <p class="text-sm mt-2">${td('Look for items with Agility and Stamina ("of the Monkey").')}</p>
            </div>
        `;
    }

    container.innerHTML = html;
}

// Update Professions Section
function updateProfessions() {
    const container = document.getElementById('professionsContent');

    let html = '';

    if (currentLevel < 70) {
        html = `
            <div class="mb-4">
                <h3 class="text-lg font-bold text-druid-primary mb-3">${t('professions.leveling')}:</h3>
                <div class="space-y-3">
                    ${feralDruidData.professions.leveling.recommended.map(prof => `
                        <div class="bg-gray-800 rounded-lg p-3">
                            <h4 class="font-bold text-green-400 mb-1">${td(prof.name)}</h4>
                            <p class="text-sm text-gray-300 mb-1">${td(prof.reason)}</p>
                            <p class="text-xs text-gray-400">💰 ~${prof.goldPerHour}</p>
                            ${prof.notes ? `<p class="text-xs text-gray-400 mt-1">${td(prof.notes)}</p>` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="bg-blue-900/20 border border-blue-700/50 rounded-lg p-3 text-sm">
                <p class="text-blue-300 mb-2"><strong>${t('professions.strategy')}:</strong></p>
                <p class="text-gray-300">${td(feralDruidData.professions.endgame.strategy)}</p>
            </div>
        `;
    } else {
        // Level 70 - show endgame professions
        html = `
            <div class="mb-4">
                <h3 class="text-lg font-bold text-druid-primary mb-3">🔥 Endgame (BiS) Professions:</h3>
                <div class="space-y-4">
                    ${feralDruidData.professions.endgame.recommended.map(prof => `
                        <div class="bg-druid-primary/10 border border-druid-primary/30 rounded-lg p-4">
                            <div class="flex items-center justify-between mb-2">
                                <h4 class="font-bold text-druid-primary text-lg">${prof.name}</h4>
                                <span class="text-xs bg-red-700 px-2 py-1 rounded">${prof.priority}</span>
                            </div>
                            <p class="text-sm text-gray-300 mb-3">${prof.reason}</p>
                            
                            <h5 class="text-sm font-semibold text-druid-primary mb-2">BiS Items Available:</h5>
                            <div class="space-y-2">
                                ${prof.bisItems.map(item => `
                                    <div class="bg-black/30 rounded p-2">
                                        <div class="text-sm font-semibold text-gray-200">
                                            ${item.slot}: ${item.name}
                                            ${item.unique ? ' <span class="text-red-400">★ EXCLUSIVE</span>' : ''}
                                        </div>
                                        <div class="text-xs text-gray-400 mt-1">${item.impact}</div>
                                        ${item.exclusiveReason ? `
                                            <div class="text-xs text-red-300 mt-1 italic">⚠️ ${item.exclusiveReason}</div>
                                        ` : ''}
                                        <div class="text-xs text-gray-500 mt-1">
                                            Requires: ${prof.name} ${item.engineeringRequired || item.enchantingRequired}
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    container.innerHTML = html;
}

// Update Zones Section
function updateZones() {
    const container = document.getElementById('zonesContent');

    const currentZoneData = feralDruidData.zones.find(z =>
        Array.isArray(z.levelRange) && currentLevel >= z.levelRange[0] && currentLevel <= z.levelRange[1]
    ) || feralDruidData.zones.find(z => z.level === currentLevel);

    if (!currentZoneData) {
        container.innerHTML = '<p class="text-gray-400">No specific zone data for this level.</p>';
        return;
    }

    let html = `
        <div class="bg-gray-800 rounded-lg p-4">
            <h3 class="text-xl font-bold text-druid-primary mb-3">
                Level ${Array.isArray(currentZoneData.levelRange) ? `${currentZoneData.levelRange[0]}-${currentZoneData.levelRange[1]}` : currentZoneData.level}
            </h3>
    `;

    // Zones
    if (currentZoneData.zones) {
        html += `
            <div class="mb-4">
                <h4 class="text-sm font-semibold text-gray-400 mb-2">Recommended Zones:</h4>
                <div class="flex flex-wrap gap-2">
                    ${currentZoneData.zones.map(zone => `
                        <span class="bg-druid-primary/20 px-3 py-1 rounded text-sm">${zone}</span>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Alliance/Horde specific
    if (currentZoneData.alliance) {
        html += `
            <div class="mb-4">
                <h4 class="text-sm font-semibold text-blue-400 mb-2">Alliance:</h4>
                <div class="flex flex-wrap gap-2">
                    ${currentZoneData.alliance.map(zone => `
                        <span class="bg-blue-900/30 px-3 py-1 rounded text-sm">${zone}</span>
                    `).join('')}
                </div>
            </div>
            <div class="mb-4">
                <h4 class="text-sm font-semibold text-red-400 mb-2">Horde:</h4>
                <div class="flex flex-wrap gap-2">
                    ${currentZoneData.horde.map(zone => `
                        <span class="bg-red-900/30 px-3 py-1 rounded text-sm">${zone}</span>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Dungeons
    if (currentZoneData.dungeons) {
        html += `
            <div class="mb-4">
                <h4 class="text-sm font-semibold text-purple-400 mb-2">Dungeons:</h4>
                <div class="flex flex-wrap gap-2">
                    ${currentZoneData.dungeons.map(dungeon => `
                        <span class="bg-purple-900/30 px-3 py-1 rounded text-sm">${dungeon}</span>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Notes
    if (currentZoneData.notes) {
        html += `
            <div class="bg-blue-900/20 border border-blue-700/50 rounded p-3 mt-3">
                <p class="text-sm text-gray-300">${currentZoneData.notes}</p>
            </div>
        `;
    }

    html += '</div>';
    container.innerHTML = html;
}

// Update Leveling Strategy Alert
function updateLevelingStrategy() {
    const container = document.getElementById('strategyAlert');

    const currentStrategy = feralDruidData.levelingStrategy.find(s =>
        Array.isArray(s.levelRange) && currentLevel >= s.levelRange[0] && currentLevel <= s.levelRange[1]
    );

    if (!currentStrategy || !currentStrategy.reasoning) {
        container.classList.add('hidden');
        return;
    }

    // Only show alert for special strategies
    if (currentStrategy.type === 'dungeon_grind' || currentStrategy.type === 'flight_form') {
        container.classList.remove('hidden');
        container.innerHTML = `
            <div class="bg-yellow-900/30 border border-yellow-700 rounded-xl p-6">
                <h3 class="text-2xl font-bold text-yellow-400 mb-2">⚠️ ${currentStrategy.title}</h3>
                <div class="space-y-2 mb-4">
                    <h4 class="font-semibold text-gray-200">Strategy:</h4>
                    <ul class="list-disc list-inside space-y-1 text-gray-300">
                        ${currentStrategy.activities.map(activity => `
                            <li>${activity}</li>
                        `).join('')}
                    </ul>
                </div>
                ${currentStrategy.reasoning ? `
                    <div class="bg-black/30 rounded-lg p-3 mb-3">
                        <h4 class="font-semibold text-gray-200 mb-2">Why?</h4>
                        <ul class="space-y-1 text-sm text-gray-300">
                            ${currentStrategy.reasoning.map(reason => `
                                <li>💰 ${reason}</li>
                            `).join('')}
                        </ul>
                    </div>
                ` : ''}
                ${currentStrategy.tips ? `
                    <p class="text-sm text-gray-400 italic">${currentStrategy.tips}</p>
                ` : ''}
            </div>
        `;
    } else {
        container.classList.add('hidden');
    }
}