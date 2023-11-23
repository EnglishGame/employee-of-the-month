document.addEventListener('DOMContentLoaded', (event) => {
    const players = document.querySelectorAll('.player');

    players.forEach(player => {
        let score = player.querySelector('.points');
        const minusButton = player.querySelector('.minus');
        const plusButton = player.querySelector('.plus');

        minusButton.addEventListener('click', () => {
            let currentScore = parseInt(score.textContent, 10);
            if (currentScore > 0) {
                currentScore--;
            } else {
                // Show an alert if the score is already zero
                alert("Cannot go below zero!");
            }
            score.textContent = currentScore;
        });

        plusButton.addEventListener('click', () => {
            let currentScore = parseInt(score.textContent, 10);
            currentScore++;
            score.textContent = currentScore;
        });
    });
});
