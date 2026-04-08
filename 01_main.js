// imports for game data 
import {gameState, upgrades} from './02_gameState.js';

// imports for functions
import {updateClicks, addClicks, createUpgradeButton, buyUpgrade} from './03_functions.js';

// main here
// main clicker button
const mainClicker = document.getElementById('main-clicker');
mainClicker.addEventListener('click', addClicks);

// fetches the upgrade button container
const upgradeContainer = document.getElementById('upgrade-container');

// creates the upgrade buttons
const addOneButton = createUpgradeButton(upgrades[0], 'cost-1' )
const multiplyOne = createUpgradeButton(upgrades[1], 'cost-2')
const idleOne = createUpgradeButton(upgrades[2], 'cost-3')

// appends the upgrade buttons to the upgrade container
upgradeContainer.appendChild(addOneButton)
upgradeContainer.appendChild(multiplyOne)
upgradeContainer.appendChild(idleOne)

// every second it adds the idle click power to counter
setInterval(() => {gameState.numOfClicks += gameState.idleClickPower; 
    updateClicks()}, 1000)