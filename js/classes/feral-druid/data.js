// ========================================
// FERAL DRUID - COMPLETE DATA (1-60)
// Spineshatter Pre-Patch - TBC Launch: 5. Februar 2026
// ZIEL: Schnellstes Leveling bis 60!
// ========================================

const feralDruidData = {
    meta: {
        className: "Feral Druid",
        classNameDe: "Wilder Druide",
        spec: "Feral",
        specDe: "Wildheit",
        color: "#FF7D0A",
        icon: "🐻"
    },

    // ========================================
    // TALENTS (CLASSIC 1-60)
    // ========================================
    talents: [
        {
            levelRange: [10, 14],
            points: "5/5 Ferocity",
            pointsDe: "5/5 Wildheit",
            pointsEn: "5/5 Ferocity",
            reason: "Reduziert Rage/Energy-Kosten = mehr Fähigkeiten = schneller killen!",
            reasonDe: "Reduziert Rage/Energy-Kosten = mehr Fähigkeiten = schneller killen!",
            reasonEn: "Reduces Rage/Energy costs = more abilities = faster kills!",
            tree: "Wilder Kampf",
            treeDe: "Wilder Kampf",
            treeEn: "Feral Combat"
        },
        {
            levelRange: [15, 16],
            points: "2/3 Feral Aggression",
            pointsDe: "2/3 Wilde Aggression",
            pointsEn: "2/3 Feral Aggression",
            reason: "Mehr Damage mit Ferocious Bite später",
            reasonDe: "Mehr Damage mit Ferocious Bite später",
            reasonEn: "More damage with Ferocious Bite later",
            tree: "Wilder Kampf",
            treeDe: "Wilder Kampf",
            treeEn: "Feral Combat"
        },
        {
            levelRange: [17, 21],
            points: "5/5 Feline Swiftness",
            pointsDe: "5/5 Katzenhafte Schnelligkeit",
            pointsEn: "5/5 Feline Swiftness",
            reason: "🔥 +30% SPEED OUTDOOR! Wichtigstes Talent fürs Leveling!",
            reasonDe: "🔥 +30% SPEED OUTDOOR! Wichtigstes Talent fürs Leveling!",
            reasonEn: "🔥 +30% SPEED OUTDOOR! Most important leveling talent!",
            tree: "Wilder Kampf",
            treeDe: "Wilder Kampf",
            treeEn: "Feral Combat"
        },
        {
            levelRange: [22, 26],
            points: "5/5 Furor",
            pointsDe: "5/5 Furor",
            pointsEn: "5/5 Furor",
            reason: "+40 Energy beim Shift = essentiell für Powershifting mit Wolfshead!",
            reasonDe: "+40 Energy beim Shift = essentiell für Powershifting mit Wolfshead!",
            reasonEn: "+40 Energy on shift = essential for powershifting with Wolfshead!",
            tree: "Wiederherstellung",
            treeDe: "Wiederherstellung",
            treeEn: "Restoration"
        },
        {
            levelRange: [27, 27],
            points: "1/1 Feral Charge",
            pointsDe: "1/1 Wilde Attacke",
            pointsEn: "1/1 Feral Charge",
            reason: "Gap Closer + Interrupt = sehr nützlich!",
            reasonDe: "Gap Closer + Interrupt = sehr nützlich!",
            reasonEn: "Gap closer + interrupt = very useful!",
            tree: "Wilder Kampf",
            treeDe: "Wilder Kampf",
            treeEn: "Feral Combat"
        },
        {
            levelRange: [28, 32],
            points: "5/5 Sharpened Claws",
            pointsDe: "5/5 Geschärfte Klauen",
            pointsEn: "5/5 Sharpened Claws",
            reason: "+6% Krit = mehr Damage!",
            reasonDe: "+6% Krit = mehr Damage!",
            reasonEn: "+6% Crit = more damage!",
            tree: "Wilder Kampf",
            treeDe: "Wilder Kampf",
            treeEn: "Feral Combat"
        },
        {
            levelRange: [33, 35],
            points: "3/3 Thick Hide",
            pointsDe: "3/3 Dickes Fell",
            pointsEn: "3/3 Thick Hide",
            reason: "Mehr Rüstung = weniger Downtime",
            reasonDe: "Mehr Rüstung = weniger Downtime",
            reasonEn: "More armor = less downtime",
            tree: "Wilder Kampf",
            treeDe: "Wilder Kampf",
            treeEn: "Feral Combat"
        },
        {
            levelRange: [36, 38],
            points: "3/3 Predatory Strikes",
            pointsDe: "3/3 Raubtierangriffe",
            pointsEn: "3/3 Predatory Strikes",
            reason: "+18% AP = großer DPS Boost!",
            reasonDe: "+18% AP = großer DPS Boost!",
            reasonEn: "+18% AP = big DPS boost!",
            tree: "Wilder Kampf",
            treeDe: "Wilder Kampf",
            treeEn: "Feral Combat"
        },
        {
            levelRange: [39, 40],
            points: "2/2 Brutal Impact",
            pointsDe: "2/2 Brutaler Aufprall",
            pointsEn: "2/2 Brutal Impact",
            reason: "Längerer Stun mit Bash/Pounce",
            reasonDe: "Längerer Stun mit Bash/Pounce",
            reasonEn: "Longer stun with Bash/Pounce",
            tree: "Wilder Kampf",
            treeDe: "Wilder Kampf",
            treeEn: "Feral Combat"
        },
        {
            levelRange: [41, 45],
            points: "5/5 Heart of the Wild",
            pointsDe: "5/5 Herz der Wildnis",
            pointsEn: "5/5 Heart of the Wild",
            reason: "+20% INT = mehr Mana für Healing/Shifting",
            reasonDe: "+20% INT = mehr Mana für Healing/Shifting",
            reasonEn: "+20% INT = more mana for healing/shifting",
            tree: "Wilder Kampf",
            treeDe: "Wilder Kampf",
            treeEn: "Feral Combat"
        },
        {
            levelRange: [46, 49],
            points: "3/3 Savage Fury + 1/1 Faerie Fire",
            pointsDe: "3/3 Wilder Furor + 1/1 Feenfeuer",
            pointsEn: "3/3 Savage Fury + 1/1 Faerie Fire",
            reason: "+20% Damage mit Claw/Rake/Maul + Armor reduction",
            reasonDe: "+20% Damage mit Claw/Rake/Maul + Armor reduction",
            reasonEn: "+20% damage with Claw/Rake/Maul + armor reduction",
            tree: "Wilder Kampf",
            treeDe: "Wilder Kampf",
            treeEn: "Feral Combat"
        },
        {
            levelRange: [50, 50],
            points: "1/1 Leader of the Pack",
            pointsDe: "1/1 Rudelführer",
            pointsEn: "1/1 Leader of the Pack",
            reason: "🔥 +5% Krit für Gruppe + Heal proc!",
            reasonDe: "🔥 +5% Krit für Gruppe + Heal proc!",
            reasonEn: "🔥 +5% crit for party + heal proc!",
            tree: "Wilder Kampf",
            treeDe: "Wilder Kampf",
            treeEn: "Feral Combat"
        },
        {
            levelRange: [51, 55],
            points: "5/5 Primal Fury",
            pointsDe: "5/5 Urfuror",
            pointsEn: "5/5 Primal Fury",
            reason: "Krit = 5 Energy zurück! Mehr DPS!",
            reasonDe: "Krit = 5 Energy zurück! Mehr DPS!",
            reasonEn: "Crit = 5 energy back! More DPS!",
            tree: "Wilder Kampf",
            treeDe: "Wilder Kampf",
            treeEn: "Feral Combat"
        },
        {
            levelRange: [56, 60],
            points: "5/5 Naturalist (Balance Tree)",
            pointsDe: "5/5 Naturforscher (Balance-Baum)",
            pointsEn: "5/5 Naturalist (Balance Tree)",
            reason: "+10% Physical Damage = mehr DPS!",
            reasonDe: "+10% Physical Damage = mehr DPS!",
            reasonEn: "+10% physical damage = more DPS!",
            tree: "Gleichgewicht",
            treeDe: "Gleichgewicht",
            treeEn: "Balance"
        }
    ],

    // ========================================
    // ROTATION (CLASSIC 1-60)
    // ========================================
    rotation: {
        1: {
            rotation: ["Mondfeuer", "Zorn spam", "Melee finish"],
            rotationEn: ["Moonfire", "Wrath spam", "Melee finish"],
            buffs: ["Mal der Wildnis"],
            buffsEn: ["Mark of the Wild"],
            notes: "Level 1-9 ist langsam. Wechsle zu Melee sobald Mana leer.",
            notesEn: "Level 1-9 is slow. Switch to melee when out of mana."
        },
        10: {
            opener: ["Angriff", "Brüllen"],
            openerEn: ["Charge", "Roar"],
            rotation: ["Maul spam", "Auto-attacks"],
            rotationEn: ["Maul spam", "Auto-attacks"],
            buffs: ["Mal der Wildnis", "Dornen"],
            buffsEn: ["Mark of the Wild", "Thorns"],
            notes: "🔥 BÄRENFORM! Jetzt geht's los! 3x schneller als Caster!",
            notesEn: "🔥 BEAR FORM! Now it starts! 3x faster than caster!"
        },
        20: {
            opener: ["Prowl", "Ravage", "Rake"],
            openerEn: ["Prowl", "Ravage", "Rake"],
            rotation: ["Claw spam", "Rip bei 5 CP"],
            rotationEn: ["Claw spam", "Rip at 5 CP"],
            buffs: ["Mal der Wildnis", "Dornen"],
            buffsEn: ["Mark of the Wild", "Thorns"],
            notes: "🔥 KATZENFORM! +30% Speed! Immer mit Prowl → Ravage starten!",
            notesEn: "🔥 CAT FORM! +30% speed! Always start with Prowl → Ravage!"
        },
        30: {
            opener: ["Prowl", "Ravage", "Rake"],
            openerEn: ["Prowl", "Ravage", "Rake"],
            rotation: ["Claw spam", "Rip bei 5 CP", "Ferocious Bite wenn Rip aktiv"],
            rotationEn: ["Claw spam", "Rip at 5 CP", "Ferocious Bite when Rip active"],
            buffs: ["Mal der Wildnis", "Dornen"],
            buffsEn: ["Mark of the Wild", "Thorns"],
            cooldowns: ["Tiger's Fury (bei niedriger Energy)"],
            cooldownsEn: ["Tiger's Fury (when low energy)"],
            notes: "Ferocious Bite nur nutzen wenn Rip läuft!",
            notesEn: "Only use Ferocious Bite when Rip is running!"
        },
        40: {
            opener: ["Prowl", "Ravage", "Faerie Fire (Feral)"],
            openerEn: ["Prowl", "Ravage", "Faerie Fire (Feral)"],
            rotation: ["Rake", "Claw zu 5 CP", "Rip", "Claw spam"],
            rotationEn: ["Rake", "Claw to 5 CP", "Rip", "Claw spam"],
            buffs: ["Mal der Wildnis", "Dornen"],
            buffsEn: ["Mark of the Wild", "Thorns"],
            cooldowns: ["Tiger's Fury"],
            cooldownsEn: ["Tiger's Fury"],
            notes: "🔥 WOLFSHEAD HELM! Shift raus/rein für +60 Energy! GAME CHANGER!",
            notesEn: "🔥 WOLFSHEAD HELM! Shift out/in for +60 energy! GAME CHANGER!"
        },
        50: {
            opener: ["Prowl", "Pounce (Stun)", "Ravage"],
            openerEn: ["Prowl", "Pounce (Stun)", "Ravage"],
            rotation: ["Faerie Fire (Feral)", "Rake", "Claw zu 5 CP", "Rip", "Ferocious Bite bei Rip", "Powershift bei niedriger Energy"],
            rotationEn: ["Faerie Fire (Feral)", "Rake", "Claw to 5 CP", "Rip", "Ferocious Bite when Rip up", "Powershift when low energy"],
            buffs: ["Mal der Wildnis", "Dornen", "Leader of the Pack"],
            buffsEn: ["Mark of the Wild", "Thorns", "Leader of the Pack"],
            cooldowns: ["Tiger's Fury"],
            cooldownsEn: ["Tiger's Fury"],
            notes: "🔥 LEADER OF THE PACK! +5% Krit + Heal proc! Powershifting aktiv nutzen!",
            notesEn: "🔥 LEADER OF THE PACK! +5% crit + heal proc! Use powershifting actively!"
        },
        60: {
            opener: ["Prowl", "Pounce", "Ravage", "Faerie Fire (Feral)"],
            openerEn: ["Prowl", "Pounce", "Ravage", "Faerie Fire (Feral)"],
            rotation: ["Rake", "Claw zu 5 CP", "Rip", "Shred spam", "Ferocious Bite", "Powershift"],
            rotationEn: ["Rake", "Claw to 5 CP", "Rip", "Shred spam", "Ferocious Bite", "Powershift"],
            buffs: ["Mark of the Wild", "Thorns", "Leader of the Pack"],
            buffsEn: ["Mark of the Wild", "Thorns", "Leader of the Pack"],
            cooldowns: ["Tiger's Fury"],
            cooldownsEn: ["Tiger's Fury"],
            notes: "✅ LEVEL 60! Bereit für TBC Launch! Farm jetzt Pre-Raid BiS!",
            notesEn: "✅ LEVEL 60! Ready for TBC launch! Farm pre-raid BiS now!"
        }
    },

    // ========================================
    // POWER SPIKES (CLASSIC 1-60)
    // ========================================
    powerSpikes: [
        { level: 10, reason: "🐻 BÄRENFORM! 3x schneller leveln!", reasonEn: "🐻 BEAR FORM! 3x faster leveling!" },
        { level: 20, reason: "🐱 KATZENFORM! +30% Speed outdoor!", reasonEn: "🐱 CAT FORM! +30% speed outdoor!" },
        { level: 30, reason: "⚡ Travel Form + Feral Charge!", reasonEn: "⚡ Travel Form + Feral Charge!" },
        { level: 40, reason: "🔥🔥🔥 WOLFSHEAD HELM! PFLICHT! Powershifting = +60 Energy!", reasonEn: "🔥🔥🔥 WOLFSHEAD HELM! MANDATORY! Powershifting = +60 energy!" },
        { level: 50, reason: "🎯 Leader of the Pack! +5% Krit für alle!", reasonEn: "🎯 Leader of the Pack! +5% crit for all!" },
        { level: 60, reason: "✅ MAX LEVEL! Bereit für TBC am 5. Februar!", reasonEn: "✅ MAX LEVEL! Ready for TBC on Feb 5th!" }
    ],

    // ========================================
    // 🔥 LEVELING STRATEGY (KONKRETE TIPPS!)
    // ========================================
    levelingStrategy: {
        "1-9": {
            strategy: "⚠️ LANGSAMSTER TEIL! Cast Wrath + Moonfire → Melee finish. RUSH ZU 10!",
            strategyEn: "⚠️ SLOWEST PART! Cast Wrath + Moonfire → Melee finish. RUSH TO 10!",
            tips: [
                "Mache ALLE Quests in deinem Startgebiet",
                "Keine Dungeons noch verfügbar",
                "Spare Gold für Skills bei Level 10!"
            ],
            tipsEn: [
                "Do ALL quests in your starting zone",
                "No dungeons available yet",
                "Save gold for skills at level 10!"
            ],
            dungeons: [],
            gearFocus: "Quest-Belohnungen mit Stärke/Ausdauer",
            gearFocusEn: "Quest rewards with Strength/Stamina"
        },
        "10-13": {
            strategy: "🐻 BÄRENFORM! Bleib in Bär! Spam Maul + Auto-Attacks!",
            strategyEn: "🐻 BEAR FORM! Stay in Bear! Spam Maul + Auto-attacks!",
            tips: [
                "🔥 MACHE SOFORT BÄRENFORM-QUEST IN MOONGLADE!",
                "Laufe Wailing Caverns 1-2x für XP",
                "Trainiere neue Skills bei Level 12"
            ],
            tipsEn: [
                "🔥 DO BEAR FORM QUEST IN MOONGLADE IMMEDIATELY!",
                "Run Wailing Caverns 1-2x for XP",
                "Train new skills at level 12"
            ],
            dungeons: [
                {
                    name: "Wailing Caverns",
                    nameDe: "Höhlen des Wehklagens",
                    nameEn: "Wailing Caverns",
                    levels: "10-13 (Alliance) / 10-17 (Horde)",
                    reason: "Gute XP + Quest-Rewards. 1-2 Runs reichen!",
                    reasonEn: "Good XP + quest rewards. 1-2 runs enough!",
                    skip: false
                }
            ],
            gearFocus: "Crescent Staff droppt von WC Bossen - OPTIONAL!",
            gearFocusEn: "Crescent Staff drops from WC bosses - OPTIONAL!"
        },
        "14-17": {
            strategy: "🐻 Weiter in Bär! Queste in Darkshore/Silverpine/Barrens",
            strategyEn: "🐻 Stay in Bear! Quest in Darkshore/Silverpine/Barrens",
            tips: [
                "Laufe Deadmines (Alliance) oder Ragefire Chasm (Horde)",
                "Sammel Quest-Rewards mit Agi/Sta",
                "Skill Skinning + Herbalism für Gold!"
            ],
            tipsEn: [
                "Run Deadmines (Alliance) or Ragefire Chasm (Horde)",
                "Collect quest rewards with Agi/Sta",
                "Skill Skinning + Herbalism for gold!"
            ],
            dungeons: [
                {
                    name: "Deadmines",
                    nameDe: "Todesminen",
                    nameEn: "Deadmines",
                    levels: "14-18 (Alliance only)",
                    reason: "Viele Quests! 2-3 Runs für XP + Gear",
                    reasonEn: "Many quests! 2-3 runs for XP + gear",
                    skip: false
                },
                {
                    name: "Ragefire Chasm",
                    nameDe: "Flammenschlund",
                    nameEn: "Ragefire Chasm",
                    levels: "13-16 (Horde only)",
                    reason: "Schneller Dungeon in Orgrimmar. 1-2 Runs!",
                    reasonEn: "Fast dungeon in Orgrimmar. 1-2 runs!",
                    skip: false
                }
            ],
            gearFocus: "Quest Gear mit Agi/Sta - keine Zeit farmen!",
            gearFocusEn: "Quest gear with Agi/Sta - don't waste time farming!"
        },
        "18-19": {
            strategy: "Bereite dich auf KATZENFORM bei 20 vor! Spare 10s für Skill!",
            strategyEn: "Prepare for CAT FORM at 20! Save 10s for skill!",
            tips: [
                "Queste in Redridge/Ashenvale/Stonetalon",
                "Laufe Shadowfang Keep (optional)",
                "WICHTIG: Spare 10 Silber für Cat Form bei 20!"
            ],
            tipsEn: [
                "Quest in Redridge/Ashenvale/Stonetalon",
                "Run Shadowfang Keep (optional)",
                "IMPORTANT: Save 10 silver for Cat Form at 20!"
            ],
            dungeons: [
                {
                    name: "Shadowfang Keep",
                    nameDe: "Burg Schattenfang",
                    nameEn: "Shadowfang Keep",
                    levels: "18-21",
                    reason: "⚠️ SKIP! Zu weit weg, lohnt nicht!",
                    reasonEn: "⚠️ SKIP! Too far away, not worth it!",
                    skip: true
                }
            ],
            gearFocus: "Quest Gear - keine Dungeons farmen!",
            gearFocusEn: "Quest gear - don't farm dungeons!"
        },
        "20-24": {
            strategy: "🐱 KATZENFORM! Kaufe sofort beim Trainer! +30% Speed draußen!",
            strategyEn: "🐱 CAT FORM! Buy from trainer immediately! +30% speed outdoors!",
            tips: [
                "🔥 KAUFE CAT FORM BEIM TRAINER! (Keine Quest!)",
                "Skill 5/5 Feline Swiftness ASAP!",
                "Laufe Blackfathom Deeps 1-2x",
                "Immer mit Prowl → Ravage starten!"
            ],
            tipsEn: [
                "🔥 BUY CAT FORM FROM TRAINER! (No quest!)",
                "Skill 5/5 Feline Swiftness ASAP!",
                "Run Blackfathom Deeps 1-2x",
                "Always start with Prowl → Ravage!"
            ],
            dungeons: [
                {
                    name: "Blackfathom Deeps",
                    nameDe: "Tiefschwarze Grotte",
                    nameEn: "Blackfathom Deeps",
                    levels: "20-24",
                    reason: "Gute XP + Quest-Rewards! 1-2 Runs!",
                    reasonEn: "Good XP + quest rewards! 1-2 runs!",
                    skip: false
                }
            ],
            gearFocus: "BFD Quest-Rewards + 'of the Monkey' Gear im AH",
            gearFocusEn: "BFD quest rewards + 'of the Monkey' gear on AH"
        },
        "25-29": {
            strategy: "Skill Furor 5/5! Queste + Dungeons Mix!",
            strategyEn: "Skill Furor 5/5! Quest + Dungeon mix!",
            tips: [
                "Laufe Scarlet Monastery (SM) - BESTE XP!",
                "Graveyard → Library → Armory → Cathedral",
                "Hole ALLE SM Quests vorher!",
                "Skill 5/5 Furor für Powershifting später!"
            ],
            tipsEn: [
                "Run Scarlet Monastery (SM) - BEST XP!",
                "Graveyard → Library → Armory → Cathedral",
                "Get ALL SM quests beforehand!",
                "Skill 5/5 Furor for powershifting later!"
            ],
            dungeons: [
                {
                    name: "Scarlet Monastery (All Wings)",
                    nameDe: "Scharlachrotes Kloster (Alle Flügel)",
                    nameEn: "Scarlet Monastery (All Wings)",
                    levels: "25-35",
                    reason: "🔥 BESTE DUNGEON-XP! Farm alle Flügel mehrfach!",
                    reasonEn: "🔥 BEST DUNGEON XP! Farm all wings multiple times!",
                    skip: false
                }
            ],
            gearFocus: "SM Quest-Rewards + Scarlet Set (optional)",
            gearFocusEn: "SM quest rewards + Scarlet Set (optional)"
        },
        "30-34": {
            strategy: "Travel Form + Feral Charge! Mobility King!",
            strategyEn: "Travel Form + Feral Charge! Mobility king!",
            tips: [
                "🔥 KAUFE TRAVEL FORM BEIM TRAINER!",
                "Skill Feral Charge (Level 30 Talent)",
                "Weiter SM farmen (Armory + Cathedral)",
                "Queste in Stranglethorn/Desolace/Arathi"
            ],
            tipsEn: [
                "🔥 BUY TRAVEL FORM FROM TRAINER!",
                "Skill Feral Charge (Level 30 talent)",
                "Continue SM farming (Armory + Cathedral)",
                "Quest in Stranglethorn/Desolace/Arathi"
            ],
            dungeons: [
                {
                    name: "Scarlet Monastery (Armory + Cathedral)",
                    nameDe: "Scharlachrotes Kloster (Waffenkammer + Kathedrale)",
                    nameEn: "Scarlet Monastery (Armory + Cathedral)",
                    levels: "30-35",
                    reason: "Noch immer beste XP! 3-5 Runs!",
                    reasonEn: "Still best XP! 3-5 runs!",
                    skip: false
                },
                {
                    name: "Gnomeregan",
                    nameDe: "Gnomeregan",
                    nameEn: "Gnomeregan",
                    levels: "29-35",
                    reason: "⚠️ SKIP! Zu lang, schlechte XP/Zeit!",
                    reasonEn: "⚠️ SKIP! Too long, bad XP/time!",
                    skip: true
                }
            ],
            gearFocus: "SM Gear + Quest-Rewards",
            gearFocusEn: "SM gear + quest rewards"
        },
        "35-39": {
            strategy: "Skill Sharpened Claws! Mehr Krit = mehr DPS!",
            strategyEn: "Skill Sharpened Claws! More crit = more DPS!",
            tips: [
                "Laufe Uldaman 1-2x",
                "Queste in Desolace/Badlands/Swamp of Sorrows",
                "Spare Gold für Wolfshead Helm bei 40!"
            ],
            tipsEn: [
                "Run Uldaman 1-2x",
                "Quest in Desolace/Badlands/Swamp of Sorrows",
                "Save gold for Wolfshead Helm at 40!"
            ],
            dungeons: [
                {
                    name: "Uldaman",
                    nameDe: "Uldaman",
                    nameEn: "Uldaman",
                    levels: "35-40",
                    reason: "Gute XP + Quests! 1-2 Runs reichen!",
                    reasonEn: "Good XP + quests! 1-2 runs enough!",
                    skip: false
                }
            ],
            gearFocus: "Quest Gear - SPARE 20g für Wolfshead Helm!",
            gearFocusEn: "Quest gear - SAVE 20g for Wolfshead Helm!"
        },
        "40-44": {
            strategy: "🔥🔥🔥 WOLFSHEAD HELM KAUFEN! GAME CHANGER!",
            strategyEn: "🔥🔥🔥 BUY WOLFSHEAD HELM! GAME CHANGER!",
            tips: [
                "🔥 KAUFE WOLFSHEAD HELM IM AH (10-20g)!",
                "Lerne Powershifting: Shift raus + rein = +60 Energy!",
                "Laufe Zul'Farrak mehrfach!",
                "ZF = BESTE DUNGEON-XP für dieses Level!"
            ],
            tipsEn: [
                "🔥 BUY WOLFSHEAD HELM ON AH (10-20g)!",
                "Learn powershifting: Shift out + in = +60 energy!",
                "Run Zul'Farrak multiple times!",
                "ZF = BEST DUNGEON XP for this level!"
            ],
            dungeons: [
                {
                    name: "Zul'Farrak",
                    nameDe: "Zul'Farrak",
                    nameEn: "Zul'Farrak",
                    levels: "40-48",
                    reason: "🔥 FARM THIS! Zombie Event = riesige XP! 5-10 Runs!",
                    reasonEn: "🔥 FARM THIS! Zombie Event = huge XP! 5-10 runs!",
                    skip: false
                },
                {
                    name: "Maraudon",
                    nameDe: "Maraudon",
                    nameEn: "Maraudon",
                    levels: "40-48",
                    reason: "⚠️ SKIP! Zu lang, verwirrend, schlechte XP/Zeit!",
                    reasonEn: "⚠️ SKIP! Too long, confusing, bad XP/time!",
                    skip: true
                }
            ],
            gearFocus: "🔥 WOLFSHEAD HELM = #1 PRIORITY!",
            gearFocusEn: "🔥 WOLFSHEAD HELM = #1 PRIORITY!"
        },
        "45-49": {
            strategy: "Powershifting Master! ZF + Sunken Temple farmen!",
            strategyEn: "Powershifting master! Farm ZF + Sunken Temple!",
            tips: [
                "Weiter ZF farmen - noch immer beste XP!",
                "Laufe Sunken Temple 1-2x",
                "Queste in Tanaris/Hinterlands",
                "Übe Powershifting mit Wolfshead!"
            ],
            tipsEn: [
                "Continue ZF farming - still best XP!",
                "Run Sunken Temple 1-2x",
                "Quest in Tanaris/Hinterlands",
                "Practice powershifting with Wolfshead!"
            ],
            dungeons: [
                {
                    name: "Zul'Farrak (noch immer!)",
                    nameDe: "Zul'Farrak (noch immer!)",
                    nameEn: "Zul'Farrak (still!)",
                    levels: "40-48",
                    reason: "Noch immer gut! 3-5 mehr Runs!",
                    reasonEn: "Still good! 3-5 more runs!",
                    skip: false
                },
                {
                    name: "Sunken Temple",
                    nameDe: "Versunkener Tempel",
                    nameEn: "Sunken Temple",
                    levels: "45-50",
                    reason: "Gute XP + Quests! 1-2 Runs!",
                    reasonEn: "Good XP + quests! 1-2 runs!",
                    skip: false
                }
            ],
            gearFocus: "Quest Gear - keine Zeit farmen!",
            gearFocusEn: "Quest gear - don't waste time farming!"
        },
        "50-54": {
            strategy: "Leader of the Pack! +5% Krit für alle!",
            strategyEn: "Leader of the Pack! +5% crit for all!",
            tips: [
                "🔥 SKILL LEADER OF THE PACK (Level 50)!",
                "Laufe BRD mehrfach - BESTE XP!",
                "Queste in Burning Steppes/Searing Gorge",
                "Spare Gold für Epic Mount (900g)!"
            ],
            tipsEn: [
                "🔥 SKILL LEADER OF THE PACK (Level 50)!",
                "Run BRD multiple times - BEST XP!",
                "Quest in Burning Steppes/Searing Gorge",
                "Save gold for Epic Mount (900g)!"
            ],
            dungeons: [
                {
                    name: "Blackrock Depths (BRD)",
                    nameDe: "Schwarzfelstiefen (BRD)",
                    nameEn: "Blackrock Depths (BRD)",
                    levels: "50-56",
                    reason: "🔥 FARM THIS HARD! Beste XP 50+! 10-15 Runs!",
                    reasonEn: "🔥 FARM THIS HARD! Best XP 50+! 10-15 runs!",
                    skip: false
                }
            ],
            gearFocus: "BRD Quest-Rewards + Dungeon Gear",
            gearFocusEn: "BRD quest rewards + dungeon gear"
        },
        "55-57": {
            strategy: "Fast 60! BRD + LBRS + Scholomance farmen!",
            strategyEn: "Almost 60! Farm BRD + LBRS + Scholomance!",
            tips: [
                "Weiter BRD farmen!",
                "Starte LBRS Runs",
                "Laufe Scholomance/Stratholme für Pre-BiS",
                "Queste in Western/Eastern Plaguelands"
            ],
            tipsEn: [
                "Continue BRD farming!",
                "Start LBRS runs",
                "Run Scholomance/Stratholme for Pre-BiS",
                "Quest in Western/Eastern Plaguelands"
            ],
            dungeons: [
                {
                    name: "Lower Blackrock Spire (LBRS)",
                    nameDe: "Untere Blackrockspitze (LBRS)",
                    nameEn: "Lower Blackrock Spire (LBRS)",
                    levels: "55-60",
                    reason: "Gute XP + Pre-BiS Gear! 3-5 Runs!",
                    reasonEn: "Good XP + Pre-BiS gear! 3-5 runs!",
                    skip: false
                },
                {
                    name: "Scholomance",
                    nameDe: "Scholomance",
                    nameEn: "Scholomance",
                    levels: "55-60",
                    reason: "Pre-BiS Gear! Starte jetzt zu farmen!",
                    reasonEn: "Pre-BiS gear! Start farming now!",
                    skip: false
                },
                {
                    name: "Stratholme",
                    nameDe: "Stratholme",
                    nameEn: "Stratholme",
                    levels: "55-60",
                    reason: "Pre-BiS Gear! Starte jetzt zu farmen!",
                    reasonEn: "Pre-BiS gear! Start farming now!",
                    skip: false
                }
            ],
            gearFocus: "Pre-BiS aus Scholo/Strat!",
            gearFocusEn: "Pre-BiS from Scholo/Strat!"
        },
        "58-59": {
            strategy: "⚠️ WICHTIG: SAVE ALL PLAGUELANDS QUESTS FÜR 60!",
            strategyEn: "⚠️ IMPORTANT: SAVE ALL PLAGUELANDS QUESTS FOR 60!",
            tips: [
                "⚠️ STOP QUESTING! Mach KEINE Plaguelands Quests!",
                "Farm nur Dungeons: Scholo/Strat/UBRS!",
                "Grund: Bei 60 geben Quests 3x mehr Gold!",
                "Save Quests = 300-500g extra Gold bei 60!"
            ],
            tipsEn: [
                "⚠️ STOP QUESTING! Don't do Plaguelands quests!",
                "Farm only dungeons: Scholo/Strat/UBRS!",
                "Reason: At 60 quests give 3x more gold!",
                "Save quests = 300-500g extra gold at 60!"
            ],
            dungeons: [
                {
                    name: "Scholomance + Stratholme + UBRS",
                    nameDe: "Scholomance + Stratholme + UBRS",
                    nameEn: "Scholomance + Stratholme + UBRS",
                    levels: "58-60",
                    reason: "NUR DUNGEONS! Keine Quests mehr!",
                    reasonEn: "ONLY DUNGEONS! No more quests!",
                    skip: false
                }
            ],
            gearFocus: "Pre-BiS farmen!",
            gearFocusEn: "Farm Pre-BiS!"
        },
        "60": {
            strategy: "🎉 LEVEL 60! BEREIT FÜR TBC LAUNCH AM 5. FEBRUAR!",
            strategyEn: "🎉 LEVEL 60! READY FOR TBC LAUNCH ON FEB 5TH!",
            tips: [
                "✅ MACHE JETZT ALLE GESPEICHERTEN QUESTS!",
                "Farm Pre-Raid BiS:",
                "  → Wolfshead Helm (keep it!)",
                "  → Devilsaur Set (AH oder craft)",
                "  → Blackhand's Breadth (UBRS)",
                "  → Manual Crowd Pummeler x5 (Gnomeregan - if tanking)",
                "Farm Gold für Epic Mount (900g)",
                "Vorbereitung für TBC: 60 ist das Ziel!"
            ],
            tipsEn: [
                "✅ DO ALL SAVED QUESTS NOW!",
                "Farm Pre-Raid BiS:",
                "  → Wolfshead Helm (keep it!)",
                "  → Devilsaur Set (AH or craft)",
                "  → Blackhand's Breadth (UBRS)",
                "  → Manual Crowd Pummeler x5 (Gnomeregan - if tanking)",
                "Farm gold for Epic Mount (900g)",
                "TBC preparation: 60 is the goal!"
            ],
            dungeons: [
                {
                    name: "Farm Pre-BiS aus Scholo/Strat/UBRS/DM",
                    nameDe: "Farm Pre-BiS aus Scholo/Strat/UBRS/DM",
                    nameEn: "Farm Pre-BiS from Scholo/Strat/UBRS/DM",
                    levels: "60",
                    reason: "Bereite dich auf TBC vor!",
                    reasonEn: "Prepare for TBC!",
                    skip: false
                }
            ],
            gearFocus: "Devilsaur Set + Blackhand's Breadth + MCP (Tank)",
            gearFocusEn: "Devilsaur Set + Blackhand's Breadth + MCP (Tank)"
        }
    },

    // ========================================
    // CLASS QUESTS (NUR WICHTIGE!)
    // ========================================
    classQuests: {
        available: [
            {
                level: 10,
                name: "Bärengestalt-Quest",
                nameEn: "Bear Form Quest",
                duration: "20-30 Minuten",
                durationEn: "20-30 minutes",
                location: "Moonglade → Trainer",
                locationEn: "Moonglade → Trainer",
                reward: "Bärengestalt",
                rewardEn: "Bear Form",
                priority: "critical",
                notes: "⚠️ PFLICHT! Ohne Bärenform ist Leveling 3x langsamer!",
                notesEn: "⚠️ MANDATORY! Without Bear Form leveling is 3x slower!"
            },
            {
                level: 20,
                name: "Katzengestalt (vom Trainer kaufen!)",
                nameEn: "Cat Form (buy from trainer!)",
                duration: "0 Minuten",
                durationEn: "0 minutes",
                location: "Druiden-Trainer",
                locationEn: "Druid Trainer",
                reward: "Katzengestalt",
                rewardEn: "Cat Form",
                priority: "critical",
                notes: "Einfach beim Trainer kaufen! Keine Quest nötig!",
                notesEn: "Just buy from trainer! No quest needed!"
            },
            {
                level: 30,
                name: "Reisegestalt (vom Trainer kaufen!)",
                nameEn: "Travel Form (buy from trainer!)",
                duration: "0 Minuten",
                durationEn: "0 minutes",
                location: "Druiden-Trainer",
                locationEn: "Druid Trainer",
                reward: "Reisegestalt",
                rewardEn: "Travel Form",
                priority: "high",
                notes: "Stackt mit Mount Speed! 40% + 60% = 100% Speed!",
                notesEn: "Stacks with mount speed! 40% + 60% = 100% speed!"
            }
        ]
    },

    // ========================================
    // PROFESSIONS (CLASSIC SPEEDLEVELING)
    // ========================================
    professions: [
        {
            name: "Kürschnerei + Kräuterkunde",
            nameEn: "Skinning + Herbalism",
            reason: "🔥 DOPPEL-GOLD! Skin alles was du killst + sammle Kräuter nebenbei!",
            reasonEn: "🔥 DOUBLE GOLD! Skin everything you kill + gather herbs on the side!",
            priority: 1
        },
        {
            name: "Verzauberkunst (ab 60)",
            nameEn: "Enchanting (at 60)",
            reason: "Droppe Gathering-Berufe bei 60 und skill Enchanting für BiS Ring-Enchants!",
            reasonEn: "Drop gathering at 60 and level Enchanting for BiS ring enchants!",
            priority: 2
        }
    ],

    professionsAvoid: ["Lederverarbeitung (während Leveling)", "Schmiedekunst", "Ingenieurskunst", "Schneiderkunst"],
    professionsAvoidEn: ["Leatherworking (while leveling)", "Blacksmithing", "Engineering", "Tailoring"],

    // ========================================
    // ZONES (CLASSIC 1-60)
    // ========================================
    zones: [
        { level: 1, zone: "Startgebiet (Teldrassil/Mulgore)", zoneEn: "Starting zone (Teldrassil/Mulgore)" },
        { level: 10, zone: "Dunkelküste / Brachland", zoneEn: "Darkshore / Barrens" },
        { level: 20, zone: "Rotkammgebirge / Steinkrallengebirge", zoneEn: "Redridge / Stonetalon" },
        { level: 30, zone: "Schlingendorntal / Tausend Nadeln", zoneEn: "Stranglethorn / Thousand Needles" },
        { level: 40, zone: "Ödland / Sümpfe des Elends", zoneEn: "Badlands / Swamp of Sorrows" },
        { level: 50, zone: "Un'Goro / Brennende Steppe", zoneEn: "Un'Goro / Burning Steppes" },
        { level: 55, zone: "Winterspring / Östliche Pestländer", zoneEn: "Winterspring / Eastern Plaguelands" },
        { level: 58, zone: "⚠️ STOP QUESTING! Farm Dungeons!", zoneEn: "⚠️ STOP QUESTING! Farm dungeons!" }
    ],

    // ========================================
    // 🏰 DUNGEONS (KLASSENSPEZIFISCH!)
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
            reason: "Gute Starter-XP + Quest-Rewards! Crescent Staff droppt hier (optional).",
            reasonEn: "Good starter XP + quest rewards! Crescent Staff drops here (optional).",
            xpPerHour: "30-40k XP/h",
            runsRecommended: "1-2 Runs",
            runsRecommendedEn: "1-2 runs",
            loot: ["Crescent Staff (optional)", "Armor of the Fang", "Serpent's Shoulders"],
            lootEn: ["Crescent Staff (optional)", "Armor of the Fang", "Serpent's Shoulders"],
            skip: false,
            skipReason: null
        },
        {
            name: "Todesminen",
            nameEn: "Deadmines",
            levelRange: [14, 18],
            location: "Westfall",
            locationEn: "Westfall",
            faction: "Allianz",
            factionEn: "Alliance",
            reason: "Viele Quests! Gute XP! 2-3 Runs lohnen sich. Quest-Rewards mit Agi/Sta.",
            reasonEn: "Many quests! Good XP! 2-3 runs worth it. Quest rewards with Agi/Sta.",
            xpPerHour: "35-45k XP/h",
            runsRecommended: "2-3 Runs",
            runsRecommendedEn: "2-3 runs",
            loot: ["Taskmaster Axe", "Smite's Mighty Hammer", "Cape of the Brotherhood"],
            lootEn: ["Taskmaster Axe", "Smite's Mighty Hammer", "Cape of the Brotherhood"],
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
            reason: "Schneller Dungeon direkt in Orgrimmar! 1-2 Runs für schnelle XP.",
            reasonEn: "Fast dungeon right in Orgrimmar! 1-2 runs for quick XP.",
            xpPerHour: "40-50k XP/h",
            runsRecommended: "1-2 Runs",
            runsRecommendedEn: "1-2 runs",
            loot: ["Cavedweller Bracers", "Subterranean Cape"],
            lootEn: ["Cavedweller Bracers", "Subterranean Cape"],
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
            skipReason: "⚠️ SKIP! Zu weit weg (Allianz) und schlechte XP/Zeit-Ratio. Questen ist schneller!",
            skipReasonEn: "⚠️ SKIP! Too far away (Alliance) and bad XP/time ratio. Questing is faster!"
        },
        {
            name: "Tiefschwarze Grotte",
            nameEn: "Blackfathom Deeps",
            levelRange: [20, 24],
            location: "Aschenwald",
            locationEn: "Ashenvale",
            faction: "Beide",
            factionEn: "Both",
            reason: "Gute XP + Quest-Rewards! Lila Items upgraden dein Gear. 1-2 Runs reichen.",
            reasonEn: "Good XP + quest rewards! Purple items upgrade your gear. 1-2 runs enough.",
            xpPerHour: "40-50k XP/h",
            runsRecommended: "1-2 Runs",
            runsRecommendedEn: "1-2 runs",
            loot: ["Outlaw Sabre", "Driftwood Club", "Blackfathom Mace"],
            lootEn: ["Outlaw Sabre", "Driftwood Club", "Blackfathom Mace"],
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
            reason: "🔥🔥🔥 BESTE DUNGEON-XP 25-35! Farm ALLE Flügel mehrfach! Graveyard → Library → Armory → Cathedral. Riesige XP + Quest-Rewards!",
            reasonEn: "🔥🔥🔥 BEST DUNGEON XP 25-35! Farm ALL wings multiple times! Graveyard → Library → Armory → Cathedral. Huge XP + quest rewards!",
            xpPerHour: "60-80k XP/h",
            runsRecommended: "5-10 Runs (alle Flügel)",
            runsRecommendedEn: "5-10 runs (all wings)",
            loot: ["Whitemane's Chapeau", "Herod's Shoulder", "Scarlet Belt", "Ravager"],
            lootEn: ["Whitemane's Chapeau", "Herod's Shoulder", "Scarlet Belt", "Ravager"],
            skip: false,
            skipReason: null
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
            skipReason: "⚠️ SKIP! Zu lang (1.5-2h), verwirrend, schlechte XP/Zeit-Ratio. SM ist 2x schneller! MCP farmen NICHT beim Leveling - nur für Tank-BiS bei 60!",
            skipReasonEn: "⚠️ SKIP! Too long (1.5-2h), confusing, bad XP/time ratio. SM is 2x faster! Don't farm MCP while leveling - only for tank BiS at 60!"
        },
        {
            name: "Uldaman",
            nameEn: "Uldaman",
            levelRange: [35, 40],
            location: "Ödland",
            locationEn: "Badlands",
            faction: "Beide",
            factionEn: "Both",
            reason: "Gute XP + Quest-Rewards! 1-2 Runs reichen. Vorbereitung für Level 40 (Wolfshead Helm!).",
            reasonEn: "Good XP + quest rewards! 1-2 runs enough. Preparation for level 40 (Wolfshead Helm!).",
            xpPerHour: "45-55k XP/h",
            runsRecommended: "1-2 Runs",
            runsRecommendedEn: "1-2 runs",
            loot: ["Uldaman quest rewards", "The Hammer of Grace"],
            lootEn: ["Uldaman quest rewards", "The Hammer of Grace"],
            skip: false,
            skipReason: null
        },
        {
            name: "Zul'Farrak",
            nameEn: "Zul'Farrak",
            levelRange: [40, 48],
            location: "Tanaris",
            locationEn: "Tanaris",
            faction: "Beide",
            factionEn: "Both",
            reason: "🔥🔥🔥 FARM THIS HARD! Zombie Event = RIESIGE XP! 5-10 Runs! Beste Dungeon-XP für dieses Level! 50-70k XP pro Run!",
            reasonEn: "🔥🔥🔥 FARM THIS HARD! Zombie Event = HUGE XP! 5-10 runs! Best dungeon XP for this level! 50-70k XP per run!",
            xpPerHour: "70-90k XP/h",
            runsRecommended: "5-10 Runs",
            runsRecommendedEn: "5-10 runs",
            loot: ["Sang'thraze the Deflector", "Witch Doctor's Cane", "ZF quest rewards"],
            lootEn: ["Sang'thraze the Deflector", "Witch Doctor's Cane", "ZF quest rewards"],
            skip: false,
            skipReason: null
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
            skipReason: "⚠️ SKIP! Zu lang (2-3h), verwirrend (3 Eingänge), schlechte XP/Zeit! ZF ist 2x besser!",
            skipReasonEn: "⚠️ SKIP! Too long (2-3h), confusing (3 entrances), bad XP/time! ZF is 2x better!"
        },
        {
            name: "Versunkener Tempel",
            nameEn: "Sunken Temple",
            levelRange: [45, 50],
            location: "Sümpfe des Elends",
            locationEn: "Swamp of Sorrows",
            faction: "Beide",
            factionEn: "Both",
            reason: "Gute XP + Quest-Rewards! 1-2 Runs reichen. Vorbereitung für BRD.",
            reasonEn: "Good XP + quest rewards! 1-2 runs enough. Preparation for BRD.",
            xpPerHour: "50-60k XP/h",
            runsRecommended: "1-2 Runs",
            runsRecommendedEn: "1-2 runs",
            loot: ["Embrace of the Lycan", "Featherskin Cape"],
            lootEn: ["Embrace of the Lycan", "Featherskin Cape"],
            skip: false,
            skipReason: null
        },
        {
            name: "Schwarzfelstiefen (BRD)",
            nameEn: "Blackrock Depths (BRD)",
            levelRange: [50, 56],
            location: "Brennende Steppe",
            locationEn: "Burning Steppes",
            faction: "Beide",
            factionEn: "Both",
            reason: "🔥🔥🔥 FARM THIS HARD! BESTE DUNGEON-XP 50+! 10-15 Runs! Viele Quests! Pre-BiS Gear! 60-80k XP pro Run!",
            reasonEn: "🔥🔥🔥 FARM THIS HARD! BEST DUNGEON XP 50+! 10-15 runs! Many quests! Pre-BiS gear! 60-80k XP per run!",
            xpPerHour: "80-100k XP/h",
            runsRecommended: "10-15 Runs",
            runsRecommendedEn: "10-15 runs",
            loot: ["Savage Gladiator Chain", "Hand of Justice", "BRD quest rewards"],
            lootEn: ["Savage Gladiator Chain", "Hand of Justice", "BRD quest rewards"],
            skip: false,
            skipReason: null
        },
        {
            name: "Untere Blackrockspitze (LBRS)",
            nameEn: "Lower Blackrock Spire (LBRS)",
            levelRange: [55, 60],
            location: "Brennende Steppe",
            locationEn: "Burning Steppes",
            faction: "Beide",
            factionEn: "Both",
            reason: "Gute XP + Pre-BiS Gear! 3-5 Runs für Level + Gear. Vorbereitung für Raids.",
            reasonEn: "Good XP + Pre-BiS gear! 3-5 runs for levels + gear. Raid preparation.",
            xpPerHour: "60-70k XP/h",
            runsRecommended: "3-5 Runs",
            runsRecommendedEn: "3-5 runs",
            loot: ["Truestrike Shoulders", "Felstriker", "Blackhand's Breadth"],
            lootEn: ["Truestrike Shoulders", "Felstriker", "Blackhand's Breadth"],
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
            reason: "Pre-BiS Gear! Starte bei 55-58 zu farmen! Deathbone Set + Wichtige Trinkets!",
            reasonEn: "Pre-BiS gear! Start farming at 55-58! Deathbone Set + important trinkets!",
            xpPerHour: "50-60k XP/h",
            runsRecommended: "5-10 Runs",
            runsRecommendedEn: "5-10 runs",
            loot: ["Deathbone Girdle", "Bloodmail Boots", "Feline Mantle"],
            lootEn: ["Deathbone Girdle", "Bloodmail Boots", "Feline Mantle"],
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
            reason: "Pre-BiS Gear! Beide Seiten farmen! Savage Gladiator Chain + Quest-Rewards!",
            reasonEn: "Pre-BiS gear! Farm both sides! Savage Gladiator Chain + quest rewards!",
            xpPerHour: "50-60k XP/h",
            runsRecommended: "5-10 Runs",
            runsRecommendedEn: "5-10 runs",
            loot: ["Savage Gladiator Chain", "Carapace Spine Crossbow", "Cape of the Black Baron"],
            lootEn: ["Savage Gladiator Chain", "Carapace Spine Crossbow", "Cape of the Black Baron"],
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
            reason: "🔥 Pre-BiS Gear! Blackhand's Breadth (BiS Trinket!) + Dal'Rend's Set!",
            reasonEn: "🔥 Pre-BiS gear! Blackhand's Breadth (BiS trinket!) + Dal'Rend's Set!",
            xpPerHour: "40-50k XP/h",
            runsRecommended: "5-10 Runs",
            runsRecommendedEn: "5-10 runs",
            loot: ["Blackhand's Breadth", "Dal'Rend's Tribal Guardian", "Truestrike Shoulders"],
            lootEn: ["Blackhand's Breadth", "Dal'Rend's Tribal Guardian", "Truestrike Shoulders"],
            skip: false,
            skipReason: null
        }
    ]
};