
const characterClasses = {
    Fighter: {
        baseStats: {
            health: 115, strength: 15, vigor: 15, agility: 15, dexterity: 15, will: 15, knowledge: 15, resourcefulness: 15,
            memoryCapacity: 9, UtilityEffectiveness: 0, luck: 0, HealthRecoveryBonus: 0, MoveSpeed: 300,
            ActionSpeed: 0, BuffDuration: 0, DebuffDuration: 0, ArmorPenetration: 0, MagicPenetration: 0,
            HeadShotReduction: 0, ProjectileDamageReduction: 0, PhysicalDamageReduction: 0, FromArmorRating: 0, FromBonuses: 0,
            MagicResistance: 0, FromResistRating: 30, FromBonuses: 0, PhysicalPowerBonus: 0, FromPhysicalPower: 15, FromBonuses: 0,
            MagicPowerBonus: 0, FromMagicPower: 15, FromBonuses: 0
        },
        perks: [
            {
                name: `Adrenaline Spike`,
                info: `When your health goes below 40%, gain 15% Action Speed for 12s.`,
                statModifiers: {
                    ActionSpeed: 15
                }
            },
            {
                name: `Barricade`,
                info: `While in defensive stance, gain 50 Armor Rating and 50 Magical Resistance.`,
                statModifiers: {
                    MagicResistance: 50,
                    ArmorRating: 50
                }
            },
            {
                name: `Combo Attack`,
                info: `When you successfully melee attack consecutively within 2s, gain 10% Physical Power Bonus for 2s.
(Needs 2 hits to initially proc and applies on the 3rd hit and beyond.)`,
                statModifiers: {
                    PhysicalPowerBonus: 10
                }
            },
            {
                name: `Counterattack`,
                info: `When you successfully block an attack, gain 10% Move Speed Bonus and 10% Action Speed for 3s.`,
                statModifiers: {
                    MoveSpeed: 10,
                    ActionSpeed: 10
                }
            },
            {
                name: `Defense Mastery`,
                info: `Gain an additional 10% Item Armor Rating Bonus from equipped armor.`,
                statModifiers: {
                    
                }
            },
            {
                name: `Dual Wield`,
                info: `While you have weapons equipped in both hands, gain 10% Action Speed.
(works with all secondary weapons, excluding lanterns and shields)`,
                statModifiers: {
                    ActionSpeed: 10
                }
            },
            {
                name: `Projectile Resistance`,
                info: `Gain 10% Projectile Damage Reduction.`,
                statModifiers: {
                    ProjectileDamageReduction: 10
                }
            },
            {
                name: `Shield Mastery`,
                info: `While in defensive stance, gain 10% Move Speed Bonus. When you successfully block an attack, gain 50% Action Speed towards your next block or attack.
Despite the name, this perk applies to any weapon with a defensive stance, including the Longsword and Flute.`,
                statModifiers: {
                    ActionSpeed: 50,
                    MoveSpeed: 10
                }
            },
            {
                name: `Slayer`,
                info: `While holding a weapon in each hand, gain 5 Physical Buff Weapon Damage and lose the ability to equip plate armor.
(works with all secondary weapons, excluding lanterns and shields)`,
                statModifiers: {

                }
            },
            {
                name: `Swift`,
                info: `Gain -30% Armor Speed Penalty Bonus. Not applicable to additional speed modifiers.`,
                statModifiers: {

                }
            },
            {
                name: `Sword Mastery`,
                info: `When using a Sword-type weapon, gain 2 Physical Buff Weapon Damage and 5% Action Speed. Also gain 10 Move Speed Add when taking a defensive stance with your sword.`,
                statModifiers: {
                    ActionSpeed: 5,
                    MoveSpeed: 10
                }
            },
            {
                name: `Weapon Mastery`,
                info: `Gain the ablity to use any weapon.`,
                statModifiers: {

                }
            }
        ]
    },
        
    Wizard: {
        baseStats: {
            health: 96, memory: 19, strength: 6, vigor: 7, agility: 15, dexterity: 17, will: 20, knowledge: 25, resourcefulness: 15,
            memoryCapacity: 9, UtilityEffectiveness: 0, luck: 0, HealthRecoveryBonus: 0, MoveSpeed: 300,
            ActionSpeed: 0, BuffDuration: 0, DebuffDuration: 0, ArmorPenetration: 0, MagicPenetration: 0,
            HeadShotReduction: 0, ProjectileDamageReduction: 0, PhysicalDamageReduction: 0, FromArmorRating: 0, FromBonuses: 0,
            MagicResistance: 0, FromResistRating: 30, FromBonuses: 0, PhysicalPowerBonus: 0, FromPhysicalPower: 15, FromBonuses: 0,
            MagicPowerBonus: 0, FromMagicPower: 15, FromBonuses: 0
        },
        perks: [
            {
                name:`Arcane Feedback`,
                info:`When you deal damage with an Arcane Arcane spell, gain a stacking bonus granting 2% Spell Casting Speed and 2% Arcane Arcane Power Bonus per stack for 7s. This skill can stack up to 5 times and the duration resets with each with each successful stack.`,
                statModifiers: {

                }
            },
            {
                name: `Arcane Mastery`,
                info: `Gain 5% Arcane Arcane Power Bonus and reduces the cast time of Arcane Arcane spells by 0.5s.`,
                statModifiers: {

                }
            },
            {
                name: `Fire Mastery`,
                info: `Gain 5% Fire Fire Power Bonus. The duration of applied burns are increased by 2 seconds and deal 2 more base damage (except Explosion Spell which gains 1/1), and burn the target to suffer -50% Incoming Physical Healing Mod and -50% Incoming Magical Healing Mod for 5s.
Does not work on Explosion Bottle and Oil Lantern as they deal Neutral Neutral damage.
Fire Mastery only functions to burns applied by self, meaning Ignites casted onto other targets do not apply the amplified burn.When you deal damage with an Arcane Arcane spell, gain a stacking bonus granting 2% Spell Casting Speed and 2% Arcane Arcane Power Bonus per stack for 7s. This skill can stack up to 5 times and the duration resets with each with each successful stack.`,
                statModifiers: {

                }
            },
            {
                name: `Ice Shield`,
                info: `Gain 20 Armor Rating while not on cooldown. Inflict frostbite on melee attackers, causing them to suffer -20% Move Speed Bonus and -20% Action Speed for 0.5s.
5s cooldown. damage with Ice Ice freezes the target's feet and prevents them from moving for 0.5s.`,
                statModifiers: {

                }
            },
            {
                name: `Mana Surge`,
                info: `Gain 10% Magical Power Bonus.`,
                statModifiers: {

                }
            },
            {
                name: `Melt`,
                info: `When you deal magical Fire Fire Damage to a target, they suffer -10% Physical Damage Reduction for 5s.`,
                statModifiers: {

                }
            },
            {
                name: `Reactive Shield`,
                info: `When you take damage, gain a 15 Base Shield (0% Scaling) for 3s. The shield will reactivate after 12s.`,
                statModifiers: {

                }
            },
            {
                name: `Sage`,
                info: `Gain 10% Knowledge Bonus.`,
                statModifiers: {

                }
            },
            {
                name: `Spell Overload`,
                info: `Suffer -20% Knowledge Bonus but in turn, gain 60% Max Spell Count Bonus, rounded down.`,
                statModifiers: {

                }
            },
            {
                name: `Staff Mastery`,
                info: `When using a staff-type weapon, you gain 2 Buff Magical Damage as Base damage.`,
                statModifiers: {

                }
            },
        ]
    },
    Barbarian: {
        baseStats: {
            health: 133, strength: 20, vigor: 25, agility: 13, dexterity: 12, will: 18, knowledge: 5, resourcefulness: 12,
            memoryCapacity: 9, UtilityEffectiveness: 0, luck: 0, HealthRecoveryBonus: 70, MoveSpeed: 298,
            ActionSpeed: -3.5, BuffDuration: 3, DebuffDuration: -2.9, ArmorPenetration: 0, MagicPenetration: 0,
            HeadShotReduction: 0, ProjectileDamageReduction: 0, PhysicalDamageReduction: -22, FromArmorRating: 0, FromBonuses: 0,
            MagicResistance: 8, FromResistRating: 42, FromBonuses: 0, PhysicalPowerBonus: 5, FromPhysicalPower: 20, FromBonuses: 0,
            MagicPowerBonus: 7.5, FromMagicPower: 18, FromBonuses: 0
        },
        perks: [
            {
                name: `Axe Specialization`,
                info: `While using axes, gain 3 Physical Buff Weapon Damage.`,
                statModifiers: {

                }
            },
            {
                name: `Berserker`,
                info: `Gain 0 to 33.3% Physical Power Bonus when missing 0% to 100% of your max health.`,
                statModifiers: {

                }
            },
            {
                name: `Carnage`,
                info: `When a target is killed, gain 75 Armor Rating for 7s.`,
                statModifiers: {

                }
            },
            {
                name: `Executioner`,
                info: `While using axes, gain 10% Physical Headshot Hit Location Bonus.`,
                statModifiers: {

                }
            },
            {
                name: `Iron Will`,
                info: `Gain 60 Magical Resistance and immunity to knockback effects.`,
                statModifiers: {

                }
            },
            {
                name: `Morale Boost`,
                info: `Receive 12% Percent Max Health Healing after killing a player.`,
                statModifiers: {

                }
            },
            {
                name: `Potion Chugger`,
                info: `Gain 1.2x healing and 1.2x shielding potency from all drinks, while reducing the duration to 0.5x the base amount.
Does not affect Luck Potions.`,
                statModifiers: {

                }
            },
            {
                name: `Savage`,
                info: `While not wearing any chest armor, gain 10% Physical Power Bonus.`,
                statModifiers: {

                }
            },
            {
                name: `Robust`,
                info: `Gain 15% Max Health Bonus.`,
                statModifiers: {

                }
            },
            {
                name: `Crush`,
                info: `Gain the ability to destroy unreinforced doors and containers. Also gain 1 Impact Power on your attacks with two-handed weapons to defeat blocks and parries better.`,
                statModifiers: {

                }
            },
            {
                name: `Treacherous Lungs`,
                info: `Increases the duration of all shouting abilities (War Cry, Rage, Savage Roar) to 1.3x of the base amount.`,
                statModifiers: {

                }
            },
            {
                name: `Two-Hander`,
                info: `When attacking with a two-handed weapon, gain 5% Physical Power Bonus.`,
                statModifiers: {

                }
            },
        ]
    },
    Rogue: {
        baseStats: {
            health: 104, strength: 9, vigor: 10, agility: 21, dexterity: 25, will: 10, knowledge: 10, resourcefulness: 20,
            memoryCapacity: 4, UtilityEffectiveness: 0, luck: 0, HealthRecoveryBonus: -15, MoveSpeed: 304,
            ActionSpeed: 9, BuffDuration: -11, DebuffDuration: 12.4, ArmorPenetration: 0, MagicPenetration: 0,
            HeadShotReduction: 0, ProjectileDamageReduction: 0, PhysicalDamageReduction: -22, FromArmorRating: 0, FromBonuses: 0,
            MagicResistance: 1.25, FromResistRating: 15, FromBonuses: 0, PhysicalPowerBonus: -14, FromPhysicalPower: 9, FromBonuses: 0,
            MagicPowerBonus: -25, FromMagicPower: 10, FromBonuses: 0
        },
        perks: []
    },
    Ranger: {
        baseStats: {
            health: 106, strength: 12, vigor: 10, agility: 20, dexterity: 18, will: 10, knowledge: 12, resourcefulness: 23,
            memoryCapacity: 6, UtilityEffectiveness: 0, luck: 0, HealthRecoveryBonus: -15, MoveSpeed: 303,
            ActionSpeed: 3.5, BuffDuration: -11, DebuffDuration: 12.4, ArmorPenetration: 0, MagicPenetration: 0,
            HeadShotReduction: 0, ProjectileDamageReduction: 0, PhysicalDamageReduction: -22, FromArmorRating: 0, FromBonuses: 0,
            MagicResistance: 1.25, FromResistRating: 15, FromBonuses: 0, PhysicalPowerBonus: -16, FromPhysicalPower: 12, FromBonuses: 0,
            MagicPowerBonus: -25, FromMagicPower: 10, FromBonuses: 0
        },
        perks: []
    },
    Cleric: {
        baseStats: {
            health: 110, strength: 11, vigor: 13, agility: 12, dexterity: 14, will: 23, knowledge: 20, resourcefulness: 12,
            memoryCapacity: 14, UtilityEffectiveness: 0, luck: 0, HealthRecoveryBonus: -6, MoveSpeed: 297,
            ActionSpeed: -1.5, BuffDuration: 8, DebuffDuration: -7.4, ArmorPenetration: 0, MagicPenetration: 0,
            HeadShotReduction: 0, ProjectileDamageReduction: 0, PhysicalDamageReduction: -22, FromArmorRating: 0, FromBonuses: 0,
            MagicResistance: 13, FromResistRating: 62, FromBonuses: 0, PhysicalPowerBonus: -8, FromPhysicalPower:11, FromBonuses: 0,
            MagicPowerBonus: 19, FromMagicPower: 23, FromBonuses: 0
        },
        perks: []
    },
    Bard: {
        baseStats: {
            health: 104, strength: 9, vigor: 10, agility: 21, dexterity: 25, will: 10, knowledge: 10, resourcefulness: 20,
            memoryCapacity: 4, UtilityEffectiveness: 0, luck: 0, HealthRecoveryBonus: -15, MoveSpeed: 304,
            ActionSpeed: 9, BuffDuration: -11, DebuffDuration: 12.4, ArmorPenetration: 0, MagicPenetration: 0,
            HeadShotReduction: 0, ProjectileDamageReduction: 0, PhysicalDamageReduction: -22, FromArmorRating: 0, FromBonuses: 0,
            MagicResistance: 1.25, FromResistRating: 15, FromBonuses: 0, PhysicalPowerBonus: -14, FromPhysicalPower: 9, FromBonuses: 0,
            MagicPowerBonus: -25, FromMagicPower: 10, FromBonuses: 0
        },
        perks: []
    },
    Warlock: {
        baseStats: {
            health: 104, strength: 9, vigor: 10, agility: 21, dexterity: 25, will: 10, knowledge: 10, resourcefulness: 20,
            memoryCapacity: 4, UtilityEffectiveness: 0, luck: 0, HealthRecoveryBonus: -15, MoveSpeed: 304,
            ActionSpeed: 9, BuffDuration: -11, DebuffDuration: 12.4, ArmorPenetration: 0, MagicPenetration: 0,
            HeadShotReduction: 0, ProjectileDamageReduction: 0, PhysicalDamageReduction: -22, FromArmorRating: 0, FromBonuses: 0,
            MagicResistance: 1.25, FromResistRating: 15, FromBonuses: 0, PhysicalPowerBonus: -14, FromPhysicalPower: 9, FromBonuses: 0,
            MagicPowerBonus: -25, FromMagicPower: 10, FromBonuses: 0
        },
        perks: []
    },
    Druid: {
        baseStats: {
            health: 104, strength: 9, vigor: 10, agility: 21, dexterity: 25, will: 10, knowledge: 10, resourcefulness: 20,
            memoryCapacity: 4, UtilityEffectiveness: 0, luck: 0, HealthRecoveryBonus: -15, MoveSpeed: 304,
            ActionSpeed: 9, BuffDuration: -11, DebuffDuration: 12.4, ArmorPenetration: 0, MagicPenetration: 0,
            HeadShotReduction: 0, ProjectileDamageReduction: 0, PhysicalDamageReduction: -22, FromArmorRating: 0, FromBonuses: 0,
            MagicResistance: 1.25, FromResistRating: 15, FromBonuses: 0, PhysicalPowerBonus: -14, FromPhysicalPower: 9, FromBonuses: 0,
            MagicPowerBonus: -25, FromMagicPower: 10, FromBonuses: 0
        },
        perks: []
    }
};
   

