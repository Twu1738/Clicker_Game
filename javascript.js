let amountPressed = 0

function addOne() {
    amountPressed += 1;

    document.getElementById("counter").textContent = amountPressed
}

function upgrade(required) {
    if (amountPressed >= required) {
        amountPressed -= required;
    }

    document.getElementById("counter").textContent = amountPressed
}
