const gameState = {
    numOfClicks: 0,
    clickPower: 1,
    idleClickPower: 0
}

document.getElementById("main-clicker").addEventListener("click", addClicks);

document.getElementById("main-clicker").addEventListener("click", buyUpgrade(5, 'clickPower', 'add', 1));
document.getElementById("multiply-1").addEventListener("click", buyUpgrade(25, 'clickPower', 'multiply', 2));

function updateClicks() {
    document.getElementById("counter").textContent = gameState.numOfClicks;
}

function addIdle() {
    gameState.numOfClicks += gameState.idleClickPower
    updateClicks();
}

function addClicks() {
    gameState.numOfClicks += gameState.clickPower;
    updateClicks();
}

function buyUpgrade(required, which, increaseType, amount) {
    const upgrade = new Upgrades(required, which, increaseType, amount);
    upgrade.upgradeChecker();
}

class Upgrades {
    /**
        Includes: 
        - upgrade effects
        - upgrade validator and upgrader
     */

    constructor(required, which, increaseType, amount) {
        /**
            * @param {*} required - the number of clicks needed for the upgarde
            * @param {*} which - the type of upgrade (e.g. CPS or Clicker Button)
            * @param {*} increaseType - the type of increase (e.g. multiply or add)
            * @param {*} amount - the amount increased
         */
        this.required = required;
        this.which = which;
        this.increaseType = increaseType;
        this.amount = amount;

        this.upgradeEffects = {
        /** 
         * map of the upgrade effects and arrow function for the effect
         * 
         * @param {*} which - click power or clicks per sec
         * @param {*} amount - amount to be changed by
         * @returns - new amount gained per click/sec
         */

        add: (which, amount) => which + amount,
        multiply: (which, amount) => which * amount,

    }
    }

    upgradeChecker() {
        if (gameState.numOfClicks >= this.required) {
            gameState.numOfClicks -= this.required;
            
            gameState[this.which] = this.upgradeEffects[this.increaseType](gameState[this.which], this.amount);

            updateClicks();
        }
    }
}

//class display extends Upgrades{
    // extend basically passes the construct function of the 
    // upgrade class to this class and then use those values to display stuff
    // idea: could instead do class upgrades extends display and then have clickpower and etc 
    // as part of the constructor in the display class

// }

setInterval(addIdle, 1000)