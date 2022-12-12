console.log("welcome to tic tac toe")
let music = new Audio("bgm.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let resetAudio = new Audio("reset.mp3");
let applause = new Audio("happyBirthday.mp3");
let turn = "X"
let isGameOver = false
let allBoxesFilled = true;


//function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

applause.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

music.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

//function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let boxes = document.getElementsByClassName("box");
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]

    // let boxtexts=document.querySelectorAll('.boxtext');
    // let boxes=document.getElementsByClassName("box");
    allBoxesFilled = true;
    Array.from(boxtext).forEach(elem => {
        if (elem.innerText === '') {
            allBoxesFilled = false;
        }
    });



    if (!isGameOver) {
        music.play();


        wins.forEach(e => {
            if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
                (boxtext[e[1]].innerText === boxtext[e[2]].innerText) &&
                (boxtext[e[0]].innerText !== "")) {
                document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
                document.getElementsByClassName("birthdayWish")[0].innerText = "Many many happy returns of the day"
                isGameOver = true
                music.pause();
                music.currentTime = 0;
                document.querySelector('.imgbox').getElementsByTagName('img')[0].src = "BirhdayCakeAnu.gif";
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '300px';
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.paddingTop = '5px';
                boxes[e[0]].style.backgroundColor = '#FDA7DF';
                boxes[e[1]].style.backgroundColor = '#FDA7DF';
                boxes[e[2]].style.backgroundColor = '#FDA7DF';
                boxtext[e[0]].style.color = '#ff3838';
                boxtext[e[1]].style.color = '#ff3838';
                boxtext[e[2]].style.color = '#ff3838';
                let confe = document.querySelector('#my-canvas');
                confe.classList.add('active');
                // document.querySelector(".line").style.width="20vw"
                // document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
                // gameover.play();
                applause.play();
            }
        })
        if (allBoxesFilled && !isGameOver) {
            // alert('match draw')
            document.querySelector('.info').innerText = "XO DRAW"
            document.querySelector('.imgbox').getElementsByTagName('img')[0].src = "sleepingSquid.gif";
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '250px';
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.paddingTop = '5px';
            gameover.play();
            isGameOver = true;
            music.pause();
            music.currentTime = 0;
        }

    }
}

// game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });
})

reset.addEventListener('click', () => {
    let confe = document.querySelector('#my-canvas');
    confe.classList.remove('active');
    music.pause();
    music.currentTime = 0;
    applause.pause();
    applause.currentTime = 0;
    resetAudio.play()
    let boxtexts = document.querySelectorAll('.boxtext');
    let boxes = document.getElementsByClassName("box");
    Array.from(boxtexts).forEach(elem => {
        elem.innerText = "";
        elem.style.color = '';

    });
    Array.from(boxes).forEach(element => {
        element.style.backgroundColor = '';
    })
    turn = "X";
    isGameOver = false;
    // document.querySelector(".line").style.width="0vw"
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px'
    document.getElementsByClassName("birthdayWish")[0].innerText = "Welcome to Tic Tac Toe"
})