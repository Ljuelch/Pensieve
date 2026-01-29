// Talent Calculator Embeds (WoWHead Classic/TBC Pre-Patch)
// Final Build at 60: 0/31/20 (Classic Vanilla Feral Cat)

const talentCalculatorEmbeds = {
    10: {
        url: "https://www.wowhead.com/tbc/talent-calc/embed/druid/-5002",
        points: "0/4/0",
        keyTalents: ["4/5 Wildheit"],
        bonuses: [
            "Reduziert Wut/Energie-Kosten",
            "Mehr Fähigkeiten = schnellere Kills"
        ]
    },
    15: {
        url: "https://www.wowhead.com/tbc/talent-calc/embed/druid/-50023203",
        points: "0/9/0",
        keyTalents: ["5/5 Wildheit", "2/2 Wilde Schnelligkeit", "2/3 Dickes Fell"],
        bonuses: [
            "🔥 +30% Bewegungsgeschwindigkeit in Katze!",
            "RIESIGER Leveling-Speed-Boost!"
        ]
    },
    20: {
        url: "https://www.wowhead.com/tbc/talent-calc/embed/druid/-500232030321",
        points: "0/12/0",
        keyTalents: ["+ 3/3 Dickes Fell", "+ 1/1 Feenfeuer (Tiergestalt)"],
        bonuses: [
            "Mehr Rüstung für Überlebensfähigkeit",
            "Ranged Pull + Rüstungsreduzierung"
        ]
    },
    25: {
        url: "https://www.wowhead.com/tbc/talent-calc/embed/druid/-5002320303212",
        points: "0/14/0",
        keyTalents: ["+ 2/2 Brutaler Aufprall"],
        bonuses: [
            "Anspringen betäubt 25% länger"
        ]
    },
    28: {
        url: "https://www.wowhead.com/tbc/talent-calc/embed/druid/-50023203032125",
        points: "0/17/0",
        keyTalents: ["+ 3/3 Geschärfte Klauen"],
        bonuses: [
            "Erhöht kritische Trefferchance"
        ]
    },
    30: {
        url: "https://www.wowhead.com/tbc/talent-calc/embed/druid/-500232030321253",
        points: "0/19/0",
        keyTalents: ["+ 2/3 Raubtierschläge"],
        bonuses: [
            "Angriffskraft-Skalierung"
        ]
    },
    33: {
        url: "https://www.wowhead.com/tbc/talent-calc/embed/druid/-5002320303212530125",
        points: "0/24/0",
        keyTalents: ["+ 3/3 Raubtierschläge (max)", "+ 2/5 Herz der Wildnis"],
        bonuses: [
            "Mehr Angriffskraft",
            "Mehr Intellekt = mehr Mana"
        ]
    },
    35: {
        url: "https://www.wowhead.com/tbc/talent-calc/embed/druid/-500232030322125301",
        points: "0/26/0",
        keyTalents: ["+ 5/5 Herz der Wildnis (max)", "+ 1/1 Rudelführer"],
        bonuses: [
            "🔥 +3% Crit für ganze Gruppe/Raid!",
            "Fantastisch für nur 1 Punkt!"
        ]
    },
    38: {
        url: "https://www.wowhead.com/tbc/talent-calc/embed/druid/-500232030322125301023",
        points: "0/29/0",
        keyTalents: ["+ 3/3 Wilder Furor"],
        bonuses: [
            "+20% Schaden mit Klaue/Harken"
        ]
    },
    40: {
        url: "https://www.wowhead.com/tbc/talent-calc/embed/druid/-500232030322125301223",
        points: "0/31/0",
        keyTalents: ["+ 2/2 Urfuror", "+ 2/2 Verbesserter Rudelführer (complete Feral!)"],
        bonuses: [
            "Kritische Treffer geben extra Energie",
            "Heilt dich bei Crits"
        ]
    },
    42: {
        url: "https://www.wowhead.com/tbc/talent-calc/embed/druid/-500232030322125301251-05",
        points: "0/31/2",
        keyTalents: ["Start Resto Tree: 2/5 Furor"],
        bonuses: [
            "Starte mit Resto für Powershifting",
            "+40 Energie beim Shiften"
        ]
    },
    45: {
        url: "https://www.wowhead.com/tbc/talent-calc/embed/druid/-500232030322125301251-050",
        points: "0/31/5",
        keyTalents: ["+ 5/5 Furor (MAX!)"],
        bonuses: [
            "🔥 +100 Energy beim Shiften mit Wolfshead Helm!",
            "Essentiell für Powershifting!"
        ]
    },
    50: {
        url: "https://www.wowhead.com/tbc/talent-calc/embed/druid/-500232030322125301251-05005",
        points: "0/31/10",
        keyTalents: ["+ 5/5 Naturforscher"],
        bonuses: [
            "+10% Physischer Schaden UND Heilung",
            "Perfektes Hybrid-Talent"
        ]
    },
    55: {
        url: "https://www.wowhead.com/tbc/talent-calc/embed/druid/-500232030322125301251-050050500",
        points: "0/31/15",
        keyTalents: ["+ 5/5 Verbessertes Omen der Klarsicht"],
        bonuses: [
            "Bessere Proc-Chance für Gratis-Zauber"
        ]
    },
    60: {
        url: "https://www.wowhead.com/tbc/talent-calc/embed/druid/-500232030322125301251-055",
        points: "0/31/20 (CLASSIC COMPLETE!)",
        keyTalents: ["+ 1/1 Omen der Klarsicht", "+ 1/1 Naturfokus", "+ 3/3 Natürlicher Gestaltwandler"],
        bonuses: [
            "Gratis-Zauber/Fähigkeiten Proc",
            "Unterbrechungsresistenz beim Heilen",
            "Billiger Powershiften",
            "🎉 Vollständiger Classic Build!",
            "Bereit für MC/BWL/AQ40/Naxx!"
        ]
    }
};

// Get talent build for current level (finds closest level ≤ current)
function getTalentBuildForLevel(level) {
    const availableLevels = Object.keys(talentCalculatorEmbeds).map(Number).sort((a, b) => a - b);

    // Find the highest level that's <= current level
    let closestLevel = availableLevels[0];
    for (const lvl of availableLevels) {
        if (lvl <= level) {
            closestLevel = lvl;
        } else {
            break;
        }
    }

    return {
        level: closestLevel,
        build: talentCalculatorEmbeds[closestLevel]
    };
}