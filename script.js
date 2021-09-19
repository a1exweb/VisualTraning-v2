function changeBg() {
  document.querySelector('body').classList.toggle('active');
};

document.addEventListener('keyup', () => {
  changeBg();  
});

document.querySelector('body').addEventListener('mousedown', (e) => {
  if (!e.target.matches('p') && !e.target.matches('#theme')) {
    changeBg();
  }
});

document.querySelector('#theme').addEventListener('click', () => {
  document.querySelector('body').classList.toggle('theme-white');
  document.querySelector('body').classList.toggle('theme-dark');
});