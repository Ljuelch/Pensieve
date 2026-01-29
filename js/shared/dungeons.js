// Dungeon Guide - Classic & TBC Dungeons with level ranges and quest info
// Translation helper
function tDungeon(key) {
    const lang = window.currentLanguage || 'de';
    if (lang === 'en') return key;

    const translations = {
        // Locations
        "Barrens": "Brachland",
        "Westfall": "Westfall",
        "Silverpine Forest": "Silberwald",
        "Ashenvale": "Eschental",
        "Stormwind (Alliance only)": "Sturmwind (nur Allianz)",
        "Dun Morogh": "Dun Morogh",
        "Thousand Needles": "Tausend Nadeln",
        "Tanaris": "Tanaris",
        "Swamp of Sorrows": "Sümpfe des Elends",
        "Blackrock Mountain": "Schwarzfels",
        "Eastern Plaguelands (2 entrances!)": "Östliche Pestländer (2 Eingänge!)",
        "Western Plaguelands": "Westliche Pestländer",
        "Feralas (3 Wings!)": "Feralas (3 Flügel!)",
        "Tirisfal (4 Wings!)": "Tirisfal (4 Flügel!)",
        "Hellfire Peninsula": "Höllenfeuerhalbinsel",
        "Zangarmarsh": "Zangarmarschen",
        "Terokkar Forest - Auchindoun": "Wälder von Terokkar - Auchindoun",
        "Caverns of Time - Tanaris": "Höhlen der Zeit - Tanaris",
        "Netherstorm - Tempest Keep": "Nethersturm - Festung der Stürme",

        // Factions
        "Both": "Beide",
        "Alliance": "Allianz",
        "Horde": "Horde",
        "Alliance (Horde can enter)": "Allianz (Horde kann rein)",
        "Both (Alliance preferred)": "Beide (Allianz bevorzugt)",

        // Quest Locations
        "Thunder Bluff": "Donnerfels",
        "Westfall - Sentinel Hill": "Westfall - Schildwacht",
        "Silverpine Forest - The Sepulcher": "Silberwald - Die Grabungen",
        "Darnassus": "Darnassus",
        "Stormwind": "Sturmwind",
        "Ironforge": "Eisenschmiede",
        "Burning Steppes": "Brennende Steppe",
        "Swampland - Swamp of Sorrows": "Sumpfland - Sümpfe des Elends",
        "Moonglade Start": "Moonglade Start",
        "Shattrath": "Shattrath",
        "Honor Hold (Alliance)": "Ehrenfeste (Allianz)",
        "Thrallmar (Horde)": "Thrallmar (Horde)",
        "Hellfire Peninsula - Honor Hold": "Höllenfeuerhalbinsel - Ehrenfeste",
        "Caverns of Time": "Höhlen der Zeit",
        "Netherstorm": "Nethersturm",
        "Honor Hold / Thrallmar": "Ehrenfeste / Thrallmar",
        "Various Consortium NPCs": "Verschiedene Konsortium NPCs",
        "Cenarion Expedition NPCs": "Expedition des Cenarius NPCs",
        "Lower City NPCs": "Unteres Viertel NPCs",
        "Swift Flight Form Quest Chain": "Schnelle Fluggestalt Quest-Kette",
        "Various NPCs in Feralas": "Verschiedene NPCs in Feralas",

        // Wings
        "Graveyard (30-36)": "Friedhof (30-36)",
        "Library (34-38)": "Bibliothek (34-38)",
        "Armory (36-40)": "Waffenkammer (36-40)",
        "Cathedral (38-45)": "Kathedrale (38-45)",
        "East": "Ost",
        "West": "West",
        "North": "Nord",
        "Live (Stratholme Main)": "Lebend (Stratholme Haupt)",
        "Undead (Service Entrance)": "Untot (Dienerviertel)",

        // Difficulties
        "Normal": "Normal",
        "Heroic": "Heroisch",

        // Loot generic
        "Quest rewards": "Quest-Belohnungen",
        "Good quest XP": "Gute Quest-XP",
        "Mostly for tanks": "Hauptsächlich für Tanks",
        "Good for Pre-Raid Gear": "Gut für Pre-Raid Ausrüstung",
        "Pre-BiS Items": "Pre-BiS Items",
        "Dungeon Set Pieces": "Dungeon-Set Teile",
        "Good Tanking drops": "Gute Tank-Drops",
        "Cenarion Expedition Rep": "Expedition des Cenarius Ruf",
        "Lower City Rep": "Unteres Viertel Ruf",
        "Good drops": "Gute Drops",
        "Many good drops": "Viele gute Drops",
        "Many Pre-BiS Drops": "Viele Pre-BiS Drops",
        "Endgame Pre-BiS": "Endgame Pre-BiS"
    };

    return translations[key] || key;
}