const items = 
[
        { id: 1, name: `Armet (Common)`, type: `armor`, slot: `head`, class: [`Fighter`], MovementSpeed: -7, ArmorRating: 32, Attributes: { strength: 2 }, ProjectileDamageReduction: 2.1, HeadShotReduction: 18, variant: `common` },
        { id: 2, name: `Armet (Uncommon)`, type: `armor`, slot: `head`, class: [`Fighter`], MovementSpeed: -7, ArmorRating: 36, Attributes: { strength: 3 }, ProjectileDamageReduction: 2.1, HeadShotReduction: 18, variant: `uncommon` },
        { id: 3, name: `Armet (Rare)`, type: `armor`, slot: `head`, class: [`Fighter`], MovementSpeed: -7, ArmorRating: 38, Attributes: { strength: 4 }, ProjectileDamageReduction: 2.1, HeadShotReduction: 18, variant: `rare` },
        { id: 4, name: `Armet (Epic)`, type: `armor`, slot: `head`, class: [`Fighter`], MovementSpeed: -7, ArmorRating: 40, Attributes: { strength: 5 }, ProjectileDamageReduction: 2.1, HeadShotReduction: 18, variant: `epic` },
        { id: 5, name: `Armet (Legendary)`, type: `armor`, slot: `head`, class: [`Fighter`], MovementSpeed: -7, ArmorRating: 41, Attributes: { strength: 6 }, ProjectileDamageReduction: 2.1, HeadShotReduction: 18, variant: `legendary` },
        { id: 6, name: `Armet (Unique)`, type: `armor`, slot: `head`, class: [`Fighter`], MovementSpeed: -7, ArmorRating: 44, Attributes: { strength: 7 }, ProjectileDamageReduction: 2.1, HeadShotReduction: 18, variant: `unique` },

        { id: 7, name: `Barbuta Helm (Common)`, type: `armor`, slot: `head`, class: [`Fighter`, `Barbarian`], MovementSpeed: -6, MagicResistance: 30, ArmorRating: 20, Attributes: { dexterity: 2 }, ProjectileDamageReduction: 1.2, HeadShotReduction: 15, variant: `common` },
        { id: 8, name: `Barbuta Helm (Uncommon)`, type: `armor`, slot: `head`, class: [`Fighter`, `Barbarian`], MovementSpeed: -6, MagicResistance: 30, ArmorRating: 23, Attributes: { dexterity: 3 }, ProjectileDamageReduction: 1.2, HeadShotReduction: 15, variant: `uncommon` },
        { id: 9, name: `Barbuta Helm (Rare)`, type: `armor`, slot: `head`, class: [`Fighter`, `Barbarian`], MovementSpeed: -6, MagicResistance: 30, ArmorRating: 25, Attributes: { dexterity: 4 }, ProjectileDamageReduction: 1.2, HeadShotReduction: 15, variant: `rare` },
        { id: 10, name: `Barbuta Helm (Epic)`, type: `armor`, slot: `head`, class: [`Fighter`, `Barbarian`], MovementSpeed: -6, MagicResistance: 30, ArmorRating: 27, Attributes: { dexterity: 5 }, ProjectileDamageReduction: 1.2, HeadShotReduction: 15, variant: `epic` },
        { id: 11, name: `Barbuta Helm (Legendary)`, type: `armor`, slot: `head`, class: [`Fighter`, `Barbarian`], MovementSpeed: -6, MagicResistance: 30, ArmorRating: 28, Attributes: { dexterity: 6 }, ProjectileDamageReduction: 1.2, HeadShotReduction: 15, variant: `legendary` },
        { id: 12, name: `Barbuta Helm (Unique)`, type: `armor`, slot: `head`, class: [`Fighter`, `Barbarian`], MovementSpeed: -6, MagicResistance: 30, ArmorRating: 31, Attributes: { dexterity: 7 }, ProjectileDamageReduction: 1.2, HeadShotReduction: 15, variant: `unique` },

        { id: 50, name: `Fine Cuirass (Common)`, type: `armor`, slot: `chest`, class: [`Fighter`], MovementSpeed: -18, MagicResistance: -5, ArmorRating: 92, Attributes: { strength: 1, vigor: 2 }, ProjectileDamageReduction: 4, variant: `common` },
        { id: 50, name: `Fine Cuirass (Uncommon)`, type: `armor`, slot: `chest`, class: [`Fighter`], MovementSpeed: -18, MagicResistance: -5, ArmorRating: 97, Attributes: { strength: 2, vigor: 2 }, ProjectileDamageReduction: 4, variant: `uncommon` },
        { id: 50, name: `Fine Cuirass (Rare)`, type: `armor`, slot: `chest`, class: [`Fighter`], MovementSpeed: -18, MagicResistance: -5, ArmorRating: 102, Attributes: { strength: 2, vigor: 3 }, ProjectileDamageReduction: 4, variant: `rare` },
        { id: 50, name: `Fine Cuirass (Epic)`, type: `armor`, slot: `chest`, class: [`Fighter`], MovementSpeed: -18, MagicResistance: -5, ArmorRating: 107, Attributes: { strength: 3, vigor: 3 }, ProjectileDamageReduction: 4, variant: `epic` },
        { id: 50, name: `Fine Cuirass (Legendary)`, type: `armor`, slot: `chest`, class: [`Fighter`], MovementSpeed: -18, MagicResistance: -5, ArmorRating: 112, Attributes: { strength: 3, vigor: 4 }, ProjectileDamageReduction: 4, variant: `legendary` },
        { id: 50, name: `Fine Cuirass (Unique)`, type: `armor`, slot: `chest`, class: [`Fighter`], MovementSpeed: -18, MagicResistance: -5, ArmorRating: 125, Attributes: { strength: 4, vigor: 4 }, ProjectileDamageReduction: 4, variant: `unique` },

        { id: 70, name: `Plate Pants (Common)`, type: `armor`, slot: `legs`, class: [`Fighter`, `Cleric`], MovementSpeed: -9, MagicResistance: -5, ArmorRating: 35, Attributes: { strength: 2, vigor: 1 }, ProjectileDamageReduction: 2.8, variant: `common` },
        { id: 70, name: `Plate Pants (Uncommon)`, type: `armor`, slot: `legs`, class: [`Fighter`, `Cleric`], MovementSpeed: -9, MagicResistance: -5, ArmorRating: 38, Attributes: { strength: 2, vigor: 2 }, ProjectileDamageReduction: 2.8, variant: `uncommon` },
        { id: 70, name: `Plate Pants (Rare)`, type: `armor`, slot: `legs`, class: [`Fighter`, `Cleric`], MovementSpeed: -9, MagicResistance: -5, ArmorRating: 41, Attributes: { strength: 3, vigor: 2 }, ProjectileDamageReduction: 2.8, variant: `rare` },
        { id: 70, name: `Plate Pants (Epic)`, type: `armor`, slot: `legs`, class: [`Fighter`, `Cleric`], MovementSpeed: -9, MagicResistance: -5, ArmorRating: 44, Attributes: { strength: 3, vigor: 3 }, ProjectileDamageReduction: 2.8, variant: `epic` },
        { id: 70, name: `Plate Pants (Legendary)`, type: `armor`, slot: `legs`, class: [`Fighter`, `Cleric`], MovementSpeed: -9, MagicResistance: -5, ArmorRating: 46, Attributes: { strength: 4, vigor: 3 }, ProjectileDamageReduction: 2.8, variant: `legendary` },
        { id: 70, name: `Plate Pants (Unique)`, type: `armor`, slot: `legs`, class: [`Fighter`, `Cleric`], MovementSpeed: -9, MagicResistance: -5, ArmorRating: 50, Attributes: { strength: 4, vigor: 4 }, ProjectileDamageReduction: 2.8, variant: `unique` },





    { id: 3, name: `Chapel De Fer`, type: `armor`, slot: `head`, class: [`Fighter`,`Cleric`], MovementSpeed: -4,MagicResistance:10, ArmorRating: 22, Attributes: {agility:2 }, ProjectileDamageReduction: 0.6, HeadShotReduction:13,},
    { id: 4, name: `Chaperon`, type: `armor`, slot: `head`, class: [`Cleric`], MovementSpeed: -2,MagicResistance:20, ArmorRating: 11, Attributes: {will:2}, ProjectileDamageReduction: 0, HeadShotReduction:8,},
    { id: 5, name: `Crusader Helm`, type: `armor`, slot: `head`, class: [`Cleric`, `Fighter`], MovementSpeed: -7, MagicResistance: 0, ArmorRating: 30, Attributes: {strength: 1, vigor: 2}, ProjectileDamageReduction: 1.8, HeadShotReduction: 18, },
    { id: 6, name: `Darkgrove Hood`, type: `armor`, slot: `head`, class: [`Druid`], MovementSpeed: -2, MagicResistance: 0, ArmorRating: 13, Attributes: { will: 1,strength:2 }, ProjectileDamageReduction: 0, HeadShotReduction: 8, },
    { id: 7, name: `Elkwood Crown`, type: `armor`, slot: `head`, class: [`Druid`], MovementSpeed: -3, MagicResistance: 0, ArmorRating: 19, Attributes: {dexterity:1,vigor:2 }, ProjectileDamageReduction: 0, HeadShotReduction: 11, },
    { id: 8, name: `Feathered Hat`, type: `armor`, slot: `head`, class: [`Bard`], MovementSpeed: -2, MagicResistance: 0, ArmorRating: 16, Attributes: { knowledge: 2 }, ProjectileDamageReduction: 0, HeadShotReduction: 9, },
    { id: 9, name: `Forest Hood`, type: `armor`, slot: `head`, class: [`Ranger`,`Druid`], MovementSpeed: -4, MagicResistance: 15, ArmorRating: 14, Attributes: { strength: 2 }, ProjectileDamageReduction: 0, HeadShotReduction: 8, },
    { id: 10, name: `Gjermundbu`, type: `armor`, slot: `head`, class: [`Barbarian`], MovementSpeed: -6, MagicResistance: 15, ArmorRating: 23, Attributes: { vigor: 2 }, ProjectileDamageReduction: 1.2, HeadShotReduction: 15, },
    { id: 11, name: `Chaperon`, type: `armor`, slot: `head`, class: [`Cleric`], MovementSpeed: -2, MagicResistance: 20, ArmorRating: 11, Attributes: { will: 2 }, ProjectileDamageReduction: 0, HeadShotReduction: 8, },
    { id: 12, name: `Chaperon`, type: `armor`, slot: `head`, class: [`Cleric`], MovementSpeed: -2, MagicResistance: 20, ArmorRating: 11, Attributes: { will: 2 }, ProjectileDamageReduction: 0, HeadShotReduction: 8, },
   
    { id: 80, name: `Light Gauntlets`, type: `armor`, slot: `hands`, class: [`Fighter`, `Cleric`], MovementSpeed: 0, MagicResistance: -5, ArmorRating: 17, Attributes: { strength: 2, agility: 1 }, ProjectileDamageReduction: 0.7, },
    { id: 100, name: `Plate Boots`, type: `armor`, slot: `foot`, class: [`Fighter`, `Cleric`], MovementSpeed: 2, MagicResistance: -5, ArmorRating: 20, Attributes: { strength: 2,}, ProjectileDamageReduction: 2, },
    ];



