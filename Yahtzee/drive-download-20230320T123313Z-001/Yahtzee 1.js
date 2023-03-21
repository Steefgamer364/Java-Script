let gameData = {
    game: 0,
    finishGame: 0,
    player: 1,
    allDice: [0, 0, 0, 0, 0, 0],
    valAllDice: () => {
        let valAllDice = 0;
        for (let i = 0; i < 6; i++) {
            valAllDice += this.allDice[i];
        }
        return valAllDice;
    },


    p1IsPlaced: [
        [false, false, false, false, false, false],
        [false, false, false, false, false, false]
    ],

    calP2: [
        [false, false, false, false, false, false],
        [false, false, false, false, false, false]
    ],

    p2IsPlaced: [
        [false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false]
    ]
}
//Functies

function scoreBlock(player, i) {
    return document.getElementById(`p${gameData.player}Row${i}Col${gameData.game}`);
}

function diceRoll() {
    if (!lockDice) {
        roll();
    }

    turnNumber++;
    if (turnNumber > 3) {
        lockDice = true;
    }    

    gameData.allDice = [0, 0, 0, 0, 0, 0];
    calP1();

    gameData.calP2[gameData.player - 1] = [kind(3), kind(4), fullHouse(), street(4), street(5), kind(5)];  
}

function calP1() {
    for (let i = 0; i < 6; i++) {
        for (let j = 1; j <= 6; j++) {
            if (rollValue[i] == j) {
                gameData.allDice[j - 1] += j;
            }
        }
    }
}

function kind(amount) {  
    let isTrue = false;
    for (let i = 0; i < 6; i++) {
        if (gameData.allDice[i] >= (i + 1) * amount) {
            isTrue = true;
        }
    }

    return isTrue;
}

function fullHouse() {
    let isTrue = false;

    let hasTwo = false;
    let hasThree = false;

    for (let i = 0; i < 6; i++) {
        if (gameData.allDice[i] == (i + 1) * 2) {
            hasTwo = true
        }

        if (gameData.allDice[i] == (i + 1) * 3) {
            hasThree = true;
        }
    }

    if (hasTwo && hasThree) isTrue = true;

    for (let i = 0; i < 6; i++) {
        if (gameData.allDice[i] == (i + 1) * 5) {
            isTrue = false;
        }
    }

    return isTrue;
}

function street(amount) {
    let isTrue = false;
    let row = 0;
    for (let i = 0; i < 6; i++) {
        if (gameData.allDice[i] >= 1) {
            row++;
        } else {
            row = 0;
        }

        if (row >= amount) {
            isTrue = true;
        }

        if (gameData.allDice[i] >= (i + 1) * 3) {
            isTrue = false;
        }
    }

    return isTrue;
}
// De score.
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 20; j++) {
        for (let k = 0; k < 6; k++) {
            const newP = document.createElement("p");
            if (j != 9) {
                newP.setAttribute("id", `p${i + 1}Row${j}Col${k}`);
                newP.setAttribute("onclick", `place(${i}, ${j})`);
            } else {
                newP.setAttribute("class", 'clear');
            }

            const item = document.getElementById(`score${i + 1}`);
            item.appendChild(newP);
        }
    }
}