const dungeonData = {
    classic: [
        {
            name: "Höhlen des Wehklagens",
            nameEn: "Wailing Caverns",
            levelRange: [15, 25],
            location: "Brachland",
            faction: "Beide",
            questGivers: [
                { name: "Nalpak", location: "Donnerfels", quest: "Deviat-Fell" },
                { name: "Ebru", location: "Donnerfels", quest: "Führer der Druiden des Reißzahns" }
            ],
            loot: ["Crescent Staff (25 DPS)", "Armor of the Fang Set"],
            notes: "Erste wichtige Waffe! Farme Crescent Staff"
        },
        {
            name: "Todesminen",
            nameEn: "Deadmines",
            levelRange: [18, 23],
            location: "Westfall",
            faction: "Allianz (Horde kann rein)",
            questGivers: [
                { name: "Gryan Stoutmantle", location: "Westfall - Schildwacht", quest: "Die Defiasbruderschaft" }
            ],
            loot: ["Cookie's Stirring Rod (31 DPS)"],
            notes: "Optional - nur wenn Gruppe verfügbar"
        },
        {
            name: "Burg Schattenfang",
            nameEn: "Shadowfang Keep",
            levelRange: [22, 30],
            location: "Silberwald",
            faction: "Beide",
            questGivers: [
                { name: "Hochexekutor Hadrec", location: "Silberwald - Die Grabungen", quest: "Arugals Torheit (Horde)" }
            ],
            loot: ["Shadowfang (Twink weapon)", "Assassin's Blade"],
            notes: "Optional für Leveling, gute Loot-Chance"
        },
        {
            name: "Schwarzfels",
            nameEn: "Blackfathom Deeps",
            levelRange: [24, 32],
            location: "Eschental",
            faction: "Beide",
            questGivers: [
                { name: "Argent Guard Thaelrid", location: "Darnassus", quest: "Auf der Suche nach Thaelrid" }
            ],
            loot: ["Gute Quest-Belohnungen"],
            notes: "Überspringe für schnelleres Leveling"
        },
        {
            name: "Verlies",
            nameEn: "The Stockade",
            levelRange: [24, 32],
            location: "Sturmwind (nur Allianz)",
            faction: "Allianz",
            questGivers: [
                { name: "Nikova Raskol", location: "Sturmwind", quest: "Die Farbe des Blutes" }
            ],
            loot: ["Meist für Tanks"],
            notes: "Überspringe - zu langsam fürs Leveling"
        },
        {
            name: "Gnomeregan",
            nameEn: "Gnomeregan",
            levelRange: [29, 38],
            location: "Dun Morogh",
            faction: "Beide (Allianz bevorzugt)",
            questGivers: [
                { name: "Kernobee", location: "Eisenschmiede", quest: "Ein Freund in der Not" }
            ],
            loot: ["Manual Crowd Pummeler (🛡️ TANK BiS!)", "Viele Mechanisches Loot"],
            notes: "🔥 Level 57: Farme 2-3x Manual Crowd Pummeler für Raids!"
        },
        {
            name: "Kral der Klingenhauer",
            nameEn: "Razorfen Kraul",
            levelRange: [30, 40],
            location: "Brachland",
            faction: "Beide",
            questGivers: [
                { name: "Auld Steinhaut", location: "Donnerfels", quest: "Unterirdische Attacke" }
            ],
            loot: ["Venomstrike (43 DPS, 8-10% drop)", "Gute Quest-Belohnungen"],
            notes: "Optional - gut wenn Gruppe verfügbar"
        },
        {
            name: "Scharlachrotes Kloster",
            nameEn: "Scarlet Monastery",
            levelRange: [33, 45],
            location: "Tirisfal (4 Wings!)",
            faction: "Beide",
            wings: ["Friedhof (30-36)", "Bibliothek (34-38)", "Waffenkammer (36-40)", "Kathedrale (38-45)"],
            questGivers: [
                { name: "Kommandant Dawnforge", location: "Westliche Pestländer", quest: "Brüder der Scharlachroten Bruderschaft" }
            ],
            loot: [
                "🔥 Loksey's Training Stick (49 DPS - Bibliothek!)",
                "Rune of the Guard Captain (Tank-Trinket - Waffenkammer)",
                "Herod's Shoulder (Waffenkammer)"
            ],
            notes: "🔥🔥🔥 Level 33: FARM BIBLIOTHEK für Loksey's Training Stick!"
        },
        {
            name: "Hügel der Klingenhauer",
            nameEn: "Razorfen Downs",
            levelRange: [40, 50],
            location: "Tausend Nadeln",
            faction: "Beide",
            questGivers: [
                { name: "Myriam Mondhaupt", location: "Donnerfels", quest: "Die Verteidiger bringen" }
            ],
            loot: ["Gute Quest-XP"],
            notes: "Optional - XP ist gut"
        },
        {
            name: "Zul'Farrak",
            nameEn: "Zul'Farrak",
            levelRange: [44, 54],
            location: "Tanaris",
            faction: "Beide",
            questGivers: [
                { name: "Wizzle Brassbolts", location: "Tanaris - Tüftlerstadt", quest: "Tanaris-Schatz" }
            ],
            loot: ["Illusionary Rod (56 DPS)", "Viele gute Drops"],
            notes: "Guter Dungeon mit vielen Quests!"
        },
        {
            name: "Versunkener Tempel",
            nameEn: "Sunken Temple",
            levelRange: [50, 60],
            location: "Sümpfe des Elends",
            faction: "Beide",
            questGivers: [
                { name: "Muigin", location: "Sumpfland - Sümpfe des Elends", quest: "Die Versunkene Stadt" }
            ],
            loot: ["Tooth of Eranikus (60 DPS)"],
            notes: "Lange Quest-Kette, aber lohnt sich"
        },
        {
            name: "Schwarzfelstiefen (BRD)",
            nameEn: "Blackrock Depths",
            levelRange: [52, 60],
            location: "Schwarzfels",
            faction: "Beide",
            questGivers: [
                { name: "Lexlort", location: "Brennende Steppe", quest: "Gefahr von unten" }
            ],
            loot: [
                "🔥 Uberwarth's Hammer (68 DPS - bestes Pre-60 Weapon!)",
                "Hand of Justice (sehr selten)",
                "Viele Pre-BiS Items"
            ],
            notes: "🔥 Level 51+: Farm für Uberwarth's Hammer!"
        },
        {
            name: "Untere Schwarzfelsspitze (LBRS)",
            nameEn: "Lower Blackrock Spire",
            levelRange: [55, 60],
            location: "Schwarzfels",
            faction: "Beide",
            questGivers: [
                { name: "Bodley", location: "Brennende Steppe", quest: "Bodley's Kommando" }
            ],
            loot: ["Viele Quest-Belohnungen"],
            notes: "Gut für Pre-Raid Gear"
        },
        {
            name: "Obere Schwarzfelsspitze (UBRS)",
            nameEn: "Upper Blackrock Spire",
            levelRange: [55, 60],
            location: "Schwarzfels",
            faction: "Beide",
            questGivers: [
                { name: "Vaelan", location: "Brennende Steppe", quest: "Vaelan und das Dämonenblut" }
            ],
            loot: ["🔥 Blackhand's Breadth (+2% Crit Trinket!)", "Dal'Rend's Set"],
            notes: "🔥 Level 50+: Farm für Blackhand's Breadth!"
        },
        {
            name: "Stratholme",
            nameEn: "Stratholme",
            levelRange: [58, 60],
            location: "Östliche Pestländer (2 Eingänge!)",
            faction: "Beide",
            sides: ["Lebend (Stratholme Haupt)", "Untot (Dienerviertel)"],
            questGivers: [
                { name: "Nathanos Pestrufer", location: "Östliche Pestländer", quest: "Verzweifelte Allianz" }
            ],
            loot: [
                "Idol of Brutality (3.85% drop, Pre-BiS!)",
                "Crusader's Square Postbox für Dungeon Set"
            ],
            notes: "Level 60: Farme für Idol of Brutality (selten!)"
        },
        {
            name: "Scholomance",
            nameEn: "Scholomance",
            levelRange: [58, 60],
            location: "Westliche Pestländer",
            faction: "Beide",
            questGivers: [
                { name: "Eva Sarkhoff", location: "Westliche Pestländer", quest: "Die Scholomance" }
            ],
            loot: ["Dungeon Set Pieces", "Pre-BiS Gear"],
            notes: "Gut für Pre-Raid BiS"
        },
        {
            name: "Düsterbruch",
            nameEn: "Dire Maul",
            levelRange: [58, 60],
            location: "Feralas (3 Wings!)",
            faction: "Beide",
            wings: ["Ost", "West", "Nord"],
            questGivers: [
                { name: "Verschiedene NPCs in Feralas", location: "Feralas", quest: "Viele Quests pro Wing" }
            ],
            loot: [
                "Savage Gladiator Chain (Neck, DM Nord)",
                "Viele Pre-BiS Items",
                "Tribute Run Loot (DM Nord)"
            ],
            notes: "🔥 Level 45+: Savage Gladiator Chain aus DM Nord!"
        }
    ],

    tbc: [
        {
            name: "Höllenfeuerbollwerk",
            nameEn: "Hellfire Ramparts",
            levelRange: [60, 62],
            location: "Höllenfeuerhalbinsel",
            faction: "Beide",
            difficulty: ["Normal", "Heroisch"],
            questGivers: [
                { name: "Force Commander Danath", location: "Ehrenfeste (Allianz)", quest: "Bollwerk des Höllenfeuers" },
                { name: "Nazgrel", location: "Thrallmar (Horde)", quest: "Stärke und Ehre" }
            ],
            loot: [
                "Ursol's Claw (Quest-Belohnung, 64 DPS)",
                "Tree-Mender's Belt (Heroisch)"
            ],
            notes: "🔥 Erste TBC Dungeon! Mache Quest für Ursol's Claw!"
        },
        {
            name: "Blutkessel",
            nameEn: "The Blood Furnace",
            levelRange: [61, 63],
            location: "Höllenfeuerhalbinsel",
            faction: "Beide",
            difficulty: ["Normal", "Heroisch"],
            questGivers: [
                { name: "Gunny", location: "Höllenfeuerhalbinsel - Ehrenfeste", quest: "Der Blutkessel" }
            ],
            loot: ["Gute Tanking-Drops"],
            notes: "Gut für Tank-Gear"
        },
        {
            name: "Sklavenpferch",
            nameEn: "The Slave Pens",
            levelRange: [62, 64],
            location: "Zangarmarschen",
            faction: "Beide",
            difficulty: ["Normal", "Heroisch"],
            questGivers: [
                { name: "Verschiedene NPCs", location: "Zangarmarschen", quest: "Cenarion Expedition Quests" }
            ],
            loot: ["Cenarion Expedition Rep", "Gute Drops"],
            notes: "Farme für Cenarion Expedition Ruf (Earthwarden!)"
        },
        {
            name: "Tiefensumpf",
            nameEn: "The Underbog",
            levelRange: [63, 65],
            location: "Zangarmarschen",
            faction: "Beide",
            difficulty: ["Normal", "Heroisch"],
            questGivers: [
                { name: "Cenarion Expedition NPCs", location: "Zangarmarschen", quest: "Cenarion Quests" }
            ],
            loot: ["Cenarion Expedition Rep"],
            notes: "Weiter farmen für CE Ruf"
        },
        {
            name: "Managruft",
            nameEn: "Mana-Tombs",
            levelRange: [64, 66],
            location: "Wälder von Terokkar - Auchindoun",
            faction: "Beide",
            difficulty: ["Normal", "Heroisch"],
            questGivers: [
                { name: "NPCs in Shattrath", location: "Shattrath", quest: "Auchindoun Quests" }
            ],
            loot: ["Lower City Rep"],
            notes: "Farme für Lower City Ruf (Shapeshifter's Signet!)"
        },
        {
            name: "Auchenaigrabstätten",
            nameEn: "Auchenai Crypts",
            levelRange: [65, 67],
            location: "Wälder von Terokkar - Auchindoun",
            faction: "Beide",
            difficulty: ["Normal", "Heroisch"],
            questGivers: [
                { name: "Lower City NPCs", location: "Shattrath", quest: "Lower City Quests" }
            ],
            loot: ["Lower City Rep"],
            notes: "Weiter Lower City Rep farmen"
        },
        {
            name: "Sethekkhallen",
            nameEn: "Sethekk Halls",
            levelRange: [67, 69],
            location: "Wälder von Terokkar - Auchindoun",
            faction: "Beide",
            difficulty: ["Normal", "Heroisch"],
            questGivers: [
                { name: "Swift Flight Form Quest Chain", location: "Moonglade Start", quest: "🔥 DRUIDEN FLUGGESTALT!" }
            ],
            loot: [
                "Lower City Rep",
                "Swift Flight Form Quest abschließen!"
            ],
            notes: "🔥🔥🔥 Level 68: SWIFT FLIGHT FORM QUEST HIER!"
        },
        {
            name: "Schattenlabyrinth",
            nameEn: "Shadow Labyrinth",
            levelRange: [70, 70],
            location: "Wälder von Terokkar - Auchindoun",
            faction: "Beide",
            difficulty: ["Normal", "Heroisch"],
            questGivers: [
                { name: "Lower City NPCs", location: "Shattrath", quest: "Shadow Lab Quests" }
            ],
            loot: [
                "Lower City Rep",
                "Pre-BiS Drops"
            ],
            notes: "Endgame Dungeon für Lower City Exalted"
        },
        {
            name: "Vorgebirge des Alten Hügellands",
            nameEn: "Old Hillsbrad Foothills",
            levelRange: [66, 68],
            location: "Höhlen der Zeit - Tanaris",
            faction: "Beide",
            difficulty: ["Normal", "Heroisch"],
            questGivers: [
                { name: "Andormu", location: "Höhlen der Zeit", quest: "Die Flucht" }
            ],
            loot: [
                "Mantle of Perenolde (Shoulders, Heroisch)",
                "Iron Band of the Unbreakable (Ring)"
            ],
            notes: "🔥 Heroisch für Pre-BiS Shoulders!"
        },
        {
            name: "Die Mechanar",
            nameEn: "The Mechanar",
            levelRange: [69, 70],
            location: "Nethersturm - Festung der Stürme",
            faction: "Beide",
            difficulty: ["Normal", "Heroisch"],
            questGivers: [
                { name: "Various Consortium NPCs", location: "Nethersturm", quest: "Mechanar Quests" }
            ],
            loot: [
                "Heavy Clefthoof Vest (Chest Mechanar)",
                "Viele gute Pre-BiS Drops"
            ],
            notes: "Normal für Heavy Clefthoof Chest"
        },
        {
            name: "Die Botanika",
            nameEn: "The Botanica",
            levelRange: [70, 70],
            location: "Nethersturm - Festung der Stürme",
            faction: "Beide",
            difficulty: ["Normal", "Heroisch"],
            questGivers: [
                { name: "Cenarion Expedition", location: "Nethersturm", quest: "Botanika Quests" }
            ],
            loot: [
                "150 Unidentified Plant Parts (für Earthwarden!)",
                "Cenarion Expedition Rep"
            ],
            notes: "🔥🔥🔥 Farm 150 Plant Parts für Earthwarden!"
        },
        {
            name: "Die Arkatraz",
            nameEn: "The Arcatraz",
            levelRange: [70, 70],
            location: "Nethersturm - Festung der Stürme",
            faction: "Beide",
            difficulty: ["Normal", "Heroisch"],
            questGivers: [
                { name: "A'dal", location: "Shattrath", quest: "Arkatraz Key Quest" }
            ],
            loot: ["Endgame Pre-BiS"],
            notes: "Benötigt Key-Quest!"
        },
        {
            name: "Zerschmetterte Hallen",
            nameEn: "Shattered Halls",
            levelRange: [70, 70],
            location: "Höllenfeuerhalbinsel",
            faction: "Beide",
            difficulty: ["Normal", "Heroisch"],
            questGivers: [
                { name: "Honor Hold / Thrallmar", location: "Höllenfeuerhalbinsel", quest: "Shattered Halls Quests" }
            ],
            loot: [
                "Forestheart Bracers (Heroisch, 2.43% drop - SELTEN!)",
                "Viele Pre-BiS Drops"
            ],
            notes: "🔥 Heroisch für Pre-BiS aber Bracers sehr selten!"
        }
    ]
};