const navbar = document.getElementById('navbar');
const cardContent = document.getElementById('download-card-content');
const activeState = document.getElementById('download-active-state');
const thankYouState = document.getElementById('download-thank-you');

// Scroll effect for Navbar
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('bg-white/95', 'shadow-sm', 'border-b', 'border-gray-100');
    navbar.classList.remove('bg-transparent');
  } else {
    navbar.classList.remove('bg-white/95', 'shadow-sm', 'border-b', 'border-gray-100');
    navbar.classList.add('bg-transparent');
  }
});

// Download Logic
function startDownload() {
  if (cardContent && activeState) {
    cardContent.classList.add('hidden');
    activeState.classList.remove('hidden');

    setTimeout(() => {
      window.open(
        "https://github.com/juscoder/converter-video-to-audio-python-tkinter/releases/download/v1.0/jusconverter.exe",
        "_blank"
      );
    }, 1200);

    setTimeout(() => {
      if (activeState && thankYouState) {
        activeState.classList.add('hidden');
        thankYouState.classList.remove('hidden');
      }
    }, 3000);
  }
}

function resetDownload() {
  if (thankYouState && cardContent) {
    thankYouState.classList.add('hidden');
    cardContent.classList.remove('hidden');
  }
}

// Mobile Menu Toggle
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// Set current year in footer
document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
