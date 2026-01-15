// Complete Feral Druid Leveling Data - TBC Classic

const feralDruidData = {
    // Class Quests
    classQuests: {
        completed: [],
        available: [
            {
                level: 10,
                name: "Bear Form Quest",
                duration: "10-15 minutes",
                priority: "critical",
                location: "Moonglade → Darnassus/Thunder Bluff",
                reward: "Bear Form + Maul + Growl",
                notes: "DO THIS IMMEDIATELY! Massive leveling speed increase!"
            },
            {
                level: 14,
                name: "Cure Poison Quest",
                duration: "20-30 minutes",
                priority: "low",
                location: "Moonglade → Darkshore",
                reward: "Cure Poison",
                notes: "Optional - can wait until Level 26 for Abolish Poison from trainer"
            },
            {
                level: 16,
                name: "Aquatic Form Quest",
                duration: "60+ minutes",
                priority: "medium",
                location: "Moonglade → Darkshore → Westfall",
                reward: "Aquatic Form",
                notes: "Lengthy quest, but useful for underwater areas. Get it before Cat Form to have Cat in slot 3 for macros!"
            },
            {
                level: 20,
                name: "Cat Form",
                duration: "0 minutes",
                priority: "critical",
                location: "Any Druid Trainer",
                reward: "Cat Form",
                notes: "Simply buy from trainer! Your main DPS form begins here."
            },
            {
                level: 30,
                name: "Travel Form",
                duration: "0 minutes",
                priority: "high",
                location: "Any Druid Trainer",
                reward: "Travel Form",
                notes: "Buy from trainer. Stacks with mount speed!"
            },
            {
                level: 40,
                name: "Dire Bear Form",
                duration: "0 minutes",
                priority: "medium",
                location: "Any Druid Trainer",
                reward: "Dire Bear Form",
                notes: "Buy from trainer. Essential for tanking dungeons."
            },
            {
                level: 68,
                name: "Swift Flight Form Quest",
                duration: "2-3 hours",
                priority: "critical",
                location: "Moonglade → Terokkar Forest → Sethekk Halls",
                reward: "Swift Flight Form (280% speed)",
                cost: "~5g + materials",
                notes: "DO THIS BEFORE CONTINUING TO LEVEL 70! Huge QoL improvement. Start quest in Moonglade."
            }
        ]
    },

    // Talent progression
    talents: [
        {
            levelRange: [10, 14],
            points: "5 points in Ferocity",
            reason: "Reduces Rage/Energy costs significantly. More abilities = faster kills.",
            tree: "Feral Combat"
        },
        {
            levelRange: [15, 17],
            points: "3 points in Thick Hide",
            reason: "Survivability boost, scales with gear quality.",
            tree: "Feral Combat"
        },
        {
            levelRange: [18, 19],
            points: "2 points in Brutal Impact",
            reason: "Increases Pounce stun duration by 25%.",
            tree: "Feral Combat"
        },
        {
            levelRange: [20, 21],
            points: "2 points in Feral Swiftness",
            reason: "30% movement speed in Cat Form outdoors = HUGE leveling speed boost!",
            tree: "Feral Combat"
        },
        {
            levelRange: [22, 24],
            points: "3 points in Sharpened Claws",
            reason: "Critical strike chance increase.",
            tree: "Feral Combat"
        },
        {
            levelRange: [25, 27],
            points: "3 points in Predatory Strikes",
            reason: "Attack power scaling based on level.",
            tree: "Feral Combat"
        },
        {
            levelRange: [28, 29],
            points: "2 points in Primal Fury",
            reason: "Critical hits generate extra rage/energy.",
            tree: "Feral Combat"
        },
        {
            levelRange: [30, 30],
            points: "1 point in Faerie Fire (Feral)",
            reason: "Ranged pull ability + armor reduction. Essential!",
            tree: "Feral Combat"
        },
        {
            levelRange: [31, 32],
            points: "2 points in Savage Fury",
            reason: "Strong damage increase for key abilities.",
            tree: "Feral Combat"
        },
        {
            levelRange: [33, 34],
            points: "2 points in Nurturing Instinct",
            reason: "Healing power boost = better self-sustain.",
            tree: "Feral Combat"
        },
        {
            levelRange: [35, 39],
            points: "5 points in Heart of the Wild",
            reason: "Increases Intellect = more mana for heals and shapeshifting.",
            tree: "Feral Combat"
        },
        {
            levelRange: [40, 40],
            points: "1 point in Leader of the Pack",
            reason: "5% crit to entire group/raid. Amazing for 1 point!",
            tree: "Feral Combat"
        },
        {
            levelRange: [41, 42],
            points: "2 points in Improved Leader of the Pack",
            reason: "Heals you on crits. Great sustain.",
            tree: "Feral Combat"
        },
        {
            levelRange: [43, 44],
            points: "2 points in Survival of the Fittest",
            reason: "Reduces chance to be critically hit + stat boost.",
            tree: "Feral Combat"
        },
        {
            levelRange: [45, 49],
            points: "5 points in Predatory Instincts",
            reason: "More crit damage and dodge chance.",
            tree: "Feral Combat"
        },
        {
            levelRange: [50, 50],
            points: "1 point in MANGLE",
            reason: "🔥🔥🔥 GAME CHANGER! Your main damage ability. Everything gets easier now!",
            tree: "Feral Combat"
        },
        {
            levelRange: [51, 55],
            points: "5 points in Furor",
            reason: "Start with energy in Cat Form. Essential for powershifting with Wolfshead Helm!",
            tree: "Restoration"
        },
        {
            levelRange: [56, 60],
            points: "5 points in Naturalist",
            reason: "Increases physical damage AND healing. Perfect hybrid talent.",
            tree: "Restoration"
        },
        {
            levelRange: [61, 61],
            points: "1 point in Omen of Clarity",
            reason: "Free spells/abilities proc. Smooths rotation significantly.",
            tree: "Restoration"
        },
        {
            levelRange: [62, 64],
            points: "3 points in Natural Shapeshifter",
            reason: "Reduces shapeshifting cost = more powershifting!",
            tree: "Restoration"
        },
        {
            levelRange: [65, 65],
            points: "1 point in Survival of the Fittest (max)",
            reason: "Complete the talent for full defensive benefit.",
            tree: "Feral Combat"
        },
        {
            levelRange: [66, 66],
            points: "1 point in Feral Charge",
            reason: "Gap closer + interrupt. Great for PvP and pulling.",
            tree: "Feral Combat"
        },
        {
            levelRange: [67, 68],
            points: "2 points in Shredding Attacks",
            reason: "Reduces energy cost of Shred and Lacerate. More DPS!",
            tree: "Feral Combat"
        },
        {
            levelRange: [69, 70],
            points: "2 points in Feral Instinct",
            reason: "Threat generation boost for tanking + small damage boost.",
            tree: "Feral Combat"
        }
    ],

    // Rotation by level
    rotation: {
        1: {
            rotation: ["Moonfire", "Wrath", "Wrath"],
            notes: "Caster rotation until Bear Form at Level 10",
            buffs: ["Mark of the Wild"]
        },
        10: {
            rotation: ["Maul (spam)", "Auto-attacks"],
            notes: "Bear Form leveling begins! Much faster than caster.",
            buffs: ["Mark of the Wild", "Thorns"]
        },
        20: {
            opener: ["Prowl", "Ravage (from behind)"],
            rotation: ["Claw", "Claw", "Rip (at 4+ combo points)"],
            notes: "Cat Form! Always open with Prowl → Ravage. Use Rip on targets that live long enough.",
            buffs: ["Mark of the Wild", "Thorns", "Keep Prowl active when approaching enemies"]
        },
        30: {
            opener: ["Prowl", "Ravage (from behind)", "Faerie Fire (Feral)"],
            rotation: ["Claw", "Claw", "Rip (4+ CP) or Ferocious Bite"],
            notes: "Add Faerie Fire (Feral) for armor reduction. Can also use it to pull from range.",
            buffs: ["Mark of the Wild", "Thorns"]
        },
        40: {
            opener: ["Prowl", "Ravage (from behind)", "Faerie Fire (Feral)"],
            rotation: ["Claw", "Claw", "Rip (4+ CP) or Ferocious Bite"],
            notes: "WITH WOLFSHEAD HELM: Powershift after Ferocious Bite to gain 60 energy! Use /cast !cat form macro.",
            buffs: ["Mark of the Wild", "Thorns"],
            powershifting: "If you have Wolfshead Helm + Furor talent (need 51): Shift out and back into cat at low energy for instant 60 energy!"
        },
        50: {
            opener: ["Prowl", "Pounce (stun)", "Mangle", "Shred (from behind)"],
            rotation: ["Mangle (on cooldown)", "Shred (from behind)", "Rip (4+ CP) or Ferocious Bite"],
            notes: "🔥 MANGLE UNLOCKED! Keep Mangle debuff up at all times. Spam Shred from behind when Mangle is on cooldown.",
            buffs: ["Mark of the Wild", "Thorns"],
            powershifting: "Powershift after Ferocious Bite with Wolfshead for energy!"
        },
        60: {
            opener: ["Prowl", "Pounce (stun)", "Mangle", "Shred (from behind)"],
            rotation: ["Mangle (on cooldown)", "Shred (from behind)", "Rip (4+ CP) or Ferocious Bite"],
            notes: "Same rotation. Omen of Clarity at 61 will give free casts occasionally!",
            buffs: ["Mark of the Wild", "Thorns", "Omen of Clarity (at 61)"],
            powershifting: "Powershift frequently with Natural Shapeshifter (62+) for lower mana cost!"
        },
        70: {
            opener: ["Prowl", "Pounce (stun)", "Mangle", "Shred (from behind)"],
            rotation: ["Mangle (on cooldown)", "Shred (from behind)", "Rip (4+ CP) or Ferocious Bite"],
            notes: "Full talent build complete! You're ready for raids.",
            buffs: ["Mark of the Wild", "Thorns", "Omen of Clarity"],
            powershifting: "Full powershifting rotation with all talents!"
        }
    },

    // Power spikes
    powerSpikes: [
        {
            level: 10,
            priority: "critical",
            items: [
                {
                    name: "Bear Form Quest",
                    impact: "MASSIVE leveling speed increase. 3x faster than caster!",
                    action: "Complete immediately!"
                }
            ]
        },
        {
            level: 20,
            priority: "critical",
            items: [
                {
                    name: "Cat Form",
                    impact: "Real leveling begins! 30% movement speed + efficient damage.",
                    action: "Buy from trainer and start using Prowl openers."
                }
            ]
        },
        {
            level: 30,
            priority: "high",
            items: [
                {
                    name: "Mount + Travel Form",
                    impact: "Huge QoL. 60% mount speed + instant cast Travel Form.",
                    action: "Save gold for mount (90g total with training)."
                },
                {
                    name: "Faerie Fire (Feral) talent",
                    impact: "Ranged pulling + armor reduction.",
                    action: "Use on every enemy!"
                }
            ]
        },
        {
            level: 34,
            priority: "medium",
            items: [
                {
                    name: "Manual Crowd Pummeler (optional)",
                    source: "Gnomeregan - Crowd Pummeler 9-60 boss",
                    impact: "Best weapon for tanking until ~50. Optional for leveling.",
                    action: "Farm 2-3 if you enjoy dungeons. Each has 3 charges."
                }
            ]
        },
        {
            level: 40,
            priority: "critical",
            items: [
                {
                    name: "Wolfshead Helm",
                    source: "Crafted by Leatherworker (225 skill) or buy from AH",
                    impact: "🔥 ESSENTIAL! Enables powershifting. +20 energy per shift. BiS until Phase 4!",
                    action: "Buy immediately! Usually ~10-20g on AH."
                },
                {
                    name: "Epic Mount",
                    impact: "100% mount speed. Huge leveling speed boost.",
                    action: "Save 900g total (600g mount + 300g training)."
                },
                {
                    name: "Leader of the Pack talent",
                    impact: "5% crit for whole group/raid.",
                    action: "Very strong group utility!"
                }
            ]
        },
        {
            level: 50,
            priority: "critical",
            items: [
                {
                    name: "MANGLE",
                    impact: "🔥🔥🔥 GAME CHANGER! Main DPS ability. Everything becomes easier!",
                    action: "Use on cooldown, keep debuff up at all times!"
                }
            ]
        },
        {
            level: 58,
            priority: "high",
            items: [
                {
                    name: "Leveling Strategy Change",
                    impact: "⚠️ STOP QUESTING! Switch to dungeon grinding for Pre-Raid BiS gear.",
                    action: "Run Stratholme, Scholomance, BRD. Save ALL quests for Level 70!"
                }
            ]
        },
        {
            level: 60,
            priority: "critical",
            items: [
                {
                    name: "Outland Entry",
                    impact: "Quest green items >>> Classic epics! Huge power spike.",
                    action: "Head to Hellfire Peninsula immediately."
                },
                {
                    name: "Agamaggan's Quill",
                    source: "Hellfire Peninsula quest (first quests)",
                    impact: "First Outland weapon upgrade.",
                    action: "Get this within first hour of Outland!"
                },
                {
                    name: "Idol of the Wild",
                    source: "Colossal Menace quest (Hellfire Peninsula)",
                    impact: "Exceptional Feral idol for leveling!",
                    action: "Do this quest ASAP in Hellfire."
                }
            ]
        },
        {
            level: 62,
            priority: "medium",
            items: [
                {
                    name: "Ursol's Claw",
                    source: "Hellfire Ramparts dungeon quest",
                    impact: "Weapon upgrade from Agamaggan's Quill.",
                    action: "Run Hellfire Ramparts once for quest."
                },
                {
                    name: "Ravager (Alternative)",
                    source: "Hellfire Peninsula quest reward",
                    impact: "Good weapon choice if you prefer quest rewards.",
                    action: "Quest option instead of dungeon."
                }
            ]
        },
        {
            level: 65,
            priority: "high",
            items: [
                {
                    name: "Staff of Beasts",
                    source: "Ring of Blood quest chain (Nagrand)",
                    impact: "Best weapon until Level 70! Will last you until endgame.",
                    action: "Do Ring of Blood quest chain in Nagrand immediately!"
                }
            ]
        },
        {
            level: 68,
            priority: "critical",
            items: [
                {
                    name: "Swift Flight Form Quest",
                    impact: "🔥 280% flying speed! HUGE QoL. Better than epic flying mount (5000g)!",
                    action: "DO THIS QUEST IMMEDIATELY! Takes 2-3 hours but worth it. Start in Moonglade."
                },
                {
                    name: "Herbalism Advantage",
                    impact: "You can fly and gather herbs before most other players!",
                    action: "If you have Herbalism, farm high-level herbs for massive gold."
                }
            ]
        },
        {
            level: 70,
            priority: "critical",
            items: [
                {
                    name: "NOW DO ALL SAVED QUESTS!",
                    impact: "💰 Quests give 3x more gold at 70! 500-800g from saved quests.",
                    action: "Complete all the quests you skipped at 58-60!"
                },
                {
                    name: "Wolfshead Helm",
                    impact: "Still BiS through Phase 4! Powershifting is your endgame rotation.",
                    action: "Keep using it for raids!"
                }
            ]
        }
    ],

    // Leveling Strategy by level brackets
    levelingStrategy: [
        {
            levelRange: [1, 9],
            type: "caster",
            title: "Caster Phase",
            activities: [
                "Use Moonfire + Wrath to kill enemies",
                "Quest in starting zone (Teldrassil/Mulgore)"
            ],
            tips: "Save your gold! You need it for mount at 30."
        },
        {
            levelRange: [10, 19],
            type: "bear",
            title: "Bear Form Leveling",
            activities: [
                "Complete Bear Form quest IMMEDIATELY",
                "Use Maul spam in Bear Form",
                "Quest in: Darkshore/Barrens → Westfall/Silverpine"
            ],
            tips: "Leveling speed increases dramatically. Always keep Mark of the Wild and Thorns up!"
        },
        {
            levelRange: [20, 29],
            type: "cat_early",
            title: "Early Cat Form",
            activities: [
                "Quest in: Ashenvale/Stonetalon → Duskwood/Hillsbrad",
                "Always open with Prowl → Ravage",
                "Start using Rip on enemies that will live long enough"
            ],
            tips: "30% movement speed in Cat Form = much faster questing!"
        },
        {
            levelRange: [30, 39],
            type: "cat_mount",
            title: "Cat Form + Mount",
            zones: ["Stranglethorn Vale", "Arathi Highlands", "Desolace", "Thousand Needles"],
            activities: [
                "Buy mount + riding skill (90g total)",
                "Faerie Fire (Feral) unlocked - use it!",
                "Run some dungeons: SM, RFK, RFD"
            ],
            tips: "Can start tanking dungeons in Bear Form. Good gear + quest completion!"
        },
        {
            levelRange: [40, 49],
            type: "cat_wolfshead",
            title: "Wolfshead Powershifting Era",
            zones: ["Tanaris", "Hinterlands", "Feralas", "Searing Gorge"],
            activities: [
                "GET WOLFSHEAD HELM IMMEDIATELY!",
                "Learn powershifting rotation",
                "Run dungeons: ZF, Mara, Sunken Temple"
            ],
            tips: "Wolfshead changes everything! Powershift after Ferocious Bite for 60 energy. Massive DPS increase!"
        },
        {
            levelRange: [50, 57],
            type: "mangle_era",
            title: "🔥 Mangle Era - Peak Leveling",
            zones: ["Western/Eastern Plaguelands", "Winterspring", "Silithus", "BRD"],
            activities: [
                "MANGLE UNLOCKED! Keep debuff up at all times",
                "Continue questing or dungeon grind (BRD, LBRS, UBRS)",
                "Farm Pre-Raid BiS if you want"
            ],
            tips: "You're incredibly strong now! Everything is smooth. Great time to farm gold or Pre-BiS."
        },
        {
            levelRange: [58, 60],
            type: "dungeon_grind",
            title: "⚠️ DUNGEON GRIND - Save Quests!",
            zones: ["Stratholme", "Scholomance", "UBRS", "Dire Maul"],
            activities: [
                "⚠️ STOP ALL QUESTING!",
                "Farm Pre-Raid BiS gear from dungeons",
                "Alternative: Grind mobs in Winterspring/EPL for gold"
            ],
            reasoning: [
                "Quest gold at 70 = ~25g per quest",
                "Quest gold at 58 = ~8g per quest",
                "Save 500-800g by waiting!"
            ],
            tips: "This strategy is optional but highly profitable! If you hate dungeons, you can quest normally."
        },
        {
            levelRange: [60, 67],
            type: "outland_questing",
            title: "Outland Questing",
            zones: ["Hellfire Peninsula (60-62)", "Zangarmarsh (61-64)", "Terokkar (62-65)", "Nagrand (64-67)"],
            activities: [
                "Get Agamaggan's Quill immediately",
                "Get Idol of the Wild from Colossal Menace quest",
                "Do Ring of Blood in Nagrand at 65 for Staff of Beasts",
                "Run Outland dungeons for better gear"
            ],
            tips: "Outland greens >>> Classic epics! Replace all your gear quickly."
        },
        {
            levelRange: [68, 69],
            type: "flight_form",
            title: "🔥 Swift Flight Form Priority",
            zones: ["Netherstorm", "Shadowmoon Valley"],
            activities: [
                "⚠️ DO SWIFT FLIGHT FORM QUEST IMMEDIATELY!",
                "Takes 2-3 hours but saves you 5000g for epic flying",
                "280% flight speed is massive QoL improvement"
            ],
            tips: "Don't skip this! Best thing you can do at 68."
        },
        {
            levelRange: [70, 70],
            type: "endgame_prep",
            title: "💰 Level 70 - Complete Saved Quests",
            zones: ["All Outland zones with saved quests", "Nagrand (best gold)"],
            activities: [
                "Complete ALL quests you saved from 58-60",
                "Do Nagrand ring quests (excellent gold/time)",
                "Farm for epic flying gold if needed",
                "Start raiding prep: Karazhan attunement, etc."
            ],
            tips: "Quest gold is 3x higher at 70! Collect your 500-800g from saved quests. Nagrand has best gold/hour from questing."
        }
    ],

    // Gear recommendations
    gear: [
        {
            level: 34,
            items: [
                {
                    slot: "Weapon",
                    name: "Manual Crowd Pummeler",
                    source: "Gnomeregan - Crowd Pummeler 9-60",
                    priority: "optional",
                    notes: "Best tanking weapon until ~50. Has 3 charges. Farm 2-3 if you enjoy dungeons. Not mandatory for leveling!"
                }
            ]
        },
        {
            level: 40,
            items: [
                {
                    slot: "Head",
                    name: "Wolfshead Helm",
                    source: "Crafted (225 Leatherworking) or Auction House",
                    priority: "critical",
                    notes: "🔥 MANDATORY! Buy immediately! +20 energy per shift. BiS until Phase 4 raids! Usually 10-20g on AH."
                }
            ]
        },
        {
            level: 60,
            items: [
                {
                    slot: "Weapon",
                    name: "Agamaggan's Quill",
                    source: "Hellfire Peninsula quest (one of the first quests)",
                    priority: "high",
                    notes: "Get this within first hour in Outland!"
                },
                {
                    slot: "Idol",
                    name: "Idol of the Wild",
                    source: "Colossal Menace quest (Hellfire Peninsula, near Zangarmarsh border)",
                    priority: "high",
                    notes: "Exceptional Feral idol! Do this quest ASAP."
                }
            ]
        },
        {
            level: 62,
            items: [
                {
                    slot: "Weapon",
                    name: "Ursol's Claw",
                    source: "Hellfire Ramparts dungeon quest",
                    priority: "medium",
                    notes: "Upgrade from Agamaggan's Quill. Run Hellfire Ramparts once."
                }
            ]
        },
        {
            level: 65,
            items: [
                {
                    slot: "Weapon",
                    name: "Staff of Beasts",
                    source: "Ring of Blood quest chain (Nagrand)",
                    priority: "critical",
                    notes: "🔥 Best weapon until 70! Do this quest chain immediately in Nagrand!"
                }
            ]
        },
        {
            level: 70,
            items: [
                {
                    slot: "Head",
                    name: "Wolfshead Helm (STILL BiS!)",
                    source: "You already have this from Level 40",
                    priority: "critical",
                    notes: "Keep using! Still BiS through Phase 4 for powershifting rotation."
                },
                {
                    slot: "Idol",
                    name: "Idol of the Wild or better",
                    source: "Various sources at 70",
                    priority: "high",
                    notes: "Upgrade as you get better idols from dungeons/raids."
                }
            ]
        }
    ],

    // Professions
    professions: {
        leveling: {
            recommended: [
                {
                    name: "Skinning",
                    reason: "Easy gold while questing. Every beast you kill = loot!",
                    goldPerHour: "5-8g at level 60+",
                    notes: "Low effort, steady income."
                },
                {
                    name: "Herbalism",
                    reason: "Great gold. HUGE synergy with Flight Form at 68!",
                    goldPerHour: "10-15g at level 70",
                    notes: "At 68, you get Flight Form and can gather high-level herbs before most players!"
                }
            ],
            alternatives: [
                {
                    name: "Mining",
                    reason: "Good gold, similar to Herbalism.",
                    goldPerHour: "8-12g at level 70"
                },
                {
                    name: "Skinning + Mining/Herbalism",
                    reason: "Double gathering = maximum gold while leveling."
                }
            ]
        },
        endgame: {
            recommended: [
                {
                    name: "Engineering",
                    priority: "BiS",
                    reason: "Unique raid utility: bombs, trinkets, goggles.",
                    bisItems: [
                        {
                            slot: "Trinket",
                            name: "Gnomish Lightning Generator",
                            minLevel: 70,
                            impact: "On-use DPS cooldown for raids",
                            engineeringRequired: 350
                        },
                        {
                            slot: "Consumable",
                            name: "Adamantite Grenade",
                            minLevel: 60,
                            impact: "Extra AoE damage in raids",
                            engineeringRequired: 300
                        },
                        {
                            slot: "Consumable",
                            name: "Super Sapper Charge",
                            minLevel: 70,
                            impact: "High burst damage cooldown",
                            engineeringRequired: 375
                        },
                        {
                            slot: "Head",
                            name: "Gnomish Battle Goggles",
                            minLevel: 70,
                            impact: "Alternative to Wolfshead for specific situations (not for powershifting!)",
                            engineeringRequired: 375
                        }
                    ]
                },
                {
                    name: "Enchanting",
                    priority: "BiS",
                    reason: "EXCLUSIVE ring enchants that ONLY enchanters can use!",
                    bisItems: [
                        {
                            slot: "Ring (BOTH rings!)",
                            name: "Enchant Ring - Striking Power",
                            minLevel: 70,
                            impact: "+24 Attack Power per ring = +48 AP total",
                            enchantingRequired: 360,
                            unique: true,
                            exclusiveReason: "ONLY ENCHANTERS CAN ENCHANT RINGS! Nobody else can get this bonus!"
                        }
                    ]
                }
            ],
            strategy: "Level with gathering professions (Skinning/Herbalism) for gold. At 70, drop them and level Engineering + Enchanting for BiS raid performance. Use the gold from gathering to fund leveling these crafting professions."
        }
    },

    // Zone recommendations
    zones: [
        {
            levelRange: [1, 10],
            alliance: ["Teldrassil", "Darnassus"],
            horde: ["Mulgore", "Thunder Bluff"],
            notes: "Starting zone. Do Bear Form quest at 10!"
        },
        {
            levelRange: [10, 20],
            alliance: ["Darkshore", "Westfall", "Loch Modan"],
            horde: ["The Barrens", "Silverpine Forest"],
            notes: "Get Cat Form at 20 from trainer!"
        },
        {
            levelRange: [20, 30],
            alliance: ["Duskwood", "Redridge Mountains", "Ashenvale"],
            horde: ["Ashenvale", "Stonetalon Mountains", "Hillsbrad Foothills"],
            notes: "Buy mount at 30 (90g). Skip Redridge if possible (inefficient)."
        },
        {
            levelRange: [30, 40],
            zones: ["Stranglethorn Vale", "Arathi Highlands", "Desolace", "Thousand Needles"],
            dungeons: ["Scarlet Monastery", "Razorfen Kraul", "Razorfen Downs"],
            notes: "STV has great quests but is a PvP hotspot. Mix questing with dungeons."
        },
        {
            levelRange: [40, 50],
            zones: ["Tanaris", "Hinterlands", "Feralas", "Searing Gorge"],
            dungeons: ["Zul'Farrak", "Maraudon", "Sunken Temple"],
            notes: "Get Wolfshead Helm at 40! Mangle at 50 = huge power spike."
        },
        {
            levelRange: [50, 58],
            zones: ["Western Plaguelands", "Eastern Plaguelands", "Winterspring", "Silithus"],
            dungeons: ["BRD", "LBRS", "UBRS", "Stratholme", "Scholomance"],
            notes: "Can continue questing OR start dungeon grinding. Both work!"
        },
        {
            levelRange: [58, 60],
            strategy: "⚠️ DUNGEON GRIND STRATEGY (Optional but profitable)",
            zones: ["Stratholme", "Scholomance", "UBRS", "Dire Maul"],
            alternativeZones: ["Winterspring", "Eastern Plaguelands (grinding)"],
            notes: "Farm dungeons for Pre-Raid BiS + save all quests for 70. Alternative: grind mobs for gold. Quest gold is 3x higher at 70!"
        },
        {
            levelRange: [60, 62],
            zones: ["Hellfire Peninsula"],
            dungeons: ["Hellfire Ramparts", "Blood Furnace"],
            notes: "Get Agamaggan's Quill and Idol of the Wild immediately! Outland greens >>> Classic epics."
        },
        {
            levelRange: [62, 64],
            zones: ["Zangarmarsh", "Terokkar Forest"],
            dungeons: ["Slave Pens", "Underbog"],
            notes: "Good quest density. Mix with dungeons for gear."
        },
        {
            levelRange: [64, 67],
            zones: ["Nagrand", "Terokkar Forest"],
            dungeons: ["Mana-Tombs", "Auchenai Crypts", "Sethekk Halls"],
            notes: "🔥 Do Ring of Blood quest in Nagrand at 65 for Staff of Beasts!"
        },
        {
            levelRange: [67, 70],
            zones: ["Netherstorm", "Shadowmoon Valley"],
            dungeons: ["The Mechanar", "The Botanica", "The Arcatraz"],
            notes: "⚠️ DO SWIFT FLIGHT FORM QUEST AT 68! Best QoL improvement!"
        },
        {
            level: 70,
            zones: ["Return to ALL zones with saved quests", "Nagrand (best quest gold)"],
            notes: "💰 Complete all saved quests for 500-800g! Nagrand ring quests = excellent gold."
        }
    ]
};