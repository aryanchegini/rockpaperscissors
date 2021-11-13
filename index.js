let game = () => {
    let pScore = 0;
    let cScore = 0;
    const choices = ['rock', 'paper', 'scissors'] 
    
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

    const updateScores = () => {
        let playerScore = document.getElementById('player-score');
        let compScore = document.getElementById('computer-score');
        playerScore.innerText = pScore;
        compScore.innerText = cScore;
    }

    const updateScreen = (result) => {
        let message = document.getElementById('message');
        if (result === 'tie') {
            message.innerText = 'looks like its a tie, go again';
            updateScores();
            return;
        } else if (result === true) {
            message.innerText = 'sorry';
            updateScores();
            return;
        } else if (result === false) {
            message.innerText = 'there is still hope...';
            updateScores();
            return;
        }
    }

    const playgame = () => {
        let buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                //computer option
                let cOption = choices[Math.floor(Math.random() * 3)];
                //player option
                let pOption = button.innerText;
                let result = compare(pOption, cOption);
                updateScreen(result);
            })
        })
    }
    playgame();
}

game();