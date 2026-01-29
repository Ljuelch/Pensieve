// ========================================
// FERAL DRUID LEVELING GEAR (CLASSIC 1-60)
// NUR WICHTIGE ITEMS! Keine Zeitverschwendung!
// ========================================

const feralDruidGear = {

    // ========================================
    // WEAPONS (IRRELEVANT FÜR DRUIDEN!)
    // ========================================
    weapons: [
        {
            level: 1,
            name: "⚠️ WAFFEN SIND EGAL!",
            nameEn: "⚠️ WEAPONS DON'T MATTER!",
            dps: "N/A",
            source: "Jede Waffe die du findest",
            sourceDe: "Jede Waffe die du findest",
            sourceEn: "Any weapon you find",
            notes: "Druiden-DPS kommt von Form, NICHT von Waffe! Keine Zeit mit Waffen-Farmen verschwenden!",
            notesEn: "Druid DPS comes from form, NOT weapon! Don't waste time farming weapons!"
        }
    ],

    // ========================================
    // GEAR SETS (NUR WICHTIGE UPGRADES!)
    // ========================================
    gearSets: [
        {
            levelRange: [1, 19],
            name: "Quest-Gear",
            nameDe: "Quest-Gear",
            nameEn: "Quest Gear",
            items: [
                {
                    slot: "Alle Slots",
                    slotEn: "All Slots",
                    item: "Nimm JEDES Leder mit Agility/Stamina von Quests",
                    itemEn: "Take ANY leather with Agility/Stamina from quests"
                }
            ]
        },
        {
            levelRange: [20, 39],
            name: '"des Affen" Ausrüstung (Agi + Sta)',
            nameDe: '"des Affen" Ausrüstung (Agi + Sta)',
            nameEn: '"of the Monkey" Gear (Agi + Sta)',
            items: [
                {
                    slot: "Alle Slots",
                    slotEn: "All Slots",
                    item: 'Kaufe billige "des Affen" Grüne im AH (1-5g pro Stück)',
                    itemEn: 'Buy cheap "of the Monkey" greens on AH (1-5g each)'
                }
            ]
        },
        {
            levelRange: [40, 59],
            name: "🔥 WOLFSHEAD HELM + Quest Gear",
            nameDe: "🔥 WOLFSHAUPTHELM + Quest Gear",
            nameEn: "🔥 WOLFSHEAD HELM + Quest Gear",
            items: [
                {
                    slot: "Kopf",
                    slotEn: "Head",
                    item: "🔥🔥🔥 WOLFSHEAD HELM (PFLICHT!) - 10-20g im AH",
                    itemEn: "🔥🔥🔥 WOLFSHEAD HELM (MANDATORY!) - 10-20g on AH"
                },
                {
                    slot: "Rest",
                    slotEn: "Rest",
                    item: "Quest Gear mit Agi/Sta - Keine Zeit farmen!",
                    itemEn: "Quest gear with Agi/Sta - Don't waste time farming!"
                }
            ]
        },
        {
            levelRange: [60, 60],
            name: "Level 60 Pre-Raid BiS",
            nameDe: "Level 60 Pre-Raid BiS",
            nameEn: "Level 60 Pre-Raid BiS",
            items: [
                {
                    slot: "Kopf",
                    slotEn: "Head",
                    item: "🔥 Wolfshead Helm (behalten!)",
                    itemEn: "🔥 Wolfshead Helm (keep it!)"
                },
                {
                    slot: "Brust + Beine",
                    slotEn: "Chest + Legs",
                    item: "Devilsaur Set (150-300g im AH) - +2% Hit!",
                    itemEn: "Devilsaur Set (150-300g on AH) - +2% Hit!"
                },
                {
                    slot: "Trinket",
                    slotEn: "Trinket",
                    item: "Blackhand's Breadth (UBRS) - +2% Krit",
                    itemEn: "Blackhand's Breadth (UBRS) - +2% crit"
                },
                {
                    slot: "Waffe (Tank)",
                    slotEn: "Weapon (Tank)",
                    item: "Manual Crowd Pummeler (Gnomeregan) - Farm 3-5 Stück!",
                    itemEn: "Manual Crowd Pummeler (Gnomeregan) - Farm 3-5 copies!"
                }
            ]
        }
    ],

    // ========================================
    // ESSENTIAL ITEMS (WAS DU WIRKLICH BRAUCHST!)
    // ========================================
    essentialItems: [
        {
            name: "🔥🔥🔥 Wolfshead Helm",
            nameEn: "🔥🔥🔥 Wolfshead Helm",
            level: 40,
            source: "Auktionshaus (10-20g) oder Lederverarbeitung",
            sourceDe: "Auktionshaus (10-20g) oder Lederverarbeitung",
            sourceEn: "Auction House (10-20g) or Leatherworking",
            why: "DAS EINZIGE ITEM DAS DU BRAUCHST! +20 Energy = Powershifting = 2x DPS!",
            whyDe: "DAS EINZIGE ITEM DAS DU BRAUCHST! +20 Energy = Powershifting = 2x DPS!",
            whyEn: "THE ONLY ITEM YOU NEED! +20 Energy = Powershifting = 2x DPS!"
        },
        {
            name: "Reittier (60% bei 40, 100% bei 60)",
            nameEn: "Mount (60% at 40, 100% at 60)",
            level: 40,
            source: "90g (Reittier + Training) bei 40",
            sourceDe: "90g (Reittier + Training) bei 40",
            sourceEn: "90g (mount + training) at 40",
            why: "⚠️ OPTIONAL! Travel Form ist fast genauso schnell und GRATIS!",
            whyDe: "⚠️ OPTIONAL! Travel Form ist fast genauso schnell und GRATIS!",
            whyEn: "⚠️ OPTIONAL! Travel Form is almost as fast and FREE!"
        },
        {
            name: "Devilsaur Set (Brust + Beine)",
            nameEn: "Devilsaur Set (Chest + Legs)",
            level: 60,
            source: "AH (150-300g) oder Lederverarbeitung",
            sourceDe: "AH (150-300g) oder Lederverarbeitung",
            sourceEn: "AH (150-300g) or Leatherworking",
            why: "⚠️ NUR BEI 60 KAUFEN! Set-Bonus: +2% Hit = BiS bis T2!",
            whyDe: "⚠️ NUR BEI 60 KAUFEN! Set-Bonus: +2% Hit = BiS bis T2!",
            whyEn: "⚠️ ONLY BUY AT 60! Set bonus: +2% Hit = BiS until T2!"
        }
    ]
};