let equippedItems = {
    weapon: {
        mainHand: null,
        offHand:null,
    },
    armor: {
        head: null,
        chest: null,
        legs: null,
        hands: null,
        foot: null,
        back: null,
        ring1: null,
        ring2:null,
    },
    perks: {
        perk1: null,
        perk2: null,
        perk3: null,
        perk4: null
    }
};
/*
// Function to calculate Base Health based on Strength and Vigor
function calculateBaseHealth(strength, vigor) {
    // Example formula: each point of Strength/Vigor contributes to Base Health
    const baseHealth = (strength + vigor) * 2.65;  // Using the mock value 2.65 as the health multiplier
    return baseHealth;
}



// Function to calculate the total Health
function calculateTotalHealth(strength, vigor, maxHealthBonusPercent, maxHealthAdd) {
    // Step 1: Calculate Base Health
    const baseHealth = calculateBaseHealth(strength, vigor);

    // Step 2: Apply Max Health Bonus %
    const healthWithBonus = baseHealth * (1 + maxHealthBonusPercent / 100);

    // Step 3: Add Max Health Add
    let totalHealth = healthWithBonus + maxHealthAdd;

    // Step 4: Round up the health to display in the game
    totalHealth = Math.ceil(totalHealth);

    return totalHealth;
}*/
function calculateHealth(strength,vigor) {
    return (strength * 0.25) + (vigor * 0.75);
}
function calculateBaseHealth(sum) {
    let baseHealth = 75; // Starting Base Health at Sum = 0

    // 0 to 10: +3 Base Health per point of Sum
    if (sum <= 10) {
        baseHealth += sum * 3;
    }
    // 10 to 50: +2 Base Health per point of Sum
    else if (sum <= 50) {
        baseHealth += 10 * 3; // From 0 to 10, we add 30
        baseHealth += (sum - 10) * 2;
    }
    // 50 to 75: +1 Base Health per point of Sum
    else if (sum <= 75) {
        baseHealth += 10 * 3;   // 0 to 10: +30
        baseHealth += 40 * 2;   // 10 to 50: +80
        baseHealth += (sum - 50) * 1;
    }
    // 75 to 100: +0.5 Base Health per point of Sum
    else if (sum <= 100) {
        baseHealth += 10 * 3;   // 0 to 10: +30
        baseHealth += 40 * 2;   // 10 to 50: +80
        baseHealth += 25 * 1;   // 50 to 75: +25
        baseHealth += (sum - 75) * 0.5;
    }

    return baseHealth;
}
// Function to calculate the total Health considering item bonuses
function calculateActionSpeed(agility, dexterity) {
    const baseActionSpeed = -38; // Starting Action Speed
    const sum = (agility * 0.25) + (dexterity * 0.75); // Calculate sum

    let additionalActionSpeed = 0;
    if (sum <= 0) {
        additionalActionSpeed = baseActionSpeed; // Starting value if sum is 0 or less
    } else if (sum <= 10) {
        additionalActionSpeed = baseActionSpeed + (sum * 3); // Up to -8%
    } else if (sum <= 13) {
        additionalActionSpeed = baseActionSpeed + (30 + (sum - 10) * 2); // Up to -2%
    } else if (sum <= 25) {
        additionalActionSpeed = baseActionSpeed + (30 + (3 * 2) + (sum - 13)); // Up to 10%
    } else if (sum <= 41) {
        additionalActionSpeed = baseActionSpeed + (30 + (3 * 2) + 12 + (sum - 25) * 1.5); // Up to 34%
    } else if (sum <= 50) {
        additionalActionSpeed = baseActionSpeed + (30 + (3 * 2) + 12 + 24 + (sum - 41)); // Up to 43%
    } else {
        additionalActionSpeed = baseActionSpeed + (30 + (3 * 2) + 12 + 24 + 9 + (sum - 50) * 0.5); // Up to 68%
    }

    return additionalActionSpeed;
}
function calculatePhysicalPower(strength) {
    if (strength >= 0 && strength < 100) {
        return strength; // Just return strength for values < 100
    }
    return strength; // Optionally handle higher strength values
}

    function calculateTotalHealth(strength, vigor) {
        const sum = calculateHealth(strength, vigor);
        const baseHealth = calculateBaseHealth(sum);
        return Math.ceil(baseHealth); // Rounding for display purposes
    }

