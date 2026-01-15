// Druid Leveling Tips & Tricks
const druidTips = {
    de: [
        {
            category: "Leveling Tricks",
            icon: "⚡",
            title: "Prowl ist OP für Quests!",
            tip: "Nutze Prowl (Schleichen) um direkt zu Quest-Objekten zu laufen ohne Mobs zu killen. Spart MASSIV Zeit!"
        },
        {
            category: "Gold Making",
            icon: "💰",
            title: "Skinning = Free Money",
            tip: "Mit Skinning verdienst du passiv 5-10g pro Stunde nur durch normale Quests. Verkaufe alles im AH!"
        },
        {
            category: "Leveling Tricks",
            icon: "🏃",
            title: "Cat Form Movement Speed",
            tip: "Mit Feral Swiftness (Level 20) hast du 30% mehr Speed in Cat Form. Nutze Cat Form IMMER beim Reisen, nicht Mount! Du kannst sofort kämpfen ohne abzusteigen."
        },
        {
            category: "Combat",
            icon: "⚔️",
            title: "Ravage > Shred beim Leveln",
            tip: "Benutze RAVAGE aus Prowl, nicht Shred! Ravage kostet nur 60 Energy vs 60 für Shred, macht aber viel mehr Schaden beim Opener."
        },
        {
            category: "Survival",
            icon: "❤️",
            title: "Heilung während des Laufens",
            tip: "Shifte aus Cat Form, werfe 1-2 Heilzauber, shifte zurück. Dein Mana regeneriert während du in Cat bist. = Zero Downtime!"
        },
        {
            category: "Gold Making",
            icon: "💎",
            title: "Was im AH verkaufen?",
            tip: "Beste Items: Dickes Leder (20-30s), Robustes Leder (40s-1g), Runenstoff (1-2g/Stack). Vendore ALLES andere unter 1g/Stack."
        },
        {
            category: "Professions",
            icon: "🌿",
            title: "Herbalism + Flight Form = GG",
            tip: "Ab Level 68 kannst du mit Flight Form fliegen UND gleichzeitig Herbs sammeln ohne zu landen. Farme Teufelslotus (10-15g/Stück) in Schattenmondtal!"
        },
        {
            category: "Combat",
            icon: "🐻",
            title: "Bear Form für Elite Quests",
            tip: "Kannst du einen Elite nicht in Cat killen? Wechsel zu Bear Form! Viel mehr HP + Armor. Du kannst Elites 2-3 Level über dir solo tanken."
        },
        {
            category: "Leveling Tricks",
            icon: "🎯",
            title: "Faerie Fire = Ranged Pull",
            tip: "Nutze Faerie Fire (Feral) zum Pullen! Kein Mana cost, reduziert Armor, und du kannst aus der Distanz pullen ohne aggro auf dem Weg."
        },
        {
            category: "Gold Making",
            icon: "💸",
            title: "Primal Farming ab 70",
            tip: "Farme Primal Life in Zangarmarsh (Sporebats) oder Primal Water (Elemente in Nagrand). Easy 50-100g/Stunde!"
        },
        {
            category: "Combat",
            icon: "💪",
            title: "Thorns ist Free Damage",
            tip: "Buff dich IMMER mit Thorns! Macht 50-100 extra Schaden pro Mob = 5-10% DPS Increase. Kostet fast kein Mana."
        },
        {
            category: "Professions",
            icon: "⚙️",
            title: "Engineering Bombs = Extra DPS",
            tip: "Mit Engineering kannst du Adamantite Grenades nutzen für AoE Schaden. Perfekt für Dungeons und Multi-Mob Pulls!"
        },
        {
            category: "Survival",
            icon: "🏃‍♂️",
            title: "Travel Form = Instant Escape",
            tip: "Wenn du in Gefahr bist: Drücke Travel Form Macro! Instant cast = sofortige Flucht. Funktioniert sogar während du gestuned bist (nach stun)."
        },
        {
            category: "Leveling Tricks",
            icon: "📦",
            title: "Quest Items nicht vendoren!",
            tip: "Viele graue Quest Items verkaufen sich im AH besser als beim Vendor. Beispiel: 'Thick Spider's Silk' = vendor 1s, AH 20s!"
        },
        {
            category: "Gold Making",
            icon: "🎣",
            title: "Fishing für Easy Gold",
            tip: "Fische in Nagrand für Golden Darter (Kochzutat). Stack = 5-10g im AH. Entspannt nebenbei farmen!"
        },
        {
            category: "Combat",
            icon: "🔥",
            title: "Mangle = Spam es!",
            tip: "Ab Level 50: Mangle hat nur 6 Sekunden Cooldown. Spam es ON COOLDOWN! Vergiss nicht den Debuff aufzufrischen."
        },
        {
            category: "Leveling Tricks",
            icon: "🗺️",
            title: "Skip Redridge Mountains",
            tip: "Redridge hat schlechtes Quest Layout. Gehe stattdessen nach Duskwood (Alliance) oder Hillsbrad (Horde). Viel effizienter!"
        },
        {
            category: "Professions",
            icon: "🧪",
            title: "Alchemy ist passives Gold",
            tip: "Transmute Primal Might (1x täglich) = 30-50g profit. Dauert 2 Minuten. Easy passive income!"
        },
        {
            category: "Combat",
            icon: "🌙",
            title: "Moonfire nur zum Pullen",
            tip: "Benutze Moonfire NUR zum Pullen von weit entfernten Mobs. Im Kampf ist es Mana-Verschwendung. Focus auf Cat Form DPS!"
        },
        {
            category: "Gold Making",
            icon: "🏺",
            title: "Greens ins AH, nicht vendoren",
            tip: "Verkaufe ALLE grünen Items (uncommon) im AH! Selbst wenn sie nur 50s mehr bringen als Vendor-Preis. Das summiert sich!"
        },
        {
            category: "Survival",
            icon: "🛡️",
            title: "Barkskin = Emergency Button",
            tip: "Wenn du stirbst: Drücke Barkskin! 20% weniger Schaden für 12 Sekunden. Zeit für Heal oder Flucht."
        },
        {
            category: "Leveling Tricks",
            icon: "🌟",
            title: "Rested XP = 2x Speed",
            tip: "Logge immer in einer Stadt aus! Rested XP gibt +100% Quest XP. Wenn du Rested bist, level 2x schneller!"
        },
        {
            category: "Professions",
            icon: "💍",
            title: "Enchanting Ring Enchants",
            tip: "Nur Enchanter können Ringe verzaubern! +24 AP pro Ring = +48 AP total. Deshalb ist Enchanting BiS für Endgame."
        },
        {
            category: "Combat",
            icon: "🎯",
            title: "Rip nur auf langen Kämpfen",
            tip: "Benutze Rip nur wenn der Mob 12+ Sekunden lebt. Sonst: Ferocious Bite! Bite = instant damage, besser für kurze Fights."
        },
        {
            category: "Gold Making",
            icon: "📜",
            title: "Daily Quests = 10g/Tag",
            tip: "Ab 70: Mache die Daily Quests in Ogri'la und Nethersturm. Easy 100-150g pro Tag in 30 Minuten!"
        }
    ],
    en: [
        {
            category: "Leveling Tricks",
            icon: "⚡",
            title: "Prowl is OP for Quests!",
            tip: "Use Prowl (Stealth) to walk straight to quest objectives without fighting mobs. Saves MASSIVE time!"
        },
        {
            category: "Gold Making",
            icon: "💰",
            title: "Skinning = Free Money",
            tip: "With Skinning you passively earn 5-10g per hour just from normal questing. Sell everything on AH!"
        },
        {
            category: "Leveling Tricks",
            icon: "🏃",
            title: "Cat Form Movement Speed",
            tip: "With Feral Swiftness (Level 20) you get 30% more speed in Cat Form. Use Cat Form ALWAYS when traveling, not Mount! You can fight immediately without dismounting."
        },
        {
            category: "Combat",
            icon: "⚔️",
            title: "Ravage > Shred while Leveling",
            tip: "Use RAVAGE from Prowl, not Shred! Ravage costs only 60 Energy vs 60 for Shred, but does much more damage as opener."
        },
        {
            category: "Survival",
            icon: "❤️",
            title: "Healing while Running",
            tip: "Shift out of Cat Form, cast 1-2 heals, shift back. Your mana regenerates while you're in Cat. = Zero Downtime!"
        },
        {
            category: "Gold Making",
            icon: "💎",
            title: "What to Sell on AH?",
            tip: "Best items: Thick Leather (20-30s), Heavy Leather (40s-1g), Runecloth (1-2g/Stack). Vendor EVERYTHING else under 1g/Stack."
        },
        {
            category: "Professions",
            icon: "🌿",
            title: "Herbalism + Flight Form = GG",
            tip: "At Level 68 you can fly with Flight Form AND gather herbs without landing. Farm Fel Lotus (10-15g/piece) in Shadowmoon Valley!"
        },
        {
            category: "Combat",
            icon: "🐻",
            title: "Bear Form for Elite Quests",
            tip: "Can't kill an Elite in Cat? Switch to Bear Form! Much more HP + Armor. You can solo tank elites 2-3 levels above you."
        },
        {
            category: "Leveling Tricks",
            icon: "🎯",
            title: "Faerie Fire = Ranged Pull",
            tip: "Use Faerie Fire (Feral) to pull! No mana cost, reduces armor, and you can pull from distance without aggro on the way."
        },
        {
            category: "Gold Making",
            icon: "💸",
            title: "Primal Farming at 70",
            tip: "Farm Primal Life in Zangarmarsh (Sporebats) or Primal Water (Elementals in Nagrand). Easy 50-100g/hour!"
        },
        {
            category: "Combat",
            icon: "💪",
            title: "Thorns is Free Damage",
            tip: "ALWAYS buff yourself with Thorns! Does 50-100 extra damage per mob = 5-10% DPS increase. Costs almost no mana."
        },
        {
            category: "Professions",
            icon: "⚙️",
            title: "Engineering Bombs = Extra DPS",
            tip: "With Engineering you can use Adamantite Grenades for AoE damage. Perfect for dungeons and multi-mob pulls!"
        },
        {
            category: "Survival",
            icon: "🏃‍♂️",
            title: "Travel Form = Instant Escape",
            tip: "When you're in danger: Press Travel Form macro! Instant cast = immediate escape. Works even while stunned (after stun)."
        },
        {
            category: "Leveling Tricks",
            icon: "📦",
            title: "Don't Vendor Quest Items!",
            tip: "Many gray quest items sell better on AH than vendor. Example: 'Thick Spider's Silk' = vendor 1s, AH 20s!"
        },
        {
            category: "Gold Making",
            icon: "🎣",
            title: "Fishing for Easy Gold",
            tip: "Fish in Nagrand for Golden Darter (cooking ingredient). Stack = 5-10g on AH. Relaxed farming on the side!"
        },
        {
            category: "Combat",
            icon: "🔥",
            title: "Mangle = Spam it!",
            tip: "From Level 50: Mangle has only 6 second cooldown. Spam it ON COOLDOWN! Don't forget to refresh the debuff."
        },
        {
            category: "Leveling Tricks",
            icon: "🗺️",
            title: "Skip Redridge Mountains",
            tip: "Redridge has terrible quest layout. Go to Duskwood (Alliance) or Hillsbrad (Horde) instead. Much more efficient!"
        },
        {
            category: "Professions",
            icon: "🧪",
            title: "Alchemy is Passive Gold",
            tip: "Transmute Primal Might (1x daily) = 30-50g profit. Takes 2 minutes. Easy passive income!"
        },
        {
            category: "Combat",
            icon: "🌙",
            title: "Moonfire Only for Pulling",
            tip: "Use Moonfire ONLY to pull distant mobs. In combat it's mana waste. Focus on Cat Form DPS!"
        },
        {
            category: "Gold Making",
            icon: "🏺",
            title: "Greens to AH, not Vendor",
            tip: "Sell ALL green items (uncommon) on AH! Even if they only bring 50s more than vendor price. It adds up!"
        },
        {
            category: "Survival",
            icon: "🛡️",
            title: "Barkskin = Emergency Button",
            tip: "When you're dying: Press Barkskin! 20% less damage for 12 seconds. Time to heal or escape."
        },
        {
            category: "Leveling Tricks",
            icon: "🌟",
            title: "Rested XP = 2x Speed",
            tip: "Always log out in a city! Rested XP gives +100% quest XP. When you're rested, you level 2x faster!"
        },
        {
            category: "Professions",
            icon: "💍",
            title: "Enchanting Ring Enchants",
            tip: "Only Enchanters can enchant rings! +24 AP per ring = +48 AP total. That's why Enchanting is BiS for endgame."
        },
        {
            category: "Combat",
            icon: "🎯",
            title: "Rip Only on Long Fights",
            tip: "Use Rip only if the mob lives 12+ seconds. Otherwise: Ferocious Bite! Bite = instant damage, better for short fights."
        },
        {
            category: "Gold Making",
            icon: "📜",
            title: "Daily Quests = 10g/Day",
            tip: "At 70: Do the daily quests in Ogri'la and Netherstorm. Easy 100-150g per day in 30 minutes!"
        }
    ]
};