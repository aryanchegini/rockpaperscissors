const game = () => {
    let pScore = 0;
    let cScore = 0;
    const options = ['rock', 'paper', 'scissors']
    let message = document.getElementById('message'); 

    const updateScores = () => {
        let playerScore = document.getElementById('player-score');
        let compScore = document.getElementById('computer-score');
        playerScore.innerText = pScore;
        compScore.innerText = cScore;
    }

    const resetGame = () => {
        //reset game back to original state
        pScore = 0;
        cScore = 0;
        updateScores();   
        message.innerText = 'try to beat the computer one more time';
        let options = document.querySelector('.options');
        options.classList.remove('inactive');
        let resetButton = document.querySelector('.restart');
        resetButton.classList.add('inactive');
    }
    
    const compare = (playerChoice, computerChoice) => {
        if (playerChoice === computerChoice) {
            return 'tie'
        } else if (playerChoice === 'rock') {
            if (computerChoice === 'paper') {
                cScore++;
                return false;
            } else if (computerChoice === 'scissors') {
                pScore++;
                return true;
            }
        } else if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                cScore++;
                return false;
            } else if (computerChoice === 'rock') {
                pScore++;
                return true;
            }
        } else if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                cScore++;
                return false;
            } else if (computerChoice === 'paper') {
                pScore++;
                return true;
            }
        }
    }

    const updateScreen = (result) => {
        if (result === 'tie') {
            message.innerText = 'looks like its a tie, go again';
            updateScores();
            return;
        } else if (result === true) {
            message.innerText = 'one step closer to victory';
            updateScores();
            return;
        } else if (result === false) {
            message.innerText = 'there is still hope...';
            updateScores();
            return;
        }
    }

    const checkForWinner = () => {
        let buttons = document.querySelector('.options');
        let restartButton = document.querySelector('.restart');
        if (pScore === 3 || cScore === 3) {
            buttons.classList.add('inactive');
            restartButton.classList.remove('inactive');
            //using ternary operator to determine what text to display
            let finText = (pScore === 3) ? 'you are victorious!' : 'better luck next time buddy';
            message.innerText = finText;
        }
        let rstBtn = document.getElementById('restart-game');
        rstBtn.onclick = resetGame;
    }

    const playgame = () => {
        let buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                let cOption = options[Math.floor(Math.random() * 3)];
                let pOption = button.innerText;
                let result = compare(pOption, cOption);
                updateScreen(result);
                checkForWinner();
            })
        })
    }
    playgame();
}

game();