function calculatePhysicalPowerBonus(PhysicalPower) {
    if (PhysicalPower < 5) {
        return -0.8 + 0.1 * Math.abs(PhysicalPower) * 100;
    } else if (PhysicalPower < 7) {
        return -0.3 + 0.05 * (PhysicalPower - 5) * 100;
    } else if (PhysicalPower < 11) {
        return -0.2 + 0.03 * (PhysicalPower - 7) * 100;
    } else if (PhysicalPower < 15) {
        return -0.08 + 0.02 * (PhysicalPower - 11) * 100;
    } else if (PhysicalPower < 50) {
        return 0 + 0.01 * (PhysicalPower - 15) * 100;
    } else if (PhysicalPower < 100) {
        return 0.35 + 0.005 * (PhysicalPower - 50) * 100;
    } else {
        return 0; // Optional: A standard value for values >= 100
    }
}

function calculateHealthRecovery(vigor) {
    if (vigor < 5) {
        return -0.55 + 0.05 * vigor *100;
    } else if (vigor < 15) {
        return -0.3 + 0.03 * (vigor - 5)*100;
    } else if (vigor < 25) {
        return 0 + 0.07 * (vigor - 15)*100;
    } else if (vigor < 35) {
        return 0.7 + 0.05 * (vigor - 25)*100;
    } else if (vigor < 84) {
        return 1.2 + 0.02 * (vigor - 35)*100;
    } else if (vigor < 86) {
        return 2.22 + 0.02 * (vigor - 86) *100;
    } else {
        return 0; // Optional: A standard value for values >= 100
    }
}
// Function to calculate Move Speed considering agility and equipped armor
function calculateMoveSpeed(agility, armorMovementSpeed) {
    let baseMoveSpeed = 300;
    let moveSpeedAdjustment = 0;

    // Starting at 0 Agility, the Move Speed starts at -10
    if (agility < 0) {
        // For negative agility, decrement move speed further
        moveSpeedAdjustment = Math.floor(agility / 3); // Every 3 points reduces 1% of speed
    } else {
        // Calculate the adjustments based on Agility
        if (agility >= 0 && agility <= 10) {
            moveSpeedAdjustment += 0.5 * agility; // 0.5 for each point up to -5
            if (moveSpeedAdjustment > -5) {
                moveSpeedAdjustment = -5; // Capping at -5
            }
        } else if (agility > 10 && agility <= 15) {
            moveSpeedAdjustment += (5 * 0.5) + (agility - 10) * 1; // 1 for each point from 10 to 15
            if (moveSpeedAdjustment > 0) {
                moveSpeedAdjustment = 0; // Capping at 0
            }
        } else if (agility > 15 && agility <= 75) {
            moveSpeedAdjustment += (5 * 0.5) + (5 * 1) + (agility - 15) * 0.75; // 0.75 for each point from 15 to 75
            if (moveSpeedAdjustment > 45) {
                moveSpeedAdjustment = 45; // Capping at 45
            }
        } else if (agility > 75 && agility <= 100) {
            moveSpeedAdjustment += (5 * 0.5) + (5 * 1) + (60 * 0.75) + (agility - 75) * 0.5; // 0.5 for each point from 75 to 100
            if (moveSpeedAdjustment > 57.5) {
                moveSpeedAdjustment = 57.5; // Capping at 57.5
            }
        }
    }

    // Incorporate armor's Movement Speed adjustment
    moveSpeedAdjustment += armorMovementSpeed;

    // Calculate final Move Speed and apply hard cap
    let finalMoveSpeed = baseMoveSpeed + moveSpeedAdjustment;
    if (finalMoveSpeed > 330) {
        finalMoveSpeed = 330; // Hard cap at 330
    } else if (finalMoveSpeed < 0) {
        finalMoveSpeed = 0; // Preventing negative Move Speed
    }

    return finalMoveSpeed;
}
function calculateFinalArmorRating(equippedItems) {
    let armorRatingFromArmor = 0;
    let itemArmorRatingBonus = 0;
    let otherArmorRating = 0; // This could include non-item sources of armor rating

    // Calculate total armor rating from equipped items
    for (const slot in equippedItems.armor) {
        const armorItem = equippedItems.armor[slot];
        if (armorItem && armorItem.ArmorRating) {
            armorRatingFromArmor += armorItem.ArmorRating;

            // If the armor has a specific item armor rating bonus, add it
            if (armorItem.ItemArmorRatingBonus) {
                itemArmorRatingBonus += armorItem.ItemArmorRatingBonus;
            }
        }
    }
    otherArmorRating = 0; // Example value for enchantments

    // Final Armor Rating calculation
    const finalArmorRating = (armorRatingFromArmor * (1 + itemArmorRatingBonus)) + otherArmorRating;

    return finalArmorRating;
}

