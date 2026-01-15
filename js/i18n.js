// Internationalization (i18n) - German and English translations
window.translations = window.translations || {
    de: {
        header: {
            title: "Feral Druide Guide",
            subtitle: "TBC Classic Leveling - Dual Spec Tank/DPS",
            currentLevel: "Aktuelles Level"
        },
        sections: {
            talents: "Talente",
            rotation: "Rotation & Buffs",
            powerSpikes: "Power Spikes",
            classQuests: "Klassenquests",
            gear: "Ausrüstung & Items",
            professions: "Berufe",
            zones: "Gebiete & Quests",
            tips: "Pro Tips"
        },
        talents: {
            unlockAt: "Talente freischalten bei Level 10",
            current: "Aktuell",
            next: "Nächster",
            tree: "Talentbaum",
            pointsSpent: "Punkte ausgegeben"
        },
        rotation: {
            opener: "Opener",
            rotation: "Rotation",
            keepActive: "Aktiv halten",
            powershifting: "⚡ Powershifting"
        },
        classQuests: {
            availableNow: "🔔 Jetzt verfügbar",
            upcoming: "⏳ Bald verfügbar",
            completed: "✅ Alle Klassenquests abgeschlossen!",
            duration: "Dauer",
            location: "Ort",
            cost: "Kosten",
            reward: "Belohnung",
            priority: {
                critical: "KRITISCH",
                high: "HOCH",
                medium: "MITTEL",
                low: "NIEDRIG"
            }
        },
        gear: {
            currentLevel: "Aktuelle Level Ausrüstung",
            upcoming: "Bevorstehende Ausrüstung",
            keepQuesting: "Nutze Quest-Ausrüstung!",
            lookFor: "Suche nach Items mit Beweglichkeit und Ausdauer"
        },
        professions: {
            leveling: "Leveling-Berufe",
            endgame: "🔥 Endgame (BiS) Berufe",
            strategy: "Strategie",
            bisItems: "BiS Items verfügbar",
            requires: "Benötigt",
            exclusive: "★ EXKLUSIV"
        },
        zones: {
            recommended: "Empfohlene Gebiete",
            alliance: "Allianz",
            horde: "Horde",
            dungeons: "Dungeons"
        },
        powerSpikes: {
            noMore: "🎉 Keine weiteren Power Spikes!",
            endgame: "Du hast das Endgame erreicht. Fokussiere dich auf Ausrüstung und Berufe!"
        },
        common: {
            level: "Level",
            and: "und"
        }
    },
    en: {
        header: {
            title: "Feral Druid Guide",
            subtitle: "TBC Classic Leveling - Dual Spec Tank/DPS",
            currentLevel: "Current Level"
        },
        sections: {
            talents: "Talents",
            rotation: "Rotation & Buffs",
            powerSpikes: "Power Spikes",
            classQuests: "Class Quests",
            gear: "Gear & Items",
            professions: "Professions",
            zones: "Zones & Quests",
            tips: "Pro Tips"
        },
        talents: {
            unlockAt: "Talents unlock at Level 10",
            current: "Current",
            next: "Next",
            tree: "Talent Tree",
            pointsSpent: "Points Spent"
        },
        rotation: {
            opener: "Opener",
            rotation: "Rotation",
            keepActive: "Keep Active",
            powershifting: "⚡ Powershifting"
        },
        classQuests: {
            availableNow: "🔔 Available Now",
            upcoming: "⏳ Upcoming",
            completed: "✅ All class quests completed!",
            duration: "Duration",
            location: "Location",
            cost: "Cost",
            reward: "Reward",
            priority: {
                critical: "CRITICAL",
                high: "HIGH",
                medium: "MEDIUM",
                low: "LOW"
            }
        },
        gear: {
            currentLevel: "Current Level Gear",
            upcoming: "Upcoming Gear",
            keepQuesting: "Keep questing gear!",
            lookFor: "Look for items with Agility and Stamina"
        },
        professions: {
            leveling: "Leveling Professions",
            endgame: "🔥 Endgame (BiS) Professions",
            strategy: "Strategy",
            bisItems: "BiS Items Available",
            requires: "Requires",
            exclusive: "★ EXCLUSIVE"
        },
        zones: {
            recommended: "Recommended Zones",
            alliance: "Alliance",
            horde: "Horde",
            dungeons: "Dungeons"
        },
        powerSpikes: {
            noMore: "🎉 No more major power spikes!",
            endgame: "You've reached endgame. Focus on gear and professions!"
        },
        common: {
            level: "Level",
            and: "and"
        }
    }
};

// Current language
window.currentLanguage = window.currentLanguage || 'de';

// Initialize i18n
function initI18n() {
    // Check if user has a saved preference
    const savedLang = localStorage.getItem('language');
    if (savedLang && window.translations[savedLang]) {
        window.currentLanguage = savedLang;
    }

    updateLanguageButtons();
    translatePage();
}

// Update language button states
function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = window.currentLanguage === 'de' ?
        document.getElementById('langDe') :
        document.getElementById('langEn');

    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// Change language
function changeLanguage(lang) {
    if (window.translations[lang]) {
        window.currentLanguage = lang;
        localStorage.setItem('language', lang);
        updateLanguageButtons();
        translatePage();
        updateAllContent(); // Re-render content in new language
        if (typeof refreshTips === 'function') {
            refreshTips(); // Refresh tips carousel
        }
    }
}

// Translate all elements with data-i18n attribute
function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key);
        if (translation) {
            element.textContent = translation;
        }
    });
}

// Get translation by key (supports nested keys like "header.title")
function getTranslation(key) {
    const keys = key.split('.');
    let value = window.translations[window.currentLanguage];

    for (const k of keys) {
        if (value && typeof value === 'object') {
            value = value[k];
        } else {
            return null;
        }
    }

    return value;
}

// Helper function to translate in code
function t(key) {
    return getTranslation(key) || key;
}

// Setup language toggle buttons
document.addEventListener('DOMContentLoaded', () => {
    initI18n();

    document.getElementById('langDe')?.addEventListener('click', () => changeLanguage('de'));
    document.getElementById('langEn')?.addEventListener('click', () => changeLanguage('en'));
});