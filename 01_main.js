// imports for game data 
import {gameState, upgrades} from './02_gameState.js';

// imports for functions
import {updateClicks, addClicks, buyUpgrade} from './03_functions.js';

// main here
const mainClicker = document.getElementById('main-clicker');
mainClicker.addEventListener('click', addClicks);

const addOne = document.getElementById('add-one')
addOne.addEventListener('click', () => buyUpgrade(0, 'cost-1'))

const multiplyOne = document.getElementById('multiply-one')
multiplyOne.addEventListener('click', () => buyUpgrade(1, 'cost-2'))

const idleOne = document.getElementById('idle-one')
idleOne.addEventListener('click', () => buyUpgrade(2, 'cost-3'))

// every second it adds the idle click power to counter
setInterval(() => {gameState.numOfClicks += gameState.idleClickPower; 
    updateClicks()}, 1000)