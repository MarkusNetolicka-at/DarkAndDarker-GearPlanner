const oneHandedSwords = {
    armingSword: {
        Name: "Arming Sword",
        Class: ["Fighter", "Ranger", "Bard"],
        Slot: "One Handed",
        MovementSpeed: -20,
        DamageOnHit: { base: 29, variants: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41] },
    },
    falchion: {
        Name: "Falchion",
        Class: ["Fighter", "Bard", "Warlock"],
        Slot: "One Handed",
        MovementSpeed: -25,
        DamageOnHit: { base: 35, variants: [36, 37, 38, 39, 40, 41, 42, 43] },
    }
};

const twoHandedSwords = {
    crystalSword: {
        Name: "Crystal Sword",
        Class: ["Wizard", "Warlock"],
        Slot: "Two Handed",
        MovementSpeed: -25,
        DamageOnHit: {
            physical: { base: 12, variants: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22] },
            magical: { base: 12, variants: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22] }
        },
        Stats: {
            primaryAttacks: "All Slash",
            damageMultipliers: ["100%", "105%", "110%"],
            attackSpeed: { windup: 550, attack: 168, combo: [1236, 1216], recovery: 1068 }
        },
        ImpactZones: "100%/90%/70% + 3",
        Artifact: "None"
    }
};

// Character class
class Character {
    constructor(name) {
        this.equippedMainHand = null;
        this.equippedOffHand = null;
    }


    // Equip weapon method
    equipWeapon(weapon, slot) {
        if (slot === "mainHand") {
            this.equippedMainHand = weapon;
        } else if (slot === "offHand") {
            this.equippedOffHand = weapon;
        }
    }

    // Get character stats
    getStats() {
        return {
            name: this.name,
            mainHand: this.equippedMainHand ? this.equippedMainHand.Name : "None",
            offHand: this.equippedOffHand ? this.equippedOffHand.Name : "None",
            weaponStats: this.equippedMainHand ? this.equippedMainHand.Stats : "No weapon equipped"
        };
    }
}


const characterClasses = {
    Fighter: {
        baseStats: { health: 115, strength: 15, vigor: 15, agility: 15, dexterity: 15, will: 15, knowledge: 15, resourcefulness: 15 }
    },
    Wizard: {
        baseStats: { health: 96, memory: 19, strength: 6, vigor: 7, agility: 15, dexterity: 17, will: 20, knowledge: 25, resourcefulness: 15 }
    },
    Barbarian: {
        baseStats: { health: 133, strength: 20, vigor: 25, agility: 13, dexterity: 12, will: 18, knowledge: 5, resourcefulness: 12 }
    },
    Rogue: {
        baseStats: { health: 115, strength: 15, vigor: 15, agility: 15, dexterity: 15, will: 15, knowledge: 15, resourcefulness: 15 }
    },
    Ranger: {
        baseStats: { health: 115, strength: 15, vigor: 15, agility: 15, dexterity: 15, will: 15, knowledge: 15, resourcefulness: 15 }
    },
    Cleric: {
        baseStats: { health: 115, strength: 15, vigor: 15, agility: 15, dexterity: 15, will: 15, knowledge: 15, resourcefulness: 15 }
    },
    Bard: {
        baseStats: { health: 115, strength: 15, vigor: 15, agility: 15, dexterity: 15, will: 15, knowledge: 15, resourcefulness: 15 }
    },
    Warlock: {
        baseStats: { health: 115, strength: 15, vigor: 15, agility: 15, dexterity: 15, will: 15, knowledge: 15, resourcefulness: 15 }
    },
    Druid: {
        baseStats: { health: 115, strength: 15, vigor: 15, agility: 15, dexterity: 15, will: 15, knowledge: 15, resourcefulness: 15 }
    }
};

// Store the selected class globally
let selectedClass = null;

// Function to update the selected class
function updateClass() {
    const className = document.getElementById("character-class").value;
    selectedClass = characterClasses[className];

    // Update the class stats on the page
    document.getElementById("selected-class").innerHTML = `Selected Class: ${className} Base Stats:${statsString}`;
};

// Function to update the weapon list based on selected type
function updateWeaponList() {
    const weaponType = document.getElementById("weapon-type").value;
    const weaponSelect = document.getElementById("weapons");

    // Clear the existing options
    weaponSelect.innerHTML = "";

    // Populate options based on weapon type
    const weapons = weaponType === "oneHanded" ? oneHandedSwords : twoHandedSwords;

    for (const weaponKey in weapons) {
        const weapon = weapons[weaponKey];
        const option = document.createElement("option");
        option.value = weaponKey;
        option.textContent = weapon.Name;
        weaponSelect.appendChild(option);
    }
}

// Function to equip the selected weapon
function equipWeapon() {
    const weaponType = document.getElementById("weapon-type").value;
    const weaponKey = document.getElementById("weapons").value;
    const equipSlot = document.getElementById("equip-slot").value;

    // Get the weapon from the appropriate dictionary
    const weapon = weaponType === "oneHanded" ? oneHandedSwords[weaponKey] : twoHandedSwords[weaponKey];

    // Equip the weapon to the character
    if (equipSlot === "mainHand") {
        document.getElementById("equipped-main-hand").innerText = `Main Hand: ${weapon.Name}`;
    } else if (equipSlot === "offHand") {
        document.getElementById("equipped-off-hand").innerText = `Off Hand: ${weapon.Name}`;
    }
    document.getElementById("weapon-stats").innerText = `Weapon: ${weapon.Name} | Modified Damage: ${Math.round(modifiedDamage)} | Base Damage: ${weapon.DamageOnHit.base}`;
    // Update the stats on the HTML page
    updateCharacterStats();
}

// Function to update character stats in the DOM
function updateCharacterStats() {
    const stats = myCharacter.getStats();
    document.getElementById("equipped-main-hand").innerText = `Main Hand: ${stats.mainHand}`;
    document.getElementById("equipped-off-hand").innerText = `Off Hand: ${stats.offHand}`;

    // If a main-hand weapon is equipped, show its stats
    if (myCharacter.equippedMainHand) {
        const weaponStats = JSON.stringify(stats.weaponStats, null, 2);
        document.getElementById("weapon-stats").innerText = `Weapon Stats: ${weaponStats}`;
    } else {
        document.getElementById("weapon-stats").innerText = `No weapon equipped.`;
    }
}

// Initialize the weapon list on page load
updateWeaponList();