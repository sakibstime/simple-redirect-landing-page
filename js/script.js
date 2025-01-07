let totalSeconds = 88880; // Example: 1 day countdown

function updateTimer() {
    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    if (totalSeconds > 0) {
        totalSeconds--;
    } else {
        window.location.href = 'https://sakibsti.me/';
    }
}

setInterval(updateTimer, 1000);

function redirectToTelegram() {
    window.location.href = 'https://sakibsti.me/';
}