function calculatePhysicalDamageReduction(armorRating) {
    // Initial values
    let physicalDamageReduction = 0;

    if (armorRating < -300) {
        // Start from -619% Physical Damage Reduction
        physicalDamageReduction = -619;
    } else if (armorRating >= -300 && armorRating <= -3) {
        physicalDamageReduction = -619 + (armorRating + 300) * 2; // 2% each
    } else if (armorRating > -3 && armorRating <= 22) {
        physicalDamageReduction = -25 + (armorRating + 3) * 1; // 1% each
    } else if (armorRating > 22 && armorRating <= 31) {
        physicalDamageReduction = 0 + (armorRating - 22) * 0.5; // 0.5% each
    } else if (armorRating > 31 && armorRating <= 42) {
        physicalDamageReduction = 4.5 + (armorRating - 31) * 0.4; // 0.4% each
    } else if (armorRating > 42 && armorRating <= 52) {
        physicalDamageReduction = 8.9 + (armorRating - 42) * 0.3; // 0.3% each
    } else if (armorRating > 52 && armorRating <= 62) {
        physicalDamageReduction = 11.9 + (armorRating - 52) * 0.2; // 0.2% each
    } else if (armorRating > 62 && armorRating <= 112) {
        physicalDamageReduction = 13.9 + (armorRating - 62) * 0.1; // 0.1% each
    } else if (armorRating > 112 && armorRating <= 175) {
        physicalDamageReduction = 18.9 + (armorRating - 112) * 0.2; // 0.2% each
    } else if (armorRating > 175 && armorRating <= 230) {
        physicalDamageReduction = 31.5 + (armorRating - 175) * 0.3; // 0.3% each
    } else if (armorRating > 230 && armorRating <= 317) {
        physicalDamageReduction = 48 + (armorRating - 230) * 0.2; // 0.2% each
    } else if (armorRating > 317 && armorRating <= 353) {
        physicalDamageReduction = 65.4 + (armorRating - 317) * 0.1; // 0.1% each
    } else if (armorRating > 353 && armorRating <= 368) {
        physicalDamageReduction = 69 + (armorRating - 353) * 0.05; // 0.05% each
    } else if (armorRating > 368 && armorRating <= 369) {
        physicalDamageReduction = 69.75 + (armorRating - 368) * 0.03; // 0.03% each
    } else if (armorRating > 369 && armorRating <= 370) {
        physicalDamageReduction = 69.78 + (armorRating - 369) * 0.07; // 0.07% each
    } else if (armorRating > 370 && armorRating <= 428) {
        physicalDamageReduction = 69.85 + (armorRating - 370) * 0.05; // 0.05% each
    } else if (armorRating > 428 && armorRating <= 429) {
        physicalDamageReduction = 72.75 + (armorRating - 428) * -0.075; // -0.075% each
    } else if (armorRating > 429 && armorRating <= 450) {
        physicalDamageReduction = 72.675 + (armorRating - 429) * 0.025; // 0.025% each
    } else if (armorRating > 450 && armorRating <= 500) {
        physicalDamageReduction = 73.2 + (armorRating - 450) * 0.02; // 0.02% each
    }

    // Cap the physical damage reduction at 75%
    return Math.min(physicalDamageReduction, 75);
}
function calculateMagicalResistance(will) {
    // Initial values
    let MagicResistance = 0;

    if (will < 0) {
        // Start from -20 Magic Resistance
        MagicResistance = -20;
    } else if (will >= 0 && will <= 5) {
        MagicResistance = -20 + (will * 4); // 4 each from 0 to 5
    } else if (will > 5 && will <= 15) {
        MagicResistance = 0 + ((will - 5) * 3); // 3 each from 5 to 15
    } else if (will > 15 && will <= 20) {
        MagicResistance = 30 + ((will - 15) * 4); // 4 each from 15 to 20
    } else if (will > 20 && will <= 28) {
        MagicResistance = 50 + ((will - 20) * 5); // 5 each from 20 to 28
    } else if (will > 28 && will <= 38) {
        MagicResistance = 90 + ((will - 28) * 4); // 4 each from 28 to 38
    } else if (will > 38 && will <= 48) {
        MagicResistance = 130 + ((will - 38) * 3); // 3 each from 38 to 48
    } else if (will > 48 && will <= 58) {
        MagicResistance = 160 + ((will - 48) * 2); // 2 each from 48 to 58
    } else if (will > 58 && will <= 100) {
        MagicResistance = 180 + ((will - 58)); // 1 each from 58 to 100
    }

    return MagicResistance;
    console.log(MagicResistance);
}


