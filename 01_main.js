// imports for game data 
import {gameState, upgrades} from './02_gameState.js';

// imports for functions
import {updateClicks, addClicks, renderUpgrades, buyUpgrade} from './03_functions.js';

// main here
// main clicker button
const mainClicker = document.getElementById('main-clicker');
mainClicker.addEventListener('click', addClicks);

// creates the upgrade buttons
renderUpgrades()

// every second it adds the idle click power to counter
setInterval(() => {gameState.numOfClicks += gameState.idleClickPower; 
    updateClicks()}, 1000)

// // saving
// setInterval( () => {
//     localStorage.setItem("gameState", JSON.stringify(gameState));
//     localStorage.setItem("upgrades", JSON.stringify(upgrades))
// }, 5000)

// loading
// const savedGameState = JSON.parse(localStorage.getItem("gameState"));
// const savedUpgrades = JSON.parse(localStorage.getItem("upgrades"));

// if (savedGameState) {
//     gameState.numOfClicks = savedGameState.numOfClicks
//     gameState.clickPowerBase = savedGameState.clickPowerBase
//     gameState.clickPowerMultiplier = savedGameState.clickPowerMultiplier
//     gameState.idleClickPower = savedGameState.idleClickPower
// }

// if (savedUpgrades) {
//     upgrades = savedUpgrades
// }