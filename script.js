// Contagem regressiva
const countdownDate = new Date('2025-02-13').getTime(); 
const countdownElement = document.getElementById('countdown');

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = 'Chegou o dia da Renúncia!';
        document.querySelector('.blink').style.display = 'none';
    }
};

const countdownInterval = setInterval(updateCountdown, 1000);

// Criar galeria de participantes
const participants = [
    'foto1.jpg', 'foto2.jpg', 'foto3.jpg', 'foto4.jpg', 'foto5.jpg',
    'foto6.jpg', 'foto7.jpg', 'foto8.jpg', 'foto9.jpg', 'foto10.jpg',
    'foto11.jpg', 'foto12.jpg', 'foto13.jpg', 'foto14.jpg', 'foto15.jpg',
    'foto16.jpg', 'foto17.jpg', 'foto18.jpg', 'foto19.jpg', 'foto20.jpg',
    'foto21.jpg', 'foto22.jpg', 'foto23.jpg', 'foto24.jpg', 'foto25.jpg',
    'foto26.jpg', 'foto27.jpg', 'foto28.jpg', 'foto29.jpg', 'foto30.jpg'
];

const participantsElement = document.getElementById('participants');

participants.forEach(photo => {
    const img = document.createElement('img');
    img.src = photo;
    img.alt = 'Participante';
    participantsElement.appendChild(img);
});
