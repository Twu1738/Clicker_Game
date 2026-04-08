// imports for game data 
import {gameState, upgrades} from './02_gameState.js';

// updates the click counter
export function updateClicks() {
    document.getElementById("counter").textContent = gameState.numOfClicks;
}

// adds the clicks whenever user clicks "Click Me!"
export function addClicks() {
    gameState.numOfClicks += gameState.clickPower;
    updateClicks();
}

// checks user has enough clicks for upgrade and updates cost/level
export function buyUpgrade(upgradeId, upgradeCostId) {
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