// Function to format stats
function formatStats(stats) {
    let formattedStats = "";
    for (const [key, value] of Object.entries(stats)) {
        if (typeof value === 'object' && value !== null) {
            formattedStats += `${key}:\n`;
            for (const [subKey, subValue] of Object.entries(value)) {
                formattedStats += `  ${subKey}: ${subValue}\n`;
            }
        } else {
            formattedStats += `${key}: ${value}\n`;
        }
    }
    return formattedStats;
}

// Function to apply item bonuses to stats
function applyBonuses(stats, equippedItems) {
    let modifiedStats = { ...stats };

    // Apply weapon bonuses if present
    if (equippedItems.weapon && equippedItems.weapon.bonus) {
        for (const [stat, value] of Object.entries(equippedItems.weapon.bonus)) {
            modifiedStats[stat] = (modifiedStats[stat] || 0) + value;
        }
    }

    // Apply armor attributes if present
    let totalMagicResistanceFromArmor = 0;
    let totalArmorMovementSpeed = 0;
    for (const slot in equippedItems.armor) {
        const armorItem = equippedItems.armor[slot];
        if (armorItem) {
            totalArmorMovementSpeed += armorItem.MovementSpeed || 0;
        if(armorItem.Attributes) {
            for (const [stat, value] of Object.entries(armorItem.Attributes)) {
                modifiedStats[stat] = (modifiedStats[stat] || 0) + value;
                // If the attribute is magicResistance, accumulate it separately
                if (stat === "MagicResistance") {
                    totalMagicResistanceFromArmor += value;
                }
            }
            }
        }
        console.log(totalMagicResistanceFromArmor);
    }

    // Calculate PhysicalPower using the strength value
    const physicalPower = calculatePhysicalPower(modifiedStats.strength);
    const physicalPowerBonus = calculatePhysicalPowerBonus(physicalPower);
    modifiedStats.PhysicalPowerBonus = physicalPowerBonus;
  
    // Calculate Health using strength and vigor value
    const totalHealth = calculateTotalHealth(modifiedStats.strength, modifiedStats.vigor);
    modifiedStats.health = totalHealth;
    //ACTIONSPEED
    modifiedStats.ActionSpeed = calculateActionSpeed(modifiedStats.agility, modifiedStats.dexterity);
    //MOVESPEED
    modifiedStats.MoveSpeed = calculateMoveSpeed(modifiedStats.agility,totalArmorMovementSpeed);
    //PHYSPOWER
    modifiedStats.FromPhysicalPower = calculatePhysicalPower(modifiedStats.strength);
    //ARMORRATING
    modifiedStats.FromArmorRating = calculateFinalArmorRating(equippedItems);
    //PDR
    modifiedStats.PhysicalDamageReduction = calculatePhysicalDamageReduction(modifiedStats.FromArmorRating);
    //Calculate Magic Resistance using will
    const baseMagicResistance = calculateMagicalResistance(modifiedStats.will);
    modifiedStats.MagicResistance = baseMagicResistance + totalMagicResistanceFromArmor;
    //HEALTHRECOVERY
    modifiedStats.HealthRecoveryBonus = Math.round(calculateHealthRecovery(modifiedStats.vigor));

    return modifiedStats;
}

