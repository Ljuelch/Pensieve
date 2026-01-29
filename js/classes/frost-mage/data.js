// ========================================
// FROST MAGE - COMPLETE DATA (1-60)
// Spineshatter Pre-Patch - TBC Launch: 5. Februar 2026
// ZIEL: Schnellstes AoE Grinding bis 60!
// ========================================

const frostMageData = {
    meta: {
        className: "Frost Mage",
        classNameDe: "Frostmagier",
        spec: "Frost",
        specDe: "Frost",
        color: "#69CCF0",
        icon: "❄️"
    },

    // ========================================
    // TALENTS (CLASSIC 1-60 AoE GRINDING)
    // ========================================
    talents: [
        {
            levelRange: [10, 14],
            points: "5/5 Improved Fireball",
            pointsDe: "5/5 Verbesserter Feuerball",
            pointsEn: "5/5 Improved Fireball",
            reason: "Start mit Feuer bis Level 22 Respec",
            reasonDe: "Start mit Feuer bis Level 22 Respec",
            reasonEn: "Start with Fire until level 22 respec",
            tree: "Feuer",
            treeDe: "Feuer",
            treeEn: "Fire"
        },
        {
            levelRange: [15, 16],
            points: "2/2 Impact",
            pointsDe: "2/2 Einschlag",
            pointsEn: "2/2 Impact",
            reason: "Stun proc für Sicherheit",
            reasonDe: "Stun proc für Sicherheit",
            reasonEn: "Stun proc for safety",
            tree: "Feuer",
            treeDe: "Feuer",
            treeEn: "Fire"
        },
        {
            levelRange: [17, 19],
            points: "3/3 Improved Arcane Explosion",
            pointsDe: "3/3 Verbesserter Arkaner Explosion",
            pointsEn: "3/3 Improved Arcane Explosion",
            reason: "Vorbereitung für frühes AoE",
            reasonDe: "Vorbereitung für frühes AoE",
            reasonEn: "Preparation for early AoE",
            tree: "Arkan",
            treeDe: "Arkan",
            treeEn: "Arcane"
        },
        {
            levelRange: [20, 21],
            points: "2/2 Arcane Concentration",
            pointsDe: "2/2 Arkane Konzentration",
            pointsEn: "2/2 Arcane Concentration",
            reason: "Clearcasting = gratis Zauber",
            reasonDe: "Clearcasting = gratis Zauber",
            reasonEn: "Clearcasting = free spells",
            tree: "Arkan",
            treeDe: "Arkan",
            treeEn: "Arcane"
        },
        {
            levelRange: [22, 22],
            points: "🔥 RESPEC ZU FROST! (Kostet 1g)",
            pointsDe: "🔥 RESPEC ZU FROST! (Kostet 1g)",
            pointsEn: "🔥 RESPEC TO FROST! (Costs 1g)",
            reason: "AoE GRINDING BEGINNT JETZT!",
            reasonDe: "AoE GRINDING BEGINNT JETZT!",
            reasonEn: "AoE GRINDING STARTS NOW!",
            tree: "RESPEC",
            treeDe: "RESPEC",
            treeEn: "RESPEC"
        },
        {
            levelRange: [22, 24],
            points: "3/3 Improved Blizzard (PFLICHT!)",
            pointsDe: "3/3 Verbesserter Blizzard (PFLICHT!)",
            pointsEn: "3/3 Improved Blizzard (MANDATORY!)",
            reason: "🔥 GAME CHANGER! 50% Slow = AoE Kiting möglich!",
            reasonDe: "🔥 GAME CHANGER! 50% Slow = AoE Kiting möglich!",
            reasonEn: "🔥 GAME CHANGER! 50% slow = enables AoE kiting!",
            tree: "Frost",
            treeDe: "Frost",
            treeEn: "Frost"
        },
        {
            levelRange: [25, 27],
            points: "3/3 Elemental Precision",
            pointsDe: "3/3 Elementare Präzision",
            pointsEn: "3/3 Elemental Precision",
            reason: "-6% Resistierung = zuverlässigeres AoE",
            reasonDe: "-6% Resistierung = zuverlässigeres AoE",
            reasonEn: "-6% spell resist = more reliable AoE",
            tree: "Frost",
            treeDe: "Frost",
            treeEn: "Frost"
        },
        {
            levelRange: [28, 29],
            points: "2/2 Permafrost",
            pointsDe: "2/2 Permafrost",
            pointsEn: "2/2 Permafrost",
            reason: "+3 Sek Slow = einfacheres Kiting",
            reasonDe: "+3 Sek Slow = einfacheres Kiting",
            reasonEn: "+3sec slow duration = easier kiting",
            tree: "Frost",
            treeDe: "Frost",
            treeEn: "Frost"
        },
        {
            levelRange: [30, 32],
            points: "3/3 Ice Shards",
            pointsDe: "3/3 Eiszapfen",
            pointsEn: "3/3 Ice Shards",
            reason: "+100% Krit-Schaden",
            reasonDe: "+100% Krit-Schaden",
            reasonEn: "+100% crit damage",
            tree: "Frost",
            treeDe: "Frost",
            treeEn: "Frost"
        },
        {
            levelRange: [33, 35],
            points: "3/3 Piercing Ice",
            pointsDe: "3/3 Durchdringende Kälte",
            pointsEn: "3/3 Piercing Ice",
            reason: "+6% Frostschaden",
            reasonDe: "+6% Frostschaden",
            reasonEn: "+6% frost damage",
            tree: "Frost",
            treeDe: "Frost",
            treeEn: "Frost"
        },
        {
            levelRange: [36, 38],
            points: "3/3 Frost Channeling",
            pointsDe: "3/3 Frostkanalisierung",
            pointsEn: "3/3 Frost Channeling",
            reason: "-15% Manakosten = weniger trinken",
            reasonDe: "-15% Manakosten = weniger trinken",
            reasonEn: "-15% mana cost = less drinking",
            tree: "Frost",
            treeDe: "Frost",
            treeEn: "Frost"
        },
        {
            levelRange: [39, 40],
            points: "2/2 Cold as Ice",
            pointsDe: "2/2 Kalt wie Eis",
            pointsEn: "2/2 Cold as Ice",
            reason: "Cooldown-Reduzierung",
            reasonDe: "Cooldown-Reduzierung",
            reasonEn: "Cooldown reduction",
            tree: "Frost",
            treeDe: "Frost",
            treeEn: "Frost"
        },
        {
            levelRange: [41, 41],
            points: "1/1 Ice Barrier",
            pointsDe: "1/1 Kälteschild",
            pointsEn: "1/1 Ice Barrier",
            reason: "🔥 Überlebens-Schild! Absorbiert 438 Schaden!",
            reasonDe: "🔥 Überlebens-Schild! Absorbiert 438 Schaden!",
            reasonEn: "🔥 Survival shield! Absorbs 438 damage!",
            tree: "Frost",
            treeDe: "Frost",
            treeEn: "Frost"
        },
        {
            levelRange: [42, 44],
            points: "3/3 Improved Frost Nova",
            pointsDe: "3/3 Verbesserter Frostnova",
            pointsEn: "3/3 Improved Frost Nova",
            reason: "-30% Cooldown = mehr Wurzeln!",
            reasonDe: "-30% Cooldown = mehr Wurzeln!",
            reasonEn: "-30% cooldown = more roots!",
            tree: "Frost",
            treeDe: "Frost",
            treeEn: "Frost"
        },
        {
            levelRange: [45, 49],
            points: "5/5 Arcane Concentration",
            pointsDe: "5/5 Arkane Konzentration",
            pointsEn: "5/5 Arcane Concentration",
            reason: "10% Chance auf gratis Zauber = RIESIG!",
            reasonDe: "10% Chance auf gratis Zauber = RIESIG!",
            reasonEn: "10% chance for free spell = HUGE!",
            tree: "Arkan",
            treeDe: "Arkan",
            treeEn: "Arcane"
        },
        {
            levelRange: [50, 54],
            points: "5/5 Arcane Meditation",
            pointsDe: "5/5 Arkane Meditation",
            pointsEn: "5/5 Arcane Meditation",
            reason: "15% Mana-Regen während Zaubern",
            reasonDe: "15% Mana-Regen während Zaubern",
            reasonEn: "15% mana regen while casting",
            tree: "Arkan",
            treeDe: "Arkan",
            treeEn: "Arcane"
        },
        {
            levelRange: [55, 60],
            points: "Rest in Frost (Shatter, Ice Block, etc.)",
            pointsDe: "Rest in Frost (Erstarrung, Eisblock, etc.)",
            pointsEn: "Rest in Frost (Shatter, Ice Block, etc.)",
            reason: "Finale Optimierung für Raids",
            reasonDe: "Finale Optimierung für Raids",
            reasonEn: "Final optimization for raids",
            tree: "Frost",
            treeDe: "Frost",
            treeEn: "Frost"
        }
    ],

    // ========================================
    // AoE GRINDING ROTATION (CLASSIC 1-60)
    // ========================================
    rotation: {
        1: {
            rotation: ["Frostblitz spam"],
            rotationEn: ["Frostbolt spam"],
            buffs: ["Frostsplitter", "Arkane Intelligenz"],
            buffsEn: ["Frost Armor", "Arcane Intellect"],
            notes: "Single Target bis Level 14",
            notesEn: "Single target until level 14"
        },
        14: {
            rotation: ["Frostnova → Arkane Explosion spam"],
            rotationEn: ["Frost Nova → Arcane Explosion spam"],
            opener: ["2-3 Mobs pullen", "Frostnova wenn nah", "AE spam"],
            openerEn: ["Pull 2-3 mobs", "Frost Nova when close", "AE spam"],
            buffs: ["Frostsplitter", "Arkane Intelligenz"],
            buffsEn: ["Frost Armor", "Arcane Intellect"],
            notes: "Start mit kleinen AoE Pulls! Übe Kiting!",
            notesEn: "Start with small AoE pulls! Practice kiting!"
        },
        20: {
            rotation: ["Frostnova → Blinzeln weg → Kegel der Kälte → Blizzard"],
            rotationEn: ["Frost Nova → Blink away → Cone of Cold → Blizzard"],
            buffs: ["Frostsplitter", "Arkane Intelligenz", "Mana-Achat"],
            buffsEn: ["Frost Armor", "Arcane Intellect", "Mana Agate"],
            notes: "Blinzeln freigeschaltet! Sichereres AoE!",
            notesEn: "Blink unlocked! Safer AoE!"
        },
        22: {
            rotation: ["🔥 ECHTES AoE GRINDING!", "Reittier → 5-10 Mobs pullen", "Um sie kreisen → Absitzen", "Frostnova + Kegel → Blizzard", "In Kreisen kiten → Blizzard wiederholen", "Mit Arkaner Explosion beenden"],
            rotationEn: ["🔥 TRUE AoE GRINDING!", "Mount → Pull 5-10 mobs", "Circle them → Dismount", "Frost Nova + CoC → Blizzard", "Kite in circles → Repeat Blizzard", "Finish with Arcane Explosion"],
            buffs: ["Frostsplitter", "Arkane Intelligenz", "Manarubin"],
            buffsEn: ["Frost Armor", "Arcane Intellect", "Mana Ruby"],
            cooldowns: ["Hervorrufung (wenn OOM)"],
            cooldownsEn: ["Evocation (when OOM)"],
            notes: "🔥 VERBESSERTER BLIZZARD! 50% Slow = Mobs erreichen dich nie!",
            notesEn: "🔥 IMPROVED BLIZZARD! 50% slow = mobs never reach you!"
        },
        40: {
            rotation: ["Kälteschild → Reittier → 8-12 Mobs pullen", "Frostnova + KdK → Blizzard kanalisieren", "Distanz halten → Kiten → Blizzard wiederholen", "Nova erneut → Mit AE beenden"],
            rotationEn: ["Ice Barrier → Mount → Pull 8-12 mobs", "Frost Nova + CoC → Blizzard channel", "Keep distance → Kite → Repeat Blizzard", "Nova again → Finish with AE"],
            buffs: ["Kälteschild", "Arkane Intelligenz", "Manarubin", "Eissplitter"],
            buffsEn: ["Ice Barrier", "Arcane Intellect", "Mana Ruby", "Ice Armor"],
            cooldowns: ["Hervorrufung", "Kalter Hauch (Notfall)", "Eisblock (Panik)"],
            cooldownsEn: ["Evocation", "Cold Snap (emergency)", "Ice Block (panic)"],
            notes: "🐎 Reittier + Kälteschild = SICHER! Kann RIESIGE Packs pullen!",
            notesEn: "🐎 Mount + Ice Barrier = SAFE! Can pull HUGE packs!"
        },
        50: {
            rotation: ["Wie 40 aber größere Pulls (10-15 Mobs)", "Nutze Flammenstoß für mehr Burst"],
            rotationEn: ["Same as 40 but bigger pulls (10-15 mobs)", "Use Flamestrike for more burst"],
            buffs: ["Kälteschild", "Arkane Intelligenz", "Manarubin"],
            buffsEn: ["Ice Barrier", "Arcane Intellect", "Mana Ruby"],
            cooldowns: ["Hervorrufung", "Kalter Hauch"],
            cooldownsEn: ["Evocation", "Cold Snap"],
            notes: "Peak AoE Effizienz! 200-300k XP/Stunde möglich!",
            notesEn: "Peak AoE efficiency! 200-300k XP/hour possible!"
        },
        60: {
            rotation: ["AoE Grinding fortsetzen für Gold-Farming!"],
            rotationEn: ["Continue AoE grinding for gold farming!"],
            buffs: ["Kälteschild", "Arkane Brillanz", "Manarubin"],
            buffsEn: ["Ice Barrier", "Arcane Brilliance", "Mana Ruby"],
            notes: "🎉 Level 60! Reich vom Vendor-Müll! Bereit für Raids!",
            notesEn: "🎉 Level 60! Rich from vendor trash! Ready for raids!"
        }
    },

    // ========================================
    // POWER SPIKES (CLASSIC 1-60)
    // ========================================
    powerSpikes: [
        { level: 14, reason: "Arkane Explosion! Kann 2-3 Mobs AoE grinden", reasonEn: "Arcane Explosion! Can AoE grind 2-3 mobs" },
        { level: 20, reason: "Blinzeln! Flucht-Tool = sichereres AoE", reasonEn: "Blink! Escape tool = safer AoE" },
        { level: 22, reason: "🔥🔥🔥 VERBESSERTER BLIZZARD! ECHTES AoE Grinding! 50% Slow!", reasonEn: "🔥🔥🔥 IMPROVED BLIZZARD! TRUE AoE grinding! 50% slow!" },
        { level: 40, reason: "🐎 Reittier + Kälteschild! Pulle 10+ Mobs sicher!", reasonEn: "🐎 Mount + Ice Barrier! Pull 10+ mobs safely!" },
        { level: 50, reason: "Peak AoE Effizienz! 200-300k XP/Stunde!", reasonEn: "Peak AoE efficiency! 200-300k XP/hour!" },
        { level: 60, reason: "🎯 LEVEL 60! Reichster Leveler! 300-500g vom Grinding!", reasonEn: "🎯 LEVEL 60! Richest leveler! 300-500g from grinding!" }
    ],

    // ========================================
    // CLASS QUESTS (CLASSIC)
    // ========================================
    classQuests: {
        available: [
            {
                level: 10,
                name: "Portale lernen",
                nameEn: "Learn Portals",
                duration: "0 Minuten (Trainer)",
                durationEn: "0 minutes (Trainer)",
                location: "Magier-Trainer",
                locationEn: "Mage Trainer",
                reward: "Teleport/Portal Zauber",
                rewardEn: "Teleport/Portal Spells",
                priority: "high",
                notes: "Teleports sparen RIESIGE Zeit! Beim Trainer kaufen.",
                notesEn: "Teleports save HUGE time! Buy from trainer."
            },
            {
                level: 20,
                name: "Wasser/Nahrung beschwören",
                nameEn: "Conjure Water/Food",
                duration: "0 Minuten (Auto-lernen)",
                durationEn: "0 minutes (Auto-learn)",
                location: "Magier-Trainer",
                locationEn: "Mage Trainer",
                reward: "Gratis Essen/Wasser für immer!",
                rewardEn: "Free food/water forever!",
                priority: "high",
                notes: "Nie wieder Essen/Wasser kaufen! Spart Tonnen Gold!",
                notesEn: "Never buy food/water again! Saves tons of gold!"
            }
        ]
    },

    // ========================================
    // PROFESSIONS (CLASSIC SPEEDLEVELING)
    // ========================================
    professions: [
        {
            name: "⚠️ KEINE BERUFE BEIM LEVELING!",
            nameEn: "⚠️ NO PROFESSIONS WHILE LEVELING!",
            reason: "🔥 SPEEDRUN: Berufe bremsen dich! Warte bis 60! AoE Grinding macht 300-500g!",
            reasonEn: "🔥 SPEEDRUN: Professions slow you down! Wait until 60! AoE grinding makes 300-500g!",
            priority: 1
        },
        {
            name: "Bei 60: Schneiderei + Verzauberkunst",
            nameEn: "At 60: Tailoring + Enchanting",
            reason: "Schneiderei = Robe des Erzmagiers (BiS). Verzauberkunst = Ring-Enchants.",
            reasonEn: "Tailoring = Robe of the Archmage (BiS). Enchanting = ring enchants.",
            priority: 2
        }
    ],

    professionsAvoid: ["ALLE während Leveling", "Bergbau", "Kräuterkunde", "Ingenieurskunst"],
    professionsAvoidEn: ["ALL while leveling", "Mining", "Herbalism", "Engineering"],

    // ========================================
    // ZONES (CLASSIC 1-60)
    // ========================================
    zones: [
        { level: 1, zone: "Tirisfal / Elwynn", zoneEn: "Tirisfal / Elwynn" },
        { level: 10, zone: "Silberwald / Westfall", zoneEn: "Silverpine / Westfall" },
        { level: 20, zone: "Hügelland / Rotkamm", zoneEn: "Hillsbrad / Redridge" },
        { level: 30, zone: "🔥 Arathi-Hochland (Stromgarde Orks - BESTER AoE Spot!)", zoneEn: "🔥 Arathi Highlands (Stromgarde Orcs - BEST AoE spot!)" },
        { level: 40, zone: "Tanaris / Feralas", zoneEn: "Tanaris / Feralas" },
        { level: 50, zone: "🔥 Westliche Pestländer (Untote - FANTASTISCH!)", zoneEn: "🔥 Western Plaguelands (Undead - AMAZING!)" },
        { level: 55, zone: "Östliche Pestländer", zoneEn: "Eastern Plaguelands" },
        { level: 58, zone: "Winterspring / Silithus", zoneEn: "Winterspring / Silithus" }
    ],

    // ========================================
    // 🔥 LEVELING STRATEGY (AoE GRINDING!)
    // ========================================
    levelingStrategy: {
        "1-13": {
            strategy: "⚠️ QUEST NORMAL! Kein AoE möglich. Single Target Frostbolt spam!",
            strategyEn: "⚠️ QUEST NORMALLY! No AoE possible. Single target Frostbolt spam!",
            tips: ["Mache ALLE Quests in Startgebiet", "Skill Frostbolt + Conjure Water/Food", "RUSH ZU 14 für Arcane Explosion!"],
            tipsEn: ["Do ALL quests in starting zone", "Skill Frostbolt + Conjure Water/Food", "RUSH TO 14 for Arcane Explosion!"],
            dungeons: [],
            aoespots: [],
            gearFocus: "Quest-Rewards mit Int/Sta"
        },
        "14-21": {
            strategy: "Erste AoE Versuche! Pull 2-3 Mobs → Frost Nova → AE spam!",
            strategyEn: "First AoE attempts! Pull 2-3 mobs → Frost Nova → AE spam!",
            tips: ["Übe kleines AoE mit 2-3 Mobs", "Laufe Deadmines/Wailing Caverns 1-2x", "Bei 20: BLINK freigeschaltet = Escape-Tool!"],
            tipsEn: ["Practice small AoE with 2-3 mobs", "Run Deadmines/Wailing Caverns 1-2x", "At 20: BLINK unlocked = escape tool!"],
            dungeons: [{name: "Deadmines/Wailing Caverns", levels: "14-18", reason: "Gute XP! 1-2 Runs!", skip: false}],
            aoespots: [{location: "Wetlands - Gnolls", coords: "62,60", levels: "16-18", mobs: "2-3 Gnolls", notes: "Erste Übung!"}],
            gearFocus: "Quest Gear mit Int/Sta"
        },
        "22-29": {
            strategy: "🔥🔥🔥 RESPEC ZU FROST! IMPROVED BLIZZARD! ECHTES AoE GRINDING!",
            strategyEn: "🔥🔥🔥 RESPEC TO FROST! IMPROVED BLIZZARD! TRUE AoE GRINDING!",
            tips: ["🔥 BEI LEVEL 22: RESPEC ZU FROST (1g)!", "Skill 3/3 Improved Blizzard SOFORT!", "50% Slow = Mobs erreichen dich NIE!", "Pull 5-8 Mobs → Blizzard kite → AE finish!", "Kaufe 'of the Eagle' Gear im AH (Int+Sta)!"],
            tipsEn: ["🔥 AT LEVEL 22: RESPEC TO FROST (1g)!", "Skill 3/3 Improved Blizzard IMMEDIATELY!", "50% slow = mobs never reach you!", "Pull 5-8 mobs → Blizzard kite → AE finish!", "Buy 'of the Eagle' gear on AH (Int+Sta)!"],
            dungeons: [{name: "Scarlet Monastery", levels: "25-35", reason: "⚠️ OPTIONAL! AoE Grinding ist schneller!", skip: true}],
            aoespots: [
                {location: "🔥 Hillsbrad - Yeti Cave", coords: "Various caves", levels: "28-30", mobs: "5-8 Yetis", notes: "BESTE SPOT 28-30! Grind hier!"},
                {location: "Duskwood - Worgen", coords: "70,71", levels: "28-29", mobs: "5-7 Worgen", notes: "Gute Alternative!"}
            ],
            gearFocus: "🔥 'of the Eagle' Greens im AH! 1-5g pro Stück!"
        },
        "30-39": {
            strategy: "🔥 ARATHI HIGHLANDS = BESTER AoE SPOT! Pull 8-12 Mobs!",
            strategyEn: "🔥 ARATHI HIGHLANDS = BEST AoE SPOT! Pull 8-12 mobs!",
            tips: ["Farm Stromgarde Orcs in Arathi!", "Pull 8-12 Mobs → Mount Circle → Blizzard!", "Spare Gold für Mount bei 40 (90g)!", "Vendor-Trash = 50-100g bis Level 40!"],
            tipsEn: ["Farm Stromgarde Orcs in Arathi!", "Pull 8-12 mobs → Mount circle → Blizzard!", "Save gold for mount at 40 (90g)!", "Vendor trash = 50-100g until level 40!"],
            dungeons: [{name: "⚠️ SKIP ALL DUNGEONS!", levels: "30-40", reason: "AoE Grinding ist 2-3x schneller!", skip: true}],
            aoespots: [
                {location: "🔥🔥🔥 Arathi - Stromgarde Orcs", coords: "19,65 (A) / 73,37 (H)", levels: "31-36", mobs: "8-12 Orcs", notes: "BESTER SPOT 30-40! INSANE XP!"},
                {location: "Thousand Needles - Silithid", coords: "68,83", levels: "33-35", mobs: "6-10 Bugs", notes: "Alternative! Horde-favorisiert!"},
                {location: "Desolace - Centaurs", coords: "Various", levels: "35-38", mobs: "8-10 Centaurs", notes: "Gute Alternative ab 35!"}
            ],
            gearFocus: "Weiter 'of the Eagle' Gear! Spare Gold für Mount!"
        },
        "40-49": {
            strategy: "🐎 MOUNT + ICE BARRIER! Jetzt pull 10-15 Mobs SICHER!",
            strategyEn: "🐎 MOUNT + ICE BARRIER! Now pull 10-15 mobs SAFELY!",
            tips: ["🔥 KAUFE MOUNT BEI 40 (90g)!", "Ice Barrier bei 40 freigeschaltet!", "Pull jetzt 10-15 Mobs = RIESIGE XP!", "Tanaris/Feralas = beste Spots!"],
            tipsEn: ["🔥 BUY MOUNT AT 40 (90g)!", "Ice Barrier unlocked at 40!", "Pull 10-15 mobs now = HUGE XP!", "Tanaris/Feralas = best spots!"],
            dungeons: [{name: "⚠️ SKIP ALL DUNGEONS!", levels: "40-50", reason: "AoE Grinding ist VIEL schneller!", skip: true}],
            aoespots: [
                {location: "🔥 Tanaris - Wastewander Pirates", coords: "60,35 (Waterspring Field)", levels: "40-44", mobs: "10-12 Humanoids", notes: "BESTE SPOT 40-44!"},
                {location: "Feralas - Yeti Cave", coords: "55,56 (Feral Scar Vale)", levels: "43-46", mobs: "10-15 Yetis", notes: "Indoor cave = sicher!"},
                {location: "Hinterlands - Turtles", coords: "34,53", levels: "46-48", mobs: "8-12 Turtles", notes: "Coastal spot! Gute XP!"}
            ],
            gearFocus: "Gear egal! Du bist schon REICH vom Vendor-Müll!"
        },
        "50-59": {
            strategy: "🔥🔥🔥 WESTERN PLAGUELANDS! BESTER SPOT IM GAME! 200-300K XP/H!",
            strategyEn: "🔥🔥🔥 WESTERN PLAGUELANDS! BEST SPOT IN GAME! 200-300K XP/H!",
            tips: ["🔥 FARM WESTERN PLAGUELANDS AB 50!", "Pull Undead ENDLOS!", "200-300k XP/Stunde möglich!", "Du bist REICH jetzt! 300-500g vom Grinding!", "⚠️ BEI 58: STOP QUESTING! Save Quests für 60!"],
            tipsEn: ["🔥 FARM WESTERN PLAGUELANDS FROM 50!", "Pull Undead ENDLESSLY!", "200-300k XP/hour possible!", "You're RICH now! 300-500g from grinding!", "⚠️ AT 58: STOP QUESTING! Save quests for 60!"],
            dungeons: [
                {name: "⚠️ SKIP DUNGEONS BIS 58!", levels: "50-58", reason: "AoE Grinding ist schneller! Bei 58 Scholo/Strat starten!", skip: true},
                {name: "Scholomance + Stratholme (ab 58)", levels: "58-60", reason: "Pre-BiS farmen! Starte bei 58!", skip: false}
            ],
            aoespots: [
                {location: "🔥🔥🔥 Western Plaguelands - Undead", coords: "Various - ÜBERALL!", levels: "51-57", mobs: "12-20 Undead", notes: "INSANE XP! FARM HERE UNTIL 58!"},
                {location: "Eastern Plaguelands - Undead", coords: "Various", levels: "54-60", mobs: "10-15 Undead", notes: "Alternative ab 54!"},
                {location: "Winterspring - Owlbeasts", coords: "Various", levels: "55-58", mobs: "8-12 Owlbeasts", notes: "Alternative! Gute XP!"}
            ],
            gearFocus: "Du bist REICH! 300-500g vom Grinding!"
        },
        "58-59": {
            strategy: "⚠️ WICHTIG: SAVE ALL QUESTS FÜR 60! NUR DUNGEONS!",
            strategyEn: "⚠️ IMPORTANT: SAVE ALL QUESTS FOR 60! ONLY DUNGEONS!",
            tips: ["⚠️ STOP QUESTING! Keine Quests mehr!", "Farm nur Dungeons: Scholo/Strat/UBRS!", "Grund: Bei 60 geben Quests 3x mehr Gold!", "Save Quests = 300-500g extra Gold bei 60!", "Oder weiter AoE Grinding in WPL!"],
            tipsEn: ["⚠️ STOP QUESTING! No more quests!", "Farm only dungeons: Scholo/Strat/UBRS!", "Reason: At 60 quests give 3x more gold!", "Save quests = 300-500g extra gold at 60!", "Or continue AoE grinding in WPL!"],
            dungeons: [{name: "Scholomance + Stratholme + UBRS", levels: "58-60", reason: "Pre-BiS farmen! Oder weiter AoE grinden!", skip: false}],
            aoespots: [{location: "Weiter Western Plaguelands!", coords: "Same as 50-59", levels: "58-59", mobs: "12-20 Undead", notes: "Noch immer BESTE XP!"}],
            gearFocus: "Pre-BiS aus Dungeons ODER weiter AoE grinden!"
        },
        "60": {
            strategy: "🎉 LEVEL 60! DU BIST REICH! 300-500g VOM AoE GRINDING!",
            strategyEn: "🎉 LEVEL 60! YOU'RE RICH! 300-500g FROM AoE GRINDING!",
            tips: ["✅ MACHE JETZT ALLE GESPEICHERTEN QUESTS!", "Farm Pre-Raid BiS:", "  → Robe of the Archmage (Tailoring)", "  → Magister's Crown (Scholomance)", "  → Staff of Dominance (UBRS)", "  → Amulet of the Fallen God (Stratholme)", "Kaufe Epic Mount (900g) - du hast das Gold!", "Vorbereitung für TBC: 60 ist das Ziel!"],
            tipsEn: ["✅ DO ALL SAVED QUESTS NOW!", "Farm Pre-Raid BiS:", "  → Robe of the Archmage (Tailoring)", "  → Magister's Crown (Scholomance)", "  → Staff of Dominance (UBRS)", "  → Amulet of the Fallen God (Stratholme)", "Buy Epic Mount (900g) - you have the gold!", "TBC preparation: 60 is the goal!"],
            dungeons: [{name: "Farm Pre-BiS aus Scholo/Strat/UBRS/DM", levels: "60", reason: "Bereite dich auf TBC vor!", skip: false}],
            aoespots: [],
            gearFocus: "Robe of the Archmage + Magister's Crown + Staff of Dominance"
        }
    },

    // ========================================
    // 🏰 DUNGEONS (KLASSENSPEZIFISCH - MAGE!)
    // ========================================
    dungeons: [
        {
            name: "Höhlen des Wehklagens",
            nameEn: "Wailing Caverns",
            levelRange: [10, 17],
            location: "Brachland",
            locationEn: "Barrens",
            faction: "Beide",
            factionEn: "Both",
            reason: null,
            reasonEn: null,
            xpPerHour: "30-40k XP/h",
            runsRecommended: "0-1 Runs",
            runsRecommendedEn: "0-1 runs",
            loot: [],
            lootEn: [],
            skip: true,
            skipReason: "⚠️ OPTIONAL! Questen ist schneller! Nur wenn Gruppe verfügbar. AoE Grinding nicht möglich hier.",
            skipReasonEn: "⚠️ OPTIONAL! Questing is faster! Only if group available. AoE grinding not possible here."
        },
        {
            name: "Todesminen",
            nameEn: "Deadmines",
            levelRange: [14, 18],
            location: "Westfall",
            locationEn: "Westfall",
            faction: "Allianz",
            factionEn: "Alliance",
            reason: "Nur 1-2 Runs für Quests! Dann weiter AoE grinden. Dungeon-XP < AoE Grinding XP.",
            reasonEn: "Only 1-2 runs for quests! Then continue AoE grinding. Dungeon XP < AoE grinding XP.",
            xpPerHour: "35-45k XP/h",
            runsRecommended: "1-2 Runs",
            runsRecommendedEn: "1-2 runs",
            loot: ["Staff rewards from quests"],
            lootEn: ["Staff rewards from quests"],
            skip: false,
            skipReason: null
        },
        {
            name: "Flammenschlund",
            nameEn: "Ragefire Chasm",
            levelRange: [13, 16],
            location: "Orgrimmar",
            locationEn: "Orgrimmar",
            faction: "Horde",
            factionEn: "Horde",
            reason: "Nur 1 Run für Quests! Schnell durch, dann weiter AoE grinden.",
            reasonEn: "Only 1 run for quests! Quick run, then continue AoE grinding.",
            xpPerHour: "40-50k XP/h",
            runsRecommended: "1 Run",
            runsRecommendedEn: "1 run",
            loot: [],
            lootEn: [],
            skip: false,
            skipReason: null
        },
        {
            name: "Burg Schattenfang",
            nameEn: "Shadowfang Keep",
            levelRange: [18, 21],
            location: "Silberwald",
            locationEn: "Silverpine Forest",
            faction: "Beide",
            factionEn: "Both",
            reason: null,
            reasonEn: null,
            xpPerHour: "25-35k XP/h",
            runsRecommended: "0 Runs",
            runsRecommendedEn: "0 runs",
            loot: [],
            lootEn: [],
            skip: true,
            skipReason: "⚠️ SKIP! AoE Grinding ist 2x schneller! Keine Zeit für Dungeons verschwenden!",
            skipReasonEn: "⚠️ SKIP! AoE grinding is 2x faster! Don't waste time on dungeons!"
        },
        {
            name: "Tiefschwarze Grotte",
            nameEn: "Blackfathom Deeps",
            levelRange: [20, 24],
            location: "Aschenwald",
            locationEn: "Ashenvale",
            faction: "Beide",
            factionEn: "Both",
            reason: "Nur 1 Run für Quests! Dann zurück zum AoE Grinding. Hillsbrad Yetis sind besser!",
            reasonEn: "Only 1 run for quests! Then back to AoE grinding. Hillsbrad Yetis are better!",
            xpPerHour: "40-50k XP/h",
            runsRecommended: "1 Run",
            runsRecommendedEn: "1 run",
            loot: [],
            lootEn: [],
            skip: false,
            skipReason: null
        },
        {
            name: "Scharlachrotes Kloster",
            nameEn: "Scarlet Monastery",
            levelRange: [25, 35],
            location: "Tirisfal",
            locationEn: "Tirisfal",
            faction: "Beide",
            factionEn: "Both",
            reason: null,
            reasonEn: null,
            xpPerHour: "60-80k XP/h",
            runsRecommended: "0 Runs",
            runsRecommendedEn: "0 runs",
            loot: [],
            lootEn: [],
            skip: true,
            skipReason: "⚠️ SKIP! AoE Grinding ist schneller! Arathi Stromgarde Orcs = 80-100k XP/h > SM! Keine Dungeons 30-58!",
            skipReasonEn: "⚠️ SKIP! AoE grinding is faster! Arathi Stromgarde Orcs = 80-100k XP/h > SM! No dungeons 30-58!"
        },
        {
            name: "Gnomeregan",
            nameEn: "Gnomeregan",
            levelRange: [29, 35],
            location: "Dun Morogh",
            locationEn: "Dun Morogh",
            faction: "Beide",
            factionEn: "Both",
            reason: null,
            reasonEn: null,
            xpPerHour: "30-40k XP/h",
            runsRecommended: "0 Runs",
            runsRecommendedEn: "0 runs",
            loot: [],
            lootEn: [],
            skip: true,
            skipReason: "⚠️ SKIP! AoE Grinding ist 3x schneller! MCP brauchst du NICHT als Mage! Zeit-Verschwendung!",
            skipReasonEn: "⚠️ SKIP! AoE grinding is 3x faster! You don't need MCP as Mage! Waste of time!"
        },
        {
            name: "Uldaman",
            nameEn: "Uldaman",
            levelRange: [35, 40],
            location: "Ödland",
            locationEn: "Badlands",
            faction: "Beide",
            factionEn: "Both",
            reason: null,
            reasonEn: null,
            xpPerHour: "45-55k XP/h",
            runsRecommended: "0 Runs",
            runsRecommendedEn: "0 runs",
            loot: [],
            lootEn: [],
            skip: true,
            skipReason: "⚠️ SKIP! AoE Grinding Arathi = 2x schneller! Keine Dungeons in diesem Level-Bereich!",
            skipReasonEn: "⚠️ SKIP! AoE grinding Arathi = 2x faster! No dungeons in this level range!"
        },
        {
            name: "Zul'Farrak",
            nameEn: "Zul'Farrak",
            levelRange: [40, 48],
            location: "Tanaris",
            locationEn: "Tanaris",
            faction: "Beide",
            factionEn: "Both",
            reason: null,
            reasonEn: null,
            xpPerHour: "70-90k XP/h",
            runsRecommended: "0 Runs (OPTIONAL: Solo Farm)",
            runsRecommendedEn: "0 runs (OPTIONAL: solo farm)",
            loot: [],
            lootEn: [],
            skip: true,
            skipReason: "⚠️ SKIP während Leveling! ABER: Bei 60 kannst du ZF solo AoE farmen für Gold! Während Leveling: Tanaris Wastewander AoE ist besser!",
            skipReasonEn: "⚠️ SKIP while leveling! BUT: At 60 you can solo AoE farm ZF for gold! While leveling: Tanaris Wastewander AoE is better!"
        },
        {
            name: "Maraudon",
            nameEn: "Maraudon",
            levelRange: [40, 48],
            location: "Desolace",
            locationEn: "Desolace",
            faction: "Beide",
            factionEn: "Both",
            reason: null,
            reasonEn: null,
            xpPerHour: "35-45k XP/h",
            runsRecommended: "0 Runs",
            runsRecommendedEn: "0 runs",
            loot: [],
            lootEn: [],
            skip: true,
            skipReason: "⚠️ SKIP! Viel zu lang! AoE Grinding ist 3x schneller!",
            skipReasonEn: "⚠️ SKIP! Way too long! AoE grinding is 3x faster!"
        },
        {
            name: "Versunkener Tempel",
            nameEn: "Sunken Temple",
            levelRange: [45, 50],
            location: "Sümpfe des Elends",
            locationEn: "Swamp of Sorrows",
            faction: "Beide",
            factionEn: "Both",
            reason: null,
            reasonEn: null,
            xpPerHour: "50-60k XP/h",
            runsRecommended: "0 Runs",
            runsRecommendedEn: "0 runs",
            loot: [],
            lootEn: [],
            skip: true,
            skipReason: "⚠️ SKIP! AoE Grinding Western Plaguelands = 200k+ XP/h! Keine Zeit für Dungeons!",
            skipReasonEn: "⚠️ SKIP! AoE grinding Western Plaguelands = 200k+ XP/h! No time for dungeons!"
        },
        {
            name: "Schwarzfelstiefen (BRD)",
            nameEn: "Blackrock Depths (BRD)",
            levelRange: [50, 56],
            location: "Brennende Steppe",
            locationEn: "Burning Steppes",
            faction: "Beide",
            factionEn: "Both",
            reason: null,
            reasonEn: null,
            xpPerHour: "80-100k XP/h",
            runsRecommended: "0 Runs",
            runsRecommendedEn: "0 runs",
            loot: [],
            lootEn: [],
            skip: true,
            skipReason: "⚠️ SKIP während 50-58! AoE Grinding WPL = 200-300k XP/h! Bei 58+ kannst du BRD für Pre-BiS farmen!",
            skipReasonEn: "⚠️ SKIP during 50-58! AoE grinding WPL = 200-300k XP/h! At 58+ you can farm BRD for Pre-BiS!"
        },
        {
            name: "Untere Blackrockspitze (LBRS)",
            nameEn: "Lower Blackrock Spire (LBRS)",
            levelRange: [55, 60],
            location: "Brennende Steppe",
            locationEn: "Burning Steppes",
            faction: "Beide",
            factionEn: "Both",
            reason: "Ab Level 58: Pre-BiS Gear farmen! Starte hier für Gear-Upgrades. 3-5 Runs!",
            reasonEn: "From level 58: Farm Pre-BiS gear! Start here for gear upgrades. 3-5 runs!",
            xpPerHour: "60-70k XP/h",
            runsRecommended: "3-5 Runs (ab 58)",
            runsRecommendedEn: "3-5 runs (from 58)",
            loot: ["Robe of Winter Night", "Animated Chain Necklace"],
            lootEn: ["Robe of Winter Night", "Animated Chain Necklace"],
            skip: false,
            skipReason: null
        },
        {
            name: "Scholomance",
            nameEn: "Scholomance",
            levelRange: [55, 60],
            location: "Westliche Pestländer",
            locationEn: "Western Plaguelands",
            faction: "Beide",
            factionEn: "Both",
            reason: "🔥 Ab Level 58: Pre-BiS Gear farmen! Magister's Crown (BiS Helm!) + Necromantic Band! 5-10 Runs!",
            reasonEn: "🔥 From level 58: Farm Pre-BiS gear! Magister's Crown (BiS helm!) + Necromantic Band! 5-10 runs!",
            xpPerHour: "50-60k XP/h",
            runsRecommended: "5-10 Runs (ab 58)",
            runsRecommendedEn: "5-10 runs (from 58)",
            loot: ["Magister's Crown", "Necromantic Band", "Star of Mystaria"],
            lootEn: ["Magister's Crown", "Necromantic Band", "Star of Mystaria"],
            skip: false,
            skipReason: null
        },
        {
            name: "Stratholme",
            nameEn: "Stratholme",
            levelRange: [55, 60],
            location: "Östliche Pestländer",
            locationEn: "Eastern Plaguelands",
            faction: "Beide",
            factionEn: "Both",
            reason: "🔥 Ab Level 58: Pre-BiS Gear farmen! Amulet of the Fallen God (BiS Amulet!) + Beide Seiten farmen! 5-10 Runs!",
            reasonEn: "🔥 From level 58: Farm Pre-BiS gear! Amulet of the Fallen God (BiS amulet!) + Farm both sides! 5-10 runs!",
            xpPerHour: "50-60k XP/h",
            runsRecommended: "5-10 Runs (ab 58)",
            runsRecommendedEn: "5-10 runs (from 58)",
            loot: ["Amulet of the Fallen God", "Animated Chain Necklace", "Skullflame Shield"],
            lootEn: ["Amulet of the Fallen God", "Animated Chain Necklace", "Skullflame Shield"],
            skip: false,
            skipReason: null
        },
        {
            name: "Obere Blackrockspitze (UBRS)",
            nameEn: "Upper Blackrock Spire (UBRS)",
            levelRange: [58, 60],
            location: "Brennende Steppe",
            locationEn: "Burning Steppes",
            faction: "Beide",
            factionEn: "Both",
            reason: "🔥 Ab Level 58: Pre-BiS Gear farmen! Staff of Dominance (BiS Staff!) + Important gear! 5-10 Runs!",
            reasonEn: "🔥 From level 58: Farm Pre-BiS gear! Staff of Dominance (BiS staff!) + Important gear! 5-10 runs!",
            xpPerHour: "40-50k XP/h",
            runsRecommended: "5-10 Runs (ab 58)",
            runsRecommendedEn: "5-10 runs (from 58)",
            loot: ["Staff of Dominance", "Crystallized Girdle", "Robe of Winter Night"],
            lootEn: ["Staff of Dominance", "Crystallized Girdle", "Robe of Winter Night"],
            skip: false,
            skipReason: null
        }
    ]
};