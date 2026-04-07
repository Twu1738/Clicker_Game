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

function buyUpgrade(id) {
    const upgrade = upgrades.find(item => item.id === id)

    if (gameState.numOfClicks >= upgrade.cost) {
        gameState.numOfClicks -= upgrade.cost;
        upgrade.apply();
        updateClicks();
    }

}

// main here
const mainClicker = document.getElementById('main-clicker');
mainClicker.addEventListener('click', addClicks);

const addOne = document.getElementById('add-one')
addOne.addEventListener('click', () => buyUpgrade(0))


const upgrades = [
    {
        id: 0,
        name: "Stronger Clicks",
        cost: 5,
        level: 0,
        apply: () => {gameState.clickPower += 1;}
    },

    {
        id: 1,
        name: "Double the Clicks!",
        cost: 5,
        level: 0,
        apply: () => {gameState.clickPower ** 2;}
    },

    {
        id: 2,
        name: "Passive Income?",
        cost: 25,
        level: 0,
        apply: () => {gameState.idleClickPower += 1;}
    }
]

// calls the cps function to add the idleClickPower every second

if (gameState.idleClickPower >= 1) {
    idleGain = true
}

if (idleGain = true) {
    setInterval(addIdle, 1000) 
}