//Equp perk
function equipPerk(perk) {
    // Get the currently active class from the class buttons
    const selectedClass = document.querySelector(".class-button.active")?.getAttribute("data-class");

    // Check if a class is selected
    if (!selectedClass) {
        alert("No class selected.");
        console.log("No active class found.");
        return;
    }

    console.log("Selected class:", selectedClass);

    // Retrieve perks for the selected class
    const perks = characterClasses[selectedClass]?.perks; // Ensure the class has perks

    if (!perks) {
        alert("Class perks not found.");
        console.log("No perks found for the class:", selectedClass);
        return;
    }

    // Find the perk by its name
    const selectedPerk = perks.find(p => p.name === perk.name);

    // If the perk exists in the selected class perks
    if (selectedPerk) {
        const activeSlot = document.querySelector('.perk-slot.active'); // Get the active perk slot

        if (activeSlot) {
            const slotId = activeSlot.id; // e.g., 'perk1-slot'
            const perkKey = slotId.replace('-slot', ''); // Get the perk key (e.g., 'perk1')

            console.log("Equipping perk to slot:", slotId, "Perk:", selectedPerk);

            // Equip the perk to the respective slot
            equippedItems.perks[perkKey] = selectedPerk;

            // Update the display for equipped perk info
            const infoDiv = document.getElementById(`${perkKey}-info`); // e.g., 'perk1-info'
            if (infoDiv) {
                infoDiv.textContent = `Equipped Perk: ${selectedPerk.name} - ${selectedPerk.info}`; // Update perk info display
            } else {
                console.log("Info div not found for slot:", slotId);
            }

            // Update stats after equipping (apply bonuses including perks)
            const baseStats = characterClasses[selectedClass].baseStats;
            const modifiedStats = applyBonuses(baseStats, equippedItems); // Calculate modified stats
            displayStats(modifiedStats); // Display updated stats

            // Close any open dropdowns after equipping
            closeDropdowns();
        } else {
            alert("No perk slot selected.");
            console.log("No active perk slot found.");
        }
    } else {
        alert("This perk cannot be equipped by this class.");
        console.log("Perk not found for class:", selectedClass, "Perk:", perk.name);
    }
}

// Equip item and update UI
function equipItem(item) {
    const selectedClass = document.querySelector(".class-button.active")?.getAttribute("data-class");

    // Check if the item is valid for the selected class
    if (Array.isArray(item.class) && item.class.includes(selectedClass)) {
        console.log(`Equipping ${item.name} to slot: ${item.type || item.slot}`);

        // Assuming you have a way to track which perk slot is selected
        if (item.type === 'perk') {
            const activeSlot = document.querySelector('.perk-slot.active'); // Get the active perk slot
            if (activeSlot) {
                const slotId = activeSlot.id; // e.g., perk1-slot
                const perkIndex = parseInt(slotId.replace('perk', '').replace('-slot', '')) - 1; // Get the index for the perk slot (0 for perk1, 1 for perk2, etc.)

                // Retrieve perk details from characterClasses
                const perks = characterClasses[selectedClass].perks;
                const selectedPerk = perks[perkIndex]; // Access the perk using the index

                if (selectedPerk) {
                    const infoDiv = document.getElementById(`${slotId.replace('-slot', '-info')}`);
                    infoDiv.textContent = `Equipped Perk: ${selectedPerk.name} - ${selectedPerk.info}`;

                    // Store equipped perk in equippedItems
                    equippedItems.perks[perkIndex] = selectedPerk; // Assuming equippedItems.perks is an array
                }
            }
        } else {
            // Equip the item based on its type (weapon, armor)
            if (item.type === 'weapon') {
                equippedItems.weapon = item;
                document.getElementById('equipped-weapon').textContent = `Weapon: ${item.name}`;
            } else if (item.slot in equippedItems.armor) {
                equippedItems.armor[item.slot] = item;
                document.getElementById(`equipped-${item.slot}`).textContent = `${item.slot.charAt(0).toUpperCase() + item.slot.slice(1)}: ${item.name}`;
                document.getElementById(`${item.slot}-slot`).textContent = `${item.name}`;
            }
        }

        // Update the stats after equipping (apply bonuses including perks)
        const baseStats = characterClasses[selectedClass].baseStats;
        const modifiedStats = applyBonuses(baseStats, equippedItems);
        displayStats(modifiedStats); // Display updated stats

        // Close dropdowns after equipping
        closeDropdowns();
    } else {
        alert("Item/Perk cannot be equipped by this class.");
    }
}
function closeDropdowns() {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.classList.remove('active'); // Close all dropdowns
    });
}

