function changeBg() {
  document.querySelector('body').classList.toggle('active');
};

document.addEventListener('keyup', (e) => {
   if (e.keyCode == 38) { //стрелочка ввехрх
   changeBg(); 
  }
});

theme.addEventListener('click', () => {
  document.querySelector('body').classList.toggle('theme-white');
  document.querySelector('body').classList.toggle('theme-dark');
});

traning.addEventListener('click', () => {
  changeBg();
});

setTimeout

const loader = document.querySelector('.description')

setTimeout(() => {
  const interval = setInterval(() => {
  loader.style.opacity -= 0.01;
  if (loader.style.opacity == 0) clearInterval(interval);
}, 10);
}, 1500);