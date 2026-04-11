// imports for game data 
import {gameState, upgrades} from './02_gameState.js';

// fetches the upgrade button container
const upgradeContainer = document.getElementById('upgrade-container');

// updates the click counter
export function updateClicks() {
    document.getElementById("counter").textContent = gameState.numOfClicks;
}

// adds the clicks whenever user clicks "Click Me!"
export function addClicks() {
    gameState.numOfClicks += gameState.clickPower;
    updateClicks();
}

export function completedUpgrade() {
    // removes the upgrade from upgrade list
    upgrades.splice(0, 1);
    renderUpgrades()
}

// creates the upgrade buttons
export function renderUpgrades () {
    // the allowed amount of upgrades to be visible
    const visible = 3

    // wipes the current buttons of the screen
    upgradeContainer.innerHTML = "";

    // condition: let i = 0, if i < 3 AND i < upgrade array length
    // i++ is the same as i += 1
    for (let item = 0; item < visible && item < upgrades.length; item++) {
        // creates the button
        const button = document.createElement('button');
        // cost id corresponds. to item
        let costId = item
        // retrieves the upgrade info for the upgrae
        const upgrade = upgrades[item]

        // adds the button characteristics
        button.className = 'test-button';
        button.innerHTML = `${upgrade.name} Cost: <span id="${costId}">${upgrade.cost}</span>`
        button.addEventListener('click', () => buyUpgrade(upgrade.id, costId))
        
        // appends to upgrade container
        upgradeContainer.appendChild(button)
}

}

// checks user has enough clicks for upgrade and updates cost/level
export function buyUpgrade(upgradeId, upgradeCostId) {
    // finds the corresponding upgrade usign the ID 
    const upgrade = upgrades.find(item => item.id === upgradeId)

    if (gameState.numOfClicks >= upgrade.cost 
        && upgrade.maxLevel !== upgrade.level) {
        
            gameState.numOfClicks -= upgrade.cost;
        upgrade.apply();
        upgrade.cost = Math.floor(upgrade.cost * 1.5)
        upgrade.level += 1
        
        document.getElementById(upgradeCostId).textContent = upgrade.cost

        updateClicks();
    }

    else {
        completedUpgrade();
    }

}