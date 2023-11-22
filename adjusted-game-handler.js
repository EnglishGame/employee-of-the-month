
document.addEventListener('DOMContentLoaded', (event) => {
    const players = document.querySelectorAll('.player');
    const jobs = ['Community manager', 'Buisness Developer', 'Project Manager', 'Intern'];
    const teamButton = document.getElementById('teamButton');
    const jobButton = document.getElementById('jobButton');
    const threeVoneButton = document.getElementById('threeVoneButton');

    let teamMode = 'none';

    teamButton.addEventListener('click', () => {
        if (teamMode !== '2v2') {
            let teams = [0, 0, 1, 1].sort(() => Math.random() - 0.5);
            players.forEach((player, index) => {
                player.style.backgroundColor = teams[index] === 0 ? 'lightblue' : 'lightgreen';
            });
            teamMode = '2v2';
            teamButton.textContent = 'Reset 2v2';
        } else {
            resetTeams();
            teamButton.textContent = 'Random 2v2';
        }
    });

    jobButton.addEventListener('click', () => {
        if (jobButton.textContent === 'Assign Jobs') {
            let availableJobs = [...jobs];
            players.forEach(player => {
                const randomIndex = Math.floor(Math.random() * availableJobs.length);
                const selectedJob = availableJobs.splice(randomIndex, 1)[0];
                player.querySelector('.job').textContent = selectedJob;
            });
            jobButton.textContent = 'Reset Jobs';
        } else {
            players.forEach(player => {
                player.querySelector('.job').textContent = 'Job';
            });
            jobButton.textContent = 'Assign Jobs';
        }
    });

    threeVoneButton.addEventListener('click', () => {
        if (teamMode !== '3v1') {
            let lonePlayerIndex = Math.floor(Math.random() * players.length);
            players.forEach((player, index) => {
                player.style.backgroundColor = index === lonePlayerIndex ? 'lightcoral' : 'lightseagreen';
            });
            teamMode = '3v1';
            threeVoneButton.textContent = 'Reset 3v1';
        } else {
            resetTeams();
            threeVoneButton.textContent = 'Random 3v1';
        }
    });

    function resetTeams() {
        players.forEach(player => {
            player.style.backgroundColor = '';
            player.querySelector('.job').textContent = 'Job';
        });
        teamMode = 'none';
        teamButton.textContent = 'Random 2v2';
        jobButton.textContent = 'Assign Jobs';
        threeVoneButton.textContent = 'Random 3v1';
    }
});
