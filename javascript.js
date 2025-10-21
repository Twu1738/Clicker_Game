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


class upgrades {
    /**
        Includes: 
        - upgrade effects
        - upgrade validator and upgrader
     */

    constructor(required, which, increaseType, amount) {
        /**
            * @param {*} required - the number of clicks needed for the upgarde
            * @param {*} which - the type of upgrade (e.g. CPS or Clicker Button)
            * @param {*} increaseType - the 
            * @param {*} amount - the amount increased
         */
        this.required = required
        this.which = which
        this.increaseType = increaseType
        this.amount = amount
    }

    upgradeEffects = {
        // map of the upgrade effects and arrow function for the effect
        add: (x, amount) => x + amount,
        multiply: (x, amount) => x * amount,
    }

    upgradeChecker() {
        if (numOfClicks >= required) {
            numOfClicks -= required;

            const which = super(which);
            const amount = super(amount);
            
            this.upgradeEffects.increaseType(which, amount);

            updateClicks();
        }
    }
}

class display extends upgrades{
    // extend basically passes the construct function of the 
    // upgrade class to this class and then use those values to display stuff
    // idea: could instead do class upgrades extends display and then have clickpower and etc 
    // as part of the constructor in the display class
}

function clicksPerSec(cps) {
    numOfClicks += cps;   
}



