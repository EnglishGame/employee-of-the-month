
document.addEventListener('DOMContentLoaded', (event) => {
    const players = document.querySelectorAll('.player');

    players.forEach(player => {
        let score = player.querySelector('.points');
        const minusButton = player.querySelector('.minus');
        const plusButton = player.querySelector('.plus');

        minusButton.addEventListener('click', () => {
            let currentScore = parseInt(score.textContent, 10);
            currentScore = currentScore > 0 ? currentScore - 1 : 0;
            score.textContent = currentScore;
        });

        plusButton.addEventListener('click', () => {
            let currentScore = parseInt(score.textContent, 10);
            score.textContent = currentScore + 1;
        });
    });
});
