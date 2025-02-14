// DOM Elements
const heart = document.getElementById('heart');
const secretMessage = document.getElementById('secret-message');
const surpriseBtn = document.getElementById('surprise-btn');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

// Event Listeners
heart.addEventListener('click', toggleMessage);
surpriseBtn.addEventListener('click', showSurprise);

// Toggle secret message
function toggleMessage() {
  secretMessage.classList.toggle('visible');
  heart.style.animation = 'none';
  heart.offsetHeight; // Trigger reflow
  heart.style.animation = 'pulse 1.5s infinite';
}

// Surprise button effects
function showSurprise() {
  const colors = ['#ff4b6e', '#ff85a1', '#ffb3c1', '#ff4b6e'];
  let currentIndex = 0;
  
  const interval = setInterval(() => {
    document.body.style.background = `linear-gradient(45deg, ${colors[currentIndex]}, ${colors[(currentIndex + 1) % colors.length]})`;
    currentIndex = (currentIndex + 1) % colors.length;
  }, 1000);
  
  setTimeout(() => {
    clearInterval(interval);
    document.body.style.background = '';
  }, 5000);
  
  surpriseBtn.textContent = '💖 I Love You! 💖';
  setTimeout(() => {
    surpriseBtn.textContent = 'Click for a Surprise! ✨';
  }, 5000);
}

// Countdown Timer
const nextDate = new Date('2025-03-06T18:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = nextDate - now;
  
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  daysEl.textContent = days.toString().padStart(2, '0');
  hoursEl.textContent = hours.toString().padStart(2, '0');
  minutesEl.textContent = minutes.toString().padStart(2, '0');
  secondsEl.textContent = seconds.toString().padStart(2, '0');
  
  if (distance < 0) {
    clearInterval(countdownInterval);
    daysEl.textContent = '00';
    hoursEl.textContent = '00';
    minutesEl.textContent = '00';
    secondsEl.textContent = '00';
  }
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});