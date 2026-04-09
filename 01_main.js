// imports for game data 
import {gameState, upgrades} from './02_gameState.js';

// imports for functions
import {updateClicks, addClicks, appendUpgrades, createUpgradeButtons, buyUpgrade} from './03_functions.js';

// main here
// main clicker button
const mainClicker = document.getElementById('main-clicker');
mainClicker.addEventListener('click', addClicks);

// creates the upgrade buttons
createUpgradeButtons(upgrades[0], 'cost-1' )
createUpgradeButtons(upgrades[1], 'cost-2')
createUpgradeButtons(upgrades[2], 'cost-3')



// every second it adds the idle click power to counter
setInterval(() => {gameState.numOfClicks += gameState.idleClickPower; 
    updateClicks()}, 1000)