// Display available items in dropdowns
function displayItems(selectedClass) {
    console.log("Selected Class: ", selectedClass);
    console.log(characterClasses[selectedClass]);
    console.log(items);
    const selectedClassObject = characterClasses[selectedClass];
    console.log("Selected Class Object:", selectedClassObject);
   

    const headDropdown = document.getElementById('head-dropdown');
    const chestDropdown = document.getElementById('chest-dropdown');
    const legsDropdown = document.getElementById('legs-dropdown');
    const handsDropdown = document.getElementById('hands-dropdown');
    const footDropdown = document.getElementById('foot-dropdown');
    const backDropdown = document.getElementById(`back-dropdown`);
    const weaponDropdown = document.getElementById('weapon-dropdown');

    // Clear previous items in dropdowns
    headDropdown.innerHTML = '';
    chestDropdown.innerHTML = '';
    legsDropdown.innerHTML = '';
    handsDropdown.innerHTML = '';
    footDropdown.innerHTML = '';
    weaponDropdown.innerHTML = '';
    const perkDropdowns = [
        document.getElementById('perk1-dropdown'),
        document.getElementById('perk2-dropdown'),
        document.getElementById('perk3-dropdown'),
        document.getElementById('perk4-dropdown'),
    ];

    perkDropdowns.forEach(dropdown => {
        dropdown.innerHTML = ''; // Clear previous perks
    });
    // Clear all perk dropdowns
    

    const filteredPerks = selectedClassObject.perks || []; // Ensure this is safe
    console.log("Filtered Perks:", filteredPerks); // Log perks for debugging


    const filteredItems = items.filter(item => Array.isArray(item.class) && item.class.includes(selectedClass));

    filteredItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = item.name;
        itemDiv.classList.add('item');
        itemDiv.addEventListener('click', () => equipItem(item));

        // Add item to the appropriate dropdown
        if (item.type === 'weapon') {
            weaponDropdown.appendChild(itemDiv);
        } else if (item.slot === 'head') {
            headDropdown.appendChild(itemDiv);
        } else if (item.slot === 'chest') {
            chestDropdown.appendChild(itemDiv);
        } else if (item.slot === 'legs') {
            legsDropdown.appendChild(itemDiv);
        } else if (item.slot === 'hands') {
            handsDropdown.appendChild(itemDiv);
        } else if (item.slot === 'foot') {
            footDropdown.appendChild(itemDiv);
        } else if (item.slot === `back`) {
            backDropdown.appendChild(itemDiv);
        }
    });
    
    // Populate each perk dropdown with all available perks
    filteredPerks.forEach(perk => {
        const perkDiv = document.createElement('div');
        perkDiv.textContent = perk.name;
        perkDiv.classList.add('item');
        perkDiv.addEventListener('click', () => equipPerk(perk));

        // Add the perk to each dropdown
        perkDropdowns.forEach(dropdown => {
            dropdown.appendChild(perkDiv.cloneNode(true)); // Clone the perkDiv to avoid duplicates in the same dropdown
        });
    });
}

function displayStats(stats) {
    const statsOutput = document.getElementById("stats-output");
    statsOutput.textContent = formatStats(stats);
}


document.addEventListener("DOMContentLoaded", function () {
    // Existing event listeners for class buttons
    const classButtons = document.querySelectorAll(".class-button");
    const statsOutput = document.getElementById("stats-output");

    // Set default class
    const defaultClass = "Fighter"; // Change this if you want a different default
    const defaultButton = document.querySelector(`.class-button[data-class="${defaultClass}"]`);
    if (defaultButton) {
        defaultButton.classList.add("active"); // Set default class button as active
        const baseStats = characterClasses[defaultClass].baseStats;
        const modifiedStats = applyBonuses(baseStats, equippedItems);
        displayStats(modifiedStats);
        displayItems(defaultClass);
    }

    // Event listener for class buttons
    classButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior

            // Set active class button
            classButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const selectedClass = this.getAttribute("data-class");
            const baseStats = characterClasses[selectedClass].baseStats;
            const modifiedStats = applyBonuses(baseStats, equippedItems);

            displayStats(modifiedStats);
            displayItems(selectedClass);
        });
    });

    // Event listener for perk slots
    document.querySelectorAll('.perk-slot').forEach(slot => {
        slot.addEventListener('click', function () {
            // Remove active class from all perk slots
            document.querySelectorAll('.perk-slot').forEach(s => s.classList.remove('active'));
            // Add active class to the clicked slot
            this.classList.add('active');

            const dropdownId = `${this.id.replace('-slot', '')}-dropdown`;
            const dropdown = document.getElementById(dropdownId);
            dropdown.classList.toggle('active'); // Toggle dropdown visibility
            console.log(`Toggled dropdown: ${dropdownId}`); // Log to check which dropdown is being toggled
        });
    });

    // Add click event listeners for perks in dropdowns
    document.querySelectorAll('.perk-dropdown').forEach(item => {
        item.addEventListener('click', function () {
            const perkName = characterClasses[selectedClass].perks.name; // Assuming each perk item has this data attribute
            const perkInfo = this.getAttribute('data-perk-info'); // Assuming each perk item has info
            const perkObject = { name: perkName, info: perkInfo }; // Create the perk object to pass to equipPerk
            console.log("Selected perk:", perkObject);
            equipPerk(perkObject); // Call the equipPerk function with the selected perk object
        });
    });

    // Add click event listeners for inventory slots
    document.querySelectorAll('.inventory-slot').forEach(slot => {
        slot.addEventListener('click', function () {
            const dropdownId = `${this.id.replace('-slot', '')}-dropdown`;
            const dropdown = document.getElementById(dropdownId);
            dropdown.classList.toggle('active'); // Toggle dropdown visibility
        });
    });
});
