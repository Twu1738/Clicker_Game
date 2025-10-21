let numOfClicks = 0
let clickPower = 1
let idleClicks = 0

function updateClicks() {
    document.getElementById("counter").textContent = numOfClicks
}

function addClicks() {
    numOfClicks += clickPower
    updateClicks()
}


class Upgrades {
    /**
        Includes: 
        - upgrade effects
        - upgrade validator and upgrader
     */

    upgradeEffects = {
        // map of the upgrade effects and arrow function for the effect
        add: (x, amount) => x + amount,
        multiply: (x, amount) => x * amount,
    }

    upgrade(required, which, increaseType, amount) {
        /**
            * @param {*} required - the number of clicks needed for the upgarde
            * @param {*} which - the type of upgrade (e.g. CPS or Clicker Button)
            * @param {*} increaseType - the 
            * @param {*} amount - the amount increased
         */
        if (numOfClicks >= required) {
            numOfClicks -= required;
            
            this.upgradeEffects.increaseType(which, amount)

            updateClicks()
        }
    }
}

function clicksPerSec(cps) {
    numOfClicks += cps   
}



