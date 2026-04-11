// the global game data
export const gameState = {
    numOfClicks: 0,
    clickPower: 1,
    idleClickPower: 0
}

// available upgrades to the user and their info
export let upgrades = [
    {
        id: 0,
        name: "Stronger Clicks",
        cost: 1, level: 0, maxLevel: 10,
        apply: () => {gameState.clickPower += 1;}
    },

    {
        id: 1,
        name: "Double the Clicks",
        cost: 3, level: 0, maxLevel: 2,
        apply: () => {gameState.clickPower *= 2;}
    },

    {
        id: 2,
        name: "Passive Income",
        cost: 5, level: 0, maxLevel: 10,
        apply: () => {gameState.idleClickPower += 1;}
    },

    {
        id: 3,
        name: "Even Stronger Clicks",
        cost: 6, level: 0, maxLevel: 10, 
        apply: () => {gameState.clickPower += 1;}
    },

    {
        id: 4,
        name: "More Passive Income",
        cost: 7, level: 0, maxLevel: 10, 
        apply: () => {gameState.idleClickPower += 5;}
    }
]