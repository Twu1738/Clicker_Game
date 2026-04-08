// imports for game data 
import {gameState, upgrades} from './02_gameState.js';

// imports for functions
import {updateClicks, addClicks, createUpgradeButton, buyUpgrade} from './03_functions.js';

// main here
// main clicker button
const mainClicker = document.getElementById('main-clicker');
mainClicker.addEventListener('click', addClicks);

// upgrade buttons
const upgradeContainer = document.getElementById('upgrade-container');

const addOneButton = createUpgradeButton(upgrades[0], 'cost-one' )
upgradeContainer.appendChild(addOneButton)

const multiplyOne = document.getElementById('multiply-one')
multiplyOne.addEventListener('click', () => buyUpgrade(1, 'cost-2'))

const idleOne = document.getElementById('idle-one')
idleOne.addEventListener('click', () => buyUpgrade(2, 'cost-3'))

// every second it adds the idle click power to counter
setInterval(() => {gameState.numOfClicks += gameState.idleClickPower; 
    updateClicks()}, 1000)