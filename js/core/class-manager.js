// ========================================
// CLASS MANAGER - FINAL FIX
// Ensures data updates correctly on switch
// ========================================

let currentClass = 'feral-druid';
let currentClassData = null;

const availableClasses = {
    'feral-druid': {
        name: 'Feral Druid',
        nameDe: 'Feral Druid',
        color: '#FF7D0A',
        icon: '🐻'
    },
    'frost-mage': {
        name: 'Frost Mage',
        nameDe: 'Frost Mage',
        color: '#69CCF0',
        icon: '❄️'
    }
};

// Safe data access functions
function getClassData() {
    if (currentClass === 'frost-mage' && typeof frostMageData !== 'undefined') {
        return frostMageData;
    }
    if (typeof feralDruidData !== 'undefined') {
        return feralDruidData;
    }
    console.error('No class data available!');
    return null;
}

function getClassGear() {
    if (currentClass === 'frost-mage' && typeof frostMageGear !== 'undefined') {
        return frostMageGear;
    }
    if (typeof feralDruidGear !== 'undefined') {
        return feralDruidGear;
    }
    return { weapons: [], gearSets: [], essentialItems: [] };
}

function getClassBiS() {
    if (currentClass === 'frost-mage' && typeof frostMageBiS !== 'undefined') {
        return frostMageBiS;
    }
    if (typeof feralDruidBiS !== 'undefined') {
        return feralDruidBiS;
    }
    return { dps: { preRaid: { items: [] } }, tank: { preRaid: { items: [] } } };
}

function initClassSystem() {

    try {
        currentClass = 'feral-druid';
        currentClassData = getClassData();

        applyClassTheme(currentClass);

        // Make globally available
        window.currentClass = currentClass;
        window.currentClassData = currentClassData;

    } catch (error) {
        console.error('❌ Error initializing class system:', error);
    }
}

// Apply class-specific theme colors
function applyClassTheme() {
    const classInfo = availableClasses[currentClass];
    const root = document.documentElement;
    const body = document.body;

    // Set CSS custom properties for the class color
    root.style.setProperty('--class-color', classInfo.color);
    root.style.setProperty('--class-color-light', classInfo.color + '40'); // 40 = 25% opacity
    root.style.setProperty('--class-color-dark', classInfo.color + '20'); // 20 = 12.5% opacity

    // 🎨 SET BODY CLASS + BACKGROUND COLORS
    if (currentClass === 'frost-mage') {
        body.classList.add('frost-mage');
        body.classList.remove('feral-druid');
        root.style.setProperty('--class-bg-darker', '#05080d');
        root.style.setProperty('--class-bg-card', '#121620');
    } else {
        body.classList.add('feral-druid');
        body.classList.remove('frost-mage');
        root.style.setProperty('--class-bg-darker', '#0d0805');
        root.style.setProperty('--class-bg-card', '#1f1612');
    }

    // Update header icon
    const headerIcon = document.querySelector('header .w-12');
    if (headerIcon) {
        headerIcon.textContent = classInfo.icon;
    }
}

function updateHeader(classKey) {
    const classInfo = availableClasses[classKey];
    const lang = window.currentLanguage || 'de';

    // Update header title
    const headerTitle = document.querySelector('header h1');
    if (headerTitle) {
        headerTitle.textContent = `${lang === 'de' ? classInfo.nameDe : classInfo.name} Guide`;
    }

    // Update header icon
    const headerIcon = document.querySelector('header .w-12');
    if (headerIcon) {
        headerIcon.textContent = classInfo.icon;
    }
}

function createClassSelector() {
    try {
        const container = document.getElementById('classSelectContainer');
        if (!container) {
            console.error('❌ classSelectContainer not found in DOM!');
            return;
        }

        const lang = window.currentLanguage || 'de';
        const currentClassInfo = availableClasses[currentClass];

        container.innerHTML = `
            <div class="relative">
                <button id="classDropdownBtn" class="flex items-center space-x-2 px-4 py-2 bg-druid-card rounded-lg border border-druid-primary/30 hover:border-druid-primary/50 transition-colors">
                    <span class="text-2xl">${currentClassInfo.icon}</span>
                    <span class="font-bold text-druid-primary">${lang === 'de' ? currentClassInfo.nameDe : currentClassInfo.name}</span>
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                
                <div id="classDropdown" class="hidden absolute top-full mt-2 w-64 bg-druid-darker border border-druid-primary/30 rounded-lg shadow-xl z-50">
                    ${Object.entries(availableClasses).map(([key, info]) => `
                        <button 
                            class="class-option w-full flex items-center space-x-3 px-4 py-3 hover:bg-druid-primary/20 transition-colors ${key === currentClass ? 'bg-druid-primary/10' : ''}"
                            data-class="${key}"
                        >
                            <span class="text-2xl">${info.icon}</span>
                            <div class="text-left flex-1">
                                <div class="font-bold" style="color: ${info.color}">${lang === 'de' ? info.nameDe : info.name}</div>
                                <div class="text-xs text-gray-400">TBC Classic</div>
                            </div>
                            ${key === currentClass ? '<span class="text-green-400">✓</span>' : ''}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;

        // Add event listeners
        const dropdownBtn = document.getElementById('classDropdownBtn');
        const dropdown = document.getElementById('classDropdown');

        if (dropdownBtn && dropdown) {
            dropdownBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdown.classList.toggle('hidden');
            });

            document.addEventListener('click', () => {
                dropdown.classList.add('hidden');
            });

            document.querySelectorAll('.class-option').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const classKey = btn.dataset.class;
                    switchClass(classKey);
                    dropdown.classList.add('hidden');
                });
            });
        }

    } catch (error) {
        console.error('❌ Error creating class selector:', error);
    }
}

function switchClass(classKey) {

    try {
        const classInfo = availableClasses[classKey];
        if (!classInfo) {
            console.error('❌ Class not found:', classKey);
            return;
        }

        // ✅ CRITICAL: Update currentClass FIRST
        currentClass = classKey;
        window.currentClass = classKey;

        // ✅ CRITICAL: Update currentClassData with NEW class data
        currentClassData = getClassData();
        window.currentClassData = currentClassData;

        applyClassTheme(classKey);
        updateHeader(classKey);

        // Update button
        const lang = window.currentLanguage || 'de';
        const dropdownBtn = document.getElementById('classDropdownBtn');
        if (dropdownBtn) {
            dropdownBtn.innerHTML = `
                <span class="text-2xl">${classInfo.icon}</span>
                <span class="font-bold text-druid-primary">${lang === 'de' ? classInfo.nameDe : classInfo.name}</span>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            `;
        }

        // Recreate dropdown with checkmarks
        createClassSelector();

        // ✅ CRITICAL: Force update ALL content
        if (typeof updateAllContent === 'function') {
            updateAllContent();
        } else {
            console.error('⚠️ updateAllContent function not found!');
        }

    } catch (error) {
        console.error('❌ Error switching class:', error);
    }
}

// Export
window.currentClass = currentClass;
window.currentClassData = currentClassData;
window.getClassData = getClassData;
window.getClassGear = getClassGear;
window.getClassBiS = getClassBiS;
window.availableClasses = availableClasses;
window.initClassSystem = initClassSystem;
window.createClassSelector = createClassSelector;
window.switchClass = switchClass;