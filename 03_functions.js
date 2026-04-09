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

// appends the upgrades to the upgrade container
export function appendUpgrades (button) {
    const buttonToAppend = button
    upgradeContainer.appendChild(buttonToAppend)
}

// creates the upgrade buttons
export function createUpgradeButtons (upgrade, costId) {
    const button = document.createElement('button');

    // adds the button characteristics
    button.className = 'test-button';
    button.innerHTML = `${upgrade.name} Cost: <span id="${costId}">${upgrade.cost}</span>`
    button.addEventListener('click', () => buyUpgrade(upgrade.id, costId))
    
    // appends to upgrade container
    appendUpgrades(button)
}

// checks user has enough clicks for upgrade and updates cost/level
export function buyUpgrade(upgradeId, upgradeCostId) {
    // finds the corresponding upgrade usign the ID 
    const upgrade = upgrades.find(item => item.id === upgradeId)

    if (gameState.numOfClicks >= upgrade.cost) {
        gameState.numOfClicks -= upgrade.cost;
        upgrade.apply();
        upgrade.cost = Math.floor(upgrade.cost * 1.5)
        upgrade.level += 1
        
        document.getElementById(upgradeCostId).textContent = upgrade.cost

        updateClicks();
    }

}