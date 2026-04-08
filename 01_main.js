const gameState = {
    numOfClicks: 0,
    clickPower: 1,
    idleClickPower: 0
}

function updateClicks() {
    document.getElementById("counter").textContent = gameState.numOfClicks;
}

function addClicks() {
    gameState.numOfClicks += gameState.clickPower;
    updateClicks();
}

function addIdle () {
    gameState.numOfClicks += gameState.idleClickPower;
    updateClicks();
}

function buyUpgrade(id) {
    const upgrade = upgrades.find(item => item.id === id)

    if (gameState.numOfClicks >= upgrade.cost) {
        gameState.numOfClicks -= upgrade.cost;
        upgrade.apply();
        upgrade.cost = Math.floor(upgrade.cost * 1.5)

        updateClicks();
    }

}

// main here
const mainClicker = document.getElementById('main-clicker');
mainClicker.addEventListener('click', addClicks);

const addOne = document.getElementById('add-one')
addOne.addEventListener('click', () => buyUpgrade(0))

const multiplyOne = document.getElementById('multiply-one')
multiplyOne.addEventListener('click', () => buyUpgrade(1))

const idleOne = document.getElementById('idle-one')
idleOne.addEventListener('click', () => buyUpgrade(2))


const upgrades = [
    {
        id: 0,
        name: "Stronger Clicks",
        cost: 1,
        level: 0,
        apply: () => {gameState.clickPower += 1;}
    },

    {
        id: 1,
        name: "Double the Clicks!",
        cost: 3,
        level: 0,
        apply: () => {gameState.clickPower *= 2;}
    },

    {
        id: 2,
        name: "Passive Income?",
        cost: 5,
        level: 0,
        apply: () => {gameState.idleClickPower += 1;}
    }
]

setInterval(() => {gameState.numOfClicks += gameState.idleClickPower; 
    updateClicks()}, 1000)