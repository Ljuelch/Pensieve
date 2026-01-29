// ========================================
// FROST MAGE LEVELING GEAR (CLASSIC 1-60)
// AoE GRINDING FOCUS - Gear ist fast egal!
// ========================================

const frostMageGear = {

    // ========================================
    // WEAPONS (FAST EGAL!)
    // ========================================
    weapons: [
        {
            level: 1,
            name: "⚠️ WAFFEN FAST EGAL!",
            nameEn: "⚠️ WEAPONS BARELY MATTER!",
            dps: "N/A",
            source: "Quest-Belohnungen",
            sourceDe: "Quest-Belohnungen",
            sourceEn: "Quest rewards",
            notes: "Blizzard nutzt KAUM Weapon DPS! Int + Sta ist wichtiger! Keine Zeit mit Waffen-Farmen verschwenden!",
            notesEn: "Blizzard uses BARELY any weapon DPS! Int + Sta more important! Don't waste time farming weapons!"
        },
        {
            level: 29,
            name: "Illusionsstab",
            nameEn: "Illusionary Rod",
            dps: "30.6",
            source: "SM Bibliothek - Arcanist Doan",
            sourceDe: "SM Bibliothek - Arcanist Doan",
            sourceEn: "SM Library - Arcanist Doan",
            stats: "+11 Int, +9 Sta, +14 Spell Damage",
            statsEn: "+11 Int, +9 Sta, +14 Spell Damage",
            notes: "⚠️ OPTIONAL! Nur nehmen wenn du sowieso SM läufst. Nicht extra farmen!",
            notesEn: "⚠️ OPTIONAL! Only take if you're running SM anyway. Don't farm specifically!"
        }
    ],

    // ========================================
    // GEAR SETS (NUR WICHTIGE STATS!)
    // ========================================
    gearSets: [
        {
            levelRange: [1, 21],
            name: "Quest-Gear",
            nameDe: "Quest-Gear",
            nameEn: "Quest Gear",
            items: [
                {
                    slot: "Alle Slots",
                    slotEn: "All Slots",
                    item: "Nimm JEDEN Stoff mit Int/Sta von Quests",
                    itemEn: "Take ANY cloth with Int/Sta from quests"
                }
            ],
            notes: "Gear egal! Fokus auf schnelles Leveln!",
            notesEn: "Gear doesn't matter! Focus on fast leveling!"
        },
        {
            levelRange: [22, 39],
            name: '"des Adlers" Ausrüstung (Int + Sta)',
            nameDe: '"des Adlers" Ausrüstung (Int + Sta)',
            nameEn: '"of the Eagle" Gear (Int + Sta)',
            items: [
                {
                    slot: "Alle Slots",
                    slotEn: "All Slots",
                    item: '🔥 Kaufe "des Adlers" Grüne im AH (1-5g pro Stück)',
                    itemEn: '🔥 Buy "of the Eagle" greens on AH (1-5g each)'
                }
            ],
            notes: "BESTE STATS für AoE! Int = Mana-Pool, Sta = Überleben!",
            notesEn: "BEST STATS for AoE! Int = mana pool, Sta = survival!"
        },
        {
            levelRange: [40, 59],
            name: "Weiter Quest-Gear + AH Grüne",
            nameDe: "Weiter Quest-Gear + AH Grüne",
            nameEn: "Continue Quest Gear + AH Greens",
            items: [
                {
                    slot: "Alle Slots",
                    slotEn: "All Slots",
                    item: "Quest-Belohnungen + billige AH-Grüne (Int/Sta)",
                    itemEn: "Quest rewards + cheap AH greens (Int/Sta)"
                }
            ],
            notes: "KEINE Items farmen! Nimm was du kriegst!",
            notesEn: "DON'T farm items! Take what you get!"
        },
        {
            levelRange: [60, 60],
            name: "Level 60 Pre-Raid BiS",
            nameDe: "Level 60 Pre-Raid BiS",
            nameEn: "Level 60 Pre-Raid BiS",
            items: [
                {
                    slot: "Brust",
                    slotEn: "Chest",
                    item: "Robe des Erzmagiers (Schneiderei BoP)",
                    itemEn: "Robe of the Archmage (Tailoring BoP)"
                },
                {
                    slot: "Kopf",
                    slotEn: "Head",
                    item: "Krone des Magisters (Scholomance)",
                    itemEn: "Magister's Crown (Scholomance)"
                },
                {
                    slot: "Hals",
                    slotEn: "Neck",
                    item: "Amulett des gefallenen Gottes (Stratholme)",
                    itemEn: "Amulet of the Fallen God (Stratholme)"
                },
                {
                    slot: "Waffe",
                    slotEn: "Weapon",
                    item: "Stab der Beherrschung (UBRS)",
                    itemEn: "Staff of Dominance (UBRS)"
                },
                {
                    slot: "Trinket",
                    slotEn: "Trinket",
                    item: "Talisman ephemerer Macht (Düsterbruch)",
                    itemEn: "Talisman of Ephemeral Power (Dire Maul)"
                }
            ],
            notes: "JETZT farmen! Bei 60 = Scholo/Strath/UBRS runs!",
            notesEn: "NOW farm! At 60 = Scholo/Strath/UBRS runs!"
        }
    ],

    // ========================================
    // ESSENTIAL ITEMS (WAS DU WIRKLICH BRAUCHST!)
    // ========================================
    essentialItems: [
        {
            name: "🔥 'des Adlers' Grüne (Int + Sta)",
            nameEn: "🔥 'of the Eagle' Greens (Int + Sta)",
            level: 22,
            source: "Auktionshaus (1-5g pro Stück)",
            sourceDe: "Auktionshaus (1-5g pro Stück)",
            sourceEn: "Auction House (1-5g each)",
            why: "BESTE STATS! Int = größere Pulls, Sta = Pulls überleben!",
            whyDe: "BESTE STATS! Int = größere Pulls, Sta = Pulls überleben!",
            whyEn: "BEST STATS! Int = bigger pulls, Sta = survive pulls!"
        },
        {
            name: "Mana-Edelsteine (Achat → Citrin → Jade → Rubin)",
            nameEn: "Mana Gems (Agate → Citrine → Jade → Ruby)",
            level: 28,
            source: "Vom Trainer beschwören",
            sourceDe: "Vom Trainer beschwören",
            sourceEn: "Conjure from trainer",
            why: "GRATIS Mana-Tränke! IMMER 2-3 in Taschen haben!",
            whyDe: "GRATIS Mana-Tränke! IMMER 2-3 in Taschen haben!",
            whyEn: "FREE mana potions! ALWAYS have 2-3 in bags!"
        },
        {
            name: "Reittier (60% bei 40)",
            nameEn: "Mount (60% at 40)",
            level: 40,
            source: "90g (Reittier + Training)",
            sourceDe: "90g (Reittier + Training)",
            sourceEn: "90g (mount + training)",
            why: "PFLICHT für AoE! Pulle Mobs während geritten = sicherer!",
            whyDe: "PFLICHT für AoE! Pulle Mobs während geritten = sicherer!",
            whyEn: "REQUIRED for AoE! Pull mobs while mounted = safer!"
        },
        {
            name: "⚠️ KEINE Items farmen beim Leveln!",
            nameEn: "⚠️ DON'T farm items while leveling!",
            level: 1,
            source: "N/A",
            sourceDe: "N/V",
            sourceEn: "N/A",
            why: "AoE Grinding ist SO SCHNELL dass Item-Farmen ZEIT VERSCHWENDET! Einfach bis 60 grinden!",
            whyDe: "AoE Grinding ist SO SCHNELL dass Item-Farmen ZEIT VERSCHWENDET! Einfach bis 60 grinden!",
            whyEn: "AoE grinding is SO FAST that farming items WASTES TIME! Just grind to 60!"
        },
        {
            name: "Robe des Erzmagiers (BiS Brust)",
            nameEn: "Robe of the Archmage (BiS Chest)",
            level: 60,
            source: "Schneiderei (300 Skill) - BoP",
            sourceDe: "Schneiderei (300 Skill) - BoP",
            sourceEn: "Tailoring (300 skill) - BoP",
            why: "⚠️ NUR BEI 60! Selbst craften oder craften lassen! BiS bis Karazhan!",
            whyDe: "⚠️ NUR BEI 60! Selbst craften oder craften lassen! BiS bis Karazhan!",
            whyEn: "⚠️ ONLY AT 60! Craft yourself or have it crafted! BiS until Karazhan!"
        }
    ]
};