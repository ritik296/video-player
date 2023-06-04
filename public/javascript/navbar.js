const menuButton = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

const popupBox = document.getElementById('popup-box');
const shareBox = document.getElementById('share-box');
const ratingBox = document.getElementById('rating-box');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Sign in button functionality
const signInButton = document.getElementById('signin-btn');
const mobileSignInButton = document.getElementById('mobile-signin-btn');

signInButton.addEventListener('click', () => {
  alert('Sign in clicked!');
});

mobileSignInButton.addEventListener('click', () => {
  alert('Sign in clicked!');
});

function giveRating(){
  popupBox.classList.remove('hidden');
  ratingBox.classList.remove('hidden');
}

function shareCourse(){
  popupBox.classList.remove('hidden');
  shareBox.classList.remove('hidden');
}